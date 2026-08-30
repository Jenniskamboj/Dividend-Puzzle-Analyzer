const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const app = express();

const companyRoutes = require("./routes/companyRoutes");

app.use(cors());
app.use(express.json());


// =====================================================
// COMPANY API
// =====================================================

app.use("/api/companies", companyRoutes);


// =====================================================
// POSTGRESQL DATABASE
// =====================================================

const PORT = 5000;

const pool = new Pool({
  host: "localhost",
  port: 5432,
  database: "postgres",
  user: "postgres",
  password: "jennis123",
});


// =====================================================
// ROOT API
// =====================================================

app.get("/", (req, res) => {
  res.json({
    message: "Dividend Puzzle API is running",
  });
});


// =====================================================
// THEORY API
// =====================================================

app.get("/api/theories", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        theory_name,
        evidence_score,
        rank
      FROM theory_results
      ORDER BY rank ASC;
    `);

    res.json(result.rows);
  } catch (error) {
    console.error("Database error:", error);

    res.status(500).json({
      message: "Failed to fetch theory results",
      error: error.message,
    });
  }
});


// =====================================================
// ML RESULTS API - DAY 33
// =====================================================

app.get("/api/ml-results", (req, res) => {
  try {
    // Location of the ML results CSV
    const csvPath = path.join(
      __dirname,
      "..",
      "datasets",
      "processed",
      "day17_linear_regression_results.csv"
    );

    console.log("Reading ML CSV:", csvPath);

    // Check whether CSV exists
    if (!fs.existsSync(csvPath)) {
      return res.status(404).json({
        message: "ML results CSV not found",
        path: csvPath,
      });
    }

    // Read CSV
    const csvData = fs.readFileSync(csvPath, "utf8");

    // Split into rows
    const lines = csvData
      .trim()
      .split(/\r?\n/)
      .filter((line) => line.trim() !== "");

    // Need at least header + one data row
    if (lines.length < 2) {
      return res.status(404).json({
        message: "ML results CSV is empty",
      });
    }

    // First row = header
    const headers = lines[0]
      .split(",")
      .map((header) => header.trim());

    // Find Actual and Predicted columns
    const actualIndex = headers.indexOf("Actual");
    const predictedIndex = headers.indexOf("Predicted");

    if (actualIndex === -1 || predictedIndex === -1) {
      return res.status(400).json({
        message: "CSV must contain Actual and Predicted columns",
        headers,
      });
    }

    // Convert CSV rows into objects
    const results = lines
      .slice(1)
      .map((line) => {
        const values = line.split(",");

        return {
          Actual: Number(values[actualIndex]),
          Predicted: Number(values[predictedIndex]),
        };
      })
      .filter(
        (item) =>
          Number.isFinite(item.Actual) &&
          Number.isFinite(item.Predicted)
      );

    if (results.length === 0) {
      return res.status(404).json({
        message: "No valid ML prediction data found",
      });
    }


    // =================================================
    // CALCULATE ERRORS
    // =================================================

    const errors = results.map(
      (item) => item.Actual - item.Predicted
    );


    // =================================================
    // MSE
    // =================================================

    const mse =
      errors.reduce(
        (sum, error) => sum + Math.pow(error, 2),
        0
      ) / errors.length;


    // =================================================
    // MAE
    // =================================================

    const mae =
      errors.reduce(
        (sum, error) => sum + Math.abs(error),
        0
      ) / errors.length;


    // =================================================
    // RMSE
    // =================================================

    const rmse = Math.sqrt(mse);


    // =================================================
    // R² SCORE
    // =================================================

    const actualValues = results.map(
      (item) => item.Actual
    );

    const actualMean =
      actualValues.reduce(
        (sum, value) => sum + value,
        0
      ) / actualValues.length;


    const ssTotal = actualValues.reduce(
      (sum, value) =>
        sum + Math.pow(value - actualMean, 2),
      0
    );


    const ssResidual = errors.reduce(
      (sum, error) =>
        sum + Math.pow(error, 2),
      0
    );


    const r2 =
      ssTotal === 0
        ? 0
        : 1 - ssResidual / ssTotal;


    // =================================================
    // SEND RESPONSE
    // =================================================

    res.json({
      model: "Linear Regression",

      totalPredictions: results.length,

      metrics: {
        mse: Number(mse.toFixed(4)),
        mae: Number(mae.toFixed(4)),
        rmse: Number(rmse.toFixed(4)),
        r2: Number(r2.toFixed(4)),
      },

      results,
    });

  } catch (error) {
    console.error("ML Results API Error:", error);

    res.status(500).json({
      message: "Failed to load ML results",
      error: error.message,
    });
  }
});


// =====================================================
// START SERVER
// =====================================================

app.listen(PORT, () => {
  console.log(
    `Server running at http://localhost:${PORT}`
  );
});
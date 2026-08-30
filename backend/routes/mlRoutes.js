const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

/*
==================================================
ML RESULTS API
GET /api/ml-results
==================================================
*/

router.get("/ml-results", (req, res) => {
  try {
    /*
    Project structure:

    Dividend-Puzzle-Analyzer/
    ├── backend/
    │   ├── server.js
    │   └── routes/
    │       └── mlRoutes.js
    │
    └── datasets/
        └── processed/
            └── day17_linear_regression_results.csv

    From backend/routes/mlRoutes.js:

    ..     = backend
    ../..  = project root
    */

    const csvPath = path.join(
      __dirname,
      "../../datasets/processed/day17_linear_regression_results.csv"
    );

    console.log("Looking for ML CSV:");
    console.log(csvPath);

    // Check whether CSV exists
    if (!fs.existsSync(csvPath)) {
      return res.status(404).json({
        message: "ML results CSV file not found",
        path: csvPath,
      });
    }

    // Read CSV
    const csvData = fs.readFileSync(csvPath, "utf8");

    // Split CSV into lines
    const lines = csvData
      .trim()
      .split(/\r?\n/)
      .filter((line) => line.trim() !== "");

    // CSV must contain header + at least one result
    if (lines.length < 2) {
      return res.status(404).json({
        message: "ML results CSV is empty",
      });
    }

    // First line = headers
    const headers = lines[0]
      .split(",")
      .map((header) => header.trim());

    console.log("ML CSV headers:", headers);

    /*
    Expected:

    Actual,Predicted
    */

    // Convert rows into objects
    const results = lines
      .slice(1)
      .map((line) => {
        const values = line.split(",");

        const actual = Number(values[0]);
        const predicted = Number(values[1]);

        return {
          Actual: actual,
          Predicted: predicted,
        };
      })
      .filter(
        (item) =>
          Number.isFinite(item.Actual) &&
          Number.isFinite(item.Predicted)
      );

    // Make sure valid results exist
    if (results.length === 0) {
      return res.status(404).json({
        message: "No valid ML prediction results found",
      });
    }

    /*
    ================================================
    CALCULATE METRICS
    ================================================
    */

    const actualValues = results.map(
      (item) => item.Actual
    );

    const predictedValues = results.map(
      (item) => item.Predicted
    );

    /*
    Mean of actual values
    */

    const actualMean =
      actualValues.reduce(
        (sum, value) => sum + value,
        0
      ) / actualValues.length;

    /*
    MAE
    Mean Absolute Error
    */

    const mae =
      results.reduce(
        (sum, item) =>
          sum +
          Math.abs(
            item.Actual - item.Predicted
          ),
        0
      ) / results.length;

    /*
    MSE
    Mean Squared Error
    */

    const mse =
      results.reduce(
        (sum, item) =>
          sum +
          Math.pow(
            item.Actual - item.Predicted,
            2
          ),
        0
      ) / results.length;

    /*
    RMSE
    Root Mean Squared Error
    */

    const rmse = Math.sqrt(mse);

    /*
    R²
    */

    const ssTotal =
      actualValues.reduce(
        (sum, value) =>
          sum +
          Math.pow(
            value - actualMean,
            2
          ),
        0
      );

    const ssResidual =
      results.reduce(
        (sum, item) =>
          sum +
          Math.pow(
            item.Actual - item.Predicted,
            2
          ),
        0
      );

    const r2 =
      ssTotal === 0
        ? 0
        : 1 - ssResidual / ssTotal;

    /*
    ================================================
    SEND RESPONSE
    ================================================
    */

    res.json({
      model: "Linear Regression",

      totalPredictions: results.length,

      metrics: {
        mae: Number(mae.toFixed(4)),
        mse: Number(mse.toFixed(4)),
        rmse: Number(rmse.toFixed(4)),
        r2: Number(r2.toFixed(4)),
      },

      results,
    });
  } catch (error) {
    console.error(
      "ML Results API Error:",
      error
    );

    res.status(500).json({
      message: "Failed to load ML results",
      error: error.message,
    });
  }
});

module.exports = router;
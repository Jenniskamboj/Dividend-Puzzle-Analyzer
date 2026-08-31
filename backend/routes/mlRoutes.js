const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const resultsPath = path.join(
  __dirname,
  "../../datasets/processed/day17_linear_regression_results.csv"
);

router.get("/comparison", (req, res) => {
  try {
    if (!fs.existsSync(resultsPath)) {
      return res.status(404).json({
        message: "ML results CSV not found",
      });
    }

    const file = fs.readFileSync(resultsPath, "utf8");

    const lines = file
      .trim()
      .split(/\r?\n/)
      .filter(Boolean);

    const rows = lines.slice(1).map((line) => {
      const [actual, predicted] = line.split(",").map(Number);

      return {
        actual,
        predicted,
      };
    });

    if (!rows.length) {
      return res.status(400).json({
        message: "No ML prediction data found",
      });
    }

    const actual = rows.map((r) => r.actual);
    const predicted = rows.map((r) => r.predicted);

    const n = actual.length;

    const mse =
      actual.reduce(
        (sum, value, i) =>
          sum + Math.pow(value - predicted[i], 2),
        0
      ) / n;

    const rmse = Math.sqrt(mse);

    const mae =
      actual.reduce(
        (sum, value, i) =>
          sum + Math.abs(value - predicted[i]),
        0
      ) / n;

    const meanActual =
      actual.reduce((sum, value) => sum + value, 0) / n;

    const ssTotal = actual.reduce(
      (sum, value) =>
        sum + Math.pow(value - meanActual, 2),
      0
    );

    const ssResidual = actual.reduce(
      (sum, value, i) =>
        sum + Math.pow(value - predicted[i], 2),
      0
    );

    const r2 =
      ssTotal === 0
        ? 0
        : 1 - ssResidual / ssTotal;

    res.json({
      bestModel: "Linear Regression",

      models: [
        {
          name: "Linear Regression",
          mae: Number(mae.toFixed(4)),
          rmse: Number(rmse.toFixed(4)),
          r2: Number(r2.toFixed(4)),
          predictions: n,
          rank: 1,
        },
        {
          name: "XGBoost",
          mae: 15.1574,
          rmse: 20.0839,
          r2: 0.1585,
          predictions: n,
          rank: 2,
        },
        {
          name: "Random Forest",
          mae: 15.4696,
          rmse: 22.6244,
          r2: -0.0679,
          predictions: n,
          rank: 3,
        },
      ],
    });
  } catch (error) {
    console.error("ML comparison error:", error);

    res.status(500).json({
      message: "Failed to generate ML comparison",
      error: error.message,
    });
  }
});

module.exports = router;

// =====================================================
// DAY 36 - FINAL ANALYSIS API
// =====================================================

router.get("/final-analysis", (req, res) => {
  try {
    const finalResultsPath = path.join(
      __dirname,
      "../../datasets/processed/day36_final_analysis.csv"
    );

    if (!fs.existsSync(finalResultsPath)) {
      return res.status(404).json({
        message: "Final analysis CSV not found",
      });
    }

    const file = fs.readFileSync(
      finalResultsPath,
      "utf8"
    );

    const lines = file
      .trim()
      .split(/\r?\n/)
      .filter(Boolean);

    const rows = lines.slice(1).map((line) => {
      const [category, name, score, rank] =
        line.split(",");

      return {
        category,
        name,
        score: Number(score),
        rank: Number(rank),
      };
    });

    const theories = rows
      .filter((item) => item.category === "Theory")
      .sort((a, b) => a.rank - b.rank);

    const models = rows
      .filter((item) => item.category === "ML Model")
      .sort((a, b) => a.rank - b.rank);

    res.json({
      bestTheory: theories[0],
      bestModel: models[0],

      theories,
      models,

      summary: {
        totalTheories: theories.length,
        totalModels: models.length,
      },
    });

  } catch (error) {
    console.error(
      "Final Analysis API Error:",
      error
    );

    res.status(500).json({
      message: "Failed to load final analysis",
      error: error.message,
    });
  }
});
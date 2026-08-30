import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "./MLAnalysis.css";

const API_URL = "http://localhost:5000/api/ml-results";

function MLAnalysis() {
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMLResults = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error(`Server returned ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error("ML API Error:", err);
        setError(
          "Unable to load machine learning results. Make sure the backend server is running."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchMLResults();
  }, []);

  const results = useMemo(() => {
    if (!data?.results || !Array.isArray(data.results)) {
      return [];
    }

    return data.results.map((item, index) => {
      const actual = Number(item.Actual) || 0;
      const predicted = Number(item.Predicted) || 0;
      const errorValue = actual - predicted;

      return {
        id: index + 1,
        observation: `Test ${index + 1}`,
        actual,
        predicted,
        error: errorValue,
        absoluteError: Math.abs(errorValue),
      };
    });
  }, [data]);

  const metrics = useMemo(() => {
    if (!results.length) {
      return {
        mse: 0,
        mae: 0,
        rmse: 0,
        r2: 0,
      };
    }

    const mse =
      results.reduce((sum, item) => {
        return sum + Math.pow(item.error, 2);
      }, 0) / results.length;

    const mae =
      results.reduce((sum, item) => {
        return sum + Math.abs(item.error);
      }, 0) / results.length;

    const rmse = Math.sqrt(mse);

    const actualMean =
      results.reduce((sum, item) => sum + item.actual, 0) /
      results.length;

    const ssTotal = results.reduce((sum, item) => {
      return sum + Math.pow(item.actual - actualMean, 2);
    }, 0);

    const ssResidual = results.reduce((sum, item) => {
      return sum + Math.pow(item.error, 2);
    }, 0);

    const r2 =
      ssTotal === 0 ? 0 : 1 - ssResidual / ssTotal;

    return {
      mse,
      mae,
      rmse,
      r2,
    };
  }, [results]);

  const chartData = useMemo(() => {
    return results.map((item) => ({
      name: item.id,
      actual: Number(item.actual.toFixed(2)),
      predicted: Number(item.predicted.toFixed(2)),
    }));
  }, [results]);

  const formatNumber = (value) => {
    return Number(value).toFixed(4);
  };

  const getR2Status = (r2) => {
    if (r2 >= 0.7) return "Strong";
    if (r2 >= 0.4) return "Moderate";
    return "Needs Improvement";
  };

  if (loading) {
    return (
      <div className="ml-page">
        <div className="ml-loading">
          <div className="loading-spinner"></div>
          <h2>Loading ML Analysis</h2>
          <p>Fetching model performance data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="ml-page">
        <div className="ml-error">
          <div className="error-icon">!</div>
          <h2>Unable to Load Analysis</h2>
          <p>{error}</p>

          <button
            className="primary-button"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="ml-page">
      <div className="ml-container">

        {/* HEADER */}
        <header className="ml-header">
          <div>
            <div className="breadcrumb">
              <button
                className="back-button"
                onClick={() => navigate("/dashboard")}
              >
                ← Dashboard
              </button>

              <span>/</span>
              <span>Analysis</span>
            </div>

            <div className="eyebrow">
              MACHINE LEARNING
            </div>

            <h1>Machine Learning Analysis</h1>

            <p className="page-description">
              Evaluate dividend prediction performance using machine
              learning models.
            </p>
          </div>

          <div className="model-status">
            <span className="status-dot"></span>
            Model Active
          </div>
        </header>

        {/* MODEL SUMMARY */}
        <section className="model-card">
          <div className="model-card-top">
            <div>
              <span className="section-label">
                SELECTED MODEL
              </span>

              <h2>
                {data?.model || "Linear Regression"}
              </h2>

              <p>
                Best performing model for the current dividend
                prediction dataset.
              </p>
            </div>

            <div className="best-model-badge">
              ★ Best Model
            </div>
          </div>

          <div className="model-info">
            <div>
              <span>Predictions</span>
              <strong>{results.length}</strong>
              <small>Test observations</small>
            </div>

            <div>
              <span>Model Type</span>
              <strong>Regression</strong>
              <small>Supervised learning</small>
            </div>

            <div>
              <span>Dataset</span>
              <strong>Dividend</strong>
              <small>Prediction dataset</small>
            </div>
          </div>
        </section>

        {/* METRICS */}
        <section className="section-block">
          <div className="section-heading">
            <div>
              <h2>Model Performance</h2>
              <p>
                Key evaluation metrics for the selected model.
              </p>
            </div>

            <div className="performance-status">
              {getR2Status(metrics.r2)}
            </div>
          </div>

          <div className="metrics-grid">

            <div className="metric-card">
              <div className="metric-icon">MSE</div>
              <div className="metric-content">
                <span>Mean Squared Error</span>
                <strong>{formatNumber(metrics.mse)}</strong>
                <small>Lower is better</small>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-icon">MAE</div>
              <div className="metric-content">
                <span>Mean Absolute Error</span>
                <strong>{formatNumber(metrics.mae)}</strong>
                <small>Average prediction error</small>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-icon">RMSE</div>
              <div className="metric-content">
                <span>Root Mean Squared Error</span>
                <strong>{formatNumber(metrics.rmse)}</strong>
                <small>Prediction accuracy</small>
              </div>
            </div>

            <div className="metric-card r2-card">
              <div className="metric-icon">R²</div>
              <div className="metric-content">
                <span>R² Score</span>
                <strong>{formatNumber(metrics.r2)}</strong>
                <small>Model explanatory power</small>
              </div>
            </div>

          </div>
        </section>

        {/* CHART */}
        <section className="chart-card">
          <div className="chart-header">
            <div>
              <h2>Actual vs Predicted</h2>
              <p>
                Comparison of observed and predicted dividend
                values across test observations.
              </p>
            </div>

            <div className="chart-count">
              {results.length} observations
            </div>
          </div>

          <div className="chart-wrapper">
            {chartData.length > 0 ? (
              <ResponsiveContainer
                width="100%"
                height="100%"
              >
                <LineChart
                  data={chartData}
                  margin={{
                    top: 20,
                    right: 25,
                    left: 0,
                    bottom: 10,
                  }}
                >
                  <CartesianGrid
                    strokeDasharray="4 4"
                    vertical={false}
                  />

                  <XAxis
                    dataKey="name"
                    tickFormatter={(value) => `#${value}`}
                    tick={{ fontSize: 12 }}
                    tickLine={false}
                    axisLine={false}
                  />

                  <YAxis
                    tick={{ fontSize: 12 }}
                    tickLine={false}
                    axisLine={false}
                  />

                  <Tooltip
                    contentStyle={{
                      borderRadius: "12px",
                      border: "1px solid #e5e7eb",
                      boxShadow:
                        "0 10px 30px rgba(15, 23, 42, 0.12)",
                    }}
                    labelFormatter={(value) =>
                      `Test Observation #${value}`
                    }
                    formatter={(value) =>
                      Number(value).toFixed(2)
                    }
                  />

                  <Legend
                    verticalAlign="top"
                    height={40}
                  />

                  <Line
                    type="monotone"
                    dataKey="actual"
                    name="Actual Dividend"
                    stroke="#7c3aed"
                    strokeWidth={3}
                    dot={{
                      r: 4,
                      strokeWidth: 2,
                    }}
                    activeDot={{
                      r: 7,
                    }}
                  />

                  <Line
                    type="monotone"
                    dataKey="predicted"
                    name="Predicted Dividend"
                    stroke="#06b6d4"
                    strokeWidth={3}
                    strokeDasharray="7 5"
                    dot={{
                      r: 4,
                      strokeWidth: 2,
                    }}
                    activeDot={{
                      r: 7,
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <div className="empty-state">
                No prediction data available.
              </div>
            )}
          </div>
        </section>

        {/* RESULTS TABLE */}
        <section className="results-card">

          <div className="results-header">
            <div>
              <h2>Prediction Results</h2>

              <p>
                Detailed results generated by the{" "}
                <strong>
                  {data?.model || "Linear Regression"}
                </strong>{" "}
                model.
              </p>
            </div>

            <div className="results-count">
              {results.length} Results
            </div>
          </div>

          <div className="table-container">
            <table className="results-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Actual Dividend</th>
                  <th>Predicted Dividend</th>
                  <th>Error</th>
                  <th>Absolute Error</th>
                </tr>
              </thead>

              <tbody>
                {results.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <span className="row-number">
                        {item.id}
                      </span>
                    </td>

                    <td>
                      <strong>
                        {item.actual.toFixed(2)}
                      </strong>
                    </td>

                    <td>
                      <strong>
                        {item.predicted.toFixed(4)}
                      </strong>
                    </td>

                    <td>
                      <span
                        className={
                          item.error >= 0
                            ? "error-positive"
                            : "error-negative"
                        }
                      >
                        {item.error >= 0 ? "+" : ""}
                        {item.error.toFixed(4)}
                      </span>
                    </td>

                    <td>
                      {item.absoluteError.toFixed(4)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* INTERPRETATION */}
        <section className="interpretation-card">
          <div className="interpretation-icon">
            ✓
          </div>

          <div>
            <h2>Model Interpretation</h2>

            <p>
              The{" "}
              <strong>
                {data?.model || "Linear Regression"}
              </strong>{" "}
              model achieved an R² score of{" "}
              <strong>{formatNumber(metrics.r2)}</strong>.
              The model explains part of the variation in dividend
              values, while prediction errors indicate that there
              is still room for improvement.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}

export default MLAnalysis;
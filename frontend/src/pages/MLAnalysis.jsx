import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MLAnalysis() {
  const navigate = useNavigate();

  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/ml-results")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch ML results");
        }

        return res.json();
      })
      .then((data) => {
        console.log("ML API Response:", data);

        /*
          Backend response example:

          {
            model: "Linear Regression",
            totalPredictions: 20,
            metrics: {
              mse: ...,
              mae: ...,
              rmse: ...,
              r2: ...
            }
          }
        */

        // If backend returns a single model object
        if (!Array.isArray(data)) {
          const modelData = {
            name: data.model || "Linear Regression",
            totalPredictions: data.totalPredictions || 0,
            mse: data.metrics?.mse ?? "-",
            mae: data.metrics?.mae ?? "-",
            rmse: data.metrics?.rmse ?? "-",
            r2: data.metrics?.r2 ?? "-",
            status: "Best Model",
          };

          setModels([modelData]);
        } else {
          // If backend later returns multiple models
          const formattedModels = data.map((model, index) => ({
            name: model.model || "Unknown Model",
            totalPredictions: model.totalPredictions || 0,
            mse: model.metrics?.mse ?? "-",
            mae: model.metrics?.mae ?? "-",
            rmse: model.metrics?.rmse ?? "-",
            r2: model.metrics?.r2 ?? "-",
            status:
              index === 0
                ? "Best Model"
                : index === 1
                ? "Second"
                : "Lowest",
          }));

          setModels(formattedModels);
        }

        setLoading(false);
      })
      .catch((err) => {
        console.error("ML API Error:", err);
        setError("Unable to load ML analysis.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="inner-page">

      {/* HEADER */}

      <header className="inner-header">

        <button onClick={() => navigate("/dashboard")}>
          ← Dashboard
        </button>

        <h1>Machine Learning Analysis</h1>

        <span>Model Evaluation</span>

      </header>


      {/* CONTENT */}

      <main className="inner-content">

        <p className="page-description">
          Comparison of machine learning models used in the
          Dividend Puzzle analysis.
        </p>


        {/* LOADING */}

        {loading && (
          <div className="loading-message">
            Loading ML results...
          </div>
        )}


        {/* ERROR */}

        {!loading && error && (
          <div className="auth-error">
            {error}
          </div>
        )}


        {/* RESULTS */}

        {!loading && !error && (

          <div className="analysis-grid">

            {models.map((model) => (

              <div
                className="analysis-card"
                key={model.name}
              >

                <span className="analysis-badge">
                  {model.status}
                </span>

                <h2>
                  {model.name}
                </h2>


                {/* TOTAL PREDICTIONS */}

                <div className="metric">

                  <span>
                    Predictions
                  </span>

                  <strong>
                    {model.totalPredictions}
                  </strong>

                </div>


                {/* MSE */}

                <div className="metric">

                  <span>
                    MSE
                  </span>

                  <strong>
                    {typeof model.mse === "number"
                      ? model.mse.toFixed(4)
                      : model.mse}
                  </strong>

                </div>


                {/* MAE */}

                <div className="metric">

                  <span>
                    MAE
                  </span>

                  <strong>
                    {typeof model.mae === "number"
                      ? model.mae.toFixed(4)
                      : model.mae}
                  </strong>

                </div>


                {/* RMSE */}

                <div className="metric">

                  <span>
                    RMSE
                  </span>

                  <strong>
                    {typeof model.rmse === "number"
                      ? model.rmse.toFixed(4)
                      : model.rmse}
                  </strong>

                </div>


                {/* R2 */}

                <div className="metric">

                  <span>
                    R²
                  </span>

                  <strong>
                    {typeof model.r2 === "number"
                      ? model.r2.toFixed(4)
                      : model.r2}
                  </strong>

                </div>

              </div>

            ))}

          </div>

        )}


        {/* EMPTY */}

        {!loading && !error && models.length === 0 && (

          <div className="empty-message">
            No ML results found.
          </div>

        )}

      </main>

    </div>
  );
}

export default MLAnalysis;
import { useNavigate } from "react-router-dom";

function MLAnalysis() {
  const navigate = useNavigate();

  const models = [
    {
      name: "Linear Regression",
      mae: "12.8967",
      rmse: "17.4255",
      r2: "0.3665",
      status: "Best Model",
    },
    {
      name: "XGBoost",
      mae: "15.1574",
      rmse: "20.0839",
      r2: "0.1585",
      status: "Second",
    },
    {
      name: "Random Forest",
      mae: "15.4696",
      rmse: "22.6244",
      r2: "-0.0679",
      status: "Lowest",
    },
  ];

  return (
    <div className="inner-page">

      <header className="inner-header">

        <button onClick={() => navigate("/dashboard")}>
          ← Dashboard
        </button>

        <h1>Machine Learning Analysis</h1>

        <span>Model Evaluation</span>

      </header>

      <main className="inner-content">

        <p className="page-description">
          Comparison of machine learning models used in the
          Dividend Puzzle analysis.
        </p>

        <div className="analysis-grid">

          {models.map((model) => (
            <div className="analysis-card" key={model.name}>

              <span className="analysis-badge">
                {model.status}
              </span>

              <h2>{model.name}</h2>

              <div className="metric">
                <span>MAE</span>
                <strong>{model.mae}</strong>
              </div>

              <div className="metric">
                <span>RMSE</span>
                <strong>{model.rmse}</strong>
              </div>

              <div className="metric">
                <span>R²</span>
                <strong>{model.r2}</strong>
              </div>

            </div>
          ))}

        </div>

      </main>
    </div>
  );
}

export default MLAnalysis;
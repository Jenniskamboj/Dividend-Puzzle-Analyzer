import { useNavigate } from "react-router-dom";

function Comparison() {
  const navigate = useNavigate();

  return (
    <div className="inner-page">

      <header className="inner-header">

        <button onClick={() => navigate("/dashboard")}>
          ← Dashboard
        </button>

        <h1>Model Comparison</h1>

        <span>Performance</span>

      </header>

      <main className="inner-content">

        <p className="page-description">
          Complete comparison of the predictive models evaluated
          during the project.
        </p>

        <div className="data-table">

          <div className="table-header comparison-header">
            <span>Model</span>
            <span>MAE</span>
            <span>MSE</span>
            <span>RMSE</span>
            <span>R²</span>
          </div>

          <div className="table-row comparison-row">
            <strong>Linear Regression</strong>
            <span>12.8967</span>
            <span>303.6466</span>
            <span>17.4255</span>
            <span>0.3665</span>
          </div>

          <div className="table-row comparison-row">
            <strong>Random Forest</strong>
            <span>15.4696</span>
            <span>511.8649</span>
            <span>22.6244</span>
            <span>-0.0679</span>
          </div>

          <div className="table-row comparison-row">
            <strong>XGBoost</strong>
            <span>15.1574</span>
            <span>403.3640</span>
            <span>20.0839</span>
            <span>0.1585</span>
          </div>

        </div>

        <div className="best-model-box">

          <span>Recommended Model</span>

          <h2>Linear Regression</h2>

          <p>
            Lowest MAE and RMSE with the highest R² among
            the evaluated models.
          </p>

        </div>

      </main>
    </div>
  );
}

export default Comparison;
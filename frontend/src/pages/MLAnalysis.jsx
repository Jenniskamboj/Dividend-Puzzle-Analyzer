function MLAnalysis() {
  return (
    <div>

      <div className="page-title">

        <p className="eyebrow">
          MACHINE LEARNING
        </p>

        <h1>
          ML Analysis
        </h1>

        <p className="subtitle">
          Compare machine learning models used in the project.
        </p>

      </div>

      <div className="page-card">

        <h2>
          Model Performance
        </h2>

        <div className="simple-table">

          <div className="table-row table-header">
            <span>Model</span>
            <span>MAE</span>
            <span>RMSE</span>
            <span>R²</span>
          </div>

          <div className="table-row">
            <span>Linear Regression</span>
            <span>12.8967</span>
            <span>17.4255</span>
            <span>0.3665</span>
          </div>

          <div className="table-row">
            <span>Random Forest</span>
            <span>15.4696</span>
            <span>22.6244</span>
            <span>-0.0679</span>
          </div>

          <div className="table-row">
            <span>XGBoost</span>
            <span>15.1574</span>
            <span>20.0839</span>
            <span>0.1585</span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default MLAnalysis;
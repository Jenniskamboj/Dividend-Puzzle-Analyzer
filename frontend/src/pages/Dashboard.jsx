function Dashboard() {
  return (
    <div>
      <div className="page-title">
        <p className="eyebrow">FINANCIAL ANALYTICS</p>
        <h1>Dashboard</h1>
        <p className="subtitle">
          Overview of the Dividend Puzzle research project.
        </p>
      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <div className="stat-icon">▦</div>
          <div>
            <span>Dataset Records</span>
            <strong>110</strong>
            <small>Company-year observations</small>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">◈</div>
          <div>
            <span>Theories</span>
            <strong>4</strong>
            <small>Financial theories</small>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">◆</div>
          <div>
            <span>ML Models</span>
            <strong>3</strong>
            <small>Models evaluated</small>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">↗</div>
          <div>
            <span>Best R²</span>
            <strong>0.3665</strong>
            <small>Linear Regression</small>
          </div>
        </div>

      </div>

      <div className="page-card">
        <span className="panel-label">PROJECT OVERVIEW</span>

        <h2>
          Solving the Dividend Puzzle
        </h2>

        <p>
          This project investigates whether dividend-paying companies
          generate different investor returns and evaluates four major
          dividend theories using financial data and machine learning.
        </p>
      </div>

    </div>
  );
}

export default Dashboard;
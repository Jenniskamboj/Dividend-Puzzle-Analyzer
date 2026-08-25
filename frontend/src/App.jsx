import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "./App.css";

const theoryData = [
  {
    theory: "Agency Cost",
    score: 0.3498,
  },
  {
    theory: "Bird-in-Hand",
    score: 0.2405,
  },
  {
    theory: "Tax/Clientele",
    score: 0.2405,
  },
  {
    theory: "Signaling",
    score: 0.2216,
  },
];

const modelData = [
  {
    model: "Linear Regression",
    r2: 0.3665,
    rmse: 17.4255,
  },
  {
    model: "Random Forest",
    r2: -0.0679,
    rmse: 22.6244,
  },
  {
    model: "XGBoost",
    r2: 0.1585,
    rmse: 20.0839,
  },
];

function App() {
  return (
    <div className="app">

      {/* Sidebar */}

      <aside className="sidebar">

        <div className="logo">
          <div className="logo-icon">D</div>

          <div>
            <h2>Dividend</h2>
            <span>Puzzle Analyzer</span>
          </div>
        </div>

        <nav className="navigation">

          <a className="nav-item active">
            <span>⌂</span>
            Dashboard
          </a>

          <a className="nav-item">
            <span>◉</span>
            Companies
          </a>

          <a className="nav-item">
            <span>◆</span>
            ML Analysis
          </a>

          <a className="nav-item">
            <span>◈</span>
            Theory Analysis
          </a>

          <a className="nav-item">
            <span>⇄</span>
            Comparison
          </a>

          <a className="nav-item">
            <span>ⓘ</span>
            About
          </a>

        </nav>

        <div className="sidebar-footer">
          <span>Dividend Puzzle</span>
          <small>Data Analytics Project</small>
        </div>

      </aside>


      {/* Main Content */}

      <main className="main">

        {/* Header */}

        <header className="header">

          <div>
            <p className="eyebrow">FINANCIAL ANALYTICS</p>

            <h1>Dashboard</h1>

            <p className="subtitle">
              Understanding the relationship between dividends and investor returns.
            </p>
          </div>

          <div className="profile">
            <div className="avatar">J</div>

            <div>
              <strong>Jennis</strong>
              <span>Project Analyst</span>
            </div>
          </div>

        </header>


        {/* Hero */}

        <section className="hero">

          <div className="hero-content">

            <span className="hero-label">
              DIVIDEND PUZZLE RESEARCH
            </span>

            <h2>
              Do dividends really influence
              <span> investor returns?</span>
            </h2>

            <p>
              Analyze dividend behavior using financial metrics,
              machine learning models, and four major dividend theories.
            </p>

            <button className="primary-button">
              Explore Analysis →
            </button>

          </div>

          <div className="hero-stat">

            <span>Leading Theory</span>

            <strong>Agency Cost</strong>

            <div className="score">
              0.3498
            </div>

            <small>
              Highest evidence score
            </small>

          </div>

        </section>


        {/* Statistics */}

        <section className="stats-grid">

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
              <span>Theories Analyzed</span>
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

        </section>


        {/* Charts */}

        <section className="dashboard-grid">

          {/* Theory Chart */}

          <div className="panel">

            <div className="panel-header">

              <div>
                <span className="panel-label">
                  THEORY ANALYSIS
                </span>

                <h3>
                  Evidence by Theory
                </h3>
              </div>

              <span className="badge">
                4 Theories
              </span>

            </div>

            <div className="chart-container">

              <ResponsiveContainer width="100%" height={300}>

                <BarChart
                  data={theoryData}
                  layout="vertical"
                  margin={{
                    top: 10,
                    right: 30,
                    left: 20,
                    bottom: 10,
                  }}
                >

                  <CartesianGrid
                    strokeDasharray="3 3"
                    horizontal={false}
                  />

                  <XAxis
                    type="number"
                    domain={[0, 0.4]}
                  />

                  <YAxis
                    type="category"
                    dataKey="theory"
                    width={110}
                  />

                  <Tooltip />

                  <Bar
                    dataKey="score"
                    radius={[0, 6, 6, 0]}
                  />

                </BarChart>

              </ResponsiveContainer>

            </div>

          </div>


          {/* Model Performance */}

          <div className="panel">

            <div className="panel-header">

              <div>
                <span className="panel-label">
                  MACHINE LEARNING
                </span>

                <h3>
                  Model Performance
                </h3>
              </div>

              <span className="badge">
                R²
              </span>

            </div>


            <div className="model-list">

              {modelData.map((model, index) => (

                <div className="model-row" key={model.model}>

                  <div className="model-number">
                    0{index + 1}
                  </div>

                  <div className="model-info">

                    <strong>
                      {model.model}
                    </strong>

                    <div className="progress">

                      <div
                        className="progress-fill"
                        style={{
                          width: `${Math.max(model.r2 * 100, 3)}%`,
                        }}
                      />

                    </div>

                  </div>

                  <div className="model-score">

                    <strong>
                      {model.r2.toFixed(4)}
                    </strong>

                    <span>
                      R²
                    </span>

                  </div>

                </div>

              ))}

            </div>


            <div className="winner">

              <span>BEST MODEL</span>

              <strong>
                Linear Regression
              </strong>

              <small>
                Lowest MAE and RMSE · Highest R²
              </small>

            </div>

          </div>

        </section>


        {/* Bottom section */}

        <section className="bottom-grid">

          <div className="info-card">

            <div className="card-icon">
              01
            </div>

            <div>

              <span>
                FEATURE IMPORTANCE
              </span>

              <h3>
                Dividend Yield
              </h3>

              <p>
                Dividend yield showed the strongest overall
                importance in the current machine learning analysis.
              </p>

            </div>

          </div>


          <div className="info-card">

            <div className="card-icon">
              02
            </div>

            <div>

              <span>
                RESEARCH RESULT
              </span>

              <h3>
                Agency Cost Theory
              </h3>

              <p>
                Agency Cost Theory achieved the highest evidence
                score among the four theories analyzed.
              </p>

            </div>

          </div>

        </section>


        {/* Footer */}

        <footer>

          <span>
            Dividend Puzzle Analyzer
          </span>

          <span>
            Data Analytics · Machine Learning · Finance
          </span>

        </footer>

      </main>

    </div>
  );
}

export default App;
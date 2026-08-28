import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [theories, setTheories] = useState([]);
  const [loadingTheories, setLoadingTheories] = useState(true);
  const [theoryError, setTheoryError] = useState("");

  useEffect(() => {
    const fetchTheories = async () => {
      try {
        setLoadingTheories(true);
        setTheoryError("");

        const response = await fetch(
          "http://localhost:5000/api/theories"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch theory results");
        }

        const data = await response.json();

        setTheories(data);
      } catch (error) {
        console.error("Theory API error:", error);
        setTheoryError("Unable to load theory results.");
      } finally {
        setLoadingTheories(false);
      }
    };

    fetchTheories();
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const strongestTheory = theories.length > 0
    ? theories[0]
    : null;

  return (
    <div className="dashboard-page">

      {/* NAVBAR */}

      <nav className="dashboard-navbar">

        <div className="dashboard-logo">
          <div className="dashboard-logo-icon">
            DP
          </div>

          <span>
            Dividend<span>Puzzle</span>
          </span>
        </div>

        <div className="dashboard-user">

          <div className="user-info">
            <strong>{user?.name || "User"}</strong>
            <small>{user?.email}</small>
          </div>

          <button onClick={handleLogout}>
            Logout
          </button>

        </div>

      </nav>


      {/* MAIN */}

      <main className="dashboard-content">

        <div className="dashboard-heading">

          <div>
            <h1>
              Good evening, {user?.name || "Investor"} 👋
            </h1>

            <p>
              Your Dividend Intelligence Overview
            </p>
          </div>

          <div className="premium-status">
            ✦ PREMIUM
          </div>

        </div>


        {/* METRIC CARDS */}

        <section className="dashboard-cards">

          <div className="dashboard-card">

            <div className="card-icon">
              %
            </div>

            <span>Average Dividend Yield</span>

            <strong>3.8%</strong>

            <small>
              Across analyzed companies
            </small>

          </div>


          <div className="dashboard-card">

            <div className="card-icon">
              ↗
            </div>

            <span>Average Total Return</span>

            <strong>12.4%</strong>

            <small>
              Historical analysis
            </small>

          </div>


          <div className="dashboard-card">

            <div className="card-icon">
              ★
            </div>

            <span>Strongest Theory</span>

            <strong>
              {strongestTheory
                ? strongestTheory.theory_name.replace(" Theory", "")
                : "Loading..."}
            </strong>

            <small>
              {strongestTheory
                ? `Evidence score: ${Number(
                    strongestTheory.evidence_score
                  ).toFixed(4)}`
                : "Loading theory data"}
            </small>

          </div>


          <div className="dashboard-card">

            <div className="card-icon">
              ML
            </div>

            <span>Best Model R²</span>

            <strong>0.3665</strong>

            <small>
              Linear Regression
            </small>

          </div>

        </section>


        {/* MAIN GRID */}

        <section className="dashboard-grid">


          {/* MODEL PERFORMANCE */}

          <div className="dashboard-panel">

            <div className="panel-header">

              <div>
                <h2>Model Performance</h2>

                <p>
                  Machine learning prediction results
                </p>
              </div>

              <button
                onClick={() => navigate("/comparison")}
              >
                View Details →
              </button>

            </div>


            <div className="model-list">

              <div className="model-row">

                <div>
                  <strong>Linear Regression</strong>
                  <small>Best performing model</small>
                </div>

                <div className="model-score">
                  <span>R²</span>
                  <strong>0.3665</strong>
                </div>

                <div className="model-score">
                  <span>RMSE</span>
                  <strong>17.43</strong>
                </div>

              </div>


              <div className="model-row">

                <div>
                  <strong>XGBoost</strong>
                  <small>Tree-based model</small>
                </div>

                <div className="model-score">
                  <span>R²</span>
                  <strong>0.1585</strong>
                </div>

                <div className="model-score">
                  <span>RMSE</span>
                  <strong>20.08</strong>
                </div>

              </div>


              <div className="model-row">

                <div>
                  <strong>Random Forest</strong>
                  <small>Ensemble model</small>
                </div>

                <div className="model-score">
                  <span>R²</span>
                  <strong>-0.0679</strong>
                </div>

                <div className="model-score">
                  <span>RMSE</span>
                  <strong>22.62</strong>
                </div>

              </div>

            </div>

          </div>


          {/* THEORY */}

          <div className="dashboard-panel">

            <div className="panel-header">

              <div>
                <h2>Theory Evidence</h2>

                <p>
                  Empirical support for dividend theories
                </p>
              </div>

              <button
                onClick={() => navigate("/theory-analysis")}
              >
                Explore →
              </button>

            </div>


            <div className="theory-list">

              {loadingTheories && (
                <p className="theory-message">
                  Loading theory results...
                </p>
              )}

              {theoryError && (
                <p className="theory-error">
                  {theoryError}
                </p>
              )}

              {!loadingTheories &&
                !theoryError &&
                theories.map((item) => {

                  const score = Number(item.evidence_score);

                  const maxScore = theories.length > 0
                    ? Math.max(
                        ...theories.map((theory) =>
                          Number(theory.evidence_score)
                        )
                      )
                    : 1;

                  const width =
                    maxScore > 0
                      ? `${(score / maxScore) * 100}%`
                      : "0%";

                  return (
                    <Theory
                      key={item.rank}
                      name={item.theory_name}
                      score={score.toFixed(4)}
                      width={width}
                      rank={item.rank}
                    />
                  );
                })}

            </div>

          </div>

        </section>


        {/* QUICK ACTIONS */}

        <section className="quick-actions">

          <h2>Explore Analysis</h2>

          <div className="action-grid">

            <ActionCard
              title="Company Analysis"
              description="Explore dividend performance across companies."
              onClick={() => navigate("/companies")}
            />

            <ActionCard
              title="ML Analysis"
              description="Explore machine learning predictions and features."
              onClick={() => navigate("/ml-analysis")}
            />

            <ActionCard
              title="Theory Analysis"
              description="Understand evidence behind the four dividend theories."
              onClick={() => navigate("/theory-analysis")}
            />

            <ActionCard
              title="Model Comparison"
              description="Compare Linear Regression, Random Forest and XGBoost."
              onClick={() => navigate("/comparison")}
            />

          </div>

        </section>

      </main>

    </div>
  );
}


function Theory({ name, score, width, rank }) {
  return (
    <div className="theory-item">

      <div className="theory-label">

        <span>
          {rank}. {name}
        </span>

        <strong>
          {score}
        </strong>

      </div>

      <div className="progress">

        <div
          className="progress-bar"
          style={{ width }}
        />

      </div>

    </div>
  );
}


function ActionCard({ title, description, onClick }) {
  return (
    <button
      className="action-card"
      onClick={onClick}
    >

      <div className="action-arrow">
        →
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

    </button>
  );
}


export default Dashboard;
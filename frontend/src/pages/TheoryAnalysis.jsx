import { useNavigate } from "react-router-dom";

function TheoryAnalysis() {
  const navigate = useNavigate();

  const theories = [
    {
      name: "Agency Cost Theory",
      score: "0.3498",
      description:
        "Suggests dividends can reduce agency problems between managers and shareholders.",
    },
    {
      name: "Bird-in-Hand Theory",
      score: "0.2405",
      description:
        "Suggests investors may prefer reliable dividends because they provide more certain returns.",
    },
    {
      name: "Tax/Clientele Theory",
      score: "0.2405",
      description:
        "Explores how taxation and investor preferences can influence dividend decisions.",
    },
    {
      name: "Signaling Theory",
      score: "0.2216",
      description:
        "Suggests dividend decisions can communicate information about company prospects.",
    },
  ];

  return (
    <div className="inner-page">

      <header className="inner-header">

        <button onClick={() => navigate("/dashboard")}>
          ← Dashboard
        </button>

        <h1>Dividend Theory Analysis</h1>

        <span>Evidence Ranking</span>

      </header>

      <main className="inner-content">

        <p className="page-description">
          Empirical evidence supporting the four major dividend
          theories studied in this project.
        </p>

        <div className="theory-cards">

          {theories.map((theory, index) => (
            <div className="theory-card" key={theory.name}>

              <div className="rank">
                #{index + 1}
              </div>

              <h2>{theory.name}</h2>

              <p>{theory.description}</p>

              <div className="score">
                <span>Evidence Score</span>
                <strong>{theory.score}</strong>
              </div>

            </div>
          ))}

        </div>

      </main>
    </div>
  );
}

export default TheoryAnalysis;
function TheoryAnalysis() {
  const theories = [
    ["Agency Cost Theory", "0.3498", "1"],
    ["Bird-in-Hand Theory", "0.2405", "2"],
    ["Tax/Clientele Theory", "0.2405", "3"],
    ["Signaling Theory", "0.2216", "4"],
  ];

  return (
    <div>

      <div className="page-title">

        <p className="eyebrow">
          DIVIDEND THEORIES
        </p>

        <h1>
          Theory Analysis
        </h1>

        <p className="subtitle">
          Evidence supporting the four major dividend theories.
        </p>

      </div>

      <div className="page-card">

        <h2>
          Theory Evidence
        </h2>

        <div className="simple-table">

          <div className="table-row table-header">
            <span>Theory</span>
            <span>Score</span>
            <span>Rank</span>
          </div>

          {theories.map((theory) => (

            <div className="table-row" key={theory[0]}>

              <span>{theory[0]}</span>

              <span>{theory[1]}</span>

              <span>#{theory[2]}</span>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default TheoryAnalysis;
function About() {
  return (
    <div>

      <div className="page-title">

        <p className="eyebrow">
          PROJECT INFORMATION
        </p>

        <h1>
          About
        </h1>

        <p className="subtitle">
          Understanding the Dividend Puzzle Analyzer.
        </p>

      </div>

      <div className="page-card">

        <h2>
          About the Project
        </h2>

        <p>
          The Dividend Puzzle Analyzer investigates the relationship
          between dividend policy and investor returns.
        </p>

        <p>
          The project combines financial data analysis, machine
          learning, statistical analysis, and four major dividend
          theories.
        </p>

        <h3>
          Technologies
        </h3>

        <div className="technology-list">
          <span>Python</span>
          <span>Pandas</span>
          <span>Scikit-learn</span>
          <span>XGBoost</span>
          <span>PostgreSQL</span>
          <span>React</span>
        </div>

      </div>

    </div>
  );
}

export default About;
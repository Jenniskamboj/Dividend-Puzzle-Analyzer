import { useNavigate } from "react-router-dom";

function Companies() {
  const navigate = useNavigate();

  const companies = [
    ["AAPL", "Apple Inc.", "0.52%", "18.4%"],
    ["JNJ", "Johnson & Johnson", "3.10%", "9.8%"],
    ["KO", "Coca-Cola", "2.85%", "11.2%"],
    ["MCD", "McDonald's", "2.40%", "13.6%"],
    ["MSFT", "Microsoft", "0.72%", "21.4%"],
    ["PEP", "PepsiCo", "3.20%", "10.7%"],
    ["PG", "Procter & Gamble", "2.55%", "9.6%"],
    ["VZ", "Verizon", "6.20%", "4.8%"],
  ];

  return (
    <div className="inner-page">

      <header className="inner-header">
        <button onClick={() => navigate("/dashboard")}>
          ← Dashboard
        </button>

        <h1>Company Analysis</h1>

        <span>Dividend Intelligence</span>
      </header>

      <main className="inner-content">

        <p className="page-description">
          Explore dividend characteristics across selected companies.
        </p>

        <div className="data-table">

          <div className="table-header">
            <span>Ticker</span>
            <span>Company</span>
            <span>Dividend Yield</span>
            <span>Total Return</span>
          </div>

          {companies.map((company) => (
            <div className="table-row" key={company[0]}>
              <strong>{company[0]}</strong>
              <span>{company[1]}</span>
              <span>{company[2]}</span>
              <span>{company[3]}</span>
            </div>
          ))}

        </div>

      </main>
    </div>
  );
}

export default Companies;
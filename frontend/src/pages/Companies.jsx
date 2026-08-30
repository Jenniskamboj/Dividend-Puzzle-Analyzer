import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const fallbackCompanies = [
  {
    ticker: "AAPL",
    company: "Apple Inc.",
    sector: "Technology",
    dividendYield: 0.52,
    revenue: 416161,
    netIncome: 112010,
    totalAssets: 359241,
  },
  {
    ticker: "JNJ",
    company: "Johnson & Johnson",
    sector: "Healthcare",
    dividendYield: 3.25,
    revenue: 88300,
    netIncome: 14300,
    totalAssets: 180000,
  },
  {
    ticker: "KO",
    company: "Coca-Cola",
    sector: "Consumer Defensive",
    dividendYield: 2.95,
    revenue: 47061,
    netIncome: 10600,
    totalAssets: 100000,
  },
  {
    ticker: "MCD",
    company: "McDonald's",
    sector: "Consumer Cyclical",
    dividendYield: 2.55,
    revenue: 26000,
    netIncome: 8700,
    totalAssets: 55000,
  },
  {
    ticker: "MSFT",
    company: "Microsoft",
    sector: "Technology",
    dividendYield: 0.75,
    revenue: 281724,
    netIncome: 101832,
    totalAssets: 512000,
  },
  {
    ticker: "PEP",
    company: "PepsiCo",
    sector: "Consumer Defensive",
    dividendYield: 3.5,
    revenue: 91454,
    netIncome: 9360,
    totalAssets: 100000,
  },
  {
    ticker: "PG",
    company: "Procter & Gamble",
    sector: "Consumer Defensive",
    dividendYield: 2.4,
    revenue: 84000,
    netIncome: 15000,
    totalAssets: 120000,
  },
  {
    ticker: "VZ",
    company: "Verizon",
    sector: "Communication Services",
    dividendYield: 6.2,
    revenue: 134000,
    netIncome: 17000,
    totalAssets: 380000,
  },
];

function Companies() {
  const navigate = useNavigate();

  const [companies, setCompanies] = useState([]);
  const [selectedSector, setSelectedSector] = useState("All Sectors");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/companies")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch companies");
        }

        return res.json();
      })
      .then((data) => {
        setCompanies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Company API Error:", error);

        // Show data even if backend is temporarily unavailable
        setCompanies(fallbackCompanies);
        setLoading(false);
      });
  }, []);

  const sectors = [
    "All Sectors",
    ...new Set(companies.map((company) => company.sector)),
  ];

  const filteredCompanies =
    selectedSector === "All Sectors"
      ? companies
      : companies.filter(
          (company) => company.sector === selectedSector
        );

  return (
    <div className="companies-page">

      {/* TOP BAR */}
      <div className="companies-topbar">
        <button
          className="back-dashboard-btn"
          onClick={() => navigate("/dashboard")}
        >
          ← Dashboard
        </button>
      </div>

      {/* HEADER */}
      <div className="companies-header">
        <p className="page-label">
          DIVIDEND INTELLIGENCE
        </p>

        <h1>
          Company Analysis
        </h1>

        <p className="page-description">
          Analyze financial performance and dividend characteristics
          across selected companies.
        </p>
      </div>

      {/* FILTER */}
      <div className="company-filter">

        <div>
          <label>
            Filter by Sector
          </label>

          <select
            value={selectedSector}
            onChange={(e) =>
              setSelectedSector(e.target.value)
            }
          >
            {sectors.map((sector) => (
              <option
                key={sector}
                value={sector}
              >
                {sector}
              </option>
            ))}
          </select>
        </div>

        <span className="company-count">
          {filteredCompanies.length} companies
        </span>

      </div>

      {/* COMPANY TABLE */}
      <div className="companies-table-wrapper">

        {loading ? (
          <div className="loading-message">
            Loading company data...
          </div>
        ) : filteredCompanies.length === 0 ? (
          <div className="empty-message">
            No companies found.
          </div>
        ) : (

          <table className="companies-table">

            <thead>
              <tr>
                <th>Company</th>
                <th>Ticker</th>
                <th>Sector</th>
                <th>Dividend Yield</th>
                <th>Revenue</th>
                <th>Net Income</th>
                <th>Total Assets</th>
              </tr>
            </thead>

            <tbody>

              {filteredCompanies.map((company) => (

                <tr key={company.ticker}>

                  <td className="company-name">
                    {company.company}
                  </td>

                  <td>
                    <span className="ticker-badge">
                      {company.ticker}
                    </span>
                  </td>

                  <td>
                    <span className="sector-badge">
                      {company.sector}
                    </span>
                  </td>

                  <td className="number-cell">
                    {company.dividendYield}%
                  </td>

                  <td className="number-cell">
                    ${Number(company.revenue).toLocaleString()}
                  </td>

                  <td className="number-cell">
                    ${Number(company.netIncome).toLocaleString()}
                  </td>

                  <td className="number-cell">
                    ${Number(company.totalAssets).toLocaleString()}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        )}

      </div>

    </div>
  );
}

export default Companies;
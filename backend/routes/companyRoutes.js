const express = require("express");

const router = express.Router();

const companies = [
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
    dividendYield: 3.50,
    revenue: 91454,
    netIncome: 9360,
    totalAssets: 100000,
  },
  {
    ticker: "PG",
    company: "Procter & Gamble",
    sector: "Consumer Defensive",
    dividendYield: 2.40,
    revenue: 84000,
    netIncome: 15000,
    totalAssets: 120000,
  },
  {
    ticker: "VZ",
    company: "Verizon",
    sector: "Communication Services",
    dividendYield: 6.20,
    revenue: 134000,
    netIncome: 17000,
    totalAssets: 380000,
  },
];

router.get("/", (req, res) => {
  res.json(companies);
});

router.get("/:ticker", (req, res) => {
  const ticker = req.params.ticker.toUpperCase();

  const company = companies.find(
    (item) => item.ticker === ticker
  );

  if (!company) {
    return res.status(404).json({
      message: "Company not found",
    });
  }

  res.json(company);
});

module.exports = router;
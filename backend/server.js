const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
require("dotenv").config();

const companyRoutes = require("./routes/companyRoutes");
const mlRoutes = require("./routes/mlRoutes");

const app = express();

const PORT = 5000;

/*
==================================================
MIDDLEWARE
==================================================
*/

app.use(cors());
app.use(express.json());

/*
==================================================
COMPANY API
==================================================
*/

app.use(
  "/api/companies",
  companyRoutes
);

/*
==================================================
ML API
==================================================
*/

app.use(
  "/api",
  mlRoutes
);

/*
==================================================
POSTGRESQL DATABASE
==================================================
*/

const pool = new Pool({
  host: "localhost",
  port: 5432,
  database: "postgres",
  user: "postgres",
  password: "jennis123",
});

/*
==================================================
HOME API
==================================================
*/

app.get("/", (req, res) => {
  res.json({
    message: "Dividend Puzzle API is running",
  });
});

/*
==================================================
THEORY API
==================================================
*/

app.get(
  "/api/theories",
  async (req, res) => {
    try {
      const result =
        await pool.query(`
          SELECT
            theory_name,
            evidence_score,
            rank
          FROM theory_results
          ORDER BY rank ASC;
        `);

      res.json(result.rows);
    } catch (error) {
      console.error(
        "Database error:",
        error
      );

      res.status(500).json({
        message:
          "Failed to fetch theory results",
        error: error.message,
      });
    }
  }
);

/*
==================================================
START SERVER
==================================================
*/

app.listen(
  PORT,
  () => {
    console.log(
      `Server running at http://localhost:${PORT}`
    );
  }
);
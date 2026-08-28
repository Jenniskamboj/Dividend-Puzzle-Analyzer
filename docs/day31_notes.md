# Day 31 – Backend API & Database Integration

## Objective

The goal of Day 31 was to connect the PostgreSQL database with the backend API and display the stored dividend theory analysis results in the React frontend.

## Work Completed

### 1. PostgreSQL Database

Connected the project backend to PostgreSQL.

Database:

- PostgreSQL
- Database name: postgres
- Table: theory_results

The table contains:

- id
- theory_name
- evidence_score
- rank
- created_at

### 2. Theory Results

The database contains the empirical evidence ranking:

| Rank | Theory | Evidence Score |
|------|--------|----------------|
| 1 | Agency Cost Theory | 0.3498 |
| 2 | Bird-in-Hand Theory | 0.2405 |
| 3 | Tax/Clientele Theory | 0.2405 |
| 4 | Signaling Theory | 0.2216 |

### 3. Backend

Created the backend using:

- Node.js
- Express.js
- PostgreSQL (`pg`)
- CORS
- dotenv

Created:

```text
backend/
├── server.js
├── package.json
├── package-lock.json
└── .env
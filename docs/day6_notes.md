# Day 6 - Data Cleaning and Quality Check

## Objective

Clean and validate the combined financial and dividend dataset.

## Dataset

Input:

all_companies_market_dividend_data.csv

Output:

dividend_analysis_clean.csv

## Data Quality Checks

The following checks were performed:

- Number of rows
- Number of columns
- Data types
- Missing values
- Duplicate rows
- Duplicate company-year combinations
- Number of companies
- Year range
- Negative stock prices
- Negative dividends
- Negative dividend yields

## Cleaning Steps

- Converted numerical columns to numeric types
- Removed duplicate records
- Removed rows missing essential company/year/price information
- Recalculated dividend yield
- Rounded dividend yield to two decimal places
- Sorted data by ticker and year

## Raw vs Processed Data

Raw data is preserved without modification.

Cleaned data is stored separately in the processed directory.

## Output

dividend_analysis_clean.csv
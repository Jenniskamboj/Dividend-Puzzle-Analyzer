# Day 13 - Real Financial Fundamentals

## Objective

Collect real financial fundamentals and merge them with the
Dividend Puzzle research dataset.

## Data Source

Financial fundamentals were collected programmatically using
Yahoo Finance through the yfinance Python library.

## Variables Collected

- Revenue
- Net Income
- Total Assets

## Data Processing

1. Retrieved financial statements for each company.
2. Converted financial statement dates into years.
3. Created a company-year fundamentals dataset.
4. Checked missing values.
5. Checked duplicate company-year records.
6. Merged fundamentals with the existing research dataset.

## Important Data Rule

Financial values were obtained from the data source and were not
manually invented.

## Output Files

- fundamentals_real.csv
- dividend_puzzle_fundamental_dataset.csv

## Research Importance

Financial fundamentals provide control/explanatory variables
for investigating whether dividend-related relationships remain
after considering company size, profitability and financial
condition.

## Limitation

Financial statement availability can differ between companies.
Missing values must therefore be inspected and handled carefully.

## Next Step

Calculate financial ratios and prepare the final analytical
dataset for deeper statistical analysis.
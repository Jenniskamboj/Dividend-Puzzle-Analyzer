# Day 11 - Dividend Puzzle Research Dataset

## Objective

Create a structured research dataset containing dividend,
stock-return, risk and consistency features.

## Features Created

- Dividend payer indicator
- Dividend growth category
- Stock return category
- Return volatility
- Average stock return
- Dividend consistency
- Average dividend yield
- Yield category

## Company-Level Features

### Return Volatility

Standard deviation of annual stock returns.

### Average Return

Mean annual stock return over the available sample.

### Dividend Consistency

Percentage of available observations where dividend per share
increased compared with the previous year.

## Research Dataset

The main research dataset is:

dividend_puzzle_research_dataset.csv

## Company Features

day11_company_features.csv

## Important Limitation

The current dataset primarily contains dividend-paying companies.
Therefore, the dividend_payer feature does not yet provide a true
comparison between dividend-paying and non-dividend-paying firms.

A later stage should add non-dividend-paying companies.

## Research Direction

The dataset will eventually be extended with additional firm-level
financial variables such as:

- Earnings
- Revenue
- Market capitalization
- Payout ratio
- Valuation measures
- Profitability
- Leverage

These variables can help investigate why investors may value
dividend-paying companies differently.

## Next Step

Extend the dataset and begin preparing explanatory variables
for deeper statistical analysis and machine learning.
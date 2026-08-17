# Day 14 – Financial Ratio Feature Engineering

## Objective

Create financial ratio features for the Dividend Puzzle analysis.

## Features Created

- Revenue
- Net Income
- Total Assets
- Profit Margin
- Return on Assets (ROA)

## Formulas

### Profit Margin

Profit Margin = (Net Income / Revenue) × 100

### Return on Assets

ROA = (Net Income / Total Assets) × 100

## Missing Data

Some company-year observations do not have matching financial fundamentals.

These values were kept as NaN instead of creating fake financial data.

## Features Not Yet Available

ROE requires Shareholders' Equity.

Debt Ratio requires Total Debt.

Payout Ratio requires EPS.

Company Size using Market Capitalization requires Market Cap.

These features will be added when the required financial variables are available.

## Output

Created:

datasets/processed/day14_financial_ratios_dataset.csv

## Conclusion

Day 14 successfully created profitability and asset-efficiency features for further analysis of the Dividend Puzzle.
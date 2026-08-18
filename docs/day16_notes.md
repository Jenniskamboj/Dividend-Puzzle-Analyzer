# Day 16 – Create ML Dataset

## Objective

Create and save a clean dataset that can be used for Machine Learning models.

## Input Dataset

The Day 14 financial ratio dataset was used as the source.

Input:

`datasets/processed/day14_financial_ratios_dataset.csv`

Original dataset:

- 110 observations
- 19 columns

## Selected ML Features

The baseline ML model uses:

1. dividend_yield
2. dividend_growth
3. dividend_consistency
4. return_volatility

Target variable:

- total_return

## Data Cleaning

Rows with missing `total_return` were removed because the target value is required for supervised learning.

Missing `dividend_growth` values were replaced with 0 for first-year observations where previous-year dividend data was unavailable.

## Final ML Dataset

Final dataset:

- 100 observations
- 5 columns
- 4 input features
- 1 target variable

Output:

`datasets/processed/ml_dataset.csv`

## Quality Checks

The final dataset was checked for:

- Missing values
- Duplicate rows
- Data types
- Dataset dimensions

## Result

A clean ML-ready dataset was created and saved for use in Days 17–21.

The dataset will be used for:

- Linear Regression
- Random Forest
- XGBoost
- Model evaluation and comparison

## Note

Payout Ratio and P/E Ratio are not included in this baseline ML dataset because reliable historical EPS data is not yet available for all company-year observations. These features can be added later when complete historical EPS data is collected.
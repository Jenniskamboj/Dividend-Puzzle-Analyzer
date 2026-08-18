# Day 17 – Linear Regression

## Objective

Train a Linear Regression model to study whether dividend-related features can explain total stock return.

## Dataset

- Total observations: 100
- Features: 4
- Target: total_return

## Features

1. dividend_yield
2. dividend_growth
3. dividend_consistency
4. return_volatility

## Target

- total_return

## Train-Test Split

- Training data: 80 observations
- Testing data: 20 observations
- random_state = 42

## Model

Linear Regression

## Evaluation Results

| Metric | Value |
|---|---:|
| MAE | 12.8967 |
| MSE | 303.6466 |
| RMSE | 17.4255 |
| R² | 0.3665 |

## Feature Coefficients

| Feature | Coefficient |
|---|---:|
| dividend_yield | -5.239004 |
| dividend_growth | -0.727658 |
| dividend_consistency | approximately 0 |
| return_volatility | 0.450775 |

## Interpretation

The baseline Linear Regression model achieved an R² of approximately 0.367, meaning that the selected features explain about 36.7% of the variation in total return in this test split.

Dividend yield and dividend growth have negative coefficients, while return volatility has a positive coefficient.

Dividend consistency has almost no contribution because it has very little variation in the current dataset.

These results represent statistical associations and should not be interpreted as causal relationships.

## Conclusion

Linear Regression provides a baseline for comparison with more advanced machine learning models such as Random Forest and XGBoost.
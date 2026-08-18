# Day 18 – Regression Evaluation

## Objective

Evaluate the Linear Regression model trained on Day 17.

## Dataset

- Observations: 100
- Features: 4
- Target: total_return
- Training observations: 80
- Testing observations: 20

## Features

- dividend_yield
- dividend_growth
- dividend_consistency
- return_volatility

## Evaluation Results

| Metric | Result |
|---|---:|
| MAE | 12.8967 |
| MSE | 303.6466 |
| RMSE | 17.4255 |
| R² | 0.3665 |

## Interpretation

The model achieved an R² score of approximately 0.367. Therefore, approximately 36.65% of the variation in total return is explained by the selected features on the test dataset.

The MAE of approximately 12.90 indicates that the model's predictions differ from actual returns by around 12.9 percentage points on average.

The RMSE is approximately 17.43 percentage points.

## Residual Analysis

Residuals were calculated as:

Actual Return - Predicted Return

Residual analysis was performed to identify patterns in prediction errors.

## Actual vs Predicted Analysis

An actual-versus-predicted plot was created to visually evaluate model prediction accuracy.

## Conclusion

Linear Regression provides a baseline model for predicting total return from dividend-related features.

The model will be compared with Random Forest and XGBoost in later stages.
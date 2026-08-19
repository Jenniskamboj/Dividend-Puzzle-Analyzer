# Day 20 – XGBoost Regression

## Objective

Train an XGBoost Regression model to predict total stock return using dividend-related features.

## Dataset

- Observations: 100
- Features: 4
- Target: total_return

## Features

- dividend_yield
- dividend_growth
- dividend_consistency
- return_volatility

## Train-Test Split

- Training: 80 observations
- Testing: 20 observations
- random_state: 42

## Model

XGBRegressor

Parameters:

- n_estimators = 200
- learning_rate = 0.05
- max_depth = 3
- random_state = 42
- objective = reg:squarederror

## Evaluation Metrics

- MAE
- MSE
- RMSE
- R²

## Feature Importance

XGBoost feature importance was calculated to identify the contribution of dividend-related variables to total return prediction.

## Purpose

XGBoost provides a powerful gradient boosting approach for identifying nonlinear relationships between dividend characteristics and stock returns.

## Next Step

The XGBoost model will be compared with Linear Regression and Random Forest on Day 21.
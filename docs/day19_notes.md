# Day 19 – Random Forest Regression

## Objective

Train a Random Forest Regression model to predict total stock return using dividend-related features.

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

Random Forest Regressor

Parameters:

- n_estimators = 200
- random_state = 42
- max_depth = None

## Evaluation

The model was evaluated using:

- MAE
- MSE
- RMSE
- R²

## Feature Importance

Random Forest feature importance was calculated to determine which dividend-related variables contribute most to the prediction of total return.

## Purpose

The Random Forest model will later be compared with Linear Regression and XGBoost to identify the best-performing machine learning model.

## Conclusion

Random Forest provides a nonlinear machine learning approach that can capture relationships that may not be captured by Linear Regression.
# Day 17 – Linear Regression

## Objective
Train a Linear Regression model to study the relationship between dividend-related features and total return.

## Features
- Dividend Yield
- Dividend Growth
- Dividend Consistency
- Return Volatility

## Target
- Total Return

## Dataset
- 100 observations
- 4 input features
- 1 target variable

## Train-Test Split
- Training: 80%
- Testing: 20%

## Model
Linear Regression

## Feature Coefficients

- Dividend Yield: -5.239004
- Dividend Growth: -0.727658
- Dividend Consistency: approximately 0
- Return Volatility: 0.450775

## Interpretation
Dividend Yield and Dividend Growth have negative coefficients in the baseline model, while Return Volatility has a positive coefficient. Dividend Consistency has almost no contribution because it has very little variation in the dataset.

These results represent statistical associations and should not be interpreted as causal relationships.

## Evaluation
The model was evaluated using:
- MAE
- MSE
- RMSE
- R² Score
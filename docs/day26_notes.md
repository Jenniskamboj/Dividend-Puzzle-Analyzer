# Day 26 – Feature Importance Analysis

## Objective

The objective of Day 26 is to determine which dividend and financial features have the strongest relationship with Total Return in the machine learning models.

## Features Analyzed

* Dividend Yield
* Dividend Growth
* Dividend Consistency
* Return Volatility

## Models Used

Feature importance was analyzed using:

1. Linear Regression coefficients
2. XGBoost feature importance

Absolute Linear Regression coefficients were normalized so that they could be compared with XGBoost importance values.

## Existing Linear Regression Results

| Feature              | Coefficient |
| -------------------- | ----------: |
| Dividend Yield       |   -5.239004 |
| Dividend Growth      |   -0.727658 |
| Dividend Consistency |    0.000000 |
| Return Volatility    |    0.450775 |

The absolute coefficient was used to calculate relative importance.

## XGBoost Results

| Feature              | Importance |
| -------------------- | ---------: |
| Dividend Yield       |   0.369330 |
| Dividend Growth      |   0.368466 |
| Dividend Consistency |   0.000000 |
| Return Volatility    |   0.262203 |

## Interpretation

Dividend Yield and Dividend Growth were the most important features according to the XGBoost model.

Dividend Yield also had the largest absolute Linear Regression coefficient.

Return Volatility showed moderate importance.

Dividend Consistency had zero importance in the current XGBoost model. This should not be interpreted as evidence that dividend consistency is unimportant in finance. The result may be related to limited variation in the current dataset.

## Conclusion

The feature importance analysis indicates that Dividend Yield and Dividend Growth are the strongest features in the current machine learning analysis.

These features will be mapped to the four financial theories in Day 27 to determine which theory receives the strongest empirical support.

Feature importance represents model-based predictive contribution and does not establish causal relationships.

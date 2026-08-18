# Day 15 – Feature Engineering

## Objective

Prepare the financial dataset for Machine Learning by selecting reliable features, handling missing values, and creating training and testing datasets.

## Work Completed

### 1. Loaded Day 14 Dataset

Loaded:

`datasets/processed/day14_financial_ratios_dataset.csv`

Dataset contained:

- 110 observations
- 19 columns

### 2. Missing Value Analysis

The dataset contained missing values in several financial fundamental columns.

Because many historical fundamental values were unavailable, these columns were not blindly filled with zero.

For the baseline ML model, reliable available features were selected.

### 3. Selected ML Features

The following features were selected:

- Dividend Yield
- Dividend Growth
- Dividend Consistency
- Return Volatility

Target variable:

- Total Return

### 4. Missing Dividend Growth

The first year of each company did not have a previous year available for calculating dividend growth.

These missing dividend-growth values were handled as 0 for the baseline dataset.

### 5. ML Dataset

After removing observations where Total Return was unavailable:

- 100 observations
- 4 features
- 1 target

Final structure:

| Feature | Description |
|---|---|
| dividend_yield | Dividend yield |
| dividend_growth | Dividend growth |
| dividend_consistency | Dividend payment consistency |
| return_volatility | Return risk/variation |
| total_return | Target variable |

### 6. Train/Test Split

The dataset was divided into:

- Training: 80 observations
- Testing: 20 observations
- Test size: 20%

Random state:

`42`

### 7. Feature Scaling

StandardScaler was used to standardize the four input features.

Scaled datasets:

- X_train_scaled: 80 × 4
- X_test_scaled: 20 × 4

### Day 15 Result

The dataset is now prepared for Machine Learning.

The prepared features can be used for:

- Linear Regression
- Random Forest
- XGBoost
- Model comparison

## Important Note

Payout Ratio and P/E Ratio are not currently included in the baseline ML dataset because historical EPS data is incomplete. These features can be added later after reliable historical EPS data is collected.
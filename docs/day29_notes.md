# Day 29 – React Dashboard

## Objective

The objective of Day 29 was to create the frontend dashboard for the Dividend Puzzle Analyzer project.

## Technology

* React
* Vite
* JavaScript
* CSS
* Recharts

## Dashboard Features

The dashboard includes:

* Project overview
* Dataset statistics
* Machine learning model performance
* Dividend Puzzle theory comparison
* Best-performing theory
* Feature importance summary
* Responsive layout

## Dataset Statistics

The current project dataset contains 110 company-year observations.

## Machine Learning Results

Three machine learning models were evaluated:

| Model             |     MAE |    RMSE |      R² |
| ----------------- | ------: | ------: | ------: |
| Linear Regression | 12.8967 | 17.4255 |  0.3665 |
| Random Forest     | 15.4696 | 22.6244 | -0.0679 |
| XGBoost           | 15.1574 | 20.0839 |  0.1585 |

Linear Regression currently provides the best performance based on MAE, RMSE, and R².

## Theory Analysis

The four dividend theories were analyzed.

| Theory               | Evidence Score | Rank |
| -------------------- | -------------: | ---: |
| Agency Cost Theory   |         0.3498 |    1 |
| Bird-in-Hand Theory  |         0.2405 |    2 |
| Tax/Clientele Theory |         0.2405 |    3 |
| Signaling Theory     |         0.2216 |    4 |

Agency Cost Theory currently has the highest evidence score.

## Conclusion

A professional React-based dashboard was created to visualize the project's financial analysis, machine learning results, and Dividend Puzzle theory results.

The dashboard currently uses project results as frontend data. Backend API integration will be implemented in subsequent development days.

# Day 30 – React Dashboard Navigation

## Objective

The objective of Day 30 was to convert the React dashboard into a multi-page frontend application with working navigation.

## Technology

* React
* Vite
* React Router
* JavaScript
* CSS

## Pages Created

The following pages were created:

1. Dashboard
2. Companies
3. ML Analysis
4. Theory Analysis
5. Company Comparison
6. About

## Dashboard Navigation

React Router was used to create navigation between the different pages.

The sidebar now provides navigation to each major section of the Dividend Puzzle Analyzer application.

## ML Analysis

The ML Analysis page displays the results of the three evaluated models:

* Linear Regression
* Random Forest
* XGBoost

Linear Regression currently provides the best performance based on MAE, RMSE, and R².

## Theory Analysis

The Theory Analysis page displays the evidence scores for the four dividend theories.

Agency Cost Theory currently has the highest evidence score of 0.3498.

## Conclusion

The frontend was converted into a multi-page React application with reusable navigation and separate pages for company analysis, machine learning, theory analysis, comparison, and project information.

Future days will connect these pages to the project's actual datasets and backend/database.

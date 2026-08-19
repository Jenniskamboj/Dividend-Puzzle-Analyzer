## Final Model Selection

Based on the evaluation results, Linear Regression was selected as the best-performing model.

### Final Results

| Model | MAE | RMSE | R² |
|---|---:|---:|---:|
| Linear Regression | 12.8967 | 17.4255 | 0.3665 |
| Random Forest | 15.4696 | 22.6244 | -0.0679 |
| XGBoost | 15.1574 | 20.0839 | 0.1585 |

Linear Regression achieved the lowest MAE and RMSE and the highest R² score.

Therefore, Linear Regression will be used as the primary predictive model for the subsequent Dividend Puzzle theory analysis.

The results also show that the more complex tree-based models did not outperform the simpler Linear Regression model on the current dataset.
# Day 28 – Store Theory Results in Database

## Objective

The objective of Day 28 was to store the Dividend Puzzle theory analysis results in PostgreSQL.

## PostgreSQL Setup

PostgreSQL 18 was connected successfully using pgAdmin 4.

## Database Table

A table named `theory_results` was created.

The table contains:

* `id` – unique record ID
* `theory_name` – financial theory name
* `evidence_score` – calculated evidence score
* `rank` – theory ranking
* `created_at` – record creation time

## Theory Results

| Rank | Theory               | Evidence Score |
| ---: | -------------------- | -------------: |
|    1 | Agency Cost Theory   |         0.3498 |
|    2 | Bird-in-Hand Theory  |         0.2405 |
|    3 | Tax/Clientele Theory |         0.2405 |
|    4 | Signaling Theory     |         0.2216 |

## Result

Agency Cost Theory achieved the highest evidence score of 0.3498 and ranked first.

The results were successfully stored in PostgreSQL for future use by the project backend and dashboard.

## Conclusion

Week 4 theory analysis results have been stored in the project database. The results represent evidence from the current dataset and do not establish causal relationships.

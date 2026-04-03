#!/usr/bin/env python3
"""
Monthly Revenue Report Generator
Reads transactions.csv and customers.csv, produces a markdown summary.
Run on the 1st of each month.
Usage: python scripts/monthly-report.py --month 2025-03
"""

import pandas as pd
import argparse
import os
from datetime import datetime

def load_data():
    customers = pd.read_csv("data/customers.csv")
    transactions = pd.read_csv("data/transactions.csv")
    transactions["date"] = pd.to_datetime(transactions["date"])
    transactions["amount_eur"] = transactions["amount_eur"].astype(float)
    return customers, transactions

def filter_month(transactions, month_str):
    year, month = month_str.split("-")
    mask = (transactions["date"].dt.year == int(year)) & (transactions["date"].dt.month == int(month))
    return transactions[mask]

def generate_report(customers, transactions, month_str):
    monthly = filter_month(transactions, month_str)

    completed = monthly[monthly["status"] == "completed"]
    refunded = monthly[monthly["status"] == "refunded"]

    total_revenue = completed["amount_eur"].sum()
    total_refunds = refunded["amount_eur"].sum()

    by_type = completed.groupby("type")["amount_eur"].sum()
    by_segment = completed.merge(customers[["customer_id", "segment"]], on="customer_id")
    segment_revenue = by_segment.groupby("segment")["amount_eur"].sum().sort_values(ascending=False)

    report = f"""# Monthly Revenue Report — {month_str}

**Generated:** {datetime.now().strftime('%Y-%m-%d')}

## Summary

| Metric | Value |
|--------|-------|
| Total Revenue | €{total_revenue:,.2f} |
| Refunds | €{total_refunds:,.2f} |
| Net Revenue | €{total_revenue - total_refunds:,.2f} |
| Transactions | {len(monthly)} |

## Revenue by Type

| Type | Amount |
|------|--------|
"""
    for rtype, amount in by_type.items():
        report += f"| {rtype.title()} | €{amount:,.2f} |\n"

    report += f"""
## Revenue by Segment

| Segment | Amount |
|---------|--------|
"""
    for seg, amount in segment_revenue.items():
        report += f"| {seg} | €{amount:,.2f} |\n"

    return report

def main():
    parser = argparse.ArgumentParser(description="Generate monthly revenue report")
    parser.add_argument("--month", required=True, help="Month in YYYY-MM format")
    args = parser.parse_args()

    customers, transactions = load_data()
    report = generate_report(customers, transactions, args.month)

    output_path = f"reports/monthly-{args.month}.md"
    os.makedirs("reports", exist_ok=True)
    with open(output_path, "w") as f:
        f.write(report)

    print(f"Report saved to {output_path}")

if __name__ == "__main__":
    main()

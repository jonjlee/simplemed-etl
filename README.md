# simplemed-etl
An ETL and visualization tool for analyzing patient data for research.

# Introduction

Research in patient care often requires analysis of only simple data and statistics like demographics, length of stay, re-admissions, etc. A typical workflow starts with a report of several thousand records from an electronic medical record (EMR). This library provides a skeleton to work with such data. It contains Python functions to filter and transform data and a UI for visualizing it as graphs and tables.

# Getting Started

1. **Fork** this project.
1. **Tailor to your specific dataset**. For an example, see the [Clinical Breast Exams project](https://github.com/jonjlee/dooleyscore).
  1. **Extract, transform, load**

# Data sets

This library is geared towards processing small amounts (thousands of records, totaling megabytes) of simple data (names, demographics, meds, etc.). The ETL portion operates on the whole data set at a time in memory. It does not stream large datasets from disk or perform pipelining or records.

Datasets are represented in both the ETL portion and the UI as lists of dicts. Each item in the list represents one row:

    data = [
        {'name': 'john doe', 'diagnosis': 'pneumonia'},
        ...
    ]


#!/usr/bin/env python -B
import extract, transform, load

# Set up logging
import logging
logger = logging.getLogger(__name__)
logging.basicConfig(level=logging.INFO, format='%(asctime)-15s: %(message)s')

def main():
    # Extract: read and parse datasets. Functions in the extract module return data
    # as a list of dicts where each item represents a row. For example:
    #
    #   data = [
    #       {'name': 'john doe', 'diagnosis': 'pneumonia'}, 
    #       ...
    #   ]
    data = extract.from_csv(
        filename='example.csv',
        fieldnames=['Name', 'Diagnosis'],
        startline=2)

    # Transform: filter/process data
    anonymized = transform.remove_fields(data, ['Name','DOB'])

    # Load: export data for further analysis
    load.to_js(anonymized, 'data.js')

if __name__ == '__main__':
    main()
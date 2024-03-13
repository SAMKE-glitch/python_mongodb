#!/usr/bin/env python3
"""
Reading and writing files
"""
# write line to file
file = "example.txt"
with open(file, 'w') as writeFile:
    writeFile.write("this is my first test")

# read file
with open(file, 'r') as readFile:
    print(readFile.read())

#!/usr/bin/env python3
"""
Reading and writing files
"""
# write line to file
file = "example.txt"
with open(file, 'w') as writeFile:
    writeFile.write("this is my first test\n")
    writeFile.write("My second time writing\n")

# read file
with open(file, 'r') as readFile:
    print(readFile.read())


with open(file, 'a+') as testFile:
    testFile.write("testing a+ mode\n")
    print(testFile.read())

#!/usr/bin/env python3
"""
Your little brother has just learned multiplication 
tables in school. Today he has learned tables of 6 and 7.
Help him memorise both the tables by printing them using for loop.
"""
print("Multiplication table of 6")
for i in range(1, 11):
    print("6 * {} = {}".format(i, 6*1))
print("Multiplication table of 7")
for i in range(1, 11):
    print("7 * {} = {}".format(i, 7*i))

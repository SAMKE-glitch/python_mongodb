#!/usr/bin/env python3
"""
enumurate in for loop
"""
# enumarate gives you the index together with the element in that index like it's key and value
fruits = ["apple", "banana", "orange"]
for index, fruit in enumerate(fruits):
    print("At position {}, I found a {}".format(index, fruit))

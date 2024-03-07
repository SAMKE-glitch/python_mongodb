#!/usr/bin/env python3
"""
Write a function code to find total count of word 
little in the given string: "Mary had a little
lamb Little lamb, little lamb Mary had a little
lamb.Its fleece was white as snow And everywhere 
that Mary went Mary went, Mary went Everywhere
that Mary went The lamb was sure to go"**
"""
# Convert the string to lowercase for case-insensitive matching
# Split the string into words
# Count the occurrences of the word "little"
def littleString(string):
    # Convert the string to lowercase 
    lowercaseStr = string.lower()
    # split the string into words
    words = lowercaseStr.split()
    # Count the occurence
    count = words.count("little")
    return count

givenString = "Mary had a little lamb Little lamb, little lamb Mary had a little lamb.Its fleece was white as snow And everywhere that Mary went Mary went, Mary went Everywhere that Mary went The lamb was sure to go"

little_count = littleString(givenString)
print(little_count)

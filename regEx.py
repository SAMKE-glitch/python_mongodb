#!/usr/bin/env python3
"""
testing re module
"""

import re


pattern = r"\d\d\d\d\d\d\d\d\d\d"
text = "my number is 01234567890"
match = re.search(pattern, text)

if match:
    print("My phone number is", match.group())
else:
    print("match not found")


pat = r"\W"
txt = "Hello, World!"
mtch = re.findall(pat, txt)
print("match:", mtch)

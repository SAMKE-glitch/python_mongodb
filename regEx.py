#!/usr/bin/env python3
"""
testing re module
"""

import re


pattern = r"\d\d\d\d\d\d\d\d\d\d"
text = "my number is 01234567890"
match = re.search(pattern, text)

if match:
    print("Match found!")
else:
    print("match not found")

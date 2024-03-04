#!/usr/bin/env python3
"""
In a school canteen, children under the age of 9 
are only given milk porridge for breakfast.
Children from 10 to 14 are given a sandwich,
and children from 15 to 17 are given a burger.
The canteen master asks the age of the student
and gives them breakfast accordingly.
Sam's age is 10. Use if-else statement
to determine what the canteen master will offer to him.
 """
age = 10 # Sam's age
if age <= 9:
    print("give them milk porridge")
elif (age >= 10 and age <= 14):
    print("give them sandwich")
elif (age >= 15 and age <= 17):
    print("give them burger")

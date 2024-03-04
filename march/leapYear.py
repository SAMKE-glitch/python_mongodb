#!/usr/bin/env python3
"""
1. There are 2 sisters, Annie and Jane, born in
1996 and 1999 respectively. They want to know
who was born in a leap year. Write an 
if-else statement to determine who was born in a leap year.
"""
def isLeapYear(year):
    """method to check if year is leap year
    Return: True if is leap year
            False if is not leap year
    """
    if (year % 4 == 0 and year % 100 != 0 or year % 400 == 0):
        return True
    else:
        return False

def main():
    """
    main function to call isLeapYear
    """
    Jane = 1996
    Annie = 1999
    if isLeapYear(Jane):
        print("Jane is a leap year")
    else:
        print("Jane not a leap year")
    if isLeapYear(Annie):
        print("Annie is a leap year")
    else:
        print("Annie not a leap year")

if __name__ == "__main__":
    main()

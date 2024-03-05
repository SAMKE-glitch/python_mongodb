#!/usr/bin/env python3
"""
The following is a list of animals in a National Zoo.
Animals = ["lion", "giraffe", "gorilla", "parrots", "crocodile","deer", "swan"]
Your brother needs to write an essay on the animals whose names are made of
7 letters.
Help him find those animals through a while loop and create 
a separate list of such animals.
"""
Animals = ["lion", "giraffe", "gorilla", "parrots", "crocodile","deer", "swan"]
New =[]
i = 0
while(i < len(Animals)):
    if len(Animals[i]) == 7:
        New.append(Animals[i])
    i += 1
print(New)

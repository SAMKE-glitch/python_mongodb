#!/usr/bin/env python3
"""
Write a while loop to display the values of the Rating
of an album playlist stored in the list PlayListRatings.
If the score is less than 6, exit the loop.
The list PlayListRatings is given by:
PlayListRatings = [10, 9.5, 10, 8, 7.5, 5, 10, 10]
"""
PlayListRatings = [10, 9.5, 10, 8, 7.5, 5, 10, 10]
i = 0
rating = PlayListRatings[0]
while(i < len(PlayListRatings) and rating >= 6):
    print(rating)
    i += 1
    rating = PlayListRatings[i]

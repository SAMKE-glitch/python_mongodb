#!/usr/bin/env python3
"""
Write a while loop to copy the strings 'orange'
of the list squares to the list new_squares.
Stop and exit the loop if the value on the list is not 'orange':
"""
squares = ['orange', 'orange', 'purple', 'blue ', 'orange']
new_squares = []
i = 0
while(i < len(squares) and squares[i] == 'orange'):
    new_squares.append(squares[i])
    i = i + 1
print(new_squares)

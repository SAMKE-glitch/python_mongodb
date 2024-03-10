#!/usr/bin/env python3
"""
Creating a class Circle
"""
import matplotlib.pyplot as plt
class Circle(object):
    # constructor
    def __init__(self, radius=3, color='blue'):
        self.radius = radius
        self.color = color

    # Method to add radius
    def add_radius(self, r):
        self.radius = self.radius + r
        return(self.radius)

    # Method to draw a circle
    def drawCircle(self):
        plt.gca().add_patch(plt.Circle((0, 0), radius=self.radius, fc=self.color))
        plt.axis('scaled')
        plt.show()

# Create an object instance
RedCircle = Circle(10, 'red')
# set the object attribute radius
RedCircle.radius = 1
# Call the method drawCircle
RedCircle.drawCircle()

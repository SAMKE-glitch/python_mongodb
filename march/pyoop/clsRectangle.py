#!/usr/bin/env python3
"""
Creating a class rectangle
"""
import matplotlib.pyplot as plt


class Rectangle(object):
    # constructor
    def __init__(self, width=2, height=3, color='r'):
        self.width = width
        self.height = height
        self.color = color

    # method
    def drawRectangle(self):
        plt.gca().add_patch(plt.Rectangle((0, 0), self.width, self.height, fc=self.color))
        plt.axis('sclaed')
        plt.show

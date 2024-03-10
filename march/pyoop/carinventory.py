#!/usr/bin/env python3
"""
Scenario: Car dealership's inventory management system.
You are working on a Python program to simulate a car dealership's 
inventory management system. The system aims to model cars and their attributes accurately.
Task-1. You are tasked with creating a Python program to represent vehicles using a class.
Each car should have attributes for maximum speed and mileage.

Task-2. Update the class with the default color for all vehicles," white"

Task-3. Additionally, you need to create methods in the Vehicle
class to assign seating capacity to a vehicle.

Task-4. Create a method to display all the properties of an object of the class.

Task-5. Additionally, you need to create two objects of the Vehicle 
class object that should have a max speed of 200kph and mileage of 
50000kmpl with five seating capacities, and another car object 
should have a max speed of 180kph and 75000kmpl with four seating capacities.
"""

class Vehicle:
    color = "white"

    def __init__(self, max_speed, mileage):
        self.max_speed = max_speed
        self.mileage = mileage
        self.seating_capacity = None

    def assign_seating_capacity(self, seating_capacity):
        self.seating_capacity = seating_capacity

    def display_properties(self):
        print("Properties of the Vehicle:")
        print("Color:", self.color)
        print("Maximum Speed:", self.max_speed)
        print("Mileage:", self.mileage)
        print("Seating Capacity:", self.seating_capacity)


my_vehicle = Vehicle(max_speed=200, mileage=25)
my_vehicle.display_properties()
my_vehicle.assign_seating_capacity(5)
my_vehicle.display_properties()

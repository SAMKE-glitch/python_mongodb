#!/usr/bin/env python3
"""
Class attribute max_speed, which is set to 120 km/h.
Constructor method __init__ that takes parameters for 
the car's make, model, color, and an optional speed (defaulting to 0).
This method initializes instance attributes for make, model, color, and speed.
Method accelerate(self, acceleration) that allows the car to accelerate. 
If the acceleration does not exceed the max_speed, update the car's
speed attribute. Otherwise, set the speed to the max_speed.
Method get_speed(self) that returns the current speed of the car.
"""
class Car:
    # Class attribute (shared by all instances)
    max_speed = 120 # maximum speed in km/h

    # Constructor method (initialize instance attributes)
    def __init__(self, make, model, color, speed=0):
        self.make = make
        self.model = model
        self.speed = speed # Initialize speed is set to 0

    # Method for accelerating the car
    def accelerate(self, acceleration):
        if self.speed + acceleration <= Car.max_speed:
            self.speed += acceleration
        else:
            self.speed = Car.max_speed

    # Mathod to get current speed of the car
    def get_speed(self):
        return self.speed

car1 = Car("Toyota", "Camry", "Blue")
car2 = Car("Honda", "Civic", "Red")

# Accelerate the cars
car1.accelerate(30)
car2.accelerate(20)

# print the current speed of the cars
print("{} {} is currently at {} km/h".format(car1.make, car1.model, car1.get_speed()))
print("{} {}  is currently as {} km/h".format(car2.make, car2.model, car2.get_speed()))

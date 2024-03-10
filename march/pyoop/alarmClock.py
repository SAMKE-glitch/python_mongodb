#!/usr/bin/env python3
"""
Alarm clock class
"""

from datetime import datetime
import time

class AlarmClock:
    def __init__(self, current_time=None, alarm_time=None):
        self.current_time = current_time or datetime.now().strftime("%H:%M")
        self.alarm_time = alarm_time or "06:00"
        self.alarm_status = False
    
    def set_current_time(self):
        self.current_time = datetime.now().strftime("%H:%M")
    
    def set_alarm_time(self, alarm_time):
        self.alarm_time = alarm_time
    
    def toggle_alarm(self):
        self.alarm_status = not self.alarm_status
    
    def check_alarm(self):
        return self.current_time == self.alarm_time

# Create an instance of AlarmClock
alarm_clock = AlarmClock()

# Set the alarm time to 07:30
alarm_clock.set_alarm_time("07:30")

# Check the current time
print("Current time:", alarm_clock.current_time)

# Check the alarm time
print("Alarm time:", alarm_clock.alarm_time)

# Toggle the alarm status
alarm_clock.toggle_alarm()
print("Alarm status:", "On" if alarm_clock.alarm_status else "Off")

# Simulate the passage of time (for demonstration purposes)
time.sleep(2)

# Update the current time
alarm_clock.set_current_time()

# Check if the alarm should be triggered
if alarm_clock.check_alarm():
    print("Alarm triggered! Time to wake up!")
else:
    print("No alarm triggered.")


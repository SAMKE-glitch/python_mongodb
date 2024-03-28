#!/usr/bin/env python3
"""
creating a basic flask app
"""
from flask import Flask


app = Flask(__name__)
@app.route("/")
def hello_world():
    # serialized type
    return {"message": "My first Application in action from IBM!"}

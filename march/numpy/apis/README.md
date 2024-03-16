Objectives
After completing this lab you will be able to:

Create and Use APIs in Python

Introduction
An API lets two pieces of software talk to each other. Just like a function, you don’t have to know how the API works only its inputs and outputs. An essential type of API is a REST API that allows you to access resources via the internet. In this lab, we will review the Pandas Library in the context of an API, we will also review a basic REST API

!pip install pycoingecko
!pip install plotly
!pip install mplfinance
!pip install --upgrade nbformat

Pandas is an API 






Pandas is actually set of software components , much of which is not even written in Python.

import pandas as pd
import numpy as np
import plotly.graph_objects as go
from plotly.offline import plot
import matplotlib.pyplot as plt
import datetime
from pycoingecko import CoinGeckoAPI
from mplfinance.original_flavor import candlestick2_ohlc

You create a dictionary, this is just data.
dict_={'a':[11,21,31],'b':[12,22,32]}

When you create a Pandas object with the Dataframe constructor in API lingo, this is an "instance". The data in the dictionary is passed along to the pandas API. You then use the dataframe to communicate with the API.

df=pd.DataFrame(dict_)
type(df)

When you call the method head the dataframe communicates with the API displaying the first few rows of the dataframe.
df.head()

When you call the method mean,the API will calculate the mean and return the value.
df.mean()

In this lab, we will be using the <a href=https://www.coingecko.com/en/api?utm_medium=Exinfluencer&utm_source=Exinfluencer&utm_content=000026UJ&utm_term=10006555&utm_id=NA-SkillsNetwork-Channel-SkillsNetworkCoursesIBMDeveloperSkillsNetworkPY0101ENSkillsNetwork1005-2022-01-01>CoinGecko API to create one of these candlestick graphs for Bitcoin. We will use the API to get the price data for 30 days with 24 observation per day, 1 per hour. We will find the max, min, open, and close price per day meaning we will have 30 candlesticks and use that to generate the candlestick graph. Although we are using the CoinGecko API we will use a Python client/wrapper for the API called PyCoinGecko. PyCoinGecko will make performing the requests easy and it will deal with the enpoint targeting.

Lets start off by getting the data we need. Using the get_coin_market_chart_by_id(id, vs_currency, days). id is the name of the coin you want, vs_currency is the currency you want the price in, and days is how many days back from today you want.

cg = CoinGeckoAPI()

bitcoin_data = cg.get_coin_market_chart_by_id(id='bitcoin', vs_currency='usd', days=30)

type(bitcoin_data )

<>

The response we get is in the form of a JSON which includes the price, market caps, and total volumes along with timestamps for each observation. We are focused on the prices so we will select that data.
bitcoin_price_data = bitcoin_data['prices']

bitcoin_price_data[0:5]

Finally lets turn this data into a Pandas DataFrame.
data = pd.DataFrame(bitcoin_price_data, columns=['TimeStamp', 'Price'])

Now that we have the DataFrame we will convert the timestamp to datetime and save it as a column called Date. We will map our unix_to_datetime to each timestamp and convert it to a readable datetime.
data['date'] = data['TimeStamp'].apply(lambda d: datetime.date.fromtimestamp(d/1000.0))

Using this modified dataset we can now group by the Date and find the min, max, open, and close for the candlesticks.
candlestick_data = data.groupby(data.date, as_index=False).agg({"Price": ['min', 'max', 'first', 'last']})

Finally we are now ready to use plotly to create our Candlestick Chart.
fig = go.Figure(data=[go.Candlestick(x=candlestick_data['date'],
                open=candlestick_data['Price']['first'], 
                high=candlestick_data['Price']['max'],
                low=candlestick_data['Price']['min'], 
                close=candlestick_data['Price']['last'])
                ])
fig.update_layout(xaxis_rangeslider_visible=False)

fig.show()


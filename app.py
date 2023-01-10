from fastapi import FastAPI, Response
from fastapi.middleware.cors import CORSMiddleware
import requests

app = FastAPI()

origins = ["*",]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
APIKEY = 'demo'


@app.get("/")
async def root():
    return {"message": "Server is running"}

@app.get("/{ticker}")
def base_data(ticker: str):

    output_dict = {}
    ticker = ticker.upper()

    price_series = requests.get(f'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol={ticker}&apikey={APIKEY}&outputsize=full').json()
    sma_series = requests.get(f'https://www.alphavantage.co/query?function=SMA&symbol={ticker}&interval=daily&time_period=10&series_type=close&apikey={APIKEY}').json()

    output_dict['prices'] = price_series
    output_dict['sma'] = sma_series

    return output_dict


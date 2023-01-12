from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests
import database


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

    ticker = ticker.upper()

    main = requests.get(f'https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol={ticker}&apikey={APIKEY}&outputsize=full').json()



    database.insert_data(main)


    return main


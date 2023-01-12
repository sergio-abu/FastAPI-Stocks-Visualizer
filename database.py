from pydantic import BaseModel
import motor.motor_asyncio

CLIENT = motor.motor_asyncio.AsyncIOMotorClient("CONNECT YOUR MONGODB CONNECTION STRING HERE")


class MonthStock(BaseModel):
    Meta_Data: dict
    Monthly_Adjusted_Time_Series: dict


async def insert_data(data: MonthStock):
    client = CLIENT
    db = client.mydb
    collection = db.stock_data
    await collection.insert_one(data.dict())


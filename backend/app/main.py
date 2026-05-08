from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class UserCreate(BaseModel):
    name: str
    email: str
    age: int

# Path Parameters
app.get("/users/{user_id}") 
def get_users(user_id: int):
    return {"User ID" : user_id}

# Query Parameters
app.get("/products")
def get_products(limit: int = 10):
    return {"Limit" : limit}
from fastapi import FastAPI
from fastapi.responses import JSONResponse
import requests
from datetime import datetime, timedelta
from apscheduler.schedulers.background import BackgroundScheduler

app = FastAPI()

api_key = "NbAeciw6tcGxCk3lF7fRh13vh95ykBTua0oLJDdx"

@app.get("/apod") #endopoint
async def get_data_apod():
    # Gửi yêu cầu GET đến API
    now = datetime.now()
    formatted_date = now.strftime("%Y-%m-%d")
    url = f"http://127.0.0.1:8000/v1/apod/?concept_tags=True&date"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
    else:
        print(f"Error: {response.status_code}")
    return JSONResponse(data)

@app.get("/EONET")
async def get_data_eonet():
    url = "https://eonet.gsfc.nasa.gov/api/v3/events/geojson"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
    else:
        print(f"Error: {response.status_code}")
        
    
    return JSONResponse(data)

@app.get("/Mars-Rover-Photos")
async def get_data_mars_rover_photos():
    url = f"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key={api_key}"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
    else:
        print(f"Error: {response.status_code}")
    
    return JSONResponse(data)


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=1234)
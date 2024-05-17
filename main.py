from fastapi import FastAPI
from fastapi.responses import JSONResponse
import requests
from datetime import datetime, timedelta
from easygoogletranslate import EasyGoogleTranslate

app = FastAPI()

api_key = "NbAeciw6tcGxCk3lF7fRh13vh95ykBTua0oLJDdx"

@app.get("/apod") #endopoint
async def get_data_apod():
    # Gửi yêu cầu GET đến API
    url = f"http://127.0.0.1:8000/v1/apod/?concept_tags=True&date={dates}"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        # explanation_en = data.get("explanation", "")
        # translator = EasyGoogleTranslate(source_language="en", target_language="vi")
        # explanation_vi = translator.translate(explanation_en)
        
        # # Thêm trường translate_explanation vào dữ liệu
        # data["translate_explanation"] = explanation_vi
    else:
        print(f"Error: {response.status_code}")
    
    return JSONResponse(data)

@app.get("/EONET")
async def get_data_eonet():
    url = 
    response = requests.get(url)
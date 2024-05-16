from fastapi import FastAPI
from fastapi.responses import JSONResponse
import requests
from datetime import datetime, timedelta
from easygoogletranslate import EasyGoogleTranslate

app = FastAPI()

api_key = "fZ4RCNsZRYjsWcyAaF866WmMbIgzJDYrTI1MWnVq"
url = f"https://api.nasa.gov/planetary/apod?api_key={api_key}"

@app.get("/apod") #endopoint
async def get_data_apod():
    # Gửi yêu cầu GET đến API
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        # explanation_en = data.get("explanation", "")
        explanation_en = "A familiar sight from Georgia, USA, the Moon sets near the western horizon in this rural night skyscape. Captured on May 10 before local midnight, the image overexposes the Moon's bright waning crescent at left in the frame. A long irrigation rig stretches across farmland about 15 miles north of the city of Bainbridge. Shimmering curtains of aurora shine across the starry sky though, definitely an unfamiliar sight for southern Georgia nights. Last weekend, extreme geomagnetic storms triggered by the recent intense activity from solar active region AR 3664 brought epic displays of aurora, usually seen closer to the poles, to southern Georgia and even lower latitudes on planet Earth. As solar activity ramps up, more storms are possible.   AuroraSaurus: Report your aurora observations"
        translator = EasyGoogleTranslate(source_language="en", target_language="vi")
        explanation_vi = translator.translate(explanation_en)
        
        # Thêm trường translate_explanation vào dữ liệu
        data["translate_explanation"] = explanation_vi
    else:
        print(f"Error: {response.status_code}")
    
    return JSONResponse(data)

from datetime import datetime

# Lấy thời gian hiện tại
now = datetime.now()

# Chuyển đổi thành chuỗi có định dạng y-m-d
formatted_date = now.strftime("%Y-%m-%d")

# In ra chuỗi đã định dạng
print("Thời gian hiện tại (dạng chuỗi Y-M-D):", formatted_date)

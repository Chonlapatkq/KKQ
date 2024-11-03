import requests
from http.cookies import SimpleCookie

# ฟังก์ชันดักจับคุกกี้
def get_cookies(url):
    response = requests.get(url)
    
    # ดึงคุกกี้จากการตอบกลับ
    cookies = response.cookies
    print("Cookies retrieved:")
    
    for cookie in cookies:
        print(f"{cookie.name}: {cookie.value}")

# แทนที่ด้วย URL ที่ต้องการดักจับคุกกี้
get_cookies('http://example.com')

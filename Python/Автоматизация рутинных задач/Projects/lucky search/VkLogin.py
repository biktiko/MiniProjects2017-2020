from selenium import webdriver
import os

password = os.environ['password']

chrome_opt = webdriver.ChromeOptions()
chrome_opt.add_argument('--disable-gpu')

driver = webdriver.Chrome(executable_path='D:\\Тигран\\chromedriver\\chromedriver', chrome_options=chrome_opt) 

driver.get('https://vk.com/')

driver.find_element_by_id("index_email").send_keys("37497242038")
driver.find_element_by_id("index_pass").send_keys(password)
driver.find_element_by_id("index_pass").submit()





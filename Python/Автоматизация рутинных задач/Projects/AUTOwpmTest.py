from selenium import webdriver
from selenium.webdriver.common.keys import Keys

chrome_opt = webdriver.ChromeOptions()
chrome_opt.add_argument('--disable-gpu')
driver = webdriver.Chrome(executable_path='C:\\Program Files\\chromedriver\\chromedriver', chrome_options=chrome_opt) 

driver.get('https://10fastfingers.com/typing-test/english')

for i in range(340):
    text = driver.find_element_by_class_name('highlight').text
    driver.find_element_by_id("inputfield").send_keys(text)
    driver.find_element_by_id("inputfield").send_keys(Keys.SPACE)


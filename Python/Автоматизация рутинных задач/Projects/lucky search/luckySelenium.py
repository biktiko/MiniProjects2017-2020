# lucky.py - Открывает несколько результатов поиска с помощью google

from selenium import webdriver
import os

chrome_opt = webdriver.ChromeOptions()
chrome_opt.add_argument('--disable-gpu')

driver = webdriver.Chrome(executable_path='D:\\Тигран\\chromedriver\\chromedriver', chrome_options=chrome_opt) 
print(type(driver))
search = input("Искать: ")
url = 'http://google.com/search?q='  + search

driver.get(url)

# test = driver.find_elements_by_css_selector(".r a").get_attribute('href')
test = driver.find_element_by_css_selector(".r h3").click()

os.chdir('D:\\Тигран\\TigranProgrammerHistory\\Python\\Автоматизация рутинных задач\\Projects\\lucky search')

searchFile = open('sesarchFile.txt', 'w', encoding='utf-8')
searchFile.write(str(test))
searchFile.close()

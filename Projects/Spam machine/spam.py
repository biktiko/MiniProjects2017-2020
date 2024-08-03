
from selenium import webdriver
from selenium.webdriver.common.by import By

import os

chrome_opt = webdriver.ChromeOptions()
chrome_opt.add_argument('--disable-gpu')

driver = webdriver.Chrome(executable_path='D:\\Тигран\\chromedriver\\chromedriver', chrome_options=chrome_opt) 

test = driver.get('https://vk.com/')

# login = input('Введите телефон или email от вк: ')
# password = input('Введите пароль от вк: ')

# driver.find_element_by_id("index_email").send_keys(login)
# driver.find_element_by_id("index_pass").send_keys(password)

driver.find_element_by_id("index_email").send_keys('37497242038')
driver.find_element_by_id("index_pass").send_keys('5cf5c7ca60v')
driver.find_element_by_id("index_login_button").click()
# driver.find_element_by_id("index_pass").submit()
# driver.find_element(By.XPATH, "//li[@id='l_msg']/a/span/span[3]").click();
driver.find_element_by_id('post_field').send_keys('test')
# driver.find_element_by_css_selector('#l_msg a').clicK()
# driver.find_element(By.XPATH, "//span[contains(text(),'Мои сообщения')]").click()
# driver.find_element_by_link_text("Google Search").send_keys('https://vk.com/im');


# element = driver.findElement(By.xpath("//span[contains(text(),'Мои сообщения')]")).click();

# driver.find_element_by_class_name('_im_dialog_link').click()

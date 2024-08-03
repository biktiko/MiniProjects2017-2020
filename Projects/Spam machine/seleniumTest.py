from selenium import webdriver
from selenium.webdriver.common.by import By
import os

# System.setProt
driver = webdriver.Firefox()

test = driver.get('https://vk.com/')

driver.find_element_by_id("index_email").send_keys('37497242038')
driver.find_element_by_id("index_pass").send_keys('5cf5c7ca60v')
driver.find_element_by_id("index_login_button").click()

driver.find_element(By.XPATH, "//span[contains(text(),'Мои сообщения')]").click()

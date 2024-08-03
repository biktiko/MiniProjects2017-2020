# lucky.py - Открывает несколько результатов поиска с помощью google

# Не работает, потому что BeeautifulSoup() возвращает не весь html

import requests, webbrowser, bs4, os

webbrowser.register('chrome', None, instance=webbrowser.BackgroundBrowser("C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"))

os.chdir('D:\\Тигран\\TigranProgrammerHistory\\Python\\Автоматизация рутинных задач\\Projects\\lucky search')

# search = input("Искать: ")
# href = 'http://google.com/search?q='  + search
res = requests.get('https://programmer-room.herokuapp.com/')
res.raise_for_status()

print('Гуглим...')
# webbrowser.get('chrome').open_new_tab(href)

html = bs4.BeautifulSoup(res.text, features='html.parser') 
searchFile = open('sesarchFile.txt', 'w', encoding='utf-8')
searchFile.write(str(html))

# hrefs = html.select('gb_zc')
hrefs = html.select('#title')

print(hrefs)
# print(hrefs[0].getText())



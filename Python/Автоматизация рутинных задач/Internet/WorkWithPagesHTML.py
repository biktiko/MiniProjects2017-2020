import requests, bs4, os
#bs4 - beautiful test 4 - для работы с html

os.chdir('D:\\Тигран\\TigranProgrammerHistory\\Python\\Автоматизация рутинных задач\\Internet')

res = requests.get('https://www.w3schools.com/colors/colors_picker.asp')
res.raise_for_status()

example = bs4.BeautifulSoup(res.text, features="html.parser")
# метод beatufilSoup - превращает текст в обьект beautfilSoup, для чтения html 

exampleFile = open('exampleHTML2.html', 'w', encoding='utf-8')

exampleFile.write(str(example))
 
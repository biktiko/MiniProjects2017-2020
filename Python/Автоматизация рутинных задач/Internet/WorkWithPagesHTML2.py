import bs4, os

os.chdir('D:\\Тигран\\TigranProgrammerHistory\\Python\\Автоматизация рутинных задач\\Internet')

exampleFile = open('exampleHTML.html')
exampleSoup = bs4.BeautifulSoup(exampleFile.read(), features="html.parser")
elems = exampleSoup.select('#test2 p')

print(type(elems))
print(elems)
try:
    print(elems[1].getText())
except:
    print('error with elems[0].getText()')
print(elems[2])

print(elems[0].get('id'))
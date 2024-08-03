import pprint, os

cats = [{'name': 'Zophie', 'desc': 'chubby'}, {'name': 'Pooka', 'desc': 'fluffy'}]

# print(pprint.pformat(cats))

fileObj = open('test.py', 'w')
fileObj.write('cats = ' + pprint.pformat(cats) + '\n')
fileObj.close()

# os.chdir("D:\\Тигран\\TigranProgrammerHistory\\Python\\Автоматизация рутинных задач\\Чтение и запис файлов\\Files")
print(os.getcwd())

from myCats import cats as test

print(test)




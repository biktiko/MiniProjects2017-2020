import os

baconFile=open('D:\\Тигран\\TigranProgrammerHistory\\Python\\Автоматизация рутинных задач\\Чтение и запис файлов\\Files\\bacon.txt', 'w')
# w - режим записи

baconFile.write('Hellow, world!\n')

baconFile.close()

baconFile=open('D:\\Тигран\\TigranProgrammerHistory\\Python\\Автоматизация рутинных задач\\Чтение и запис файлов\\Files\\bacon.txt', 'a')
# a - режим добавления 

baconFile.write("Bacon is not vegetable")

baconFile.close()

baconFile=open('D:\\Тигран\\TigranProgrammerHistory\\Python\\Автоматизация рутинных задач\\Чтение и запис файлов\\Files\\bacon.txt', 'r')
# r - режим чтения

content = baconFile.read()
# readline - массив, со всеми строками текста
baconFile.close()

print(content)
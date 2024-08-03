import os

path1 = 'D:\\Тигран\\TigranProgrammerHistory'

print(os.path.join('usr', 'bin', 'spam'))  # корректная версия ( зависимо от ОС ) доступа к файлу

myFiles =['accounts.txt', 'details.csv', 'invite.docx']

for fileName in myFiles:
    print(os.path.join('C:\\users\\asweigart', fileName))

print('--------------')

os.chdir(path1) # Меняет путь 
        
print(os.getcwd()) # Возвращает путь

print('--------------')

print(os.path.abspath('./Python')) # Возваращает обсолютный путь

print('--------------')

print(os.path.isabs(path1))
# True, если обсолютный путь

print("--------------")

print(os.path.relpath('D:\\Тигран\\TigranProgrammerHistory\\Python\\Автоматизация рутинных задач', 'Python')) 
# Возвращает относительный путь от "второго аругмента" к "первому"
# "Второй аргумент" по умолчанию ровен к текущей пути

print('--------------')

print(os.path.basename(path1))
# Возвращает имя текущего файла (то, что следует последней косой черты)

print('---------------')

print(os.path.dirname(path1))
# Возвращает всё то, что предшествует последней косой черты

print('-----------------')

print(os.path.split(path1))
# Возвращает кортеж, с именем папки и с базовом именем

print('------------------')

print(path1.split(os.path.sep))
# Возвращает все папки\файлы пути ввиде масива



# Работа с файлами

print('-------------------')

print(os.path.getsize('D:\\Тигран\\TigranProgrammerHistory\\Python\\Автоматизация рутинных задач\\Чтение и запис файлов\\basic.py'))
# Размер файла в битах

print('-------------------')

print(os.listdir(path1))
# print(os.listdir("C:\\Windows\\System32")) другой пример
# Список всех файлов\папков в данном папке

totalSize = 0
for fileName in os.listdir("D:\\Тигран\\TigranProgrammerHistory\\Python\\Автоматизация рутинных задач"):
    totalSize += os.path.getsize(os.path.join("D:\\Тигран\\TigranProgrammerHistory\\Python\\Автоматизация рутинных задач", fileName))
# Размер папкы (учитывает только файлы)

print(totalSize)

print('-----------')

print(os.path.exists(path1))
# True, если путь существует
print(os.path.isfile('D:\\Тигран\\TigranProgrammerHistory\\Python\\Автоматизация рутинных задач\\characterCount.py'))
# True, если путь существует и это файл
print(os.path.isdir('D:\\Тигран\\TigranProgrammerHistory\\Python\\Автоматизация рутинных задач\\Чтение и запис файлов'))
# True, если путь существует и это папка

# Чтение файлов 

print('------------------')


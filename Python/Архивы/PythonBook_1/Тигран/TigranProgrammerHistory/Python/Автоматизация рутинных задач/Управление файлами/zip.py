import zipfile, os

os.chdir('D:\\Тигран\\TigranProgrammerHistory\\Python\\Автоматизация рутинных задач\\Управление файлами')

exampleZip=zipfile.ZipFile('ZipTest.zip')
# работает аналагично как с open(), но с .zip файлами

print(exampleZip.namelist())

info = exampleZip.getinfo('ZipTest/ZipTest/test1.txt')
# обьект, содержащую информацию про архим

print(info)

print(info.file_size)
# размер файла

print(info.compress_size)
# размер файла в сжатом состаянии

exampleZip.extractall('files3')
# извлекает всё из архива в текущую папку

exampleZip.close()

# \\\\\\\\\\\\\\\\

newZip = zipfile.ZipFile('ZipTest.zip', 'w')
newZip.write('files1\\spam2_2', compress_type=zipfile.ZIP_DEFLATED)
newZip.close()

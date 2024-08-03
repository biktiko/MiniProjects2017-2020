#Удаляет файл                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
import shutil, os, send2trash

os.chdir('D:\\Тигран\\TigranProgrammerHistory\\Python\\Автоматизация рутинных задач\\Управление файлами')

shutil.copy(".\\files1\\spam.txt", '.\\files2\\spam2.txt') 
# копирует файл от первый пути и вставляет во втором

# shutil.copytree('D:\\Тигран\\TigranProgrammerHistory\\Python\\Автоматизация рутинных задач\\Projects', '.\\files1', symlinks=False, ignore=None)

# shutil.copytree('.\\files1', '.\\files2')

shutil.move('.\\files2\\spam2.txt', '.\\files1\\spam2_2')
# перемещает файл или папку

# os.unlink('.\\files3\\test.txt')
# Удаляет файл

# os.rmdir('.\\files3')
# удаляет пустую папку

# shutil.rmtree('.\\files3')
# удаляет папку и файлы внутри

send2trash.send2trash('.\\files3')
# удаляет папки или файл и переносит в корзину
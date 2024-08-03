# backToZip.py - копирует папку "Автоматизация рутинных задач" в ZIP файл с инкрементируемым номером 
# Но может и другие 

import zipfile, os, shutil

def backUpToZip(oldFolder, path, zipName):
    oldFolder = os.path.abspath(oldFolder)
    os.chdir(path)
    number=1
    while True:
        zipFileName= zipName + '_' + str(number) + '.zip'
        if not os.path.exists(zipFileName):
            break
        number += 1
    print('> Создаётся файл %s...' % (zipFileName))

    os.chdir(oldFolder)
    backUpZip = zipfile.ZipFile(zipFileName, 'w')

    print('--------------')

    for folder, subfolders, files in os.walk(oldFolder):
        print('Добавлеие в ZIP-файло все файлы из папки %s... ' % (folder))
        backUpZip.write(folder)
        for file in files:
            newBase = zipName + '_'
            if file.startswith(newBase) and file.endswith('.zip'):
                continue 
            backUpZip.write(os.path.join(folder, file))
        subfolders # чтобы не было жёлтого предупреждения 
            
    backUpZip.close()
    shutil.move(zipFileName, 'D:\\Тигран\\TigranProgrammerHistory\\Python\\Архивы')
    print('готова')


folder = 'D:\\Тигран\\TigranProgrammerHistory\\Python\\Автоматизация рутинных задач'
path = 'D:\\Тигран\\TigranProgrammerHistory\\Python\\Архивы'
backUpToZip(folder, path, 'PythonBook',)

# first argument - папка, которую нужно распаковать
# secont argument - путь, где нужно распаковать
# third argument - название нового архива (без .zip + автоматическая нумерация)


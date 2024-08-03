# backToZip.py - копирует папку "Автоматизация рутинных задач" в ZIP файл с инкрементируемым номером 
# Но может и другие 

import zipfile, os, shutil

def backUpToZip(zipName, folder=os.getcwd()):
    folder = os.path.abspath(folder)
    os.chdir('D:\\Тигран\\TigranProgrammerHistory\\Python\\Архивы')
    number=1
    while True:
        zipFileName= zipName + '_' + str(number) + '.zip'
        if not os.path.exists(zipFileName):
            break
        number += 1
    print('> Создаётся файл %s...' % (zipFileName))

    os.chdir(folder)
    backUpZip = zipfile.ZipFile(zipFileName, 'w')

    print('--------------')

    for folder, subfolders, files in os.walk(folder):
        print('Добавлеие в ZIP-файло все файлы из папки %s... ' % (folder))
        backUpZip.write(folder)

        for file in files:
            newBase = zipName + '_'
            if file.startswith(newBase) and file.endswith('.zip'):
                continue 
            backUpZip.write(os.path.join(folder, file))
            
    backUpZip.close()
    shutil.move(zipFileName, 'D:\\Тигран\\TigranProgrammerHistory\\Python\\Архивы')
    print('готова')

folder = 'D:\\Тигран\\TigranProgrammerHistory\\Python\\Автоматизация рутинных задач'
backUpToZip('PythonBook', folder)


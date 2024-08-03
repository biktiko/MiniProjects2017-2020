import os, shutil

def copy(oldFolder, newFolder, expansion):
    os.chdir(oldFolder)

    for folder, subfolders, files in os.walk(oldFolder):
        os.chdir(folder)
        for file in files:
            if file.endswith('.'+expansion):
                try:
                    shutil.copy(file, newFolder)
                    print(file + ' copied')
                except:
                    print('some error with ' + file)
        subfolders


folder = 'D:\\Тигран\\TigranProgrammerHistory\\Python\\Автоматизация рутинных задач'
newFolder = 'D:\\Тигран\\TigranProgrammerHistory\\Python\\Автоматизация рутинных задач\\Projects\\Selective Copying\\newFiles'

copy(folder, newFolder, 'py')
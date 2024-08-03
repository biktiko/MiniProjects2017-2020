import os

def findFiles(path, size): #Мбайт
    print('>  %s \n ------' % (path))
    for folder, subFolders, files in os.walk(path):
        try:
            os.chdir(folder)
            for file in files:
                try:
                    bigFileSize = os.path.getsize(file)/(1024*1024)
                    if(bigFileSize>size):
                        print(file + ': ' + str(bigFileSize) + 'mb')
                except:
                    print('> Some erros with ' + file)
        except:
            print('> Access denied in folder: ' + folder)
        subFolders

    print('\n')

findFiles('D:\\', 100)
findFiles('C:\\', 100)
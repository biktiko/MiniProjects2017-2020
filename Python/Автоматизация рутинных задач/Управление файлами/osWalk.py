import os

n=0
for folder, subfolder, file in os.walk('D:\\Тигран\\TigranProgrammerHistory\\Python\\Автоматизация рутинных задач'):
    n+=1
    print(str(n)+ ') folder')
    print(folder)
    print(str(n)+ ') subfoler')
    print(subfolder)
    print(str(n)+ ') file')
    print(file)
    
# обход всех папков и файлов

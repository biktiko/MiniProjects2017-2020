import traceback, os

os.chdir('D:\\Тигран\\TigranProgrammerHistory\\Python\\Автоматизация рутинных задач\\Отладка')

try:
    raise Exception('Error message')
except:
    errorFile = open('errorInfo.txt', 'w')
    errorFile.write(traceback.format_exc())
    errorFile.close
    print('Информация о стеке вызовов была записана в файл errorInfo.txt.')
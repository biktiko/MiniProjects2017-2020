# renameDates.py - переименовывает файлы, имена которых включают даты американского формата ( ММ-ДД-ГГГГ ),  
# приводя их в евпропейский ( ДД-ММ-ГГГГ )

import re, os, shutil

os.chdir('D:\\Тигран\\TigranProgrammerHistory\\Python\\Автоматизация рутинных задач\\Projects\\Rename Dates')

datePattern = re.compile(r'(.*?)((0|1)?\d)-((0|1|2|3)?\d)-((19|20)\d\d)(.*)')

for fileName in os.listdir('American files'):
    mo = datePattern.search(fileName)
    
    if mo==None:
        continue

    beforePart = mo.group(1)
    monthPart = mo.group(2)
    dayPart = mo.group(4)
    yearPart = mo.group(6)
    afterPart = mo.group(8)

    newFileName = beforePart + dayPart + '-'  + monthPart + '-' + yearPart + afterPart

    print("American: " + fileName)
    print("Europ: "+ newFileName)
    print('====================')

    shutil.copy(os.path.join('American files', fileName), os.path.join('Europe files', newFileName))



import os
import re

os.chdir('D:\\Тигран\\TigranProgrammerHistory\\Python\\Автоматизация рутинных задач\\Projects\\Mab Libs')

AllFiles = os.listdir()
del AllFiles[AllFiles.index('mabLibs.py')]

for fileName in AllFiles:
    print(">" + str(fileName))

    file = open(fileName, 'r')
    text = file.read()
    file.close()


    if "ADJECTIVE" in text:
        ADJ = input("Введите имя прилагательное: ")
        ADJreg = re.compile("ADJECTIVE")
        NewText = ADJreg.sub(ADJ, text) 

    if "NOUN" in text:
        NOUN = input("Введите имя cуществительное: ")
        NOUNreg = re.compile("NOUN")
        NewText = NOUNreg.sub(NOUN, NewText)

    if "ADVERB" in text:
        ADVERB = input("Введите наречие: ")
        ADVERBreg = re.compile("ADVERB")
        NewText = ADVERBreg.sub(ADVERB, NewText)

    if "VERB" in text:
        VERB = input("Введите глагол: ")
        VERBreg = re.compile("VERB")
        NewText = VERBreg.sub(VERB, NewText)

    file.close()

    try:
        file = open(fileName, 'w')
        file.write(NewText)
    except:  
        print("not found")







    

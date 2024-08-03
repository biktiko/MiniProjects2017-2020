'''
Страница - 186 

// regExp.js - регулярные выражения, JavaScript

1) import re
2) create "Regax" object - re.comile()
3) regObject.search(string)
4)  1. Object.group() - for text
    2. Object.span() - for id

https://www.regexpal.com/ - for tests

'''

'''
    # Страница 205 

    /d - от 0 до 9
    /D - !/d (любой символ, кроме 0-9)
    /w - любая буква, число и _
    /W - !/w
    /s - пробел, табуляция и новая строка
    /S - !/s
    [a-zA-Z] - только буквы
    . - любой символ кроме пробелной строки

'''

import re 

phoneNumRegax1=re.compile(r"(\d\d\d)-(\d\d\d-\d\d\d\d)")
# () - это группы 

mo = phoneNumRegax1.search("My number is 321-421-4125")
print(mo)
print(mo.span())  # возварщает id 
print(mo.group(2)) 
print(mo.groups()) # возвращает все группы ввиде масива 

phoneNumRegax2=re.compile(r"(\(\d\d\d\)) (\d\d\d-\d\d\d\d)")

mo2 = phoneNumRegax2.search("My second number is (324) 412-5342")
print(mo2.groups())

Regax3 = re.compile(r"Batman|Tina Fay") # |  -или

mo3_1 = Regax3.search("Batman and Tina Fay")
mo3_2 = Regax3.findall("Batman and Tina Fay") # находит все значения и возвращает ввиде кортежа 
print(mo3_1)
print(mo3_2) 


batRegax = re.compile(r"Bat(wo)?man") # ? - не обязательная группа

mo4 = batRegax.search("The adventure of Batman")
print(mo4.group())

batRegax2 = re.compile(r"Bat(wo)*man") # * - повторение от 0 до бесконечность раз

mo5_1 = batRegax2.search("The adventure if Batman")
mo5_2 = batRegax2.search("The adventure if Batwowowowoman")
print(mo5_1.group())
print(mo5_2.group())

batRegax2 = re.compile(r"Bat(wo)+man") # + - повторение от 1 до бесконечность раз

mo6 = batRegax2.search("The adventure if Batman")
print(mo6)


haRegax= re.compile(r"(Ha){3,5}")  # {} - повторение от a до b раз / Жадная ( пытается повторить b раз )

mo7= haRegax.search("HaHaHaHa")
print(mo7.group())

haRegax= re.compile(r"(Ha){3,5}?")  # {} - повторение от a до b раз / Нежадная ( ? - пытается повторить a раз )

mo8= haRegax.search("HaHaHaHa")
print(mo8.group())

beginWithHello = re.compile(r"^Hello")  # ^ - строки НАЧИНАЮЩИЕ C ...

mo8_1 = beginWithHello.search("Hello world")
mo8_2 = beginWithHello.search("He said hello")

print(mo8_1.group())
print(mo8_2)

beginWithHello = re.compile(r"\d$")  # ^ - строки ЗАКОНЧИВШИЕСЯ C ...

mo9_1 = beginWithHello.search("Your number is 42")
mo9_2 = beginWithHello.search("I am 17 years old ")

print(mo9_1.group())
print(mo9_2)


nonGreedyRegax = re.compile(r"<.*?>")
mo10_1 = nonGreedyRegax.search("<The serve man> for dinner.>")

greedyRegax = re.compile(r"<.*>")
mo10_2 = greedyRegax.search("<The serve man> for dinner.>")

print(mo10_1.group())
print(mo10_2.group())


noNewLineRegax = re.compile(".*", re.DOTALL) 
# reDOTALL - точке соотвествует также  символ новый строки
mo11=noNewLineRegax.search("Serve the public trust./nProtect the innocent./nUphold the law")
print(mo11.group())

print(re.compile(r'robocop', re.I).search("RoboCOP is parrt man, part machin, all machine").group())
# re.I ( или re.IGNORECASE) - игнорирует регистр букв (маленькие и большие буквы)


namesRegax = re.compile(r'Agent \w+')
print(namesRegax.sub("CENSORED", 'Agent Alice gave the secret document to Agent Bob'))
# regObject.sub - замена текста

agentNameRegax = re.compile(r'Agent (\w)\w*') 
print(agentNameRegax.sub(r'\1****', 'Agent Alica told Agent carol that Agent Bob was a double agent'))
# \N - Вернуть первую группу  


phoneRegax = re.compile(r'''(
    (\d{3}|\(\d{3}\))?
    (\s|-|s\.)?
    \d{3}
    (\s|-|s\.)
    \d{4}
    (\s* (ext|x|ext.)\s*\d{2m 5})?
)''', re.VERBOSE)
# re.VERBOSE - 'многословный режимы'

someRegaxValue = re.compile('foo', re.I | re.DOTALL | re.VERBOSE)
#  обьеденение режимов ( старамодный синтаксис)





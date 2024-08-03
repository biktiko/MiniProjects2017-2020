# Учебный проект / page 217 

# Проверка того, что переданная ей строка представляет собой сильный пароль

import re

def StrongPassword(password):
    CapLetters = re.compile(r'[A-Z]')
    SmallLetters = re.compile(r'[a-z]')
    Number = re.compile(r'\d')
    Space = re.compile(r'\s')

    if(CapLetters.search(password) and SmallLetters.search(password) and Number.search(password) and Space.search(password)==None
    and len(password) >= 8 ):
        print(password + ": strong")
    else:
        print(password  +": wrong")

StrongPassword("FaB2f54vgdg")
StrongPassword("fdsafdsffs")
StrongPassword("fe535erte")
StrongPassword("rew4T")
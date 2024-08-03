# Учебный проект / page 217

# Делает то же самое что и функция strip(), но с помощью регулярных выражений

import re

def RegStrip(string, delete=r'\s'):

    start = re.compile(r'^' + delete + r'*')
    end = re.compile(delete + r'*$')

    string = start.sub("", string)
    string = end.sub("", string)

    print(string)

RegStrip("ffsdaff", "ff")
    
# Автоматизация рутинных задач - стр. 176
# Программа для незащищенного хранения паролей.

import sys, pyperclip

PASSWORDS = {
    "pr": "5cf5c7ca60p",
    "google": "5cf5c7ca60g",
    "mongo": "5cf5c7ca60m"
}

if len(sys.argv)<2:
    print("Использование: python pw.py [имя учетной записи] - копирование пароля учётной записи")
    sys.exit()

account = sys.argv[1]

if account in PASSWORDS:
    pyperclip.copy(PASSWORDS[account])
    print("Пароль для " + account + " скопирован в буфер")
else:
    print("Учётная запись " + account + " отсуствует в списке")


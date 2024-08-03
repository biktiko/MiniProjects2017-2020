# Автоматизация рутинных задач - стр. 179
# Добавляет маркеры Википедии в начало каждой строки текстаб созраненого в буфере обмена

import pyperclip

text = pyperclip.paste()

lines = text.split("\n")
for i in range(len(lines)):
    lines[i]="* " + lines[i]
text="\n".join(lines)

pyperclip.copy(text)



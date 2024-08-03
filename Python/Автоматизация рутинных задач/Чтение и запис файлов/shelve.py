
import shelve
# shelve - сохранение информации в жёстком диске (даже после завершение программы)

# shelfFile=shelve.open('mydata')
shelfFile={}

# создаём или открываем файл (3 файла, .dat, .dir, .bak) 

cats=['Zophie', 'Pooka', 'Simon']

shelfFile['cats']=cats
# добавляем данные

shelfFile['cats']
# => ['Zophie', 'Pooka', 'Simon']

list(shelfFile.keys())
# Массив со всеми ключами

list(shelfFile.values())
# Матрица, со всеми ключами

# shelfFile.close()
# закрываем

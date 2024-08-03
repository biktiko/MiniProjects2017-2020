import requests, os

res = requests.get('http://gutenberg.org/cache/epub/1112/pg1112.txt')

res.raise_for_status()

# print(res.status_code) 
# 200 - if page is founded, 404 - if doesn't

# print(requests.codes.ok)
# 200 ?


# print(len(res.text))
# print(res.text[:250])

os.chdir('D:\\Тигран\\TigranProgrammerHistory\\Python\\Автоматизация рутинных задач\\Internet')
playFile = open('RomoAndJuliet3.txt', 'wb')

for chunk in res.iter_content(10000):
    print(playFile.write(chunk))
    playFile.write(bytes('------------------------------------------------------------',  encoding='utf8'))

playFile.close()
    

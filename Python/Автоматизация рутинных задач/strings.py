name="Tigran"
print("> name: " + name)
print("> name[2]: " + name[2])
print("> name[1:4]: " + name[1:4])
print("> 'ran' in name: " + str("ran" in name))

for i in name: 
    print("* * * " + i + " * * *")

name2="Zophie a cat"
NewName2=name2[0:7] + "the" + name2[8:12]

print("New name: " + NewName2)
print("-----------")

spam1 = "Hello there!\nHow are you?\nI\'m doing fine."
spam2 = r'That is Carol\'s cat.'

print(spam1)
print("-----------")

print(spam2)
print("-----------")

spam3='''Dear Alice,

Eve's cat has been arrested for catnapping, cat burglary, and
extortion.

Sincerely,
Bob'''

print(spam3)
print("---------")

print("Hello" in spam1)
print("---------")

spam4 = spam1.upper()

print(spam4)
print("---------")

spam5 = spam4.lower()

print(spam5)
print("---------")

print(spam5.islower()) # true, если есть хотя бы одна буква, и все буквы 'маленькие'

print(spam4.isupper()) # true, если есть хотя бы одна буква, и все буквы 'большие'

print("HeLlO".upper().lower().islower()) 

print("HeLlO".isalpha()) #true, только если состоит из букв ( и не является пустотой )

print("HeLlO123".isalnum()) #true, только если состоит из букв и цифр ( и не является пустотой ) 

print("18".isdecimal()) #true, только если состоит из цифр ( и не является пустотой ) 

print(" ".isspace()) #true, только если состоит из пробела, табуляции и новой строки ( и не является пустотой ) 

print("Hello".istitle()) #true, только если начинается с большой буквы, за которой следуют маленькие ( и не является пустотой ) 

print("Hello world!".startswith('Hel')) #true, только если начинается c аргумента

print("Hello world!".endswith('world!')) #true, только если начинается c аргумента
print("---------")

list1=["cats", "rats", "bats"]

print(", ".join(list1)) # лист -> строка 
print("---------")

list2=["My", "name", "is", "Tigran"]

print(" ".join(list2))
print("---------")

print("-a|a-".join(list2))
print("---------")

spam6="Hello world, my name is Tigran!"
print(spam6.split(" "))     # строка -> лист
print(spam3.split("\n"))
print("---------")

print("Hello".rjust(15)) #выровнение на лево (пустой, второй аргумент=" ")
print("Hello".ljust(20, "*")) #выровнение на право 
print("Hello".center(10, "+")) #выровнение на центр
print("---------")

spam7="  strip  " 
spam8="spamspamspamStripspamStripspamspamspamspam" 

print(spam7.strip())  # удаляет символы (пустой, второй аргумент=" ") /в начале и в к конце
print(spam7.lstrip()) # только в начале
print(spam7.rstrip()) # только в конце
print(spam8.strip("spam"))
print("---------")


import pyperclip # copy и past /need (pip install pyperclip)

pyperclip.copy("Copied text!")
print(pyperclip.paste())




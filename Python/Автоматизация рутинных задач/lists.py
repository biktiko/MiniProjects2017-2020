import random, sys, os, math

list1=["obj1", "obj2", "obj3", "obj4", "obj5"]
list2= [["obj1-1", "obj1-2", "obj1-3"], ["obj2-1", "obj2-2", "obj2-3"]]

print("> list1[1:3]: " + str(list1[1:5]))
print("> list2[1][-2]: " + list2[1][-2]) # негативные индексы считатся сзади

for i in range(3):
    list1+=[i]

print("> " + str(list1))

obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8 = list1
print("> obj1: " + obj1)
print("> obj3: " + obj3)
print("> obj7: " + str(obj7))

del list1[5]                       # удаление элемента (по индексу)
print("> (del element) list1: " + str(list1))

print("> index: " + str(list1.index("obj3")))         # метод list.index("element name") - возвращает индекс элемента
# методы работают на месте, нет смысла в присваивание 

list1.append("obj9")               # list.append("element name") - добавление элемент в конец списка
list1.insert(3, "obj10")           # list.insert(index, "element name") - добавление элемента в определенное место
print("> (new elements) list1: " + str(list1))

list1.remove("obj10")              # удаление элемента (по названию элемента)
print("> (remove element) list1: " + str(list1))

list3=[2, 5, 3.14, 1, -7]
list3.sort()
print("> (sort integers) list3: " + str(list3))

list4=["ants", "cats", "dogs", "badgers", "elephants"]
list4.sort()
print("> (sort strings) list4: " + str(list4)) #по ASCII

list4.sort(reverse=True)
print("> (reverse sort strings) list4: " + str(list4)) #по ASCII, и в обратном порядке 

list5=['Alice', "ants", "Bob", "badgers", "Carol", "cats"]
list5.sort(key=str.lower) # в алфавитном порядке
print("> (sort strings) list5: " + str(list5))

spam1="Hello world, my name is Tigran!"
print(spam1.split(" "))     # строка -> лист       





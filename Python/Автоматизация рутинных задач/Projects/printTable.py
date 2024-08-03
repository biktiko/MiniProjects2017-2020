# Рисует красивый стол(table) их элементов массива 

# Примечение: Все массивы в матрице должны иметь ровное количество элементов

tableDate=[['apples', 'oranges', 'cherries', 'banana'],
            ['Alice', 'Bob', "Carol", "David"],
            ['dogs', 'cats', 'moose', 'goose']]

def printTable(data):
    
    LongestString=[]
    for m in range(len(data)):
        LongestString.append(max(data[m], key=len))
    LongestString=max(LongestString, key=len)

    for m in range(len(data[0])):
        string=""
        for n in range(len(data)):
            string+=data[n][m].rjust(len(LongestString)+1)
        print(string)

printTable(tableDate)
def ListToText(List):
    text=''
    for i in range(len(List)):
        if i<( len(List) - 1 ):
            text += str(List[i]) + ", "
        else:
            text += "and " + str(List[i])
    return text

spam = ["apples", "bananas", "tofu", "cats"]
spam2 = ["obj1", "obj2", "obj3", "obj4", "obj5"]

print(ListToText(spam))
print(ListToText(spam2))
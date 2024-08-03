def totalBrougth(guests, item):
    num=0
    for items in guests.values():
       num+=items.get(item, 0)
    return num

allGuests= {"Alice": {"apples": 5, "pretzels": 12},
            "Bob": {"ham sandwiches": 3, "apples": 2},
            "Carol": {"cups": 3, "apple piec": 1}}

print(str(totalBrougth(allGuests, "apples")))
print(str(totalBrougth(allGuests, "cups")))

# /////////////////////////////////////////////////////////////////////////////

# test= {"Alice":  5,
#        "Bob": "ham sandwiches",
#        "Carol": "cups"}

# print("Alice" in test.values())




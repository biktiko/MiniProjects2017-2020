def printPicnic(itemsDict, leftWidth, rightWidth):
    print("Picnic items".center(leftWidth+rightWidth, "-"))
    for k, v in itemsDict.items():
        print(k.ljust(leftWidth, ".") + str(v).rjust(rightWidth))

picnicItems={"sandwiches":4, "apples": 12, "cups": 4, "cookies": 8000}

printPicnic(picnicItems, 12, 5)
print("")
printPicnic(picnicItems, 20, 6)


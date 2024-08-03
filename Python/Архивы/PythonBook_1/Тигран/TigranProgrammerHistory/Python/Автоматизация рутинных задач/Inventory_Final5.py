def displayInventory(inventory):
    item_total=0

    print("Inventory:")
    for item, number in inventory.items():
        print(str(number) + " " + item)
        item_total+=number
    print("Total number of items: " + str(item_total))

def addToInventory(inventory, addItems):
    for item in addItems:
        if item in inventory:
            Inventory2[item]+=1
        else:
            inventory[item]=1
    displayInventory(inventory)


Inventory = {"rope":1, "torch": 6, "gold coin": 42, "dagger": 1, "arrow":12}

# displayInventory(Inventory)

dragonLoot = ["gold coin", "dagger", "gold coin", "gold coin", "ruby"]
Inventory2 = {"gold coin": 42, "rope": 1}

addToInventory(Inventory2, dragonLoot)


import shelve, pyperclip, sys

mcbShelv =shelve.open('D:\\Тигран\\TigranProgrammerHistory\\Python\\Автоматизация рутинных задач\\Projects\\MultiClipBoard\\mcb')

print('''
MuliClipBoard

To copy > "name"
To save > save "name"
To view all saved items > list
To delete > del "name"
To delete all items > delete all

''')
while True:
    mcb = input()
    if mcb[:4]=="save":
        mcbShelv[mcb[5:]]=pyperclip.paste()
    elif mcb=="list":
        for key in mcbShelv.keys():
            print(">" + key + '\n' + mcbShelv[key] + '\n')
    elif mcb=="delete_all":
        print("Are you sure? (yes)")
        if(input()=='yes'):
            print("All elements are deleted!")
            mcbShelv.clear()
    elif mcb[:3]=="del":
        try: 
            del mcbShelv[mcb[4:]]
        except:
            print("Does not exist")
    elif mcb=='stop':
        break
    else:
        try:
            pyperclip.copy(mcbShelv[mcb])
        except:
            print("Empty")
    
mcbShelv.close()



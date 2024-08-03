# Прото игра в крестики-нолики :)

TheBoard = {"top-l": " ", "top-m":" ", "top-r":" ", 
            "mid-l": " ", "mid-m":" ", "mid-r":" ", 
            "low-l": " ", "low-m":" ", "low-r":" " }
            
print('''top-l  | top-m | top-r
-------+-------+------
mid-l  | mid-m | mid-r
-------+-------+------
low-l  | low-m | low-r''')

def printBoard(board):
    print(board["top-l"] + "|" + board["top-m"] + "|" + board["top-r"])
    print("-+-+-")
    print(board["mid-l"] + "|" + board["mid-m"] + "|" + board["mid-r"])
    print("-+-+-")
    print(board["low-l"] + "|" + board["low-m"] + "|" + board["low-r"])

winCoards=(("top-l", "top-m", "top-r"), ("mid-l", "mid-m", "mid-r"), ("low-l", "low-m", "low-r"), ("top-l", "mid-l", "low-l"),
            ("top-m", "mid-m", "low-m"), ("top-r", "mid-r", "low-r"), ("top-l", "mid-m", "low-r"), ("top-r", "mid-m", "low-l"))
turn="white"
counter = 0

while counter<10 and turn !="end":
    printBoard(TheBoard) 
    move=""
    while move not in TheBoard.keys():
        move=input("Turn for " + turn + ". Move on which place? ")
        if TheBoard[move]!=" ":
            move=""
      
    if turn=="white":
        TheBoard[move]="X"
        turn = "black"
    else:
        TheBoard[move]="O"
        turn = "white"
    
    for places in winCoards:
        if TheBoard[places[0]] == TheBoard[places[1]] == TheBoard[places[2]] == "X" or TheBoard[places[0]] == TheBoard[places[1]] == TheBoard[places[2]] == "O" :
            printBoard(TheBoard) 
            if turn=="white":
                print("Black is win!!!")
                turn="end"
            else:
                print("White is win!!!")
                turn="end"
            break
    counter+=1
else:
    print("Game finished")
    
   
    
        
            
    
def collatz(number):
    if number%2==0:
        return (number/2)
    else:
        return (3*number +1)

try:
    number=int(input("number "))
    i=0

    while number!=1:
        number=collatz(number)
        print(number)
        i+=1
    
    print("operation: " + str(i))
except:
    print("integer input required")
   







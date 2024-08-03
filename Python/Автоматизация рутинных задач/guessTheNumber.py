import random

SecretNumber=random.randint(1,20)
Number=int(input("I’ve conceived a number from 1 to 20. Try to guess it: "))
NumberOfAttempts = 1

while(Number!=SecretNumber):
    if(SecretNumber<Number):
        print("The proposed number is less than conceived")
    else:
        print ("The proposed number is more than conceived")
    Number=int(input("I’ve conceived a number from 1 to 20. Try to guess it: "))
    NumberOfAttempts+=1

print("Yes, you win, its " + str(SecretNumber))
print("Number of attempts is " + str(NumberOfAttempts))


# Page 215 / exercise 20

import re
RegExp1=re.compile(r'(\d{1,2}(,\d{3})*)')

Exer20 = RegExp1.findall("42, 1,234, 6,368,745, 12,34,745, 1234")

for numbers in Exer20:
    print(numbers[0])
 
# Page 215 / exercise 21

print("------------------")

RegExp2=re.compile(r'[A-Z]+[a-z]+ [A-Z]+[a-z]+')

Exer21 = RegExp2.findall(''' 
Satoshi Nakamoto
Alice Nakamoto
Robocop Nakamoto

satoshi Nakamoto
Mr. nakamoto
Nakamoto 
Satoshi nakamoto
''')

print(Exer21)

# Page 215 / exercise 22

print("------------------")

RegExp3=re.compile(r'((Alica|Bob|Carol)\s(eats|pets|throws)\s(apples|cats|baseballs)\.)', re.IGNORECASE)

Exer22 = RegExp3.findall(''' 
Alica eats apples.
Bob pets cats.
Carol throws baseballs.
Alica throws Apples.
BOB EATS CATS.
RoboCop eats apples.
ALICE THROWS FOOTBALLS.
Carol eats 7 cats. 
''')

for strings in Exer22:
    print(strings[0])
 
 

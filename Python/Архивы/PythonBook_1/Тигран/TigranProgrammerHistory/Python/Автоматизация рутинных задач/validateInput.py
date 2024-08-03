while True:
    age=input("Enter you age: ")
    if age.isdecimal():
        break
    print("Please enter a number for your page")

while True:
    password=input("Select your new password (letters and numbers only): ")
    if password.isalnum():
        break
    print("Password can only have letters and numbers")
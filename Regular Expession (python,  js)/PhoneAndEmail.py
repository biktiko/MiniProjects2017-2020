# Находит все номера и электронные почти в буфере обмена

# For exmaple: My email is btigran02@gmail.com, and my number is +(374) 97 242038, my friend number is 097242038 

import pyperclip, re

PhonesRegExp = re.compile(r'(\+?((374|\(374\))|0)\s?(97|47|49|98|93|94|77|95|55|10)\s?(\d\d\d\d\d\d|\d\d-\d\d-\d\d|\d\d\s\d\d\s\d\d))')

print("-------------\nPhone numbers:")
PhoneNumbers = PhonesRegExp.findall(pyperclip.paste())

EmailsRegExp = re.compile(r'[a-zA0-9._%+-]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,4}')
Emails = EmailsRegExp.findall(pyperclip.paste())

pyperclip.copy('')
for numbers in PhoneNumbers:
    print(numbers[0])
    pyperclip.copy(pyperclip.paste()+numbers[0]+"\n")

print("-------------\nEmails:")

for emails in Emails:
    print(emails)
    pyperclip.copy(pyperclip.paste()+emails+"\n")






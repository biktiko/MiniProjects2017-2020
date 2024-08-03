import random
guess = ''

while True:
    print('Угадайте результат! Введите орёл или решка (0/1)')
    
    guess = int(input())

    toss = random.randint(0, 1) # 0 - решка, 1 - орёл
    if toss == guess:
        print('Есть!')
    else:
        print('Увы! Попробуйте снова!')
        guess = int(input())
        toss = random.randint(0, 1) # 0 - решка, 1 - орёл
        if toss  == guess:
            print('Есть!')
        else:
            print('Нет. Вам действительно не везёт в этой игре')

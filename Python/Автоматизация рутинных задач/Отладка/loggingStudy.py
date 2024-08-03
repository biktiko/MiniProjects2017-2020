import logging, os 

os.chdir('D:\\Тигран\\TigranProgrammerHistory\\Python\\Автоматизация рутинных задач\\Отладка')


# logging.disable(logging.CRITICAL)
# отключает logging

logging.basicConfig(filename= 'log.txt', level = logging.DEBUG, format = ' %(asctime)s - %(levelname)s - %(message)s')
# level names
# 1)debug, 2) info, 3) warning, 4) error, 5)critical 

def factorial(n):
    logging.debug('Start factorial(%s)' % (n))
    total = 1
    for i in range(1, n + 1):
        total *= i
        # logging.debug('i= ' + str(i) + ', total = ' + str(total))
        logging.debug('i= ' + str(i) )
        # print('i= ' + str(i) + ', total = ' + str(total))
    logging.error('End factorial(%s)' % (n))
    return total

# print(factorial(10000))



print(factorial(10))


logging.debug('Program end')
        




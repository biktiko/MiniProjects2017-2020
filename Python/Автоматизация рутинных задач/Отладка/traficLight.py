mission_16th = {'ns': 'red', 'ew': 'green'}

market_2nd = {'ns': 'green', 'ew': 'red'}

a=3
def swicthLight(stopLight):
    for key in stopLight.keys():
        if stopLight[key] == 'green':
            stopLight[key] = 'yellow'
        elif stopLight[key] == 'yellow':
            stopLight[key] = 'red'
        elif stopLight[key] == 'red':
            stopLight[key] = 'green'
        assert 'red' in stopLight.values(), 'Ни один из сигналов не является красным! ' + str(stopLight)


swicthLight( market_2nd)
# swicthLight( mission_16th)

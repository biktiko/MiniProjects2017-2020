# запускает карту в браузере, извлекая почтовый адрес из командной строки или буфера обмена.

import webbrowser, sys, pyperclip

webbrowser.register('chrome', None, instance=webbrowser.BackgroundBrowser("C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"))

if len(sys.argv)>1:
    address = ' '.join(sys.argv[1:])
else:
    address = pyperclip.paste()
    
webbrowser.get('chrome').open_new_tab('google.com/maps/place/' + address)

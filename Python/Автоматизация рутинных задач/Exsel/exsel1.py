import openpyxl, os

os.chdir('D:\\Тигран\\TigranProgrammerHistory\\Python\\Автоматизация рутинных задач\\Exsel')
wb = openpyxl.load_workbook('example.xlsx')

# print(type(wb))
# print(wb.get_sheet_names())

sheet = wb.get_sheet_by_name('Лист1')

print(sheet['A1'].value)
print(sheet['A1'].row)
print(sheet['A1'].column)
print(sheet['A1'].coordinate)

print(sheet.get_highest_column())
print(sheet.get_highest_row())






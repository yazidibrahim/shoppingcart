student = {}
Valid = 1
while Valid:
    try :
       n = int(input("enter the number of students"))
       Valid = 0
    except ValueError:
       print('invalid input')
       valid = 1
for i in range(1,n+1):
    name = input(f"enter the name of student {i} ")
    while not Valid:
        try:
            marke = int(input("enter the english mark of the student"))
            Valid = 1
        except ValueError:
            print('Invalid')
            Valid = 0
    while Valid:
        try:
            markm = int(input("enter the malayalam mark of the student"))
            Valid = 0
        except ValueError:
            print('Invalid')
            Valid = 1
    while not Valid:
        try:
            markh = int(input("enter the hindi mark of the student"))
            Valid = 1
        except ValueError:
            print('Invalid')
            Valid = 0
    Valid = 0
    student[i] = {'fname' : name, 'emark' : marke, 'mmark':markm,'hmark':markh}
print(student)
sorted_student = dict(sorted(student.items(), key=lambda item:item[1]['fname']))
roll = 1
print('After Sorting')
for i in sorted_student.values():
    print(f'{roll}:{i}')
    roll +=1
roll=1
for student in sorted_student.values():
    print(f'Roll No:{roll}')
    print(f"Name:{student['fname']}")
    print(f"English mark:{student['emark']}")
    print(f"Malayalam mark:{student['mmark']}")
    print(f"Hindi Mark:{student['hmark']}")
    print()
    roll+=1
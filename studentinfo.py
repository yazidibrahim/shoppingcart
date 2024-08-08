
student_dict = {} 
red = 1
english = 1
malayalam = 1
hindi =  1
Valid = 1
while Valid:
    try:
      n = int(input("Enter the number of students: ")) 
      Valid = 0
      continue
    except ValueError:
      print("Invalid")
      Valid =1
for i in range(1,n+1): 
    english =1
    malayalam=1
    hindi=1
    red = 1
    while red :
        name = input(f"Enter name of the student {i}: ") 
        while english:   
            try:
                markse = int(input("Enter english marks: "))
                english= 0
                red = 0
            except ValueError:
                print("Invalid")
                english = 1
                continue
        while malayalam:  
            try:
                marksm = int(input("Enter malayalam marks: "))
                malayalam = 0
                red = 0
            except ValueError:
                print("Invalid")
                malayalam = 1
                continue
        while hindi:  
            try:
                marksh = int(input("Enter hindi marks: "))
                hindi =0
                red = 0
                break
            except ValueError:
                print("Invalid")
                hindi = 1
                continue
    student_dict[i] = {'name': name, 'english marks': markse, 'malayalam marks' : marksm, 'hindi marks' : marksh} 

for key,values in student_dict.items():
    print(f'{key}:{values}')
sorted_student = dict(sorted(student_dict.items(),key = lambda item: item[1]['name']))

roll = 1
updated_sorted = {}
for i,j in sorted_student.items():
    updated_sorted[roll] = j
    roll +=1
print('After Sorting')
for key,values in updated_sorted.items():
        print(f"{key}:{values}")



n = int(input("enter the number of days"))
days = []
l = 0
b = 0
s = 0
j= 1
print('enter the price for each day')
for i in range(n):
 while len(days) != n :
  try:
    enter = int(input(" : "))
  except ValueError:
    print("Invalid")
    break
  days.append(enter)
print(days)
for i in range(len(days)):
 j = j + i
 for j in range(j,len(days)):
  if (days[i] <= days[j]):
   k = days[j] - days[i]
   if k >= l:
     l = k
     b = i
     s = j
  j = 0
buyd = b + 1
selld = s + 1
profit = l
print(f'buy day is {buyd} and sell day is {selld} and profit is {profit}')
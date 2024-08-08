import random

def find(sysg,guess) :
    rab = 0
    tort = 0
    for i in range(4):
        if guess[i] == sysg[i]:
            rab += 1
        else:
            if guess[i] in sysg :
                tort += 1       
    return rab,tort

def sysgen():
    sys = random.randint(1000,10000)
    print (sys)
    return str(sys)

while True :
    sysg = sysgen()
    while True :
        guess = input("Enter your four digit number : ")
        if len(guess) != 4 or not guess.isdigit() :
            print('invalid')
            continue
        elif guess == sysg :
            print("WINNER")
            break
        else :
            rabbit,tortoise = find(sysg,guess)
            print(f"You got {rabbit} rabbit")
            print(f"You got {tortoise} tortoise")
    ans = input('do you want to enter y/n')
    if ans.lower() != 'y' :
        break
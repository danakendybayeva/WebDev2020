a = int(input())
i = 2
while(i < a + 1):
    if(a % i == 0): 
        print(str(i))
        break
    i += 1
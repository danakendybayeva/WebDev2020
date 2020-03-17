import math

a = int(input())
i = 1
while(i < math.ceil(math.sqrt(int(a + 1)))):
    print(str(int(i * i)))
    i += 1

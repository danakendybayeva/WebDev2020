import math

a = int(input())
b = int(input())

for y in range(math.ceil(math.sqrt(int(a))), math.ceil(math.sqrt(int(b + 1)))):
    print(str(int(y * y)), end = ' ')

n=int(input())
value=1
b=False
if n == 1:
    b = True
while value < n:
    value *= 2
    if value == n:
        b = True
if b == True:
    print("YES")
else:
    print("NO")
n = int(input())
a = list(map(int,input().strip().split()))[:n] 
for x in a:
    if x % 2 == 0:
        print(str(x), end=' ')
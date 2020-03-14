n = int(input())
a = list(map(int,input().strip().split()))[:n] 
k = 0
for x in a:
    if k % 2 == 0:
        print(str(x), end=' ')
    k += 1
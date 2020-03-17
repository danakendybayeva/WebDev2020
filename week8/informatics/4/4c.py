n = int(input())
a = list(map(int,input().strip().split()))[:n] 
k = 0
for x in a:
    if x > 0:
        k += 1

print(str(k))
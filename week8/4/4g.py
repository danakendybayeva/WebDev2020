import math

n = int(input())
a = list(map(int,input().strip().split()))[:n] 
length = len(a)
# temp = 0
for i in range(n-1, -1, -1):
    print(a[i], end=' ')
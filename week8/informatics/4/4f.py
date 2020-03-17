n = int(input())
a = list(map(int,input().strip().split()))[:n] 
length = len(a)
k = 0
for i in range(1, length - 1):
    if (a[i - 1] < a[i]) and (a[i + 1] < a[i]):
        k += 1
print(str(k))
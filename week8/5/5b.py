def power(a, n):
    i = 1
    res = 1
    while i <= n:
        res = res * a
        i += 1
    return res
x, y = input().split()
ans = power(int(x), int(y))
print(ans)
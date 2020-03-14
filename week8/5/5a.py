import math
def min(a, b):
    if a < b: return a
    else: return b

a, b, c, d = input().split()

mini = min(min(a, b), min(c, d))
print(str(mini))
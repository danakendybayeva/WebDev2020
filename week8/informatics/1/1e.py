v = int(input())
t = int(input())

if v < 0: ans = (v*t)%109
else: ans = 109-((-v)*t)%109

if ans == 109: ans = 0

print(str(int(ans)))
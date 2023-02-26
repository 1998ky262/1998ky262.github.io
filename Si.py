n = int(input())
a = input().split(" ")
a = sorted(a)
for count in range(n-1):
    a.pop(0)
    a.pop(len(a)-1)
a = [int(x) for x in a] 
print(sum(a)/len(a))

array = [[1,2,3,4],[5,6,7,8]]

# print array[0][0]

arrayLength = len(array)

for i in range(arrayLength):
  arrayLengthInner = len(array[i])
  for j in range(arrayLengthInner):
    print array[i][j]

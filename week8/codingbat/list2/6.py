def has22(nums):
  twos = []
  for i in range(len(nums)):
    if nums[i] == 2:
      twos.append(i)
  for i in range(len(twos)-1):
    if twos[i+1] - twos[i] == 1:
      return True
  return False
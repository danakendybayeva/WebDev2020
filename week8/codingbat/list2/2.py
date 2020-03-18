def big_diff(nums):
  maxi = nums[0]
  mini = nums[0]
  for i in nums:
    if i > maxi:
      maxi = i
    if i < mini:
      mini = i
  return maxi - mini

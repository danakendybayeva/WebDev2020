def centered_average(nums):
  total = 0
  nums.remove(max(nums))
  nums.remove(min(nums))
  for i in nums:
    total += i
  return total/len(nums)

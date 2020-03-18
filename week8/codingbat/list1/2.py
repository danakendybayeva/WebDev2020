def same_first_last(nums):
  if len(nums) < 1:
    return False
  else:
    if nums[0] == nums[len(nums)-1]:
      return True
    else:
      return False
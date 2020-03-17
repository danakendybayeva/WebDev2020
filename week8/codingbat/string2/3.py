def cat_dog(str):
  cat = 0
  dog = 0
  for i in range(len(str)-2):
    if str[i] == "c" and str[i+1] == "a" and str[i+2] == "t":
      cat += 1
    elif str[i] == "d" and str[i+1] == "o" and str[i+2] == "g":
      dog += 1
  if cat == dog:
    return True
  else:
    return False
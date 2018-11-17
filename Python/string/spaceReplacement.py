class Solution:
  def spaceReplacement(self, s):
    a = s.split(' ')
    separator = '%20'
    return separator.join(a)
if __name__ == '__main__':
  s = 'abc eg hh '
  x = Solution()
  print(x.spaceReplacement(s))
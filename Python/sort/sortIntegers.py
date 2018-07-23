# -*- coding:UTF-8 -*-
class Solution:
    """
    @ param A: an integer array
    @ return: nothing
    @ solution: selection(选择排序), bubble(冒泡排序), insertion(插入排序)
    """
    def sortIntegers(self, A):
        # write your code here        
        
        ## selection

        # for i in range(len(A)-1):
        #     min_val = A[i]
        #     temp = i 
        #     for j in range(i, len(A)-1):
        #         if min_val > A[j+1]:
        #             min_val = A[j+1]
        #             temp = j + 1
        #     A[temp] = A[i]
        #     A[i] = min_val  
        # return A
        
        
        ## bubble
        # for i in range(len(A)-1):
        #     for j in range(len(A)-i-1):
        #         if A[j] > A[j+1]:
        #             temp = A[j]
        #             A[j] = A[j+1]
        #             A[j+1] = temp
        # return A
        
        
        # insertion
        for i in range(len(A)-1):
            for j in range(i, -1, -1):
                if A[j+1] < A[j]:
                    temp = A[j]
                    A[j] = A[j+1]
                    A[j+1] = temp
                else:
                    break               
        return A
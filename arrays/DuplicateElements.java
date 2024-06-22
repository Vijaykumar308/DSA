/**
 * 1. Remove Duplicates Elements From Soarted Array 
 */

package arrays;

import java.util.Arrays;

public class DuplicateElements {
    public static void main(String[] args) {
        
        int[] arr = {1,1,3,4,4,6,6,6,7,8}; 

        removeDuplicatesFromSortedArray(arr);
        System.out.println(Arrays.toString(arr));
    }

    static int removeDuplicatesFromSortedArray(int arr[]) {
        int n = arr.length;

        // if(array size if 0 or 1 array is already sorted)
        if (n == 0 || n == 1) {
            return n;
        }
 
        int j = 0;
 
        // check if the ith element is not equal to
        // the (i+1)th element, then add that element
        // at the jth index in the same array
        // which indicates that te particular element
        // will only be added once in the array

        for (int i = 0; i < n - 1; i++) {
            if (arr[i] != arr[i + 1]) {
                arr[j++] = arr[i];
            }
        }
 
        arr[j++] = arr[n - 1];
 
        return j;
    }

}

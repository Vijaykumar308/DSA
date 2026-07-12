/**
 * 977. Squares of a Sorted Array - Leetcode
 * Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
 */

import java.util.Arrays;

public class SquaresOfASortedArray {
    public static void main(String[] args) {
        int[] example  = {-4, -1, 0, 3, 10};
        int[] res = func(example);
    }

    public static int[] func(int[] arr) {
        int[] pos = new int[arr.length];
        int[] neg = new int[arr.length];
        int k = 0; int l = 0;
        for(int i = 0; i < arr.length; i++) {
            if(arr[i] > 0) {
                pos[k] = arr[i];
                k++;
            }
            else {
                neg[l] = arr[i];
                l++;
            }
        }

        System.out.println(Arrays.toString(pos));
        System.out.println(Arrays.toString(neg));
        return arr;
    }
}

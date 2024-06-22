package arrays;

import java.util.Arrays;

public class SecondLargest {
    public static void main(String[] args) {
        int[] arr = {1, 2, 4, 7, 7, 5};
        // System.out.println(sLargestBrutForce(arr));
        // System.out.println(sLargestBetter(arr));
        System.out.println(sLargestBest(arr));
    }

    static int sLargestBrutForce(int arr[]) {
        Arrays.sort(arr);
        int n = arr.length;
        for(int i = n-2; i > 0; i--) {
            if(arr[i] != arr[n-1]) {
                return arr[i];
            }
        }
        return -1;  // T.C = O(N * logN + N)
    }


    static int sLargestBetter(int[] arr) {
        // int[] arr = {1, 2, 4, 7, 7, 5};
        int largest = arr[0], slargest = 0;

        for(int i = 0; i < arr.length; i++) {
            if(arr[i] > largest) {
                slargest = largest; 
                largest = arr[i]; 
            }

            if(arr[i] > slargest && arr[i] != largest) {
                slargest = arr[i];
            } 
        }
        return slargest; 
        // TC: O(N)
    }

    static int sLargestBest(int arr[]) {
        int largest = arr[0], sLargest = -1;
        for(int i = 0; i < arr.length; i++){
            if(arr[i] > largest) {
                sLargest = largest;
                largest = arr[i];
            }
            else if(arr[i] < largest && arr[i] > sLargest) {
                sLargest = arr[i];
            }
        }
        return sLargest;
        // TC: O(N)
    }
}

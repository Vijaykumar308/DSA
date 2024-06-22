/**
 * 1. Swap Array with two given indics
 * 2. Find the Min and Max from given array
 * 3. Reverse an Array;
 * 4. Check Array is sorted or not
 */
package arrays;
import java.util.Arrays;

public class BasicPrograms {
    public static void main(String[] args) {
        int[] arr = {10, 130, 22, 45, 12};
        int n = arr.length;
        for(int i = 1; i < n; i++) {
            for(int j=0; j < n-i; j++) {
                if(arr[j] > arr[j+1])
                    swap(arr,j,j+1);
            }
        }













        System.out.println(Arrays.toString(arr));
        
        /** =========== Swaping ================**/
        swap(arr, 0, 4);
        // System.out.println(Arrays.toString(arr));
        
        /** =========== Maximum ================**/
        // System.out.println(max(arr));

        /** =========== Minimum ================**/
        // System.out.println(min(arr));

        /** =========== IsSorted ================**/
        // int[] isSortedArr = {1,2,4,7,8,9};
        // System.out.println(isSorted(isSortedArr));
    }

    static void swap(int[] arr, int index1, int index2) {
        int temp;
        
        temp = arr[index2];
        arr[index2] = arr[index1];
        arr[index1] = temp;
    }

    static int max(int arr[]) {
        int maximun = arr[0];

        for(int nums: arr) {
            if(nums > maximun) {
                maximun = nums;
            }
        }

        return maximun;
    }

    static int min(int arr[]) {
        int min = arr[0];

        for (int nums : arr) {
            if(nums < min){
                min = nums;
            }
        }

        return min;
    }

    static boolean isSorted(int arr[]){
        // int[] isSortedArr = {1,2,4,7,8,9};
        for(int i = 0; i < arr.length - 1; i++) {
            if(arr[i] <= arr[i+1]) {
                continue;
            }
            else {
                return false;
            }  
        }

        return true;
    }
}

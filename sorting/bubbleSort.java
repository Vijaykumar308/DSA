import java.util.Arrays;

/**
 * bubbleSort
*/
public class bubbleSort {

    public static void main(String[] args) {
        int[] arr = {45,3,2,5,7,87,3,26,30};
        System.out.println(Arrays.toString(arr));

        bSort(arr);
        
        System.out.println(Arrays.toString(arr));

    }

    public static void bSort(int[] arr) {
        boolean swapped = false;
        for(int i = 0; i < arr.length; i++) {
           for(int j = 1; j < arr.length - i; j++) {
                if(arr[j] < arr[j - 1]) {
                    swap(arr, j, j-1);
                    swapped = true;
                }
           }
           if(!swapped) {
                break;
           }
        }
    }

    public static void swap(int[] arr, int index1, int index2) {
        int temp = arr[index1];
        arr[index1] = arr[index2]; 
        arr[index2] = temp;
    }
   
}
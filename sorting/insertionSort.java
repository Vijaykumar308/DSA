import java.util.Arrays;

public class insertionSort {
   public static void main(String[] args) {
        int[] arr = {7,3,5,8,2,1,4};
        
        System.out.println(Arrays.toString(arr));
        insertion(arr); 

        System.out.println(Arrays.toString(arr));
   } 

   static void insertion(int[] arr) {
        for(int i = 0; i < arr.length - 1; i++) {
            for(int j = i+1; j > 0; j--) {
                if(arr[j] < arr[j-1]) { 
                    swap(arr, j, j-1);
                }
                else {
                    break;
                }
            }
        }
   }

   public static void swap(int[] arr, int index1, int index2) {
        int temp = arr[index1];
        arr[index1] = arr[index2]; 
        arr[index2] = temp;
    }

}

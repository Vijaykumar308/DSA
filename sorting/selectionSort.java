import java.util.Arrays;

public class selectionSort {
    public static void main(String[] args) {
        int[] arr = {7,3,5,8,2,1,4};
        
        System.out.println(Arrays.toString(arr));
        selection(arr); 

        System.out.println(Arrays.toString(arr));
    }

    static void selection(int[] arr) {
        for(int i = 0; i < arr.length; i++) {
            int last  = arr.length - 1 - i;
            int maxValIndex = getMaxValueIndex(arr,0, last);
            swap(arr, maxValIndex, last);
        }
    }


    static int getMaxValueIndex(int[] arr, int start, int end) {
        int maxIndex = start;
        for(int i = start; i <= end; i++) {
            if(arr[maxIndex] < arr[i]){
                maxIndex = i;
            }
        }
        return maxIndex;
    }

    static void swap(int[] arr, int index1, int index2) {
        int temp = arr[index1];
        arr[index1] = arr[index2]; 
        arr[index2] = temp;
    }

}

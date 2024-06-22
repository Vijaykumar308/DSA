// Online Java Compiler
// Use this editor to write, compile and run your Java code online
import java.util.Arrays;
class test {
    public static void main(String[] args) {
        int[] arr = {3,5,4,1,2};
        System.out.println(Arrays.toString(arr));
        cyclicSort(arr);
        System.out.println(Arrays.toString(arr));
    }
    
    static void cyclicSort(int[] arr) {
        int i = 0;
        while(i < arr.length) {
        int rightIndex = arr[i] - 1;
            if(arr[i] != arr[rightIndex]) {
                swap(arr, i, rightIndex);
            }
            else {
                i++;
            }
        }
        
    }
    
    static void swap(int[] arr, int first, int second) {
        int temp = arr[first];
        arr[first] = arr[second];
        arr[second] = temp;
    }
}
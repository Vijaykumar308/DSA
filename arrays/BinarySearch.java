package arrays;

public class BinarySearch {
    public static void main(String[] args) {
        int[] arr = {1,3,5,6,8,9,14,17,18,20};
        int target = 20;
        int ans = binarySearch(arr, target);

        System.out.println(ans);
    }
    
    static int binarySearch(int[] arr, int target) {
        int start = 0, end = arr.length - 1;
        int mid;
        while (start <= end) {
            mid = start + (end - start) / 2; 
            
            if(arr[mid] < target) {
                start = mid + 1;
            }
            else if(arr[mid] > target) {
                end = mid - 1;
            }
            else
            {
                return mid;
            }

        }
        return -1;
    }
}
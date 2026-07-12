import java.util.Arrays;

public class TwoSum {
    public static void main(String[] args) {
        int[] arr = {3,2,4};
        int target = 6;
        int[] res = twoSum(arr, target);
        System.err.println(Arrays.toString(res));
    }

    public static int[] twoSum(int[] arr, int target) {        
        int start = 0; int end = arr.length - 1;

        while (start <= end) {

            if((arr[start] + arr[end]) == target) {
                return new int[]{start, end};
            }

            else if((arr[start] + arr[end]) < target) {
                start++;
            }

            else if((arr[start] + arr[end]) > target) {
                end--;
            }

        }
        return new int[]{-1,-1};
    }
}
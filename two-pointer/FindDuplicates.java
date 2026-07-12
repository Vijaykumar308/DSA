import java.util.Arrays;

public class FindDuplicates {
    public static void main(String[] args) {
        int[] example = {0,0,1,1,1,2,2,3,3,4};

        System.out.println("Before logic");
        System.out.println(Arrays.toString(example));

        System.err.println("After logic");
        System.err.println(Arrays.toString(duplicates(example)));
    }

    public static int[] duplicates(int[] arr) {
        int curr = 0;
        for(int i = 1; i < arr.length; i++) {
            if(arr[i] != arr[curr]) {
                arr[curr + 1] = arr[i];
                curr++;
            }
        }
        return arr;
    }
} 
import java.util.Arrays;

public class MergeSort {
    public static void main(String[] args) {
        int[] arr = {10, 4, 5, 23, 18, 56, 34,12, 15};
        System.out.println(Arrays.toString(arr));
        System.out.println("After sorting");
        System.out.println(Arrays.toString(mergeSort(arr)));
    }

    static int[] mergeSort(int[] arr) {
        if(arr.length <= 1) {
            return arr;
        }

        int mid = arr.length / 2;

        int[] left = mergeSort(Arrays.copyOfRange(arr, 0, mid));
        int[] right = mergeSort(Arrays.copyOfRange(arr, mid, arr.length));

        return merge(left, right);
    }

    static int[] merge(int[] first, int[] second) {
        int[] mix = new int[first.length + second.length];

        int i = 0;
        int j = 0;
        int k = 0; 

        while (i < first.length && j < second.length) {
            if(first[i] < second[j]) {
                mix[k] = first[i];
                i++;
            }
            else {
                mix[k] = second[j];
                j++;
            }

            k++;
        }

        // It may be possible any one of the arrays are not sorted;
        while (i < first.length) {
            mix[k] = first[i];
            i++;
            k++;
        }

        while (j < second.length) {
            mix[k] = second[j];
            j++; 
            k++;
        }

        return mix;
    }
}

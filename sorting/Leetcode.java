import java.util.Arrays;

class Leetcode {

    public static void main(String[] args) {
        int[][] grid = {{1,3}, {2,2}};
        int[] linearArr = flatArr(grid);
        cyclicSort(linearArr);
        System.out.println("output");
        System.out.println(Arrays.toString(linearArr));
        // findMissingAndRepeatedValues(arr);
    }


    static void findMissingAndRepeatedValues(int[] arr) {
        cyclicSort(arr);
    }

    static int[] flatArr(int[][] matrix) {
        int[] arr = new int[matrix.length * matrix.length];
        int index = 0;
        for(int i = 0; i < matrix.length; i++) {
            for(int j=0; j < matrix.length; j++) {
                arr[index] = matrix[i][j]; 
                index++;
            }
        }
        return arr;
    }

    // int[][] grid = { {9,1,7},{8,9,2},{3,4,6}};
    static void cyclicSort(int[] arr) {    
        int i = 0;
        while(i < arr.length) { // 9
            int correctIndex = arr[i] - 1;  // 8
            if(arr[i] != arr[correctIndex]) {
                swap(arr, arr[i], arr[correctIndex]);
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

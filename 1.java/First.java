/**
 * 1. Swap Array with two given indics
 * 2. Find the Min and Max from given array
 * 3. Reverse an Array;
 */

import java.util.ArrayList;

public class First {
    public static void main(String[] args) {
        
        ArrayList<Integer> arr = new ArrayList<Integer>(10);
        
        for(int i = 10; i < 15; i++){
            arr.add(i);
        }

        System.out.println(arr);
        // swap(arr, 2, 1);
        System.out.println(min(arr));
    }

    static void swap(ArrayList<Integer> arr, int index1, int index2) {
        int temp; 

        temp = arr.get(index2);
        arr.set(index2, arr.get(index1));
        arr.set(index1, temp);
    }

    static int max(ArrayList<Integer> arr) {
        int max = arr.get(0);

        for(int i=0; i<arr.size(); i++) {
            if(arr.get(i) > max) {
                max  = arr.get(i);
            }
        }

        return max;
    }

    static int min(ArrayList<Integer> arr) {
        int min = arr.get(0);

        for(int i = 0; i < arr.size(); i++) {
            if(arr.get(i) < min) {
                min = arr.get(i);
            }
        }
        return min;
    }
}

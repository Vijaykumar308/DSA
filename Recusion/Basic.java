package Recusion;

public class Basic {
    public static void main(String[] args) {
        // Q:1)
        //           0 1 2 3 4
        // int[] arr = {2,4,5,6,8};
        // int ans = sumOfArray(arr, 0,0);
        // int ans  = sumAll(arr, 0);
        // System.out.println(ans);

        // Q: 2
        // int [] arr = {1,15,4,7,16};
        // System.out.println(largestElement(arr, 0,arr[0]));

        // Q: 3 => Print Odd even values for given range n;
        // printOddEven(10);
    }

    static void printOddEven(int n) {
        if(n <=0) {
            return;
        }

        printOddEven(n - 1);
        if(n % 2 == 0) {
            System.out.print(" even"+n);
        }
        else {
            System.out.print(" odd"+n);
        }
    }

    static int largestElement(int[] arr, int i, int max) {
        if(i == arr.length - 1) {
            return max > arr[arr.length - 1] ? max : arr[arr.length - 1];
        }

        if(arr[i] > max) {
            max = arr[i];
        }

        return largestElement(arr, i+1, max);
    }


    static int sumAll(int[] arr, int i) {
        if(i == arr.length - 1){
            return 0;
        }
        return arr[i] + sumAll(arr, i+1);
    }

    // my logic
    static int sumOfArray(int[] arr, int i, int sum) {
        if(i == arr.length - 1)
            return sum + arr[i];

        return sumOfArray(arr, i+1, sum + arr[i]);

    }

    static void printN(int n) {
        if(n==1) {
            return;
        }
        printN(n-1);
        System.out.println(n);
    }

    static int sumOfNumber(int n) {
        if(n == 1) {
            return 1;
        }
        return n + sumOfNumber(n - 1);
    }
}

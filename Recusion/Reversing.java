package Recusion;

public class Reversing {
    public static void main(String[] args) {
        // String  str = "vijay kumar";
        // System.out.println(reverseString(str));
        // System.out.print(revString(str, "", str.length() - 1));

        System.out.println(revNumber(124555434));
    }

    static int revNumber(int n) {
        if(n/10 <= 0){
            return n%10;
        }
        System.out.print(n%10);
        return revNumber(n/10);
    }
    
    // Acctual code
    static String revString(String str, String rev, int i) {
        if(i < 0) {
            return rev;
        }

        return revString(str, rev + str.charAt(i), i-1);
    }
    
    // my code 
    static String reverseString(String str) {
        String rev = "";
        int i = str.length() - 1; // 4

        if(i == 0) {
            return rev + (String)str.substring(0);
        }

        return rev + (String)reverseString(str.substring(0, i));
    }
}

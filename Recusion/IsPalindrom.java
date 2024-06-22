package Recusion;

public class IsPalindrom {
    public static void main(String[] args) {
        String s = "madam";
        System.out.println(isStringPalindrom(s, 0, s.length() - 1));
    }   

    static boolean isStringPalindrom(String str, int first, int last) {        
        if(str.charAt(first) != str.charAt(last)) {
            return false;
        }

        if(first >= last) {
            return true;
        }

        return isStringPalindrom(str, first+1, last-1);
    }
}

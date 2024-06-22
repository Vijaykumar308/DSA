package Recusion;

public class CountDigits {
    public static void main(String[] args) {
        System.out.println(totalDigits(1343562));
    }
    static int totalDigits(int n) {
        if(n/10 <= 0) {
            return 1;
        }

        return 1 + totalDigits(n/10);
    }
}

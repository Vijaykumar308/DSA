import java.util.Scanner;

public class PrimeNumber {
    public static void main(String[] args) {
        try (Scanner input = new Scanner(System.in)) {
            int n = input.nextInt();
            System.out.println(isPrime(n));
        }
    }

    static boolean isPrime(int n) {
        if(n == 1)
            return false;

        if(n==2 || n==3)
            return true;
        
        if(n%2==0 || n%3==0)
            return false;
        
        for(int i=5; i < Math.sqrt(n); i= i+6) {
            if(n%i==0) {
                return false;
            }
        }
        return true;
    }
}

package Recusion;

public class Fibbonachi {
    public static void main(String[] args) {
        System.out.println(fibbo(5));
    }

    static int fibbo(int n) {
        if(n==1 || n==2) {
            System.out.print(n+"  ");
            return 1;
        }
        System.out.print(n+"  ");
        return fibbo(n-1) + fibbo(n-2);
    }
}

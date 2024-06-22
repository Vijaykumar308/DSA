package BitManupulation;

public class checkPowerOf2 {
    public static void main(String[] args) {
        isPowerOf2(8);
    }

    static void isPowerOf2(int n){
        if((n & (n-1)) == 0){
            System.out.println("true");
        }
        else {
            System.out.println("false");
        }
    }
}

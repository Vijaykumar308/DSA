/**
 * 1. Find the position of right most set bit;
 */
public class BitManupulation {
    public static void main(String[] args) {

        // posOfRightMSB(0);
        optimisedPosOfRightMSB(0);
        // switchOnBits(36, 3);
        // switchOffBits(36, 2);
        // toggleBits(36, 5);
    }   

    static void optimisedPosOfRightMSB(int n) {
        if(n == 0) {
            System.out.println(-1);
            return;
        }

        int ans = n ^ (n & (n - 1));
        ans =(int)(Math.log10(ans)/ Math.log10(2));
        System.out.println(ans + 1);
        // return (int)Math.log10(ans);
    }

    static void posOfRightMSB(int n) {
        int mask = 1;
        int pos = 1;
        if(n == 0) 
            System.out.println(-1);
        while((n & mask) == 0) {
            mask =  mask << 1;
            pos++;
        }
        System.out.println(pos);
    }

    static void toggleBits(int n, int i) {
        int temp = 1 << i;
        System.out.println(n ^ temp);
    }
    static void switchOffBits(int n, int i){
        int temp = ~(1 << i);
        System.out.println(n & temp);
    }


    static void switchOnBits(int n, int i) {
        int temp =  1 << i;
        System.out.println(n | temp);
    }
}

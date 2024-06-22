public class HCF {
    public static void main(String[] args) {
        // System.out.println(GCD(20,15));
        // System.out.println(euclidGCD(133,117));
        System.out.println(gabrialLame(133,117));

    }

    //Brute force Approch
    static int GCD(int a, int b) {
        int min = a < b ? a :b;
        
        for(int i = min; i >= 1; i--) {
            if((a % i == 0)  && (b % i == 0)){
                return i;
            }
        }
        return 1;
    }

    // Better
    static int euclidGCD(int a,int b){
        while(a != b) {
            if(a > b) {
                a = a-b;
            }
            else {
                b= b-a;
            }
        }
        return a;
    }

    //Best => Gabrial Lame; Optimise of Eulid's Approch

    static int gabrialLame(int a, int b) {

        while (a != 0 && b != 0) {
            if(a > b) {
                a = a % b;
            }
            else {
                b= b%a;
            }
        }
        return (a != 0) ? a : b;
    }


}

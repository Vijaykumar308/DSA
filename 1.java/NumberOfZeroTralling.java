public class NumberOfZeroTralling {
    public static void main(String[] args) {
        int number = 32;

        System.out.println(traillingZeros(number));
    }

    static int traillingZeros(int n) {
        int powerOf5 = 5;
        int res = 0;
        while(n >= powerOf5){
            res = res + (n/powerOf5);
            powerOf5 = powerOf5 * 5;
        }

        return res;
    }
}

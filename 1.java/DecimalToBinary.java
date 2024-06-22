public class DecimalToBinary {
    public static void main(String[] args) {
        // b2d(45);   
        d2b("1010");
    }

    static void d2b(String binary) {
        int decimal = 0;
        int powerOf2 = 1;
        for(int i = binary.length() - 1; i >= 0; i--) {
            if(binary.charAt(i) == '1') {
                decimal = decimal + powerOf2; 
            }
            powerOf2 = powerOf2 * 2;
        }
        System.out.println(decimal);
    }

    static void b2d(int n) {
        int rem;
        String binary = "";
        if(n==0) {
            System.out.println("00000000");
            return;
        }
        while(n > 0) {
            rem = n % 2;
            binary = rem+binary;
            n = n / 2;
        }

        if(binary.length() < 8) {    
            for(int i = 1; i <= (8 - binary.length()); i++) {
                binary = "0"+binary;
            }
        }
        System.out.println(binary);
    }
}

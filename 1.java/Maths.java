public class Maths {
    public static void main(String[] args) {
        int number = 32;
        System.out.println(countNumber(number)); 
    }

    static int countNumber(int number) {
        int count = 0;
        while(number > 0) {
            count++;
            number /=10;
        }

        return count;
    }
}

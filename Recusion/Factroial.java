package Recusion;

public class Factroial {
    public static void main(String[] args) {
        System.out.println(factroial(5));
    }

    static int factroial(int number){
        if(number == 0 || number == 1){
            return 1;
        }
        return number * factroial(number - 1);
    }
}

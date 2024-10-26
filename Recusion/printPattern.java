public class printPattern {
    public static void main(String[] args) {
        trangle(5,0);
    }

    static void trangle(int row, int col) {
        if(row == 0) {
            return;
        }

        if(col < row) {
            System.out.print("*");
            trangle(row, col+1);
        }
        else {
            System.out.println("");
            trangle(row -1, 0);
        }
    }
   
}

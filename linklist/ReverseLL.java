class Node {
    int data;
    Node next;

    public Node(int val) {
        this.data = val;
        this.next = null;
    }
}

class LinkList {
    Node head;
    public void displayLL() {
        Node temp = head;
        while (temp != null) {
            System.out.print(temp.data + "->");
        }   
    }

    public void convertArrToLL() {
        for(int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
            // Node newNode = new Node(arr[i]);
            // if(head == null) {
            //     head = newNode;
            // }  
        }

        // return head;
    } 
}

public class ReverseLL {
    
    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5,6};
        LinkList list = new LinkList();
        // list.convertArrToLL();

       list.displayLL();

    }

}

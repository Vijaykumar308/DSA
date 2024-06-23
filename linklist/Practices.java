class LL {

    class Node {
        int data;
        Node next;
    
        public Node(int data) {
            this.data = data;
        }
    }

    Node head;

    public void insertAtFirst(int data) {
        Node newNode = new Node(data);
        newNode.next = head;
        head = newNode; 
    }

    public void insertAtLast(int data) {
        Node newNode = new Node(data);
        Node mover = head;

        if(mover == null) {
            head = newNode;
            return;
        }

        while(mover.next != null) {
            mover = mover.next;
        }
        mover.next = newNode;
    }

    public void insertAtPos(int pos, int data) {
        Node newNode = new Node(data);
        Node temp = head;
        int currPos = 0;

        if(pos == 0) {
            insertAtFirst(data);
            return;
        }

        while(currPos < pos - 1) {

            if(temp == null) {
                System.out.println("Error no index founds");
                return;
            }

            temp = temp.next;
            currPos += 1;
        }
        

        newNode.next = temp.next;
        temp.next = newNode;
    }

    public void display() {
        Node temp = head;
        while (temp != null) {
            System.out.print(temp.data + "->");
            temp = temp.next;
        }
        System.out.println("null");   
    }
}

public class Practices {
    public static void main(String[] args) {
        LL list = new LL();
        list.insertAtFirst(50);  
        list.insertAtLast(100);  
        list.insertAtLast(200);  
        list.insertAtLast(250); 
        list.display();  
        list.insertAtPos(3, 550); 
        list.display();       
    }
}

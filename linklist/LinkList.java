class Node {
    int value;
    Node next;

    public Node(int value) {
        this.value = value;
        this.next = null;
    }
}

public class LinkList {
    Node head;

    public void insertFirst(int val) {
        Node newNode = new Node(val);
        if(head == null) {
            head = newNode;
            return;
        }
        newNode.next = head;
        head = newNode;
    }  

    void display() {
        Node temp = head;
        while(temp != null) {
            System.out.print(temp.value + "->");
            temp = temp.next;
        }
        System.out.print("NULL");
    }

    public static void main(String[] args) {
        LinkList list = new LinkList();
        list.insertFirst(10);
        list.insertFirst(30);
        list.insertFirst(30);
        list.insertFirst(40);
        list.display();
    }
}
// -------------------- EXERCÍCIO 01 --------------------
// Faça a implementação de uma Lista Ligada em *Typescript*. Implemente o método que adiciona um elemento ao final da lista e um método que imprima todos elementos presentes nela

class ListNode {
    constructor(
       public value: any = [],
       public next: ListNode | null  = null
    ){}
}

class LinkedList {
    constructor(
       public start: ListNode | null = null
    ) {}

    public addToTail = (value: any): void => {

        if(!this.start) {
            this.start = new ListNode(value)

        } else {

            let current = this.start

            while(current.next){
               current = current.next
            }

            current.next = new ListNode(value)
        }

    }

    public push = (
        value: any
     ) => {
  
    
     }

  }


const addElement: LinkedList = new LinkedList()
addElement.addToTail("Element1")
addElement.addToTail("Element2")
addElement.addToTail("Element3")

console.log(JSON.stringify(LinkedList))
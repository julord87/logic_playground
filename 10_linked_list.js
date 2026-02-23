class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    // Mientras haya un nodo siguiente, seguimos avanzando
    while (current.next) {
      newTail = current; // newTail siempre se queda un paso atrás
      current = current.next; // current avanza al siguiente
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    // Caso especial: si la lista tenía un solo elemento
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current; // Devolvemos el nodo eliminado (la vieja cola)
  }

  shift() {
    if (!this.head) return undefined;

    const head = this.head;

    this.head = this.head.next;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return head;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let count = 0;
    let current = this.head;

    while (count !== index) {
      current = current.next;
      count++;
    }

    return current;
  }

  set(index, value) {
    let current = this.get(index);

    if (current) {
      current.value = value;
      return true;
    }

    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;

    let newNode = new Node(value);
    let prev = index === 0 ? null : this.get(index - 1);

    

    if (index === this.length) {
      this.push(value);
    } else if (index === 0) {
      this.unshift(value);
    } else {
      newNode.next = prev.next;
      prev.next = newNode;
      this.length ++;
    }

    return true;
  }
}

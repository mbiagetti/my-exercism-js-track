const makeNode = (value, next = null, prev = null) => ({value, next, prev});

export class LinkedList {

  constructor() {
    this.head = null
    this.tail = null
    this.nodeCount = 0
  }

  push(item) {
    const newNode = makeNode(item)

    if (this.head === null) {
      this.head = newNode
      this.tail = this.head
    } else {
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
    }

    this.nodeCount++
  }

  pop() {
    const i = this.tail.value

    this.deleteNode(this.tail)

    return i
  }

  shift() {
    const i = this.head.value

    this.deleteNode(this.head)

    return i
  }

  unshift(item) {
    const newNode = makeNode(item, this.head)
    if (this.head !== null) {
      this.head.prev = newNode
    } else {
      this.tail = newNode
    }
    this.head = newNode

    this.nodeCount++
  }

  delete(item) {
    const node = this.findNodeByValue(item)

    if (node === null) return

    this.deleteNode(node)
  }

  deleteNode(node) {
    if (node === this.head) {
      this.head = this.head.next
    }
    if (node === this.tail) {
      this.tail = this.tail.prev
    }
    if (node.prev !== null) {
      node.prev.next = node.next
    }
    if (node.next !== null) {
      node.next.prev = node.prev
    }
    node = null
    this.nodeCount--

  }

  findNodeByValue(value) {
    let node = this.head
    while (node !== null) {
      if (node.value === value) {
        return node
      }
      node = node.next
    }

    return null
  }

  count() {
    return this.nodeCount
  }
}

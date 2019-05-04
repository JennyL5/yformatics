## Stacks & queues

So far we have looked at many different types of abstract data types with different properties. Now we will look at three new ones for where you have a collection of elements that you want to access in a particular order.

- Stacks <br>
  Last-in-first-out.

- Queues <br>
  First-in-first-out.

- Priority Queues <br>
  Elements have a priority ranking associated with them. The element with the highest priority is first out.

## Priority queues

The priority ranking values used simply need to be a linearly ordered set but there is no need for values to be consecutive or regularly periodic, as long as they can be compared. This type of abstract data type has slightly different methods it uses:

- insertItem(k,e) <br>
  Insert element e with key k.

- maxElement() <br>
  Return the element with the maximum key, this can be measured as the highest or lowest value depending on the implementation.

- removeMax() <br>
  Return the element with the maximum key and remove it from the queue.

In a binary search tree, the item with the maximum key will always be the furthest right interior vertex. This makes it a good contender for a way to implement a priority queue.

## Almost complete trees

These are a subset of binary search trees with two important properties:

- All levels except the last one must have the maximum possible number of vertices across it.

- On the second last level, all internal vertices are to the left of any leaves.

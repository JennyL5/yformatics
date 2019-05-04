## Heaps

A heap is an almost complete binary tree whose internal vertices store items such that for every vertex $v$ other than the root, the key stored
at $v$ is smaller than or equal to the key stored at the parent of $v$. Where the maximum element is at the root.

For all $n$ with $2^{h-1}$ $\leq$ n $\leq$ $2^{h} - 1$ we have $\lfloor{lg(n)}\rfloor = h - 1$.
The last vertex of a heap of height h is the right-most internal vertex in the $h^{th}$ level.


To find the maximum element in the heap:
```
function maxElement()
    return root.element
```

To remove the last element (last vertex) in the heap:
```
function removeMax()
    e = root.element
    root.element = last.item
    delete last
    heapify(root)
    return e

function heapify()
    if v.left is an internal vertex and v.left > v.key then
      s = v.left
    else
      s = v.key

    if v.right is an internal vertex and v.right > v.key then
      s = v.right

    if v != s then
      swap the items of v and s
      heapify(s)
```

To insert an item to last vertex in the heap, and swaps $v$ with $v$.parent if $v$’s key is bigger:
```
function insertItem(k, e)
   Create new last vertex v.
   while v is not the root and k > v.parent.key do
   store the item stored at v.parent at v
   v = v.parent
   store (k, e) at v
```


## Heaps as arrays
The items of the heap are stored in an array, with the internal vertices as indices of the array by numbering them level-wise from the left to the right. The $\lfloor{\frac{n-2}{n}}\rfloor$ is the maximum $v$ such that $2v + 1 \leq n - 1$.
<!--
To turn the heap to an array:
```
function buildHeap(H)
   n = H.length
   for v = $\lfloor{\frac{n-2}{n}}\rfloor$ downto 0 do
   for v =
   heapify(v)
```
-->

## Priority Queues

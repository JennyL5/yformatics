## Evaluating algorithms

There are many possible ways to measure how successful an algorithm is. Correctness, efficiency or simplicity are all valids aspects to evaluate. In this course, we will be looking in depth at the runtime of an algotithm.

The runtime can vary widely based on a number of factors such as the input, the code implementation and the machine used to execute the program. We will be looking at different algorithms at a high level; to account for different languages and implementations we examine these algorithms in pseudocode.

## Worst case vs average

When measuring runtime, there are many different perspectives that we can take.

The worst case of an algorithm specifies the maximum number of computations performed on an input of size n. This can be good at providing an upper bound but it is not very accurate when trying to predict real world statistics.

The average of an algorithm specifies the average number of computations performed on an input of size n. This can be more realistic estimation of an algorithm but there is debate about what 'average' actually means, as well as this calulation being much more complicated or even sometimes impossible.

## Big-O notation

The official definition is:

$\text{Let } f, g: \Bbb{N} \rightarrow \Bbb{R} \text{ be functions. We say that } f \text{ is } O(g) \text{ if there is some } n_0 \in \Bbb{N} \text{ and some } c \gt 0 \text{ from } \Bbb{R} \text{ such that for all } n \geq n_0 \text{ we have:}$

$$0 \leq f(n) \leq cg(n)$$

What this translates to, is that by '$f \text{ is } O(g)$' we are saying that 'for sufficiently large n', $f \in O(g)$. This tells us the growth rate of the runtime of an algorithm $f$ is no greater than that of $g$.

When writing this in practice, we use the form $f = O(g)$. For example:

- $3n^3 = O(n^3)$

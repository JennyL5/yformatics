## Introduction

Many computing problems often involve working with some kind of data and in many cases that data will need to be sorted. As algorithms used for this can deal with huge quantities of data, there is a huge efficiency benefit in using one method over another.

This topic will look at some specific algorithms and in particular the principle of 'divide and conquer'. Be aware that heap sort and quick sort may require you to cover the later topic on heaps and priority queues.

For all of these algorithms, we assume that the data is supplied in an array which we call A with length n.

## Insertion sort

To begin with, we will look at a simpler sorting algorithm which does not apply the divide and conquer principle. You will likely have seen insertion sort before, if not used it in your code.

```
function insertionSort(A)
    for (j = 1 to A.length - 1) do
        a = A[j]
        i = j - 1
        while (i >= 0 and A[i].key > a.key) do
            A[i + 1] = A[i]
            i = i - 1
        A[i + 1] = a
```

The asymptotic worst-case runtime of insertion sort is $\Theta(n^2)$.

## Merge sort

Merge sort takes a very different approach to sorting. It splits the array to be sorted into halves, sorts both halves recursively, and then merges the two sorted subarrays together into one fully sorted array. This is an example of a divide and conquer method.

In order to make the recursion part possible, we need to add two additional arguments $i$ and $j$ to set the boundaries of the subarrays to be sorted.

```
function mergeSort(A, i, j)
    if (i < j) then
        mid = floor((i + j)/2)
        mergeSort(A, i, mid)
        mergeSort(A, (mid + 1), j)
        merge(A, i, mid, j)
```

This requires an extra function to actually do the merging.

```
function merge(A, i, mid, j)
    new array B of length (j - i + 1)
    k = i
    l = mid + 1
    m = 0
    while (k <= mid and l <= j ) do
        if (A[k].key <= A[l].key) then
            B[m] = A[k]
            k = k + 1
        else
            B[m] = A[l]
            l = l + 1
        m = m + 1
    while (k <= mid) do
        B[m] = A[k]
        k = k + 1
        m = m + 1
    while (l <= j) do
        B[m] = A[l]
        l = l + 1
        m = m + 1
    for (m = 0 to j - 1) do
        A[m + 1] = B[m]
```

The asymptotic worst-case runtime of merge sort is $\Theta(n \text{ } lg(n))$.

## Max sort

## Heap sort

## Quick sort

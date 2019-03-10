## Introduction

Many computing problems often involve working with some kind of data and in many cases that data will need sorted. As algorthms used for this can deal with huge quantities of data, there is a huge efficiency benifit in using one method over another.

This topic will look at some specific algorthims and in particular the principle of 'divide and conquer'. Be aware that heap sort and quick sort may require you to cover the later topic on heaps and priority queues.

## Insertion sort

Description

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

## Merge sort

Description

```
function mergeSort(A, i, j)
    if (i < j) then
        mid = floor((i + j)/2)
        mergeSort(A, i, mid)
        mergeSort(A, (mid + 1), j)
        merge(A, i, mid, j)
```

where

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

## Max sort

## Heap sort

## Quick sort

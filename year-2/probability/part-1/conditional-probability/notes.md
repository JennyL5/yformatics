## Introduction

So far in this course, we have looked at individual singular events and unions of multiple singular events. This topic explores when we have an event which is linked to previous events before it. We define this as an event with the condition of another event - "probability of $E$, given $F$":

$$\Bbb{P}(E|F) = \dfrac{\Bbb{P}(E \cap F)}{\Bbb{P}(F)}$$

## Independence

Two events are said to be independent if the following holds:

$$\Bbb{P}(E \cap F) = \Bbb{P}(E)\Bbb{P}(F)$$

This means that the probability of either event occurring has no effect on the other. Events being independent is generally not equivalent to events being mutually exclusive.

This also affects conditional probability calculations, if $E$ and $F$ are independent and $E \text{ 'not equal' } \emptyset$ then:

$$\Bbb{P}(E|F) = \dfrac{\Bbb{P}(E \cap F)}{\Bbb{P}(F)} = \Bbb{P}(E)$$

## Bayes theorem

$$\Bbb{P}(E|F) = \dfrac{\Bbb{P}(F|E)\Bbb{P}(E)}{\Bbb{P}(F)}$$

<!-- $$\neq$$ -->

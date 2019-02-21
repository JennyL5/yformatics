## Introduction

Where discrete random veriables look at a value in at a certain point, continuous random variables look at values over an interval. This allows us to calculate the probability of a random variable $X$ being between two values.

In an example where $X$ can be any number between 0 and 1:

$$\Bbb{P}(a \leq X \leq b) = b - a \qquad 0 \leq a \leq b \leq 1$$

## Cumulative distribution

Similar to a probability mass function, when examining the values of $X$ greater than or less than a value we use a distribution function $F_x$ called the cumulative distribution.

$$\text{Probability mass function} = \Bbb{P}(X = a)$$

$$\text{Cumulative distribution} = \Bbb{P}(X \leq a)$$

Combining everything above, we can now see that:

$$\Bbb{P}(a \leq X \leq b) = F_x(b) - F_x(a)$$

$F_x(a) = \Bbb{P}(X \leq a)$ can also be graphed as it is a continuous function which is also increasing from 0 to 1.

$$F_x(-\infty) = 0 \qquad F_x(\infty) = 1$$

## Probability density function

As well as the cumulative distribution, we also define a function $f_x$ called the probability density function. This function is the antiderivative of the cumulative distribution and can tell us more information about a continuous random variable.

$$f_x = F'_x$$

$$F_x = \int_{a}^{b} x^2 dx$$

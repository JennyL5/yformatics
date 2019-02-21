## Introduction

A discrete random variable $X$ is a function from the sample space $S$ to a set of possible values $R$.

$$X: S \rightarrow R$$

Each of those possible values has a probability of occurring depending on the mappings from the sample space.

<!-- For example... -->

## Probability mass function

This is the function that determines the probability of a discrete random variable $X$ having a certain value. The equation used to calculate this value will differ depending on the type of random variable.

$$p(x) = \Bbb{P}(X = k)$$

This can also be used to determine the distribution of probabilities for each possible value of $X$.

<!-- Insert graph here -->

## Geometric distribution

$$\Bbb{P}(X = k) = p(1-p)^{k-1}$$

## Binomial distribution

$$\Bbb{P}(X = k) = \dbinom{n}{k}p^k(1-p)^{n-k}$$

## Expected value

In any given situation, we are able to calculate the value of a discrete random variable $X$ that is expected. This value is like a weighted average

It is given by the equation below:

$$\Bbb{E}[X] = \sum\limits_{k=0}^{n} k\Bbb{P}(X = k)$$

It is important to note that the above will change depending on the type of random variable you are working with. In other words, be careful when expanding $\Bbb{P}(X = k)$.

<!-- ## Stirling’s approximation -->

## Variance & covariance

The variance of a discrete random variable $X$ is a number which defines how much the possible values of $X$ differ from each other. It can be calculated using:

$$Var[X] = \Bbb{E}[(X - \Bbb{E}[X])^2]$$

$$= \Bbb{E}[X^2] - \Bbb{E}[X]^2$$

The covariance, on the other hand, determines how much the possible values of two random variables $X$ and $Y$ differ from each other. It can be calculated using:

$$Cov[X,Y] = \Bbb{E}[(X - \Bbb{E}[X])(Y - \Bbb{E}[Y])]$$

$$= \Bbb{E}[XY] - \Bbb{E}[X]\Bbb{E}[Y]$$

As a side note, the standard deviation can be calculated by:

$$SD(X) = \sqrt{Var[X]}$$

## Independent variables

By definition, two random variables are independent if:

$$\Bbb{P}(X = x_k, Y = y_j) = \Bbb{P}(X = x_k) \Bbb{P}(Y = y_j)$$

Another way to examine this, using the equivalencies in the section above, is to say two random variables are independent if:

$$\Bbb{E}[XY] = \Bbb{E}[X]\Bbb{E}[Y]$$

$$Cov[X,Y] = 0$$

Be aware that this statement only works in one logical direction.

<!-- It is not accurate to say that since $\Bbb{E}[XY] = \Bbb{E}[X]\Bbb{E}[Y]$ that implies that two random variables are independent. -->

<!-- ## Joint distribution

table stuff -->

## Poisson distribution

The poisson distribution is an approximation of the binomial distribution, making it very similar. The key difference with poisson is that it can take into account a rate of some kind.

$$\Bbb{P}(X = k) = \dfrac{λ^k}{k!}e^{-λ}$$

Where:

$$λ = np$$

Some properties of this include:

$\Bbb{E}[X] = λ$

$\Bbb{E}[X^2] = λ^2 + λ$

$Var[X] = λ$

## How to integrate

In this topic, you will see more complex methods of calculating integrals which are far more complex, but at the most basic level integrals are calculated by:

$$\displaystyle\int x^n \\, \\, dx = \dfrac{x^{n+1}}{n+1} + c$$

The $c$ added at the end is further explained in the indefinite integrals section below.

## By substitution

For more complex integrals, it can often be helpful to substitute another easier value to integrate and then sub back at the end. This process has a few steps:

For the purposes of explanation, let's use the example:

$$\displaystyle\int x \\, \\, dx$$

1. Pick a function of $x$ in your integral to substitute, and make it equal to $u$.

$$u = x$$

2. Differentiate $u$ with respect to $x$.

$$\dfrac{du}{dx} = 1$$

3. Isolate $dx$ so that both it and your chosen function of $x$ can be substituted.

$$dx = du$$

$$\displaystyle\int u \\, \\, du$$

## By parts

It has been said that calculating integrals can become a lot like reading, with practice. In this case, you need to look out for cases where you need to find the integral of the product of a function of $x$ with it's derivative.

This can then be drawn to the following equivalency:

$$\displaystyle\int uv' = uv - \displaystyle\int u'v$$

## Indefinite integrals

When calculating integrals you may notice they fall into two distinct types. Often in isolation, integration is indefinite by default. This simply means that you are looking at the function as a whole, without bounds.

$$\displaystyle\int x^2 \\, \\, dx = 2x + c$$

As you are raising the degree of the function, you will be adding a new constant onto the end. However, since you do not have enough information to be able to calculate this exact value, this is why the answer always ends in '$+ \\, c$'.

## Definite integrals

As the similar name suggests, definite integrals are merely the opposite of indefinite ones. You are given bounds to the function and are only integrating it within those limits. The first step of this is carried out in the exact same way, by finding the integral of the function. However, instead of adding '$+ \\, c$' to the end and being done with it, you have to use the bounds to calculate an exact value.

$$
\begin{aligned}
\displaystyle\int_{a}^{b} x^2 \\, \\, dx &= \Big[ \\, 2x \\, \Big]_{a}^{b} \\\\
&= \Big[ \\, 2(b) \\, \Big] - \Big[ \\, 2(a) \\, \Big] \\\\
&= 2b - 2a
\end{aligned}
$$

## Area under a graph

## Riemann sums

<!-- ## Proper & inproper intrgrals -->

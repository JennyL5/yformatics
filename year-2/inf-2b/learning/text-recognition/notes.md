## Probabolistic classification

In the previous topic, we examined classification of data where there are generally clear lines to separate categories and a high degree of accuracy. Unfortunately, the real world is often messier than that and requires more estimation to determine properties of data.

The probability you have learned this year and in previous maths courses is referred to as 'theoretical probability' where you calculate the likelihood that an event _should_ happen. When working on machine learning this can often differ widely from actual results and so instead we focus on 'empirical probability' based on the data you are given.

## Naive Bayes

Decision-making probabilities will often take the form:

$$\Bbb{P}(H|E)$$

Where you are given a property, $E$, of the data object and asked to determine the likelihood of hypothesis $H$.

Using Bayes more formally, you are given a set of classes ${C = \\{1,...,K\\}}$ where $C_k$ is used to denote ${C = k}$ with input feature ${X = x}$.

Each part of the Bayes equation is labelled below:

$$
\overbrace{\Bbb{P}(C_k|x)}^{\text{prosterior}} = \dfrac{\overbrace{\Bbb{P}(x|c_k)}^{\text{likelihood}} \\, \overbrace{\Bbb{P}(C_k)}^{\text{prior}}}{\Bbb{P}(x)}
$$

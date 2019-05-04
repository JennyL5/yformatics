
The Gaussian distribution also known as the normal distribution is a common continuous distribution.

## Univariate gaussian distribution
The probability density function is given as: \
$\Bbb p(x | \mu, \sigma^{2}) = N(x | \mu, \sigma^{2}) = \frac{1}{\sqrt{2\pi\sigma^{2}}} \space \exp \space (\frac{-(x-\mu)^{2}}{2\sigma^{2}})$
The parameters estimations are: \
$\mu = \frac{1}{N} \displaystyle\sum\limits_{n=1}^{N} x_{n} $\
$\sigma^{2} = \frac{1}{N} \displaystyle\sum\limits_{n=1}^{N} (x_{n}-\mu)^{2} $\
where the mean ($\mu$) is the location, and the variance ($\sigma^{2}$) is the dispersion. The $x_{n}$ denotes the feature value of $n^{th}$ sample, and N is the number of samples in total.

The maximum likelihood can be calculated using optimisation. First assume independence of training samples, and apply natural logs.

$LL(\mu, \sigma^{2}) = \ln(p(x_{1} | \mu, \sigma^{2}) \dots p(x_{N} | \mu, \sigma^{2})) $\
$\quad \quad \quad \quad \space    = \displaystyle\sum\limits_{n=1}^{N} \ln(p(x_{1} | \mu, \sigma^{2}) $\
$\quad \quad \quad \quad \space    = \displaystyle\sum\limits_{n=1}^{N} \ln (\frac{1}{\sqrt{2\pi\sigma^{2}}} \exp (\frac{(x_{n} - \mu)^{2}}{2\sigma^{2}}))$ \
$\quad \quad \quad \quad \space    = - \frac{N}{2} \ln(2\pi) - \frac{N}{2} \ln(\sigma^{2}) - \displaystyle\sum\limits_{n=1}^{N} \frac{(x_{n} - \mu)^{2}}{2\sigma^{2}}$

The optimal parameters can be solved by: \
 $\frac{\partial LL(\mu, \sigma^{2})}{\partial \mu} = 0 $\
 $\frac{\partial LL(\mu, \sigma^{2})}{\partial \sigma^{2}} = 0$


## Multivariate gaussian distribution
For the multi-variate gaussian distribution in D-dimensions, we have the below probability density function: \
$p(x | \mu, \sum) = N(x | \mu, \sum) = \frac{1}{(2\pi)^{D/2} |\sum|^{1/2}} \exp (-\frac{1}{2}(x-\mu)^{T} \sum^{-1} (x-\mu))$ \
The parameters estimations are: \
$\mu = \frac{1}{N} \displaystyle\sum\limits_{n=1}^{N} x_{n}$ \
$\sum = \frac{1}{N} \displaystyle\sum\limits_{n=1}^{N} (x_{n}-\mu)(x_{n}-\mu)^{T}$

## Correlation Coefficient
The Pearson's Correlation Coefficient is a measure of the linear correlation between two variables X and Y. \
$p(x_{i}, x_{j}) = p_{i, j} = \frac{\sigma_{i, j}}{\sqrt{\sigma_{i, i} \sigma_{j, j}}}$

The correlation coefficient $p(x_{i}, x_{j})$ is obtained by normalising the covariance $\sigma_{i, j}$  by the square root of the
product of the variances $\sigma_{i, i}$ and $\sigma_{j, j}$, and satisfies −1 ≤ $\sigma_{i, j}$ ≤ 1.

## Bayes' theorem
We can use Bayes’ theorem for continuous data x and discrete class k as:
$\Bbb{P}(C_k|x) = \frac{{\Bbb{P}(x|c_k)}{\Bbb{P}(C_k)}}{\Bbb{P}(x)}$ \
$\quad \space \Bbb{P}(x) = \displaystyle\sum_{j=1}^K \Bbb{P}(x|C_j)\Bbb{P}(C_j)$

$\Bbb{P}(C_k|x) \propto \Bbb{P}(x|C_k)\Bbb{P}(C_k)$

$\quad \quad \quad \space \space    \propto N(x | \mu_k, \sigma^{2}_k) \Bbb{P}(C_k) $ \
$\quad \quad \quad \space \space    \propto \frac{1}{\sqrt{2\pi\sigma^{2}_k}} \space \exp \space (\frac{-(x-\mu_k)^{2}}{2\sigma^{2}_k}) \Bbb{P}(C_k)$

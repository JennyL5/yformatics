## Introduction

For this topic, we will be analysing a specific example of a basic recommendation system in order to keep things simple. Imagine a film & tv streaming service such as Netflix, how do they accurately suggest what you should watch?

## Training data

Before we even start looking at new users to recommend movies to, we need to establish a model for which kinds of films are enjoyed by which kinds of people. To keep our example simple we are going to do this by taking the reviews of six different films by six different critics. The rating that each critic gave each film is given in the table below.

<!-- Table -->

This can then be expressed as a maxtrix $X_{mc}$, and each critic could be expressed as an individual vector in the form $X_c = (x_{c1},...,x_{cM})$.

<!-- matrix -->

Each vector is called a 'feature vector'.

## Introducing new data

Now that we have our table of training data in a form we can compute, we can turn our attention to new user data. Here we have a similar table but showing two users who have only seen and rated two or three films of the six.

<!-- table -->

Our goal is to predict the ratings that these users would give to the films they haven't seen to fill in the gaps in the table.

We also want to convert this table of data into vector form to allow us to do calculations with it.

## Graphing vectors

For visual purposes, we can display all of the vectors we have looked at above in a 2D vector space.

<!-- graph -->

As humans, we can see visually that the two user points are closer to critic x and critic y and therefore who these users align with most. For computers, we have to do a series of calculations in order to determine which points are closest to which. This becomes especially apparent at higher volumes of data and higher dimensions when the data can no longer be visualised in a meaningful way.

## Vector comparison

Euclidean distance

In this two-dimentional case, the equation for the distance between two data points is given by:

$$\bm{u} = \dbinom{u_1}{u_2} \qquad \bm{v} = \dbinom{v_1}{v_2}$$

$$r(\bm{u},\bm{v}) = \sqrt{(u_1 - v_1)^2 + (u_2 - v_2)^2}$$

This can also be generalised for when dealing with cases in any dimention:

$$r(\bm{u},\bm{v}) = \sqrt{\sum\limits_{k=1}^{D} (u_k - v_k)^2}$$

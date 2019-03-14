## Introduction

Classification is another technique for finding patterns in data, similar to clustering in the previous topic, except with a few differences. This time, it is a supervised process where we need to provide distinct labels for our data rather than leaving it to form its own groups.

A good example to illustrate how this works is a model to identify handwritten characters. Each label in this case will be each distinct character, each of which will have many examples to match against.

<!-- Image -->

## Data sets

In order to create this type model, we need to split our pool of data into two distinct sets, the training set and the testing set. The training set is, as the name suggests, used to train the model. This consists of a list of feature vectors, each already with a predefined label to categorise it. The training part of the computation is actually relatively light as the data simply needs to be stored correctly at this stage and no further processing is needed. The testing set, on the other, only consists of a list of feature vectors which the computer can then try to assign a label to automatically. This part of the computation is far more intensive as it requires calculating a bunch of euclidian distances to other points.

Once the testing set has been run through the system, an error rate can be calculated. This gives an idea of how accurately the system was able to assign labels based on the training data. Low quality or quantity training data can lead to a very high error rate.

<!-- Equation -->

Some people prefer to measure this in positive terms and look at the 'correct classification rate' which is just the inverse of the error rate.

## Nearest neighbour classification

## Decision boundaries

Perpendicular bisector

Voronoi diagrams

The areas within each decision boundary are called a decision region.

Class boundaries are decision boundaries

## Pre-processing data

Standardise dimensions

Consider scale transformation

## Generalisation

The goal of this type of model is to form a generalised example of what the computer is looking for. This could be applied to images, text and a variety of other data types.

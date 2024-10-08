---
title: Making Firetrace
date: 2023-12-11
---

**Firetrace** is an AI model we developed in early-mid-2023 for the purposes of easy-to-use bushfire prediction, accurate to ~100 square kilometres.

## Why did we build Firetrace?

**TL;DR:** There was this competition where we had to flex the coolest project and we thought bushfire prediction was cool, but because we didn't know what we were doing, we limited the scope of the project.

---

By no means do we have a deficit of advanced bushfire prediction tools. Given Australia's climate, government agencies have had a long history of working with scientists to develop accurate methods of predicting bushfire spread. However, these solutions are often tailored to specific locations, or work over a small area.

More recent developments to generalise these models appear successful - but they still place significant emphasis on being able to precisely pinpoint the movement of individual fires. As you can imagine, this is super useful for fire management and developing strategies to prevent fires from spreading after they take place. As Australia heads into what looks like another bad bushfire season, such technology is evidently needed.

But nobody really considered regular people. We may _hear_ about these super-advanced models but we have no way of being able to play around with these ourselves. Even if some models are open, I find it highly unlikely that the average person would know/have the time to learn how to operate them.

##### Would these tools serve any purpose to regular people anyways?

Probably not. At-risk properties likely already have arrangements with local fire authorities to protect their homes. If anything were to come out for regular people, it would purely be for curiosity.

Which is precisely why we decided that we were even _able_ to create something to suit the task.

---

## Wait... so what are we building again?

Something for _regular people_ that can allow them to predict bushfires in some way. Just enough to satisfy their curiosity, given the constraints of the project it is _extremely_ unlikely that we would be able to give people the ability to do anything insane like predict the actual locations of fires. There is simply not enough data to let this happen.

Given that the problem had been simplified so much, we didn't have to go looking for/inventing a new model architecture either. This is a simple x &rightarrow; y relation task (with multiple input variables) and we can therefore use the **multi layer perceptron** (MLP) to accomplish our task.

## okay but where do we get our data from

While we had limited experience with writing models in Tensorflow, finding data proved to be a very complex task. Eventually we stumbled across a few Kaggle datasets that we could implement more quickly instead of trying to collect data ourselves, directly from satellites and weather stations.

We ended up choosing two weather stations in Australia (Sydney and Brisbane) to base our weather data off of, as well as the BOM's monthly observations of the Southern Oscillation Index to give the model adequate information to make a prediction. Fire size data was collected from NASA's MODIS satellite. (Version two will work on incorporating data more elegantly and using more up-to-date data from a wider variety of sources.)

## Representing Data in the Model

This is called **feature engineering** and turned out to be significantly more difficult than we initially expected. Apart from some basic rules of thumb, such as representing dates in the form of sin/cos signals, there weren't very many resources out there that were applicable to our problem specifically (which makes sense - as far as we can tell this is a unique project).

The rest of the process had to be completed via experimentation and just changing how we processed some data. We could sum some fields, or just pass in the averages, normalise it in one of _several_ ways (with no conclusive results as to which was better - as long as it was normalised it was pretty good). We continued feature engineering right until the very end of the timeline, retraining the model and seeing very incremental improvements.

---

## The Finished Model

After maybe 100+ hours of work (i should actually begin logging this) we finally released a completed model **[anyone can try out](https://jtpotato-firetrace.hf.space/)**.

The final model:

- 6&times;40 weights for input nodes
- 40<sup>5</sup> (102,400,000) weights in hidden layers
- 40 weights for the output layer
- 201 total nodes

Coming out to 102,400,481 parameters. A decently sized model (which actually caused us some issues when we tried to host it)

## What about that competition?

Firetrace placed first in Victoria but unfortunately did not seem to impress the judges as much in the national competition 🙂

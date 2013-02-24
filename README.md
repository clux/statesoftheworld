# States of the World
Fun break project. It's a new version of the classic song: [Animaniacs - Nations of the World](http://www.youtube.com/watch?v=IDtdQ8bTvRc).

The [original song](ORIGINAL.md) missed around 50 states, included various padded sentences that were not unnecessary, in addition to states that no longer exist. See [inconsistencies](INCONSISTENCIES.md) for the full breakdown on these.

Thus I thought I'd have some fun forking the original song and adding the new states / deleting the old. It taught me some new things about how language and programming intersect and how forking songs actually make a lot of sense.

It's a very good project for memorizing geography, and also very fun! Impress your friends with your encyplopedic knowledge of this useless (but now updated!) song.

## Rules

1. Rhyming have to maintain the rhyming rules implicitly defined in the .
2. Use only states from [http://en.wikipedia.org/wiki/List_of_sovereign_states](UN Member states or observer states) (i.e. not the second list therein)

## Current Result
All states from the list are included, and no miscellaneous sentences were needed to make it work. The fast end list have been elongated slightly to fit (despite adding an extra verse), and some multi island names have been shortened slightly to get a nicer flow (most of this is documented in `test.js`).

## Updates
This song is obviously never going to be correct for long with how the world is evolving. So feel free to raise issues when new states appear/disappear etc and maybe we can keep it up.

I also tried my best to keep the flow nice and smooth, but it's clear that other solutions exist. If you find cleaner variations, feel free to pull-req sensible changes!

## As a node module
You can install and require this as a module, but it just returns the latest version of the song as a string.

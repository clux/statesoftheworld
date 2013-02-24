# States of the World
Fun break project. It's a new version of the classic song: [Animaniacs - Nations of the World](http://www.youtube.com/watch?v=IDtdQ8bTvRc).

The [original song](ORIGINAL.txt) missed around 50 states, included various padded sentences that were not unnecessary, in addition to states that no longer exist. See [inconsistencies](INCONSISTENCIES.md) for the full breakdown on these.

Thus I thought I'd have some fun forking the original song and adding the new states / deleting the old. It taught me some new things about how language and programming intersect and how forking songs actually make a lot of sense.

It's a very good project for memorizing geography, and also very fun! Impress your friends with your encyplopedic knowledge of this useless (but now updated!) song.

## Rules

1. Rhyming MUST maintain the rhyming rules implicitly defined in the original song.
2. Song MUST fit original melody (though we may add extra verses)
3. Pronunciation of states SHOULD be correct
4. SHOULD only use states from [UN Member states or observer states](http://en.wikipedia.org/wiki/List_of_sovereign_states) (i.e. not the second list therein)

## Result
**[CURRENT VERSION IS AVAILABLE HERE](2013.txt)**

All states from the list are included, and no miscellaneous sentences were needed to make it work. The fast end list have been elongated slightly to fit (despite adding an extra verse), and some multi island names have been shortened slightly to get a nicer flow (most of this is documented in `test.js`).

## Updates
This song is obviously never going to be correct for long with how the world is evolving. So feel free to raise issues when new states appear/disappear etc and maybe we can keep it up.

I also tried my best to keep the flow nice and smooth, but it's clear that other solutions exist. If you find cleaner variations, feel free to pull-req sensible changes!

## As a node module
You can install and require this as a module, but it just returns the latest version of the song as a string. But hey, convenience of npm.

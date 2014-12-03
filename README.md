# United Nations of the World

Fun break project. It's a new version of the classic song: [Animaniacs - Nations of the World](http://www.youtube.com/watch?v=IDtdQ8bTvRc).

**[CURRENT VERSION IS AVAILABLE HERE](2013-current.txt)**

The [original song](ORIGINAL.txt) missed around 50 states, included various padded sentences that now are unnecessary/silly, and states that no longer exist. See [inconsistencies](INCONSISTENCIES.md) for the full breakdown on these.

Thus I thought I'd have some fun forking the original song and adding the new states / deleting the old. It's cool how much sense it makes to fork a song. It's a very good project for memorizing geography, and also very fun. Impress your friends with your encyplopedic knowledge of this perhaps useless song!

It needed an extra verse and a slightly elongated fast end list, and some multi island names have been shortened slightly to get a nicer flow (documented in `test.js`).

## Rules

1. Rhyming MUST maintain the rhyming rules implicitly defined in the original song.
2. Song MUST fit original melody (though we may add extra verses)
3. State names pronunciation SHOULD conform to the first phonetic suggestion on English wikipedia
4. State names SHOULD be aligned in the song such that emphasis occur on correct parts
5. Song must contain every [UN Member states or observer states](http://en.wikipedia.org/wiki/List_of_sovereign_states) (no more, no less)


## Updates
This song is obviously never going to be correct for long with how the world is evolving. So feel free to raise issues when new states appear/disappear etc and maybe we can keep it up.

I also tried my best to keep the flow nice and smooth, but it's clear that other solutions exist. If you find cleaner variations, feel free to pull-req sensible changes!

## As a node module
You can install and require this as a module, but it just returns the latest version of the song as a string. But hey, convenience of npm.

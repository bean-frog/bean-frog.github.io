Over the last couple of weeks I've been experimenting with a Solana memecoin sniper: a bot that scans new tokens, filters out the obvious scams, buys the survivors, and manages exits. Across 75 live trades it lost about 11% per trade on average, and a pile of paper-trading sessions since then land somewhere around break-even. But building it taught me a lot about data analysis and about how the chain actually works underneath the apps, and that part was worth it, especially considering that I'm now much more knowledgeable for when I eventually build version 2.

### Small samples lie to you

The first thing I learned is how easy it is to fool yourself with 10 or 20 data points.

At one point I noticed that tokens bought right after a big pump (up 100%+ in the last hour) did terribly over the next 15 minutes, something like -20 to -29% on average. I tested a "no chasing" filter against recorded price data, and on the same tokens, waiting for them to cool off turned a -15% average into +11%. That looked like a real edge. Then I collected another three hours of fresh data and ran the exact same test. Waiting was now *worse* than chasing. The original result was just 12 tokens that happened to line up.

After that I started comparing every idea against a placebo: random entries into tokens that pass only the most basic checks (old enough, enough liquidity, has socials). Random entries lost about 6-8% per trade. None of my entry filters beat random consistently across samples. That was humbling, but it's the only honest way to know whether a filter does anything.

### Most of the "edge" was avoiding disasters

The losses weren't spread evenly. A handful of -97% rugs wiped out dozens of small wins. So most of the useful work went into spotting those ahead of time.

The biggest single fix was deleting a feature. I had a "holder dump watch" that sold half the position whenever a big wallet sold. It fired on 54 of 75 positions, usually in the first minute or two, often while the price was flat or up. On every coin that later ran (one peaked at +129%), it had already sold most of my position at a small loss. It was trimming the winners and barely touching the rugs.

### Price data is noisier than it looks

I was using DexScreener prices to decide when to sell. For these tiny tokens it only updates about every 30 seconds, and the price can jump 20-47% between updates. One position got stopped out on a -47% print when the price I could actually sell at was -4%. Another trailing stop fired thinking I was up 8% when the real sale came out at -37%.

The fix was to read the price straight from the chain. That took longer to get right than I expected.

### How a pump.fun pool is priced

A PumpSwap pool (pump.fun's exchange, where tokens go after they "graduate") holds two token accounts, called vaults: one with the token and one with SOL. The textbook constant-product price is just SOL in the pool divided by tokens in the pool. So I subscribed to those vaults over a websocket and computed the price every time a trade touched them.

It was wrong, and not by a consistent amount. On some pools it read 97% of the real price, on others 10%. I finally compared against what Jupiter would actually pay me for a small sale, and the answer was in pump.fun's published program layout: pools have a field called `virtual_quote_reserves`, about 17.58 SOL on nearly every pool. The pool prices as if it holds that much extra SOL. On a drained pool with 1.95 SOL left, the real price is (1.95 + 17.58) / tokens, about 10x what the vaults alone suggest. Once I added it, my on-chain price matched Jupiter's quotes within 1-2% (the pool fee) on all 25 pools I checked, and it updates the instant a trade lands instead of 30 seconds later.

### What a rug looks like on-chain

The most satisfying finding came from reading individual blocks.

A lot of the rugs followed the same script. A brand-new wallet gets funded with an exact amount of SOL (0.1121 SOL in two cases I looked at). One second later it creates the token. In that same second, a few other wallets buy a huge chunk of the supply, enough to push the bonding curve to completion instantly, so the token graduates to a real pool within the same second it was created. Those buyers are also brand new: their first-ever transaction was a second or two earlier.

You can check this with `getBlock` on the block where the token was created. In one rug, three one-second-old wallets spent 10, 25 and 40 SOL and took 53% of the supply right there in the creation block. Across my past trades, the share of supply that fresh wallets bought in the creation block was either 0% or somewhere between 27% and 77%. Nothing in between. The ≥30% group contained 6 of the 7 rugs in my whole trade history. (Half of that group still made money, so it's only useful for filtering out rugs.)

I also hit some dead ends. The creator wallets have no history to look at, since they're made fresh for each launch. The wallets that fund them are exchange hot wallets doing a thousand transactions in a few minutes, so following the money leads nowhere.

### Some other things I learned about the chain

My own data had look-ahead bias built in. I tried a "trades per holder" ratio to catch fake volume, and rugs scored terribly on it. But I had pulled the holder counts days after the trades, and rugged tokens lose their holders. Measured at the time of entry, rugs looked normal.

Sending transactions also wasn't where the time went. My bot took about 1 second from "sell" to transaction sent, and about 3 seconds to confirmation, but the price feed was already lagging 10-30 seconds before the sell even fired.

### Where it's at

The bot is still running in paper mode on a box in my apartment, collecting data on who buys each token in its first few seconds. That's the one signal that has actually separated good tokens from bad ones so far, so it's where I'm looking next. If it turns into anything, I'll write about it. If it doesn't, at least I'll know for sure.

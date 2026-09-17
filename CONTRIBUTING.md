# Contributing

## Verifying mouse specs (most useful)

Every entry in `mice.js` is currently `ver:false` — dimensions have not been
cross-checked against manufacturer specifications.

1. Open the manufacturer's official product page for the mouse
2. Compare `l` / `w` / `h` / `g` against the published figures
3. Fix anything wrong, set `ver:true`
4. Put the source URL in your pull request

Width is the field most worth checking: some makers quote the widest point
including thumb wings, others quote grip width. The difference can be 15mm.

## Adding a mouse

```js
{ id:"brand-model", brand:"Brand", name:"Model Name",
  l:125, w:63.5, h:40, g:60, shape:"sym", wl:true,
  grips:["claw","fingertip"], price:2, ver:true },
```

`shape` is `sym` or `ergo`. `price` is `1` budget / `2` mid / `3` premium.
`grips` only contributes 6% of the score — the dimensions do the real work,
so don't agonise over it.

The database is thinnest at the extremes (very small and very large hands),
which is exactly where recommendations are weakest.

## Correcting the grip ratios

The ratio bands in `GRIPS` (index.html) come from community guidance, not
measurement. If you have data on what actually fits people — especially
"the recommended size was wrong for me, here is my hand size and what I use" —
open an issue. That feedback is worth more than any code change.

## Translations

`i18n.js` holds one object per language, currently `ko` and `en`, with identical
key sets. To add a language, copy the `en` block and translate the values.
Keep `{placeholders}` intact.

## Code

No build step, no dependencies, no framework. Keep it that way — the whole point
is that `index.html` opens and works.

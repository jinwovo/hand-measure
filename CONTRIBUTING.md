# Contributing

## Adding mice (most useful)

62 of 63 entries are cross-checked against [eloshapes.com](https://www.eloshapes.com/),
which measures 1600+ mice the same way. Use that source for new entries so widths stay
comparable — manufacturers disagree with each other by up to 15mm on the same mouse
depending on whether they quote widest point or grip width.

The database is thinnest at the extremes (very small and very large hands) and has no
vertical mice or trackballs. That is where it is least useful today.

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

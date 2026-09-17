<div align="center">

# Hand Measure

**Measure your hand against your monitor. Find the mouse that actually fits.**

Rest your hand on a life-size outline drawn on your screen, match three points,
and get mouse dimensions tuned to your hand *and* your grip style.

No install, no build step, no dependencies — one HTML file and two data files.

[**▶ Try it live**](https://jinwovo.github.io/hand-measure/) · [한국어](#한국어) · [How it works](#how-it-works) · [Contributing data](#contributing-mouse-data)

<img src="docs/img/03-measure.jpg" width="820" alt="Measuring screen: a life-size hand outline with Wrist, Tip and Width handles">

</div>

---

## The problem

Mouse size charts ask for your hand length in millimetres. Almost nobody knows theirs,
and the ones who guess get it wrong by a centimetre — which is enough to change
the recommendation entirely.

Meanwhile you have a precisely manufactured measuring surface sitting right in front
of you: your monitor. The only thing standing in the way is that a browser has no idea
how physically large its own pixels are.

## The idea

Browsers genuinely cannot tell you physical DPI. CSS `mm` and `in` are fictions pinned
to `96px = 1in`. `devicePixelRatio` describes pixel density, not physical size.

So instead of trying to *derive* the screen's scale, measure it once:

```
pxPerMm = (reference object's width in CSS px) / (its real width in mm)
```

That single number absorbs **panel DPI, OS display scaling, Retina, and browser zoom**
all at once. Get it right and every other measurement follows for free.

<img src="docs/img/02-calibrate.jpg" width="820" alt="Calibration screen with reference object selector">

Hold a credit card against the screen and drag until the on-screen card matches it.
A card is ISO 7810 ID-1 — exactly 85.60 × 53.98 mm, identical worldwide.
Bigger references are more accurate, so a ruler, A4 sheet or CD is offered too,
plus a **custom length** option for anything you can measure.

**Accuracy:** a 3px misalignment on a credit card is ~0.9% — about 1.8 mm on a
190 mm hand. Mouse size brackets are roughly 10 mm wide, so ±3 mm is plenty.
Calibration is not the bottleneck.

---

## How it works

<table>
<tr><td width="50%">

**1 · Calibrate** *(once per monitor)*

Match a real object on screen. Saved to `localStorage`,
keyed by screen signature, and invalidated automatically
if browser zoom or the monitor changes.

</td><td width="50%">

**2 · Measure**

A life-size hand outline appears. Drag three points —
wrist, middle fingertip, width — until the outline
matches your hand. Everything else is cosmetic.

</td></tr>
<tr><td width="50%">

**3 · Pick your grip**

Palm, claw or fingertip. This shifts the ideal mouse
length by more than 15 mm for the same hand, so it
matters as much as the measurement does.

</td><td width="50%">

**4 · Get dimensions**

A target length/width/height range, plus ranked models
from a 63-mouse database. The *range* is the real output —
it works for mice the database has never heard of.

</td></tr>
</table>

<img src="docs/img/05-grip.jpg" width="820" alt="Grip selection with side-profile diagrams for palm, claw and fingertip">

<img src="docs/img/06-picks.jpg" width="820" alt="Recommendation screen showing target dimensions and ranked mouse list">

---

## Design notes

Things that turned out to matter more than expected.

### The wrist landmark is on the wrong side of your hand

Standard anthropometric hand length runs from the **distal wrist crease** to the
middle fingertip. That crease is on your *palm* — invisible the moment your palm is
against the screen.

The fix is to use the **stylion line** instead: the line joining the two bony
prominences (radial and ulnar styloid) either side of the wrist. Anatomically the
same height, and visible from the back of the hand.

This is the single largest error source in the whole tool — misplacing it costs
5–10 mm, several times worse than calibration error. There's a dedicated guide
screen for it.

<img src="docs/img/01-intro.jpg" width="820" alt="Intro screen">

### Your left hand is on the screen, but your right hand uses the mouse

You need a free hand for the mouse, so most people measure the other one.
Dominant and non-dominant hands differ by about 1–2% in length — well inside the
tolerance that changes a recommendation, so the tool just says so and moves on.

### A life-size hand does not fit on most screens

A 185 mm hand needs nearly 700 px of height at typical scaling. The measuring step
therefore goes fullscreen by default, can lay the hand diagonally (measurement is
two-point distance, so rotation is free), and lets you drag anywhere to pan.

On a phone it is simply impossible — the hand is larger than the display — so small
screens get told that honestly and offered direct numeric entry instead.

### Measurements are rotation-invariant

Hand length is `distance(wrist_midpoint, fingertip)` and width is
`distance(knuckle_left, knuckle_right)`. Because both are point-to-point distances,
tilting the hand changes nothing. That is what makes the diagonal and auto-fit
layouts safe.

---

## Recommendation model

Mouse length and height are scored against **hand length**; width against **hand width**.

| Grip | Length ÷ hand length | Width ÷ hand width | Height ÷ hand length |
|---|---|---|---|
| Palm | 0.655 – 0.720 | 0.700 – 0.820 | 0.205 – 0.245 |
| Claw | 0.620 – 0.685 | 0.680 – 0.800 | 0.190 – 0.230 |
| Fingertip | 0.575 – 0.645 | 0.650 – 0.780 | 0.170 – 0.210 |

Each dimension scores 1.0 at the centre of its band and tapers outward — scoring a
flat 1.0 anywhere inside the band made the entire top of the list tie at 100%.
Weights are length 52%, height 22%, width 20%, grip hint 6%. Width is deliberately
underweighted because manufacturers measure it inconsistently.

<img src="docs/img/04-result.jpg" width="820" alt="Result screen with measurements and a distribution bar">

> [!IMPORTANT]
> **These ratios are community guidance, not measured data.** They are a starting
> point that needs correcting against real "did the recommended mouse actually fit?"
> feedback. Treat the output as a strong hint, not a verdict.

---

## Running it

Nothing to install.

```bash
git clone https://github.com/jinwovo/hand-measure.git
cd hand-measure
open index.html          # or just double-click it
```

Opening the file directly works — there is no `fetch`, no ES modules, no CDN.
The only difference is that some browsers block `localStorage` on `file://`, in which
case calibration and language preference won't persist. To get those:

```bash
python -m http.server 8000
# then open http://127.0.0.1:8000
```

### Files

| File | What it is |
|---|---|
| `index.html` | The entire app — markup, styles, geometry, recommendation engine |
| `i18n.js` | String dictionary, English + Korean (190 keys each) |
| `mice.js` | Mouse specification database |

### Sharing results

Results are encoded in the URL hash, so a measurement is a link:

```
index.html#len=191&wid=88&grip=claw
```

Opening that link jumps straight to the results, no measuring required.

---

## Contributing mouse data

**This is where help is most useful.**

`mice.js` currently holds 63 mice, and every entry is marked `ver:false` —
the dimensions came from memory and have **not** been cross-checked against
manufacturer specifications yet.

To verify an entry:

1. Find the mouse on the manufacturer's official product page
2. Check length, width, height and weight against the entry
3. Correct anything wrong and set `ver:true`
4. Link the source page in your PR

```js
{ id:"logi-gpxs2", brand:"Logitech", name:"G Pro X Superlight 2",
  l:125, w:63.5, h:40, g:60, shape:"sym", wl:true,
  grips:["claw","fingertip","palm"], price:3, ver:false },
```

| Field | Meaning |
|---|---|
| `l` `w` `h` | Length × width × height in mm, manufacturer figures |
| `g` | Weight in grams, excluding cable |
| `shape` | `sym` (ambidextrous) or `ergo` (right-handed ergonomic) |
| `wl` | Wireless capable |
| `grips` | Grip styles it's commonly considered good for (6% of score) |
| `price` | `1` budget · `2` mid · `3` premium |
| `ver` | Cross-checked against official specs |

**Width is the field most worth double-checking** — some makers quote the widest
point including thumb wings, others quote grip width, and the difference can be
15 mm on the same mouse.

New mice are welcome too. Small, large, ergonomic, vertical, trackball-adjacent —
the database is thin at the extremes, which is exactly where the tool is least useful
right now.

---

## Known limitations

- **Mouse specs are unverified.** See above. Do not buy on this alone.
- **Grip ratios are unvalidated.** They come from community guidance, not measurement.
- **Phones can't do this.** Physically, not a bug. Direct entry is offered instead.
- **The wrist landmark is user-judged.** The guide helps, but it stays the dominant error term.
- **Palm length is informational.** It isn't used in scoring yet.

---

## 한국어

모니터에 손을 대고 실제 크기 윤곽선에 맞추면 손 길이·너비를 mm로 재고, 그립 방식에
맞는 마우스 치수와 모델을 추천합니다. 설치 없이 `index.html` 파일 하나만 열면 됩니다.

브라우저는 자기 픽셀의 물리적 크기를 모릅니다. CSS의 `mm`·`in`은 `96px = 1in`에
고정된 허구이고 `devicePixelRatio`도 물리 크기와 무관합니다. 그래서 화면 배율을
*계산*하려 하지 않고 **기준물로 한 번 실측**합니다. 이 값 하나가 패널 DPI, OS 배율,
레티나, 브라우저 확대를 전부 흡수합니다.

우측 상단 버튼으로 언어를 전환할 수 있습니다. 기여할 부분은 `mice.js`의 제조사 스펙
검증이 가장 큽니다 — 63종 전부 아직 `ver:false` 상태입니다.

---

## License

MIT — see [LICENSE](LICENSE).

Mouse specifications in `mice.js` are factual measurements published by their
manufacturers and are not covered by copyright. Brand and product names are
trademarks of their respective owners; this project is not affiliated with,
endorsed by, or sponsored by any of them.

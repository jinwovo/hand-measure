<div align="center">

<br>

# Hand Measure

### Measure your hand against your monitor.<br>Find the mouse that actually fits.

<br>

[![Live demo](https://img.shields.io/badge/▶_Live_demo-6d8fff?style=for-the-badge&logoColor=white)](https://jinwovo.github.io/hand-measure/)
[![License](https://img.shields.io/badge/License-MIT-3ddc97?style=for-the-badge)](LICENSE)
[![No dependencies](https://img.shields.io/badge/Dependencies-none-ffc24b?style=for-the-badge)](#running-it)

<br>

<img src="docs/img/03-measure.jpg" width="880" alt="A life-size hand outline on screen with Wrist, Tip and Width handles, reading 185.0mm hand length">

<br><br>

**English** · [한국어](#한국어)

</div>

<br>

---

## Why

Mouse sizing charts want your hand length in millimetres. Almost nobody knows theirs,
and a guess that's off by a centimetre changes the answer completely.

You already have a precisely manufactured measuring surface in front of you — your
monitor. The only obstacle is that a browser has no idea how physically large its own
pixels are.

## How it gets around that

Browsers genuinely cannot report physical DPI. CSS `mm` and `in` are fictions pinned to
`96px = 1in`; `devicePixelRatio` describes density, not size.

So don't *derive* the screen scale — measure it once:

```
pxPerMm = reference object's width in CSS px ÷ its real width in mm
```

That one number absorbs **panel DPI, OS scaling, Retina and browser zoom** simultaneously.
Everything downstream is then just arithmetic.

<br>

<div align="center">
<img src="docs/img/02-calibrate.jpg" width="880" alt="Calibration screen with reference object selector and a life-size credit card shape">
</div>

<br>

Hold a credit card against the screen and drag until they match — ISO 7810 ID-1 is
exactly 85.60 × 53.98 mm worldwide. Ruler, A4 and CD are offered too (bigger reference,
smaller relative error), plus a **custom length** for anything you can measure.

> A 3px misalignment on a credit card is ~0.9% — about 1.8 mm on a 190 mm hand.
> Mouse size brackets are ~10 mm wide, so ±3 mm is plenty. **Calibration is not the bottleneck.**

<br>

## The four steps

|  |  |
|---|---|
| **1 · Calibrate** | Match a real object once per monitor. Saved to `localStorage` and auto-invalidated if zoom or display changes. |
| **2 · Measure** | A life-size hand outline appears. Drag three points — wrist, middle fingertip, width. Everything else is cosmetic. |
| **3 · Pick your grip** | Palm, claw or fingertip. Shifts ideal mouse length by >15 mm for the *same* hand. |
| **4 · Get dimensions** | A target length/width/height range, plus ranked models from a 63-mouse database — and a verdict on the mouse you already own. |

<br>

<div align="center">
<img src="docs/img/05-grip.jpg" width="880" alt="Grip selection with side-profile diagrams showing contact points for palm, claw and fingertip">
<br><br>
<img src="docs/img/06-picks.jpg" width="880" alt="Recommendation screen: target dimensions 118-131mm length, then ranked mouse list">
</div>

<br>

**The range is the real output.** It works for mice the database has never heard of.

### "Is the mouse I already have wrong for me?"

That's the question most people actually arrive with, so it gets answered directly.
Pick your current mouse and it's scored against your hand with the specific numbers:

> **74%** — This mostly fits. Length is 0.6mm too large · Width is 8.8mm too large.

Your mouse is then tagged in the ranked list so you can see exactly what beats it and by
how much.

### Seeing it on your hand

Click any mouse in the list and it's drawn **at life size against your own hand outline**.

<div align="center">
<img src="docs/img/07-fit.jpg" width="880" alt="Fit preview: a mouse footprint drawn under a life-size hand outline, plus its side profile">
</div>

The top view overlays the mouse footprint under your measured hand, aligning your knuckle
line with the mouse's widest point. The side view shows its profile, with the hump where
the manufacturer actually puts it.

**Why not a 3D model?** Because the database holds bounding-box dimensions and shape
attributes — not geometry. A 3D render would have to invent every curve, and 3D reads as
far more authoritative than a diagram, so it would present fiction as measurement. These
outlines are schematics built strictly from published numbers, and the caption says so.

The same reasoning killed a "your fingertips overhang by 47mm" readout that an earlier
version showed: it depended on a made-up constant for where a hand sits on a mouse. The
comparison now uses the recommendation engine's own target bands, which are at least an
honest model.

<br>

## Design notes

<details>
<summary><b>The wrist landmark is on the wrong side of your hand</b></summary>
<br>

Standard anthropometric hand length runs from the **distal wrist crease** to the middle
fingertip. That crease is on your *palm* — invisible the moment your palm is against the
screen.

So the tool uses the **stylion line** instead: the line joining the two bony prominences
(radial and ulnar styloid) either side of the wrist. Anatomically the same height, and
visible from the back of the hand.

This is the single largest error source in the whole tool. Misplacing it costs 5–10 mm,
several times worse than calibration error — which is why it gets a dedicated guide screen.

</details>

<details>
<summary><b>Your left hand is on the screen, but your right hand uses the mouse</b></summary>
<br>

You need a free hand for the mouse, so most people measure the other one. Dominant and
non-dominant hands differ by roughly 1–2% in length — comfortably inside the tolerance
that would change a recommendation. The tool says so and moves on rather than pretending
to correct for it.

</details>

<details>
<summary><b>A life-size hand does not fit on most screens</b></summary>
<br>

A 185 mm hand needs nearly 700 px of height at typical scaling. So the measuring step goes
fullscreen by default, can lay the hand diagonally, and lets you drag anywhere to pan.

On a phone it is simply impossible — the hand is physically larger than the display. Small
screens are told that honestly and offered direct numeric entry instead of a degraded flow.

</details>

<details>
<summary><b>Measurements are rotation-invariant, which is what makes auto-fit safe</b></summary>
<br>

Hand length is `distance(wrist_midpoint, fingertip)`; width is
`distance(knuckle_left, knuckle_right)`. Both are point-to-point distances, so tilting the
hand changes nothing. That's why the outline can be rotated freely to fit the viewport
without touching the result.

</details>

<br>

## Recommendation model

Mouse length and height score against **hand length**; width against **hand width**.

| Grip | Length ÷ hand length | Width ÷ hand width | Height ÷ hand length |
|---|---|---|---|
| Palm | 0.655 – 0.720 | 0.700 – 0.820 | 0.205 – 0.245 |
| Claw | 0.620 – 0.685 | 0.680 – 0.800 | 0.190 – 0.230 |
| Fingertip | 0.575 – 0.645 | 0.650 – 0.780 | 0.170 – 0.210 |

Each dimension scores 1.0 at the **centre** of its band and tapers outward. Scoring a flat
1.0 anywhere inside the band tied the entire top of the list at 100%.

Weights: length 52% · height 22% · width 20% · grip hint 6%. Width is deliberately
underweighted because manufacturers measure it inconsistently.

> [!IMPORTANT]
> **These ratios are community guidance, not measured data.** They're a starting point that
> needs correcting against real "did the recommended mouse actually fit?" feedback.
> Treat the output as a strong hint, not a verdict.

<br>

## Where the mouse data comes from

62 of the 63 entries have been cross-checked against [eloshapes.com](https://www.eloshapes.com/),
which keeps 1600+ mice measured the same way. **41 entries needed correcting** — the width
figures especially:

| Mouse | Was | Now |
|---|---|---|
| Razer Viper V2 Pro | 57.6 mm wide | **66.0 mm** |
| Razer DeathAdder V2 | 61.7 mm wide | **70.0 mm** |
| Corsair Sabre RGB Pro | 61.2 mm wide | **69.0 mm** |
| VAXEE Outset AX | 126 mm long | **117.4 mm** |
| Zowie EC1-CW | 128 × 67 × 44 | **130 × 69 × 42** |

That width pattern is the grip-width-vs-widest-point problem in action, and it's exactly
why the database uses **one source measured one way** rather than the best figure from
whoever published it. For a recommendation engine, internal comparability matters more
than matching any single manufacturer's number.

The one unverified entry (HyperX Pulsefire Haste 2, wired) is flagged `ver:false` in the
file. **Still check the manufacturer before buying** — this database is for comparison.

<br>

## Running it

```bash
git clone https://github.com/jinwovo/hand-measure.git
cd hand-measure
open index.html        # or just double-click it
```

No install, no build, no CDN, no network calls. Opening the file directly works.

The only catch: some browsers block `localStorage` on `file://`, so calibration and language
preference won't persist. If you want those:

```bash
python -m http.server 8000   # then open http://127.0.0.1:8000
```

| File | What it is |
|---|---|
| `index.html` | The whole app — markup, styles, geometry, recommendation engine |
|  `i18n.js` | String dictionary, English + Korean (219 keys each) |
| `mice.js` | Mouse specification database |

**Results are links.** `index.html#len=191&wid=88&grip=claw` jumps straight to the
recommendations — no measuring needed.

<br>

## Contributing

**Adding mice is where help is most useful now.** The database is thinnest at the
extremes — very small and very large — which is exactly where recommendations are weakest.
Vertical mice, trackballs and ergonomic outliers aren't represented at all.

```js
{ id:"logi-gpxs2", brand:"Logitech", name:"G Pro X Superlight 2",
  l:125, w:63.5, h:40, g:60, shape:"sym", wl:true,
  grips:["claw","fingertip","palm"], price:3, ver:false },
```

Use [eloshapes.com](https://www.eloshapes.com/) for the figures so the measurement method
stays consistent with the rest of the database, and link the source in your PR. If you only
have manufacturer numbers, say so — **width is the field where sources disagree most**, by
up to 15 mm on the same mouse.

See [CONTRIBUTING.md](CONTRIBUTING.md) for adding mice, correcting the grip ratios, and
translations.

<br>

## Known limitations

- **Specs are third-party, not manufacturer.** Consistent for comparison; confirm before buying.
- **Grip ratios are unvalidated.** Community guidance, not measurement.
- **Phones can't do this.** Physics, not a bug. Direct entry is offered instead.
- **The wrist landmark is user-judged.** The guide helps; it stays the dominant error term.
- **Palm length is informational.** Not used in scoring yet.

<br>

## Accessibility & details

- **Keyboard operable.** <kbd>Tab</kbd> cycles the handles, <kbd>arrows</kbd> nudge 1px
  (<kbd>Shift</kbd> 5px), <kbd>Esc</kbd> deselects. With nothing selected, arrows pan the
  whole hand. Visible focus rings throughout.
- **Per-monitor calibration.** Calibrations are stored keyed by display signature, so a
  dual-monitor setup keeps one per screen instead of overwriting. Browser zoom changes are
  detected and flagged.
- **Fails loudly, not silently.** If `mice.js` doesn't load, you get an explanation rather
  than an empty list — the target dimensions still work.

<br>

---

## 한국어

<img src="docs/img/01-intro.jpg" width="880" alt="시작 화면">

모니터에 손을 대고 실제 크기 윤곽선에 맞추면 **손 길이·너비를 mm로 재고**, 그립 방식에
맞는 마우스 치수와 모델을 추천합니다. 설치 없이 `index.html` 하나만 열면 됩니다.

**핵심 아이디어** — 브라우저는 자기 픽셀의 물리적 크기를 모릅니다. CSS의 `mm`·`in`은
`96px = 1in`에 고정된 허구이고, `devicePixelRatio`도 밀도일 뿐 크기가 아닙니다. 그래서
화면 배율을 *계산*하려 하지 않고 **기준물로 한 번 실측**합니다. 이 값 하나가 패널 DPI,
OS 배율, 레티나, 브라우저 확대를 전부 흡수합니다.

**손목 기준선** — 표준 기준점인 손목 주름은 손바닥 쪽에 있어 화면에 붙이면 보이지 않습니다.
그래서 손등에서 보이는 **뼈 돌출부 2개를 잇는 선**(stylion line)을 씁니다. 해부학적으로
같은 높이입니다. 이 지점이 전체 오차의 가장 큰 원인이라 전용 가이드 화면을 뒀습니다.

우측 상단 버튼으로 언어를 전환합니다. 기여할 부분은 `mice.js`의 제조사 스펙 검증이 가장
큽니다 — 63종 전부 아직 `ver:false` 상태입니다.

<br>

---

<div align="center">

MIT License · [LICENSE](LICENSE)

<sub>Mouse specifications in <code>mice.js</code> are factual measurements published by their manufacturers.<br>
Brand and product names are trademarks of their respective owners.<br>
This project is not affiliated with, endorsed by, or sponsored by any of them.</sub>

</div>

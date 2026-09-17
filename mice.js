/* =====================================================================
   마우스 스펙 DB / Mouse specification database
   ---------------------------------------------------------------------
   l/w/h : 길이 × 너비 × 높이 (mm)      length × width × height
   g     : 무게 (g, 케이블 제외)         weight, cable excluded
   shape : "sym" 대칭 | "ergo" 우수전용  symmetric | right-handed ergonomic
   wl    : 무선 지원 여부                wireless capable
   grips : 적합 그립 힌트 (점수 6%만 반영, 나머지는 치수로 계산)
   price : 1 = ~5만원 / 2 = 5~12만원 / 3 = 12만원 이상
   ver   : 치수 교차검증 완료 여부       cross-checked
   hump  : 험프(가장 높은 지점) 위치, 0=앞 0.5=중앙 1=뒤   hump position front..back
   flare : 전면 벌어짐 -2..3 (음수=안으로 좁아짐)          front flare
   curve : 측면 곡률 -2..1 (음수=오목)                     side curvature
   tr    : 엄지 거치대 있음                                thumb rest
   -> 위 네 가지는 형상 미리보기 그리기에만 쓰인다. 점수 계산에는 안 들어간다.
      These four only drive the shape preview; they do not affect scoring.

   출처 / SOURCE — eloshapes.com (2026-09 확인, 62/63종)
   한 곳에서 일관된 방식으로 측정된 값을 쓴다. 제조사마다 "너비"를 최대폭으로
   재기도 하고 그립폭으로 재기도 해서, 여러 출처를 섞으면 같은 치수끼리
   비교가 안 된다. 추천 엔진은 절대값보다 "서로 비교 가능한가"가 중요하다.

   구매 전에는 제조사 공식 페이지를 한 번 더 확인하세요. 이 DB는 비교용입니다.
   Verify against the manufacturer before buying; this DB is for comparison.
   ===================================================================== */
window.MOUSE_DB = [
  /* ---------- Logitech ---------- */
  { id:"logi-gpxs2",   brand:"Logitech", name:"G Pro X Superlight 2", l:125, w:63.5, h:40, g:60,  shape:"sym",  wl:true,  hump:0.5, flare:1, curve:0, grips:["claw","fingertip","palm"], price:3, ver:true },
  { id:"logi-gpxs",    brand:"Logitech", name:"G Pro X Superlight",   l:125, w:63.5, h:40, g:63,  shape:"sym",  wl:true,  hump:0.5, flare:1, curve:0, grips:["claw","fingertip","palm"], price:3, ver:true },
  { id:"logi-gpw",     brand:"Logitech", name:"G Pro Wireless",       l:125, w:63.5, h:40, g:80,  shape:"sym",  wl:true,  hump:0.5, flare:1, curve:0, grips:["claw","palm"],             price:2, ver:true },
  { id:"logi-g305",    brand:"Logitech", name:"G304 / G305",          l:116.6, w:62.2, h:38.2, g:99,  shape:"sym",  wl:true,  hump:0.66, flare:-2, curve:-1, grips:["claw","fingertip"],        price:1, ver:true },
  { id:"logi-g203",    brand:"Logitech", name:"G102 / G203",          l:116.6, w:62.2, h:38.2, g:85,  shape:"sym",  wl:false, hump:0.66, flare:-2, curve:-1, grips:["claw","fingertip"],        price:1, ver:true },
  { id:"logi-g502x",   brand:"Logitech", name:"G502 X",               l:131.4, w:79.2, h:41.1, g:89,  shape:"ergo", wl:false, hump:0.5, flare:0, curve:-1, tr:1, grips:["palm","claw"],             price:2, ver:true },
  { id:"logi-g502xlt", brand:"Logitech", name:"G502 X Lightspeed",    l:131.4, w:79.2, h:41.1, g:100, shape:"ergo", wl:true,  hump:0.5, flare:0, curve:-1, tr:1, grips:["palm","claw"],             price:3, ver:true },
  { id:"logi-g703",    brand:"Logitech", name:"G703 Hero",            l:124, w:68, h:43, g:107,  shape:"ergo", wl:true,  hump:0.66, flare:2, curve:0, grips:["palm","claw"],             price:2, ver:true },
  { id:"logi-g403",    brand:"Logitech", name:"G403 Hero",            l:124, w:68, h:43, g:87,  shape:"ergo", wl:false, hump:0.66, flare:2, curve:0, grips:["palm","claw"],             price:1, ver:true },
  { id:"logi-mxm3s",   brand:"Logitech", name:"MX Master 3S",         l:124.9, w:84.3, h:51, g:141, shape:"ergo", wl:true,  hump:0.66, flare:0, curve:0, tr:1, grips:["palm"],                    price:3, ver:true },
  { id:"logi-mxa",     brand:"Logitech", name:"MX Anywhere 3S",       l:100.5, w:65, h:34.4, g:99,  shape:"sym",  wl:true,  hump:0.58, flare:-1, curve:-1, grips:["fingertip","claw"],        price:2, ver:true },

  /* ---------- Razer ---------- */
  { id:"rz-v3pro",     brand:"Razer",    name:"Viper V3 Pro",         l:127.1, w:63.9, h:39.9, g:54,  shape:"sym",  wl:true,  hump:0.58, flare:1, curve:-1, grips:["claw","fingertip","palm"], price:3, ver:true },
  { id:"rz-v3he",      brand:"Razer",    name:"Viper V3 HyperSpeed",  l:127.1, w:63.9, h:39.9, g:82,  shape:"sym",  wl:true,  hump:0.58, flare:1, curve:-1, grips:["claw","palm"],             price:2, ver:true },
  { id:"rz-v2pro",     brand:"Razer",    name:"Viper V2 Pro",         l:126.7, w:66, h:37.8, g:59,  shape:"sym",  wl:true,  hump:0.5, flare:2, curve:-1, grips:["claw","fingertip"],        price:3, ver:true },
  { id:"rz-vmini",     brand:"Razer",    name:"Viper Mini",           l:119, w:62, h:39, g:61,  shape:"sym",  wl:false, hump:0.58, flare:2, curve:-1, grips:["claw","fingertip"],        price:1, ver:true },
  { id:"rz-vmse",      brand:"Razer",    name:"Viper Mini SE",        l:119, w:62, h:39, g:49,  shape:"sym",  wl:true,  hump:0.58, flare:2, curve:-1, grips:["claw","fingertip"],        price:2, ver:true },
  { id:"rz-dav3pro",   brand:"Razer",    name:"DeathAdder V3 Pro",    l:128, w:68, h:44, g:63,  shape:"ergo", wl:true,  hump:0.5, flare:1, curve:-1, grips:["palm","claw"],             price:3, ver:true },
  { id:"rz-dav3",      brand:"Razer",    name:"DeathAdder V3",        l:128, w:68, h:44, g:59,  shape:"ergo", wl:false, hump:0.5, flare:1, curve:-1, grips:["palm","claw"],             price:2, ver:true },
  { id:"rz-dav2",      brand:"Razer",    name:"DeathAdder V2",        l:127, w:70, h:42.7, g:82,  shape:"ergo", wl:false, hump:0.5, flare:3, curve:-1, grips:["palm","claw"],             price:1, ver:true },
  { id:"rz-dae",       brand:"Razer",    name:"DeathAdder Essential", l:127, w:70, h:42.7, g:96,  shape:"ergo", wl:false, hump:0.5, flare:3, curve:-1, grips:["palm"],                    price:1, ver:true },
  { id:"rz-cobra",     brand:"Razer",    name:"Cobra",                l:119.6, w:62.5, h:38.1, g:58,  shape:"sym",  wl:false, hump:0.58, flare:2, curve:-1, grips:["claw","fingertip"],        price:1, ver:true },
  { id:"rz-cobrapro",  brand:"Razer",    name:"Cobra Pro",            l:119.6, w:62.5, h:38.1, g:77,  shape:"sym",  wl:true,  hump:0.58, flare:2, curve:-1, grips:["claw","fingertip"],        price:3, ver:true },
  { id:"rz-basv3",     brand:"Razer",    name:"Basilisk V3",          l:130, w:75, h:42, g:101, shape:"ergo", wl:false, hump:0.58, flare:0, curve:0, tr:1, grips:["palm","claw"],             price:2, ver:true },
  { id:"rz-basv3pro",  brand:"Razer",    name:"Basilisk V3 Pro",      l:130, w:75, h:42, g:112, shape:"ergo", wl:true,  hump:0.58, flare:0, curve:0, tr:1, grips:["palm"],                    price:3, ver:true },

  /* ---------- Zowie (BenQ) ---------- */
  { id:"zw-ec1cw",     brand:"Zowie",    name:"EC1-CW",               l:130, w:69, h:42, g:79,  shape:"ergo", wl:true,  hump:0.5, flare:2, curve:-1, grips:["palm","claw"],             price:3, ver:true },
  { id:"zw-ec2cw",     brand:"Zowie",    name:"EC2-CW",               l:123, w:65, h:42, g:77,  shape:"ergo", wl:true,  hump:0.5, flare:2, curve:-1, grips:["palm","claw"],             price:3, ver:true },
  { id:"zw-ec1",       brand:"Zowie",    name:"EC1-C",                l:130, w:69, h:42, g:80,  shape:"ergo", wl:false, hump:0.5, flare:2, curve:-1, grips:["palm","claw"],             price:2, ver:true },
  { id:"zw-ec2",       brand:"Zowie",    name:"EC2-C",                l:123, w:65, h:42, g:73,  shape:"ergo", wl:false, hump:0.5, flare:2, curve:-1, grips:["palm","claw"],             price:2, ver:true },
  { id:"zw-fk1",       brand:"Zowie",    name:"FK1+",                 l:128.9, w:66.8, h:37.3, g:74,  shape:"sym",  wl:false, hump:0.5, flare:1, curve:-1, grips:["claw","fingertip"],        price:2, ver:true },
  { id:"zw-fk2",       brand:"Zowie",    name:"FK2",                  l:125.1, w:64.9, h:36.4, g:80,  shape:"sym",  wl:false, hump:0.5, flare:1, curve:-1, grips:["claw","fingertip"],        price:2, ver:true },
  { id:"zw-s2",        brand:"Zowie",    name:"S2",                   l:120, w:64.2, h:38.1, g:69,  shape:"sym",  wl:false, hump:0.66, flare:1, curve:-1, grips:["claw","palm"],             price:2, ver:true },
  { id:"zw-za13",      brand:"Zowie",    name:"ZA13-C",               l:121.7, w:62.8, h:40.2, g:65,  shape:"sym",  wl:false, hump:0.74, flare:1, curve:-1, grips:["claw","fingertip"],        price:2, ver:true },
  { id:"zw-u2",        brand:"Zowie",    name:"U2",                   l:124, w:65, h:38, g:60,  shape:"sym",  wl:true,  hump:0.58, flare:1, curve:-1, grips:["claw","fingertip"],        price:3, ver:true },

  /* ---------- Glorious ---------- */
  { id:"gl-modelo",    brand:"Glorious", name:"Model O",              l:128, w:66, h:38, g:67,  shape:"sym",  wl:false, hump:0.5, flare:1, curve:-1, grips:["claw","fingertip"],        price:1, ver:true },
  { id:"gl-modelow",   brand:"Glorious", name:"Model O Wireless",     l:128, w:66, h:38, g:69,  shape:"sym",  wl:true,  hump:0.5, flare:1, curve:-1, grips:["claw","fingertip"],        price:2, ver:true },
  { id:"gl-modelominus",brand:"Glorious",name:"Model O-",             l:120, w:63, h:36, g:58,  shape:"sym",  wl:false, hump:0.5, flare:1, curve:-1, grips:["claw","fingertip"],        price:1, ver:true },
  { id:"gl-modeld",    brand:"Glorious", name:"Model D",              l:128, w:67, h:42, g:69,  shape:"ergo", wl:false, hump:0.5, flare:2, curve:-1, grips:["palm","claw"],             price:1, ver:true },
  { id:"gl-modeldw",   brand:"Glorious", name:"Model D Wireless",     l:128, w:67, h:42, g:69,  shape:"ergo", wl:true,  hump:0.5, flare:2, curve:-1, grips:["palm","claw"],             price:2, ver:true },
  { id:"gl-modeli2",   brand:"Glorious", name:"Model I 2 Wireless",   l:129, w:72, h:42, g:75,  shape:"ergo", wl:true,  hump:0.58, flare:0, curve:-1, tr:1, grips:["palm","claw"],             price:2, ver:true },

  /* ---------- Pulsar ---------- */
  { id:"pl-x2v2",      brand:"Pulsar",   name:"X2 V2",                l:120, w:63, h:38, g:53,  shape:"sym",  wl:true,  hump:0.66, flare:0, curve:0, grips:["claw","fingertip"],        price:2, ver:true },
  { id:"pl-x2mini",    brand:"Pulsar",   name:"X2 Mini V2",           l:116, w:61, h:37, g:51,  shape:"sym",  wl:true,  hump:0.66, flare:0, curve:0, grips:["claw","fingertip"],        price:2, ver:true },
  { id:"pl-x2h",       brand:"Pulsar",   name:"X2H",                  l:120.4, w:65, h:39.1, g:54,  shape:"sym",  wl:true,  hump:0.74, flare:1, curve:-1, grips:["claw","palm"],             price:2, ver:true },
  { id:"pl-xlitev3",   brand:"Pulsar",   name:"Xlite V3",             l:122, w:66, h:43, g:55,  shape:"ergo", wl:true,  hump:0.5, flare:2, curve:-1, grips:["palm","claw"],             price:2, ver:true },
  { id:"pl-xlitev3es", brand:"Pulsar",   name:"Xlite V3 eS",          l:122, w:67, h:43, g:65,  shape:"ergo", wl:true,  hump:0.5, flare:2, curve:-1, grips:["palm"],                    price:2, ver:true },

  /* ---------- Lamzu ---------- */
  { id:"lz-atlantis",  brand:"Lamzu",    name:"Atlantis",             l:123, w:66, h:38, g:55,  shape:"sym",  wl:true,  hump:0.66, flare:1, curve:-2, grips:["claw","fingertip"],        price:2, ver:true },
  { id:"lz-atlmini",   brand:"Lamzu",    name:"Atlantis Mini",        l:116.9, w:63.1, h:37, g:49,  shape:"sym",  wl:true,  hump:0.66, flare:1, curve:-2, grips:["claw","fingertip"],        price:2, ver:true },
  { id:"lz-maya",      brand:"Lamzu",    name:"Maya",                 l:119, w:62, h:38, g:45,  shape:"sym",  wl:true,  hump:0.5, flare:1, curve:-1, grips:["claw","palm"],             price:2, ver:true },

  /* ---------- SteelSeries ---------- */
  { id:"ss-aerox3w",   brand:"SteelSeries", name:"Aerox 3 Wireless",  l:120.6, w:67, h:38, g:68,  shape:"sym",  wl:true,  hump:0.58, flare:0, curve:-1, grips:["claw","fingertip"],        price:2, ver:true },
  { id:"ss-aerox5w",   brand:"SteelSeries", name:"Aerox 5 Wireless",  l:128.8, w:68.2, h:42.1, g:74,  shape:"ergo", wl:true,  hump:0.5, flare:0, curve:0, grips:["palm","claw"],             price:3, ver:true },
  { id:"ss-primew",    brand:"SteelSeries", name:"Prime Wireless",    l:125.3, w:67.9, h:42.4, g:80,  shape:"ergo", wl:true,  hump:0.5, flare:0, curve:-1, grips:["palm","claw"],             price:2, ver:true },
  { id:"ss-rival3",    brand:"SteelSeries", name:"Rival 3",           l:120.6, w:67, h:38, g:77,  shape:"sym",  wl:false, hump:0.58, flare:0, curve:-1, grips:["claw","fingertip"],        price:1, ver:true },

  /* ---------- HyperX ---------- */
  { id:"hx-haste2",    brand:"HyperX",   name:"Pulsefire Haste 2",   /* 개별 확인 실패 — 미검증 / unverified */    l:120.9, w:62.9, h:38.1, g:53,  shape:"sym",  wl:false, hump:0.5, flare:0, curve:0, grips:["claw","fingertip"],        price:1, ver:false },
  { id:"hx-haste2w",   brand:"HyperX",   name:"Pulsefire Haste 2 Wireless", l:124.2, w:66.8, h:38.2, g:60, shape:"sym", wl:true, hump:0.5, flare:0, curve:0, grips:["claw","palm"],          price:2, ver:true },
  { id:"hx-haste",     brand:"HyperX",   name:"Pulsefire Haste",      l:124.2, w:66.8, h:38.2, g:59,  shape:"sym",  wl:false, hump:0.5, flare:0, curve:0, grips:["claw","fingertip"],        price:1, ver:true },

  /* ---------- Endgame Gear / VAXEE / 기타 ---------- */
  { id:"eg-xm1r",      brand:"Endgame Gear", name:"XM1r",             l:122, w:66, h:38.5, g:70,  shape:"sym",  wl:false, hump:0.66, flare:1, curve:-2, grips:["claw","palm"],             price:2, ver:true },
  { id:"eg-op1",       brand:"Endgame Gear", name:"OP1 8k",           l:118.2, w:60.5, h:37.2, g:50.5,  shape:"sym",  wl:false, hump:0.66, flare:0, curve:0, grips:["claw","fingertip"],        price:2, ver:true },
  { id:"vx-xe",        brand:"VAXEE",    name:"XE",                   l:124, w:66, h:38.7, g:67,  shape:"sym",  wl:false, hump:0.5, flare:1, curve:-1, grips:["claw","palm"],             price:2, ver:true },
  { id:"vx-outsetax",  brand:"VAXEE",    name:"Outset AX",            l:117.4, w:66, h:43, g:76,  shape:"ergo", wl:false, hump:0.5, flare:2, curve:-1, grips:["palm","claw"],             price:2, ver:true },
  { id:"cm-mm711",     brand:"Cooler Master", name:"MM711",           l:116.6, w:62.6, h:38.3, g:60,  shape:"sym",  wl:false, hump:0.66, flare:0, curve:0, grips:["claw","fingertip"],        price:1, ver:true },
  { id:"cm-mm720",     brand:"Cooler Master", name:"MM720",           l:105.4, w:76.5, h:37.4, g:49,  shape:"ergo", wl:false, hump:0.66, flare:-1, curve:1, grips:["claw","fingertip"],        price:1, ver:true },
  { id:"cs-sabrepro",  brand:"Corsair",  name:"Sabre RGB Pro",        l:128.2, w:69, h:42.4, g:74,  shape:"ergo", wl:false, hump:0.5, flare:1, curve:0, grips:["palm","claw"],             price:1, ver:true },
  { id:"cs-m65ultra",  brand:"Corsair",  name:"M65 RGB Ultra",        l:116, w:78, h:39, g:97,  shape:"ergo", wl:false, hump:0.66, flare:-1, curve:-1, tr:1, grips:["claw","palm"],             price:2, ver:true },
  { id:"ap-magic2",    brand:"Apple",    name:"Magic Mouse",          l:113.5, w:57.1, h:21.6, g:99,  shape:"sym",  wl:true,  hump:0.5, flare:0, curve:-2, grips:["fingertip"],               price:3, ver:true },
];

/* =====================================================================
   마우스 스펙 DB
   ---------------------------------------------------------------------
   l/w/h : 길이 × 너비 × 높이 (mm, 제조사 공표치 기준)
   g     : 무게 (g, 케이블 제외)
   shape : "sym" 대칭 | "ergo" 우수전용 에르고
   wl    : 무선 지원 여부
   grips : 통용되는 적합 그립 힌트 (점수에 6%만 반영, 나머지는 치수로 계산)
   price : 1 = ~5만원 / 2 = 5~12만원 / 3 = 12만원 이상 (국내 정가 기준 대략)
   ver   : 제조사 공식 스펙으로 확인 완료 여부

   ⚠ 아래 수치는 아직 교차검증 전입니다. 서비스 공개 전에 제조사 공식
     페이지로 한 건씩 확인하고 ver:true 로 바꾸세요. 특히 "너비"는
     제조사마다 측정 위치(최대폭 / 그립폭)가 달라 편차가 큽니다.
   ===================================================================== */
window.MOUSE_DB = [
  /* ---------- Logitech ---------- */
  { id:"logi-gpxs2",   brand:"Logitech", name:"G Pro X Superlight 2", l:125,   w:63.5, h:40,   g:60,  shape:"sym",  wl:true,  grips:["claw","fingertip","palm"], price:3, ver:false },
  { id:"logi-gpxs",    brand:"Logitech", name:"G Pro X Superlight",   l:125,   w:63.5, h:40,   g:63,  shape:"sym",  wl:true,  grips:["claw","fingertip","palm"], price:3, ver:false },
  { id:"logi-gpw",     brand:"Logitech", name:"G Pro Wireless",       l:125,   w:63.5, h:40,   g:80,  shape:"sym",  wl:true,  grips:["claw","palm"],             price:2, ver:false },
  { id:"logi-g305",    brand:"Logitech", name:"G304 / G305",          l:116.6, w:62.2, h:38.2, g:99,  shape:"sym",  wl:true,  grips:["claw","fingertip"],        price:1, ver:false },
  { id:"logi-g203",    brand:"Logitech", name:"G102 / G203",          l:116.6, w:62.2, h:38.2, g:85,  shape:"sym",  wl:false, grips:["claw","fingertip"],        price:1, ver:false },
  { id:"logi-g502x",   brand:"Logitech", name:"G502 X",               l:131.4, w:79.2, h:41.1, g:89,  shape:"ergo", wl:false, grips:["palm","claw"],             price:2, ver:false },
  { id:"logi-g502xlt", brand:"Logitech", name:"G502 X Lightspeed",    l:131.4, w:79.2, h:41.1, g:102, shape:"ergo", wl:true,  grips:["palm","claw"],             price:3, ver:false },
  { id:"logi-g703",    brand:"Logitech", name:"G703 Hero",            l:124,   w:68,   h:43,   g:95,  shape:"ergo", wl:true,  grips:["palm","claw"],             price:2, ver:false },
  { id:"logi-g403",    brand:"Logitech", name:"G403 Hero",            l:124,   w:68,   h:43,   g:87,  shape:"ergo", wl:false, grips:["palm","claw"],             price:1, ver:false },
  { id:"logi-mxm3s",   brand:"Logitech", name:"MX Master 3S",         l:124.9, w:84.3, h:51,   g:141, shape:"ergo", wl:true,  grips:["palm"],                    price:3, ver:false },
  { id:"logi-mxa",     brand:"Logitech", name:"MX Anywhere 3S",       l:100.5, w:65,   h:34.4, g:99,  shape:"sym",  wl:true,  grips:["fingertip","claw"],        price:2, ver:false },

  /* ---------- Razer ---------- */
  { id:"rz-v3pro",     brand:"Razer",    name:"Viper V3 Pro",         l:127.1, w:63.9, h:39.9, g:54,  shape:"sym",  wl:true,  grips:["claw","fingertip","palm"], price:3, ver:false },
  { id:"rz-v3he",      brand:"Razer",    name:"Viper V3 HyperSpeed",  l:127.1, w:63.9, h:39.9, g:82,  shape:"sym",  wl:true,  grips:["claw","palm"],             price:2, ver:false },
  { id:"rz-v2pro",     brand:"Razer",    name:"Viper V2 Pro",         l:126.7, w:57.6, h:37.8, g:58,  shape:"sym",  wl:true,  grips:["claw","fingertip"],        price:3, ver:false },
  { id:"rz-vmini",     brand:"Razer",    name:"Viper Mini",           l:118.3, w:53.5, h:38.3, g:61,  shape:"sym",  wl:false, grips:["claw","fingertip"],        price:1, ver:false },
  { id:"rz-vmse",      brand:"Razer",    name:"Viper Mini SE",        l:120.5, w:57.3, h:37.6, g:49,  shape:"sym",  wl:true,  grips:["claw","fingertip"],        price:2, ver:false },
  { id:"rz-dav3pro",   brand:"Razer",    name:"DeathAdder V3 Pro",    l:128,   w:68,   h:44,   g:63,  shape:"ergo", wl:true,  grips:["palm","claw"],             price:3, ver:false },
  { id:"rz-dav3",      brand:"Razer",    name:"DeathAdder V3",        l:128,   w:68,   h:44,   g:59,  shape:"ergo", wl:false, grips:["palm","claw"],             price:2, ver:false },
  { id:"rz-dav2",      brand:"Razer",    name:"DeathAdder V2",        l:127,   w:61.7, h:42.7, g:82,  shape:"ergo", wl:false, grips:["palm","claw"],             price:1, ver:false },
  { id:"rz-dae",       brand:"Razer",    name:"DeathAdder Essential", l:127,   w:61.7, h:43,   g:96,  shape:"ergo", wl:false, grips:["palm"],                    price:1, ver:false },
  { id:"rz-cobra",     brand:"Razer",    name:"Cobra",                l:119.6, w:62.5, h:38.1, g:58,  shape:"sym",  wl:false, grips:["claw","fingertip"],        price:1, ver:false },
  { id:"rz-cobrapro",  brand:"Razer",    name:"Cobra Pro",            l:119.6, w:62.5, h:38.1, g:77,  shape:"sym",  wl:true,  grips:["claw","fingertip"],        price:3, ver:false },
  { id:"rz-basv3",     brand:"Razer",    name:"Basilisk V3",          l:130,   w:75,   h:42.5, g:101, shape:"ergo", wl:false, grips:["palm","claw"],             price:2, ver:false },
  { id:"rz-basv3pro",  brand:"Razer",    name:"Basilisk V3 Pro",      l:130,   w:75.4, h:42.5, g:112, shape:"ergo", wl:true,  grips:["palm"],                    price:3, ver:false },

  /* ---------- Zowie (BenQ) ---------- */
  { id:"zw-ec1cw",     brand:"Zowie",    name:"EC1-CW",               l:128,   w:67,   h:44,   g:80,  shape:"ergo", wl:true,  grips:["palm","claw"],             price:3, ver:false },
  { id:"zw-ec2cw",     brand:"Zowie",    name:"EC2-CW",               l:119,   w:64,   h:40,   g:77,  shape:"ergo", wl:true,  grips:["palm","claw"],             price:3, ver:false },
  { id:"zw-ec1",       brand:"Zowie",    name:"EC1-C",                l:128,   w:67,   h:44,   g:70,  shape:"ergo", wl:false, grips:["palm","claw"],             price:2, ver:false },
  { id:"zw-ec2",       brand:"Zowie",    name:"EC2-C",                l:119,   w:64,   h:40,   g:70,  shape:"ergo", wl:false, grips:["palm","claw"],             price:2, ver:false },
  { id:"zw-fk1",       brand:"Zowie",    name:"FK1+",                 l:128,   w:67,   h:37,   g:93,  shape:"sym",  wl:false, grips:["claw","fingertip"],        price:2, ver:false },
  { id:"zw-fk2",       brand:"Zowie",    name:"FK2",                  l:124,   w:61,   h:36,   g:83,  shape:"sym",  wl:false, grips:["claw","fingertip"],        price:2, ver:false },
  { id:"zw-s2",        brand:"Zowie",    name:"S2",                   l:122,   w:63,   h:38.5, g:73,  shape:"sym",  wl:false, grips:["claw","palm"],             price:2, ver:false },
  { id:"zw-za13",      brand:"Zowie",    name:"ZA13-C",               l:120,   w:62,   h:39,   g:70,  shape:"sym",  wl:false, grips:["claw","fingertip"],        price:2, ver:false },
  { id:"zw-u2",        brand:"Zowie",    name:"U2",                   l:121,   w:63,   h:38,   g:60,  shape:"sym",  wl:true,  grips:["claw","fingertip"],        price:3, ver:false },

  /* ---------- Glorious ---------- */
  { id:"gl-modelo",    brand:"Glorious", name:"Model O",              l:128,   w:66,   h:37.5, g:67,  shape:"sym",  wl:false, grips:["claw","fingertip"],        price:1, ver:false },
  { id:"gl-modelow",   brand:"Glorious", name:"Model O Wireless",     l:128,   w:66,   h:37.5, g:69,  shape:"sym",  wl:true,  grips:["claw","fingertip"],        price:2, ver:false },
  { id:"gl-modelominus",brand:"Glorious",name:"Model O-",             l:120,   w:63,   h:36,   g:58,  shape:"sym",  wl:false, grips:["claw","fingertip"],        price:1, ver:false },
  { id:"gl-modeld",    brand:"Glorious", name:"Model D",              l:128,   w:67,   h:42,   g:68,  shape:"ergo", wl:false, grips:["palm","claw"],             price:1, ver:false },
  { id:"gl-modeldw",   brand:"Glorious", name:"Model D Wireless",     l:128,   w:67,   h:42,   g:69,  shape:"ergo", wl:true,  grips:["palm","claw"],             price:2, ver:false },
  { id:"gl-modeli2",   brand:"Glorious", name:"Model I 2 Wireless",   l:127.6, w:67.5, h:42.7, g:75,  shape:"ergo", wl:true,  grips:["palm","claw"],             price:2, ver:false },

  /* ---------- Pulsar ---------- */
  { id:"pl-x2v2",      brand:"Pulsar",   name:"X2 V2",                l:120,   w:63,   h:38,   g:53,  shape:"sym",  wl:true,  grips:["claw","fingertip"],        price:2, ver:false },
  { id:"pl-x2mini",    brand:"Pulsar",   name:"X2 Mini V2",           l:114,   w:59,   h:36,   g:51,  shape:"sym",  wl:true,  grips:["claw","fingertip"],        price:2, ver:false },
  { id:"pl-x2h",       brand:"Pulsar",   name:"X2H",                  l:120,   w:63,   h:39,   g:52,  shape:"sym",  wl:true,  grips:["claw","palm"],             price:2, ver:false },
  { id:"pl-xlitev3",   brand:"Pulsar",   name:"Xlite V3",             l:122,   w:65,   h:42,   g:55,  shape:"ergo", wl:true,  grips:["palm","claw"],             price:2, ver:false },
  { id:"pl-xlitev3es", brand:"Pulsar",   name:"Xlite V3 eS",          l:126,   w:66,   h:43,   g:59,  shape:"ergo", wl:true,  grips:["palm"],                    price:2, ver:false },

  /* ---------- Lamzu ---------- */
  { id:"lz-atlantis",  brand:"Lamzu",    name:"Atlantis",             l:123,   w:66,   h:38,   g:55,  shape:"sym",  wl:true,  grips:["claw","fingertip"],        price:2, ver:false },
  { id:"lz-atlmini",   brand:"Lamzu",    name:"Atlantis Mini",        l:112,   w:59,   h:36,   g:49,  shape:"sym",  wl:true,  grips:["claw","fingertip"],        price:2, ver:false },
  { id:"lz-maya",      brand:"Lamzu",    name:"Maya",                 l:123,   w:64,   h:39,   g:49,  shape:"sym",  wl:true,  grips:["claw","palm"],             price:2, ver:false },

  /* ---------- SteelSeries ---------- */
  { id:"ss-aerox3w",   brand:"SteelSeries", name:"Aerox 3 Wireless",  l:120.5, w:67,   h:38,   g:66,  shape:"sym",  wl:true,  grips:["claw","fingertip"],        price:2, ver:false },
  { id:"ss-aerox5w",   brand:"SteelSeries", name:"Aerox 5 Wireless",  l:128.8, w:68.2, h:42.1, g:74,  shape:"ergo", wl:true,  grips:["palm","claw"],             price:3, ver:false },
  { id:"ss-primew",    brand:"SteelSeries", name:"Prime Wireless",    l:125,   w:67,   h:42,   g:80,  shape:"ergo", wl:true,  grips:["palm","claw"],             price:2, ver:false },
  { id:"ss-rival3",    brand:"SteelSeries", name:"Rival 3",           l:120.6, w:67,   h:37.9, g:77,  shape:"sym",  wl:false, grips:["claw","fingertip"],        price:1, ver:false },

  /* ---------- HyperX ---------- */
  { id:"hx-haste2",    brand:"HyperX",   name:"Pulsefire Haste 2",    l:120.9, w:62.9, h:38.1, g:53,  shape:"sym",  wl:false, grips:["claw","fingertip"],        price:1, ver:false },
  { id:"hx-haste2w",   brand:"HyperX",   name:"Pulsefire Haste 2 Wireless", l:124.3, w:66.8, h:38.2, g:61, shape:"sym", wl:true, grips:["claw","palm"],          price:2, ver:false },
  { id:"hx-haste",     brand:"HyperX",   name:"Pulsefire Haste",      l:124.2, w:66.8, h:38.2, g:59,  shape:"sym",  wl:false, grips:["claw","fingertip"],        price:1, ver:false },

  /* ---------- Endgame Gear / VAXEE / 기타 ---------- */
  { id:"eg-xm1r",      brand:"Endgame Gear", name:"XM1r",             l:122,   w:65.8, h:38.3, g:70,  shape:"sym",  wl:false, grips:["claw","palm"],             price:2, ver:false },
  { id:"eg-op1",       brand:"Endgame Gear", name:"OP1 8k",           l:120.6, w:62.5, h:37.5, g:50,  shape:"sym",  wl:false, grips:["claw","fingertip"],        price:2, ver:false },
  { id:"vx-xe",        brand:"VAXEE",    name:"XE",                   l:121,   w:65,   h:39,   g:75,  shape:"sym",  wl:false, grips:["claw","palm"],             price:2, ver:false },
  { id:"vx-outsetax",  brand:"VAXEE",    name:"Outset AX",            l:126,   w:66,   h:41,   g:78,  shape:"ergo", wl:false, grips:["palm","claw"],             price:2, ver:false },
  { id:"cm-mm711",     brand:"Cooler Master", name:"MM711",           l:116.5, w:62.4, h:38.3, g:60,  shape:"sym",  wl:false, grips:["claw","fingertip"],        price:1, ver:false },
  { id:"cm-mm720",     brand:"Cooler Master", name:"MM720",           l:105.4, w:76.4, h:37.4, g:49,  shape:"ergo", wl:false, grips:["claw","fingertip"],        price:1, ver:false },
  { id:"cs-sabrepro",  brand:"Corsair",  name:"Sabre RGB Pro",        l:128.6, w:61.2, h:42.9, g:74,  shape:"ergo", wl:false, grips:["palm","claw"],             price:1, ver:false },
  { id:"cs-m65ultra",  brand:"Corsair",  name:"M65 RGB Ultra",        l:118,   w:77,   h:39,   g:97,  shape:"ergo", wl:false, grips:["claw","palm"],             price:2, ver:false },
  { id:"ap-magic2",    brand:"Apple",    name:"Magic Mouse",          l:113,   w:57,   h:21,   g:99,  shape:"sym",  wl:true,  grips:["fingertip"],               price:3, ver:false },
];

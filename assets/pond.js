/*!
 * pond.js —— 两幅「池塘剖面」示意插画（清淤前 / 清淤后）
 * 纯 SVG 手绘，无外部图片，可离线打开、可打印、可上传到 GitHub Pages。
 *
 * 用法：
 *   PondScene.render(domElement, 'before'|'after');
 *   domElement.innerHTML = PondScene.svg('after', 'a1');
 *
 * 同一个页面里放多幅时，uid 会自动生成，避免 id / clipPath 冲突。
 */
(function (global) {
  'use strict';

  var seq = 0;
  function uid() {
    seq += 1;
    return 'p' + seq + (Math.random().toString(36).slice(2, 6));
  }

  function esc(s) {
    return String(s).replace(/[^A-Za-z0-9_-]/g, '');
  }

  /* ---------------------------------------------------------------- 清淤前 */
  function before(rawUid) {
    var u = esc(rawUid || uid());
    var id = function (n) { return n + '-' + u; };

    return '' +
    '<svg class="pond-scene" viewBox="0 0 480 340" role="img" ' +
      'aria-label="清淤前的池塘剖面示意图：水体浑绿、底泥深厚、水面有浮沫与藻膜、滋生蚊虫幼虫、没有水生植物和小鱼">' +
      '<defs>' +
        '<linearGradient id="' + id('sky') + '" x1="0" y1="0" x2="0" y2="1">' +
          '<stop offset="0" stop-color="#e3e8dd"/><stop offset="1" stop-color="#c2cdc1"/>' +
        '</linearGradient>' +
        '<linearGradient id="' + id('water') + '" x1="0" y1="0" x2="0" y2="1">' +
          '<stop offset="0" stop-color="#828e5a"/><stop offset=".45" stop-color="#5d6a3e"/>' +
          '<stop offset="1" stop-color="#2d3825"/>' +
        '</linearGradient>' +
        '<linearGradient id="' + id('mud') + '" x1="0" y1="0" x2="0" y2="1">' +
          '<stop offset="0" stop-color="#4c3e2d"/><stop offset="1" stop-color="#201a12"/>' +
        '</linearGradient>' +
        '<clipPath id="' + id('clip') + '"><rect width="480" height="340" rx="14"/></clipPath>' +
      '</defs>' +

      '<g clip-path="url(#' + id('clip') + ')">' +
        '<rect width="480" height="340" fill="url(#' + id('sky') + ')"/>' +

        /* 远处岸线 */
        '<path d="M0 54 V38 C60 32 120 44 180 38 C240 32 300 44 360 38 C420 32 452 42 480 38 V54 Z" ' +
              'fill="#8b986b" opacity=".5"/>' +

        /* 芦苇（枯黄） */
        '<g fill="none" stroke="#6f7c47" stroke-width="2.4" stroke-linecap="round" opacity=".9">' +
          '<path d="M40 56 C36 42 34 28 40 16"/>' +
          '<path d="M48 56 C52 40 56 26 50 12"/>' +
          '<path d="M30 56 C26 46 28 34 34 24"/>' +
          '<path d="M440 56 C436 44 434 30 440 18"/>' +
          '<path d="M448 56 C452 42 454 28 448 14"/>' +
        '</g>' +

        /* 水体：浑绿 */
        '<rect y="54" width="480" height="286" fill="url(#' + id('water') + ')"/>' +

        /* 悬浮的浑浊团 */
        '<g fill="#97a368" opacity=".22">' +
          '<ellipse cx="120" cy="152" rx="96" ry="40"/>' +
          '<ellipse cx="332" cy="198" rx="112" ry="44"/>' +
          '<ellipse cx="220" cy="254" rx="124" ry="34"/>' +
          '<ellipse cx="52" cy="224" rx="62" ry="34"/>' +
        '</g>' +

        /* 悬浮颗粒 */
        '<g fill="#d5dba4" opacity=".38">' +
          '<circle cx="72" cy="112" r="2.2"/><circle cx="132" cy="86" r="1.6"/>' +
          '<circle cx="196" cy="128" r="2.6"/><circle cx="258" cy="96" r="1.8"/>' +
          '<circle cx="318" cy="140" r="2.2"/><circle cx="392" cy="108" r="2.6"/>' +
          '<circle cx="430" cy="164" r="1.8"/><circle cx="46" cy="170" r="2.4"/>' +
          '<circle cx="112" cy="196" r="2"/><circle cx="176" cy="168" r="1.6"/>' +
          '<circle cx="240" cy="206" r="2.6"/><circle cx="300" cy="178" r="1.8"/>' +
          '<circle cx="364" cy="222" r="2.2"/><circle cx="410" cy="212" r="2"/>' +
          '<circle cx="86" cy="238" r="1.8"/><circle cx="152" cy="226" r="2.4"/>' +
          '<circle cx="214" cy="180" r="1.5"/><circle cx="286" cy="128" r="2"/>' +
          '<circle cx="348" cy="88" r="1.6"/><circle cx="24" cy="96" r="1.8"/>' +
          '<circle cx="458" cy="132" r="2"/><circle cx="168" cy="248" r="2.2"/>' +
          '<circle cx="252" cy="160" r="1.6"/><circle cx="396" cy="252" r="2"/><circle cx="338" cy="238" r="1.6"/>' +
        '</g>' +

        /* 底泥：厚、黑、冒气泡 */
        '<path d="M0 248 C70 236 122 260 190 250 C252 241 312 266 380 254 C420 247 452 258 480 250 ' +
              'L480 340 L0 340 Z" fill="url(#' + id('mud') + ')"/>' +
        '<g fill="#5e4c35" opacity=".45">' +
          '<ellipse cx="70" cy="272" rx="26" ry="8"/><ellipse cx="210" cy="286" rx="34" ry="9"/>' +
          '<ellipse cx="330" cy="268" rx="30" ry="8"/><ellipse cx="420" cy="290" rx="26" ry="7"/>' +
        '</g>' +
        '<g fill="#7d6648" opacity=".35">' +
          '<ellipse cx="120" cy="300" rx="14" ry="5"/><ellipse cx="270" cy="312" rx="18" ry="6"/>' +
          '<ellipse cx="380" cy="304" rx="12" ry="5"/>' +
        '</g>' +
        '<g fill="none" stroke="#7b8a5a" stroke-width="2" opacity=".55">' +
          '<circle cx="150" cy="276" r="3.5"/><circle cx="296" cy="262" r="3"/>' +
          '<circle cx="356" cy="298" r="3.5"/><circle cx="88" cy="292" r="2.6"/>' +
        '</g>' +

        /* 枯死的植物残茎 */
        '<g fill="none" stroke="#6b5a3c" stroke-width="4" stroke-linecap="round" opacity=".95">' +
          '<path d="M188 252 C186 226 192 210 182 194"/>' +
          '<path d="M198 254 C202 232 198 218 208 206"/>' +
          '<path d="M352 256 C350 236 358 222 348 210"/>' +
        '</g>' +
        '<g fill="none" stroke="#6b5a3c" stroke-width="2.6" stroke-linecap="round" opacity=".8">' +
          '<path d="M183 214 C176 210 172 204 174 198"/>' +
          '<path d="M203 220 C210 216 214 210 212 204"/>' +
        '</g>' +

        /* 水面浮沫与藻膜 */
        '<g fill="#a9b46a" opacity=".9">' +
          '<ellipse cx="96" cy="62" rx="46" ry="9"/>' +
          '<ellipse cx="152" cy="70" rx="30" ry="7"/>' +
          '<ellipse cx="300" cy="60" rx="54" ry="10"/>' +
          '<ellipse cx="382" cy="72" rx="34" ry="8"/>' +
          '<ellipse cx="248" cy="66" rx="24" ry="6"/>' +
        '</g>' +
        '<g fill="#8b9749" opacity=".75">' +
          '<circle cx="130" cy="63" r="4"/><circle cx="330" cy="65" r="5"/><circle cx="272" cy="58" r="3"/>' +
        '</g>' +

        /* 水面线（暗淡） */
        '<path d="M0 54 H480" stroke="#bcc48d" stroke-width="2" opacity=".55"/>' +

        /* 蚊虫幼虫 */
        larva(108, 96) + larva(164, 84) + larva(198, 114) + larva(86, 130) + larva(144, 144) +
      '</g>' +
    '</svg>';
  }

  function larva(x, y) {
    return '<g transform="translate(' + x + ',' + y + ')">' +
      '<g class="larva">' +
        '<path d="M-1 1 q-7 2.5 -11.5 -1.5" stroke="#f1f5d4" stroke-width="1.9" ' +
              'fill="none" stroke-linecap="round"/>' +
        '<ellipse cx="0" cy="0" rx="6.6" ry="3.5" fill="#f1f5d4" transform="rotate(-18)"/>' +
      '</g>' +
    '</g>';
  }

  /* ---------------------------------------------------------------- 清淤后 */
  function after(rawUid) {
    var u = esc(rawUid || uid());
    var id = function (n) { return n + '-' + u; };

    return '' +
    '<svg class="pond-scene" viewBox="0 0 480 340" role="img" ' +
      'aria-label="清淤后的池塘剖面示意图：水体清澈见底、底泥变薄、沉水植物成活着床、有小鱼游动、水面干净无浮沫">' +
      '<defs>' +
        '<linearGradient id="' + id('sky') + '" x1="0" y1="0" x2="0" y2="1">' +
          '<stop offset="0" stop-color="#eef7f4"/><stop offset="1" stop-color="#cfe7e2"/>' +
        '</linearGradient>' +
        '<linearGradient id="' + id('water') + '" x1="0" y1="0" x2="0" y2="1">' +
          '<stop offset="0" stop-color="#b3ece4"/><stop offset=".5" stop-color="#69c6bb"/>' +
          '<stop offset="1" stop-color="#2b7f78"/>' +
        '</linearGradient>' +
        '<linearGradient id="' + id('sand') + '" x1="0" y1="0" x2="0" y2="1">' +
          '<stop offset="0" stop-color="#e9dab5"/><stop offset="1" stop-color="#c3aa7c"/>' +
        '</linearGradient>' +
        '<clipPath id="' + id('clip') + '"><rect width="480" height="340" rx="14"/></clipPath>' +
      '</defs>' +

      '<g clip-path="url(#' + id('clip') + ')">' +
        '<rect width="480" height="340" fill="url(#' + id('sky') + ')"/>' +

        /* 远处岸线（返青） */
        '<path d="M0 54 V38 C60 32 120 44 180 38 C240 32 300 44 360 38 C420 32 452 42 480 38 V54 Z" ' +
              'fill="#8cc089" opacity=".55"/>' +

        /* 芦苇（返青） */
        '<g fill="none" stroke="#57a463" stroke-width="2.4" stroke-linecap="round" opacity=".95">' +
          '<path d="M40 56 C36 42 34 28 40 16"/>' +
          '<path d="M48 56 C52 40 56 26 50 12"/>' +
          '<path d="M30 56 C26 46 28 34 34 24"/>' +
          '<path d="M440 56 C436 44 434 30 440 18"/>' +
          '<path d="M448 56 C452 42 454 28 448 14"/>' +
        '</g>' +

        /* 水体：清澈 */
        '<rect y="54" width="480" height="286" fill="url(#' + id('water') + ')"/>' +

        /* 水下光柱 */
        '<g fill="#ffffff" opacity=".16">' +
          '<path d="M118 54 L150 54 L110 268 L90 268 Z"/>' +
          '<path d="M292 54 L310 54 L274 240 L258 240 Z"/>' +
          '<path d="M58 54 L72 54 L44 214 L32 214 Z"/>' +
        '</g>' +

        /* 水面高光 */
        '<g fill="#ffffff" opacity=".38">' +
          '<ellipse cx="90" cy="57" rx="34" ry="3"/>' +
          '<ellipse cx="212" cy="56" rx="26" ry="2.4"/>' +
          '<ellipse cx="342" cy="58" rx="42" ry="3"/>' +
          '<ellipse cx="432" cy="56" rx="20" ry="2.4"/>' +
        '</g>' +

        /* 沙石底：薄、可见 */
        '<path d="M0 292 C80 284 140 302 210 292 C280 282 340 302 410 292 C442 287 462 296 480 292 ' +
              'L480 340 L0 340 Z" fill="url(#' + id('sand') + ')"/>' +
        '<g fill="#bda77c">' +
          '<ellipse cx="70" cy="312" rx="15" ry="8"/><ellipse cx="132" cy="322" rx="17" ry="8"/>' +
          '<ellipse cx="230" cy="308" rx="12" ry="6"/><ellipse cx="300" cy="324" rx="16" ry="7"/>' +
          '<ellipse cx="382" cy="312" rx="13" ry="6"/>' +
        '</g>' +
        '<g fill="#9d8862">' +
          '<ellipse cx="104" cy="330" rx="13" ry="6"/><ellipse cx="196" cy="320" rx="11" ry="5"/>' +
          '<ellipse cx="348" cy="332" rx="15" ry="6"/><ellipse cx="440" cy="322" rx="10" ry="5"/>' +
        '</g>' +
        '<g fill="#f4ecd6" opacity=".85">' +
          '<circle cx="160" cy="302" r="3"/><circle cx="262" cy="316" r="2.6"/>' +
          '<circle cx="318" cy="302" r="3"/><circle cx="52" cy="300" r="2.4"/>' +
        '</g>' +

        /* 沙面上的光斑 */
        '<g stroke="#ffffff" stroke-width="2" opacity=".3" fill="none" stroke-linecap="round">' +
          '<path d="M58 292 q10 -6 20 0"/>' +
          '<path d="M198 296 q12 -7 24 0"/>' +
          '<path d="M330 294 q10 -6 20 0"/>' +
        '</g>' +

        /* 沉水植物 */
        '<g fill="none" stroke-linecap="round">' +
          '<path d="M330 298 C322 258 338 212 322 164" stroke="#2f8552" stroke-width="7"/>' +
          '<path d="M350 300 C358 256 342 218 358 172" stroke="#3f9b62" stroke-width="6"/>' +
          '<path d="M370 298 C362 250 380 224 368 180" stroke="#2f8552" stroke-width="6.5"/>' +
          '<path d="M390 300 C400 262 386 230 400 188" stroke="#4aa96f" stroke-width="5.5"/>' +
          '<path d="M408 298 C400 268 414 244 404 204" stroke="#3f9b62" stroke-width="5"/>' +
          '<path d="M426 300 C434 274 422 254 434 224" stroke="#2f8552" stroke-width="4.5"/>' +
          '<path d="M318 300 C312 280 324 262 316 240" stroke="#358e5b" stroke-width="4"/>' +
          '<path d="M340 300 C334 288 344 278 336 266" stroke="#7ecb90" stroke-width="4"/>' +
          '<path d="M398 300 C406 290 396 280 406 270" stroke="#7ecb90" stroke-width="3.5"/>' +
        '</g>' +
        '<g fill="#4faa6d" opacity=".92">' +
          '<ellipse cx="318" cy="176" rx="10" ry="5" transform="rotate(-28 318 176)"/>' +
          '<ellipse cx="326" cy="168" rx="8" ry="4" transform="rotate(16 326 168)"/>' +
          '<ellipse cx="356" cy="182" rx="9" ry="4.5" transform="rotate(24 356 182)"/>' +
          '<ellipse cx="366" cy="192" rx="8" ry="4" transform="rotate(-20 366 192)"/>' +
          '<ellipse cx="398" cy="198" rx="9" ry="4.5" transform="rotate(18 398 198)"/>' +
          '<ellipse cx="404" cy="214" rx="7" ry="3.5" transform="rotate(-24 404 214)"/>' +
          '<ellipse cx="432" cy="234" rx="7" ry="3.5" transform="rotate(20 432 234)"/>' +
        '</g>' +

        /* 小鱼 */
        fish(248, 212, 1, '#f0a35e', '#dd8b45') +
        fish(300, 250, .72, '#f7c795', '#e5a566') +

        /* 水面线（清亮） */
        '<path d="M0 54 H480" stroke="#eafff9" stroke-width="2.6" opacity=".8"/>' +
      '</g>' +
    '</svg>';
  }

  function fish(x, y, s, body, tail) {
    return '<g transform="translate(' + x + ',' + y + ') scale(' + s + ')">' +
      '<g class="fish">' +
        '<path d="M-17 0 C-9 -9 6 -9 15 0 C6 9 -9 9 -17 0 Z" fill="' + body + '"/>' +
        '<path d="M13 0 L24 -8 L24 8 Z" fill="' + tail + '"/>' +
        '<circle cx="-8" cy="-2.5" r="1.9" fill="#3b2a1d"/>' +
      '</g>' +
    '</g>';
  }

  global.PondScene = {
    svg: function (kind, uidStr) {
      if (kind === 'before') { return before(uidStr); }
      if (kind === 'after') { return after(uidStr); }
      throw new Error('PondScene: unknown kind "' + kind + '"');
    },
    render: function (el, kind, uidStr) {
      if (!el) { return null; }
      el.innerHTML = this.svg(kind, uidStr);
      return el.firstChild;
    }
  };
}(window));

#webkit-css-material

##usage:
+ html:
```html
<meta name="viewport" content="initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
<meta name="format-detection" content="telephone=no">
<link rel="stylesheet" type="text/css" href="webkit-css-material/dist/style.css"/>
```

##build:
+ cd webkit-css-material
+ npm install 
+ gulp

##description:
+ style.scss as style
+ _init.scss as toolkit

##rem support:
+ 10px/50=0.2rem;

```javascript

(function (doc, win) {
        var docEl = doc.documentElement,
          isIOS = navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
          dpr = isIOS? Math.min(win.devicePixelRatio, 3) : 1,
          dpr = window.top === window.self? dpr : 1, // When import by iframe,prevent scale.
          resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
        docEl.dataset.dpr = dpr;
        var recalc = function () {
            var width = docEl.clientWidth;
            if (width / dpr > 750) {
                width = 750 * dpr;
            }
            docEl.dataset.width = width
            docEl.dataset.percent = 100 * (width / 750);
            docEl.style.fontSize = 100 * (width / 750) + 'px';
          };
        recalc()
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
})(document, window);

```

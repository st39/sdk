(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
(function () {
    ga('create', 'UA-74658229-1', 'auto');
    ga('send', 'pageview', {
      'dimension1':  window.document.referrer
    });
})();

var url = (window.location != window.parent.location) ? document.referrer : document.location.href;
if (url.indexOf("gamez6.com") != -1 || url.indexOf("friv5online.com") != -1 || url.indexOf("hoopgame.net") != -1 || url.indexOf("actiongameshub.com") != -1 
	|| url.indexOf("gogy.com") != -1 || url.indexOf("mixfriv.com") != -1 
    || url.indexOf("gamev6.com") != -1 || url.indexOf("friv.uno") != -1 || url.indexOf("cokitos.com") != -1
    || url.indexOf("cargame.top") != -1 || url.indexOf("neox.in") != -1 || url.indexOf("plonga.com") != -1) {
    var externalScript   = document.createElement("script");
    externalScript.setAttribute('data-ad-client','ca-pub-4764333688337558');
    externalScript.setAttribute('data-ad-frequency-hint','30s');
    externalScript.setAttribute('async','async');
    externalScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    var r = document.head || document.getElementsByTagName("head")[0];
    r.appendChild(externalScript);

    window.adsbygoogle = window.adsbygoogle || [];
    const adBreak = adConfig = function(o) {adsbygoogle.push(o);}

    window.setInterval(function(){
                    adBreak({
                        type: 'next',
                        name: 'restart-game'
                    });
    }, 30000);
}
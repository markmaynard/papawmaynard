_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{RNiq:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return c}));var r=t("q1tI"),o=t.n(r),a=t("YFqc"),u=t.n(a),l=o.a.createElement;function c(){return l("div",null,"Hello World."," ",l("br",null),l(u.a,{href:"/about",as:"/papawmaynard/about"},l("a",null,"About")),l("br",null),l(u.a,{href:"/images",as:"/papawmaynard/images"},l("a",null,"Images")),l("br",null),l(u.a,{href:"/album",as:"/papawmaynard/album"},l("a",null,"Album")))}},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var a,u=o(t("q1tI")),l=t("elyg"),c=t("nOHt"),f=new Map,i=window.IntersectionObserver,s={};var p=function(e,n){var t=a||(i?a=new i((function(e){e.forEach((function(e){if(f.has(e.target)){var n=f.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),f.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0);return t?(t.observe(e),f.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}f.delete(e)}):function(){}};function d(e,n,t,r){(0,l.isLocalURL)(n)&&(e.prefetch(n,t,r).catch((function(e){0})),s[n+"%"+t]=!0)}var h=function(e){var n=!1!==e.prefetch,t=(0,c.useRouter)(),o=t&&t.pathname||"/",a=u.default.useMemo((function(){var n=(0,l.resolveHref)(o,e.href,!0),t=r(n,2),a=t[0],u=t[1];return{href:a,as:e.as?(0,l.resolveHref)(o,e.as):u||a}}),[o,e.href,e.as]),f=a.href,h=a.as,v=e.children,w=e.replace,y=e.shallow,b=e.scroll,m=e.locale;"string"===typeof v&&(v=u.default.createElement("a",null,v));var g=u.Children.only(v),_=g&&"object"===typeof g&&g.ref,E=u.default.useRef(),R={ref:u.default.useCallback((function(e){(E.current&&(E.current(),E.current=void 0),n&&i&&e&&e.tagName&&(0,l.isLocalURL)(f))&&(s[f+"%"+h]||(E.current=p(e,(function(){d(t,f,h,{locale:"undefined"!==typeof m?m:t&&t.locale})}))));_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[n,_,f,h,t,m]),onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,u,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,l.isLocalURL)(t))&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:a,locale:c}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())})))}(e,t,f,h,w,y,b,m)}};return n&&(R.onMouseEnter=function(e){(0,l.isLocalURL)(f)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),d(t,f,h,{priority:!0}))}),(e.passHref||"a"===g.type&&!("href"in g.props))&&(R.href=(0,l.addBasePath)((0,l.addLocale)(h,"undefined"!==typeof m?m:t&&t.locale,t&&t.defaultLocale))),u.default.cloneElement(g,R)};n.default=h},vlRD:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])}},[["vlRD",0,1,2]]]);
(this["webpackJsonpauth0-react-sdk-sample"]=this["webpackJsonpauth0-react-sdk-sample"]||[]).push([[127,80],{256:function(e,t,n){"use strict";var a=n(95);function o(e){e.register(a),function(e){e.languages.smarty={comment:/\{\*[\s\S]*?\*\}/,delimiter:{pattern:/^\{|\}$/i,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][-+]?\d+)?/,variable:[/\$(?!\d)\w+/,/#(?!\d)\w+#/,{pattern:/(\.|->)(?!\d)\w+/,lookbehind:!0},{pattern:/(\[)(?!\d)\w+(?=\])/,lookbehind:!0}],function:[{pattern:/(\|\s*)@?(?!\d)\w+/,lookbehind:!0},/^\/?(?!\d)\w+/,/(?!\d)\w+(?=\()/],"attr-name":{pattern:/\w+\s*=\s*(?:(?!\d)\w+)?/,inside:{variable:{pattern:/(=\s*)(?!\d)\w+/,lookbehind:!0},operator:/=/}},punctuation:[/[\[\]().,:`]|->/],operator:[/[+\-*\/%]|==?=?|[!<>]=?|&&|\|\|?/,/\bis\s+(?:not\s+)?(?:div|even|odd)(?:\s+by)?\b/,/\b(?:eq|neq?|gt|lt|gt?e|lt?e|not|mod|or|and)\b/],keyword:/\b(?:false|off|on|no|true|yes)\b/},e.hooks.add("before-tokenize",(function(t){var n=!1;e.languages["markup-templating"].buildPlaceholders(t,"smarty",/\{\*[\s\S]*?\*\}|\{[\s\S]+?\}/g,(function(e){return"{/literal}"===e&&(n=!1),!n&&("{literal}"===e&&(n=!0),!0)}))})),e.hooks.add("after-tokenize",(function(t){e.languages["markup-templating"].tokenizePlaceholders(t,"smarty")}))}(e)}e.exports=o,o.displayName="smarty",o.aliases=[]},95:function(e,t,n){"use strict";function a(e){!function(e){function t(e,t){return"___"+e.toUpperCase()+t+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(n,a,o,r){if(n.language===a){var i=n.tokenStack=[];n.code=n.code.replace(o,(function(e){if("function"===typeof r&&!r(e))return e;for(var o,s=i.length;-1!==n.code.indexOf(o=t(a,s));)++s;return i[s]=e,o})),n.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(n,a){if(n.language===a&&n.tokenStack){n.grammar=e.languages[a];var o=0,r=Object.keys(n.tokenStack);!function i(s){for(var l=0;l<s.length&&!(o>=r.length);l++){var u=s[l];if("string"===typeof u||u.content&&"string"===typeof u.content){var p=r[o],c=n.tokenStack[p],d="string"===typeof u?u:u.content,g=t(a,p),f=d.indexOf(g);if(f>-1){++o;var k=d.substring(0,f),m=new e.Token(a,e.tokenize(c,n.grammar),"language-"+a,c),b=d.substring(f+g.length),h=[];k&&h.push.apply(h,i([k])),h.push(m),b&&h.push.apply(h,i([b])),"string"===typeof u?s.splice.apply(s,[l,1].concat(h)):u.content=h}}else u.content&&i(u.content)}return s}(n.tokens)}}}})}(e)}e.exports=a,a.displayName="markupTemplating",a.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_smarty.cd481a30.chunk.js.map
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[615],{4019:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,i,s){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7942:function(e,t,i){"use strict";var s=i(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(2648).Z,o=i(7273).Z,a=n(i(7294)),l=i(4957),r=i(7995),d=i(647),c=i(1992),x=i(639),f=i(4019),p=i(227),u={};function m(e,t,i,s){if(e&&l.isLocalURL(t)){Promise.resolve(e.prefetch(t,i,s)).catch((function(e){0}));var n=s&&"undefined"!==typeof s.locale?s.locale:e&&e.locale;u[t+"%"+i+(n?"%"+n:"")]=!0}}var b=a.default.forwardRef((function(e,t){var i,n=e.href,b=e.as,h=e.children,j=e.prefetch,g=e.passHref,w=e.replace,y=e.shallow,k=e.scroll,v=e.locale,N=e.onClick,_=e.onMouseEnter,C=e.onTouchStart,L=e.legacyBehavior,R=void 0===L?!0!==Boolean(!1):L,q=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);i=h,!R||"string"!==typeof i&&"number"!==typeof i||(i=a.default.createElement("a",null,i));var z=!1!==j,E=a.default.useContext(d.RouterContext),S=a.default.useContext(c.AppRouterContext);S&&(E=S);var O,T=a.default.useMemo((function(){var e=l.resolveHref(E,n,!0),t=s(e,2),i=t[0],o=t[1];return{href:i,as:b?l.resolveHref(E,b):o||i}}),[E,n,b]),M=T.href,P=T.as,D=a.default.useRef(M),A=a.default.useRef(P);R&&(O=a.default.Children.only(i));var B=R?O&&"object"===typeof O&&O.ref:t,U=x.useIntersection({rootMargin:"200px"}),H=s(U,3),I=H[0],K=H[1],W=H[2],Y=a.default.useCallback((function(e){A.current===P&&D.current===M||(W(),A.current=P,D.current=M),I(e),B&&("function"===typeof B?B(e):"object"===typeof B&&(B.current=e))}),[P,B,M,W,I]);a.default.useEffect((function(){var e=K&&z&&l.isLocalURL(M),t="undefined"!==typeof v?v:E&&E.locale,i=u[M+"%"+P+(t?"%"+t:"")];e&&!i&&m(E,M,P,{locale:t})}),[P,M,K,v,z,E]);var Z={ref:Y,onClick:function(e){R||"function"!==typeof N||N(e),R&&O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,t,i,s,n,o,r,d,c,x){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(i)){e.preventDefault();var f=function(){"beforePopState"in t?t[n?"replace":"push"](i,s,{shallow:o,locale:d,scroll:r}):t[n?"replace":"push"](i,{forceOptimisticNavigation:!x})};c?a.default.startTransition(f):f()}}(e,E,M,P,w,y,k,v,Boolean(S),z)},onMouseEnter:function(e){R||"function"!==typeof _||_(e),R&&O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),!z&&S||l.isLocalURL(M)&&m(E,M,P,{priority:!0})},onTouchStart:function(e){R||"function"!==typeof C||C(e),R&&O.props&&"function"===typeof O.props.onTouchStart&&O.props.onTouchStart(e),!z&&S||l.isLocalURL(M)&&m(E,M,P,{priority:!0})}};if(!R||g||"a"===O.type&&!("href"in O.props)){var G="undefined"!==typeof v?v:E&&E.locale,X=E&&E.isLocaleDomain&&f.getDomainLocale(P,G,E.locales,E.domainLocales);Z.href=X||p.addBasePath(r.addLocale(P,G,E&&E.defaultLocale))}return R?a.default.cloneElement(O,Z):a.default.createElement("a",Object.assign({},q,Z),i)}));t.default=b,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1992:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var s=(0,i(2648).Z)(i(7294)),n=s.default.createContext(null);t.AppRouterContext=n;var o=s.default.createContext(null);t.LayoutRouterContext=o;var a=s.default.createContext(null);t.GlobalLayoutRouterContext=a;var l=s.default.createContext(null);t.TemplateContext=l},495:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return m}});var s=i(8472),n=i.n(s),o=i(7294),a=i(5893);function l(){return(0,a.jsxs)("div",{className:"jsx-209006693 ask",children:[(0,a.jsxs)("div",{className:"jsx-209006693 ask-question",children:[(0,a.jsx)("h2",{className:"jsx-209006693 question",children:"Ask a public question"}),(0,a.jsx)("div",{className:"jsx-209006693 img-robot",children:(0,a.jsx)("img",{src:"/robot.png",width:550,height:130,className:"jsx-209006693"})})]}),(0,a.jsx)("div",{className:"jsx-209006693 writing",children:(0,a.jsxs)("div",{className:"jsx-209006693 notice",children:[(0,a.jsx)("h2",{className:"jsx-209006693 good-question",children:"Writing a good question"}),(0,a.jsx)("div",{className:"jsx-209006693",children:"You\u2019re ready to ask a programming-related question and this form will help guide you through the process."}),(0,a.jsx)("div",{className:"jsx-209006693 p2",children:"Looking to ask a non-programming question? See the topics here to find a relevant site."}),(0,a.jsx)("h5",{className:"jsx-209006693 steps-title",children:"Steps"}),(0,a.jsxs)("ul",{className:"jsx-209006693 steps",children:[(0,a.jsx)("li",{className:"jsx-209006693",children:"  Summarize your problem in a one-line title.    "}),(0,a.jsx)("li",{className:"jsx-209006693",children:" Describe your problem in more detail.  "}),(0,a.jsx)("li",{className:"jsx-209006693",children:" Describe what you tried and what you expected to happen."}),(0,a.jsx)("li",{className:"jsx-209006693",children:" Add \u201ctags\u201d which help surface your question to members of the community.  "}),(0,a.jsx)("li",{className:"jsx-209006693",children:" Review your question and post it to the site.  "})]})]})}),(0,a.jsx)(n(),{id:"209006693",children:[".ask.jsx-209006693{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;margin-left:3%;}",".ask-question.jsx-209006693{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;}",".question.jsx-209006693{font-size:1.8rem;font-weight:bold;}",".writing.jsx-209006693{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;}",".notice.jsx-209006693{background:rgb(224,238,248);border:1px solid rgb(156,181,250);border-radius:3px;width:65%;height:40%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:3%;}",".good-question.jsx-209006693{font-size:1.4rem;font-weight:400;padding-bottom:2%;}",".p2.jsx-209006693{padding-bottom:2%;}",".steps-title.jsx-209006693{font-weight:600;padding-bottom:2%;}","ul.jsx-209006693{margin-left:4%;font-size:0.9rem;}","@media screen and (max-width:1340px){.notice.jsx-209006693{width:65%;}}","@media screen and (max-width:1000px){img.jsx-209006693{display:none;}.ask-question.jsx-209006693{padding-bottom:7%;display:inline-block;margin-top:5%;}}"]})]})}var r=i(9008),d=i.n(r);function c(){return(0,a.jsx)("div",{children:(0,a.jsxs)(d(),{children:[(0,a.jsx)("title",{children:"Ask a public question - Stack Overflow"}),(0,a.jsx)("meta",{name:"description",content:"Stack Overflow is the largest, most trusted online community for developers to learn, share their programming knowledge, and build their careers."}),(0,a.jsx)("link",{rel:"icon",href:"/Stack_Overflow_icon.svg.png"})]})})}var x=i(1664),f=i.n(x),p=i(1163);function u(){var e=(0,p.useRouter)(),t=(0,o.useState)(""),i=t[0],s=t[1],l=(0,o.useState)(""),r=l[0],d=l[1];return(0,a.jsxs)("div",{className:"jsx-19885699",children:[(0,a.jsxs)("div",{method:"post",className:"jsx-19885699",children:[(0,a.jsxs)("div",{className:"jsx-19885699 title",children:[(0,a.jsx)("div",{className:"jsx-19885699 title-box",children:(0,a.jsxs)("div",{className:"jsx-19885699 title-content",children:[(0,a.jsxs)("div",{className:"jsx-19885699 title-head",children:[(0,a.jsx)("div",{className:"jsx-19885699 title-name",children:(0,a.jsx)("label",{className:"jsx-19885699 title-label",children:"Title"})}),(0,a.jsx)("div",{className:"jsx-19885699 title-detail",children:(0,a.jsx)("div",{className:"jsx-19885699",children:(0,a.jsx)("label",{className:"jsx-19885699 detail-label",children:"Be specific and imagine you\u2019re asking a question to another person."})})})]}),(0,a.jsx)("div",{className:"jsx-19885699",children:(0,a.jsx)("input",{type:"text",placeholder:"e.g. Is there an R function for finding the index of an element in a vector?",value:i,onChange:function(e){return s(e.target.value)},className:"jsx-19885699 title-input"})})]})}),(0,a.jsxs)("div",{className:"jsx-19885699 writing-box",children:[(0,a.jsx)("div",{className:"jsx-19885699 writing-name",children:"Writing a good title"}),(0,a.jsxs)("div",{className:"jsx-19885699 writing-content",children:[(0,a.jsx)("img",{src:"/good-title.png",width:50,height:50,className:"jsx-19885699 writing-img"}),(0,a.jsx)("li",{className:"jsx-19885699 writing-list",children:(0,a.jsx)("div",{className:"jsx-19885699 writing-body idea2",children:"Your title should summarize the problem."})}),(0,a.jsx)("li",{className:"jsx-19885699 writing-list",children:(0,a.jsx)("div",{className:"jsx-19885699 writing-body idea",children:"You might find that you have a better idea of your title after writing out the rest of the question."})})]})]})]}),(0,a.jsx)("div",{className:"jsx-19885699 problem-box",children:(0,a.jsx)("div",{className:"jsx-19885699 problem-outer",children:(0,a.jsx)("div",{className:"jsx-19885699",children:(0,a.jsx)("div",{className:"jsx-19885699 problem-margin",children:(0,a.jsxs)("div",{className:"jsx-19885699 problem-content",children:[(0,a.jsx)("div",{className:"jsx-19885699 problem-title",children:(0,a.jsxs)("label",{className:"jsx-19885699 title-name",children:["What are the details of your problem?",(0,a.jsx)("p",{className:"jsx-19885699 problem-p",children:"Introduce the problem and expand on what you put in the title. Minimum 20 characters."})]})}),(0,a.jsx)("div",{className:"jsx-19885699 problem-body-box",children:(0,a.jsx)("textarea",{placeholder:"\uc5ec\uae30\uc5d0 \ubb38\uc81c\ub97c \uc368\uc8fc\uc138\uc694.",value:r,onChange:function(e){return d(e.target.value)},className:"jsx-19885699 problem-body"})})]})})})})}),(0,a.jsx)("div",{className:"jsx-19885699 button-box",children:(0,a.jsxs)("div",{className:"jsx-19885699 button-list",children:[(0,a.jsx)("div",{className:"jsx-19885699 reviewbtn",children:(0,a.jsx)("div",{onClick:function(t){console.log("\uc548\ub155"),t.preventDefault();var s={title:i,body:r};console.log(s),fetch("/post/".concat(localStorage.getItem("user")),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}).then((function(t){return""===i?(alert("Title\uc744 \uc368\uc8fc\uc138\uc694 "),!1):""===r?(alert("problem\uc744 \uc368\uc8fc\uc138\uc694"),!1):(console.log(t),void e.push("/"))})).catch((function(e){console.log("Error",e)}))},className:"jsx-19885699 s-btn nextbtn",children:"Review your queston"})}),(0,a.jsx)("div",{className:"jsx-19885699 reviewbtn",children:(0,a.jsx)(f(),{href:"/",children:(0,a.jsx)("a",{className:"jsx-19885699 s-btn draftbtn",children:"Discard draft"})})})]})})]}),(0,a.jsx)(n(),{id:"19885699",children:["main.jsx-19885699{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",".title.jsx-19885699{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-top:2.5%;margin-left:3%;}",".title-box.jsx-19885699{border:1px solid #e3e6e8;width:72%;background-color:#ffffff;padding-top:2.5%;padding-left:1.5%;border-radius:3px;padding-bottom:2%;}",".title-content.jsx-19885699{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}",".title-label.jsx-19885699{font-size:1rem;font-weight:800;}",".detail-label.jsx-19885699{font-size:0.8rem;}",".title-input.jsx-19885699{width:95%;border:1px solid #babfc4;color:black;padding:1% 1%;border-radius:2px;margin-top:1%;}",".nextbtn.jsx-19885699{color:#ffffff;background-color:#0a95ff;box-shadow:inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);width:6%;font-size:0.8rem;margin-top:1.4%;margin-bottom:2%;}",".nextbtn.jsx-19885699:hover{background-color:#77c0f8;-webkit-transition:0.5s;transition:0.5s;}",".writing-box.jsx-19885699{border:1px solid #d6d9dc;border-radius:2px;background-color:#ffffff;width:25%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}",".writing-name.jsx-19885699{background-color:#f8f9f9;border-bottom:1px solid #d6d9dc;height:30%;padding:5% 8%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".writing-body.jsx-19885699{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",".writing-list.jsx-19885699{list-style:none;}",".writing-content.jsx-19885699{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:0.8rem;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-right:2%;padding:2%;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}",".idea.jsx-19885699{margin-left:23%;margin-top:-4%;}","@media screen and (max-width:1460px){.title.jsx-19885699{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;}.title-box.jsx-19885699{width:72%;}.writing-box.jsx-19885699{width:73%;margin-bottom:3%;}.writing-name.jsx-19885699{padding:1% 2%;}.writing-content.jsx-19885699{padding:-4% -4%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.writing-list.jsx-19885699{padding:3%;font-size:0.9rem;}.writing-body.jsx-19885699{margin-bottom:-4%;}.writing-img.jsx-19885699{display:none;}.idea.jsx-19885699{margin:0;padding:0;}.idea2.jsx-19885699{margin:0;padding:0;margin-bottom:-10%;}}",".problem-box.jsx-19885699{border:1px solid #e3e6e8;background-color:white;width:71%;height:100%;margin-top:2.5%;border-radius:3px;margin-left:3%;}",".problem-outer.jsx-19885699{margin:3% 3% 3% 3%;}",".problem-title.jsx-19885699{margin-bottom:1.5%;}",".title-name.jsx-19885699{font-weight:600;font-size:1rem;}",".problem-p.jsx-19885699{font-size:0.8rem;font-weight:400;color:gray;margin-top:0.5%;}",".problem-content.jsx-19885699{height:100%;}",".problem-body-box.jsx-19885699{height:100%;}",".problem-body.jsx-19885699{width:100%;border:1px solid #e3e6e8;height:100%;padding-bottom:20%;}","@media screen and (max-width:1340px){}",".tags-box.jsx-19885699{border:1px solid #e3e6e8;background-color:white;width:70%;height:100%;margin-top:2.5%;border-radius:3px;margin-left:3%;}",".tags-outer.jsx-19885699{margin:3% 3% 3% 3%;}",".tags-title.jsx-19885699{margin-bottom:1.5%;}",".tags-name.jsx-19885699{font-weight:600;font-size:1rem;}",".tags-p.jsx-19885699{font-size:0.8rem;font-weight:400;color:gray;margin-top:0.5%;}",".try-content.jsx-19885699{height:100%;}",".tags-body-box.jsx-19885699{height:100%;color:white;}",".tags-body.jsx-19885699{height:100%;width:100%;border:1px solid #e3e6e8;padding:1% 1%;}","@media screen and (max-width:1340px){.tags-box.jsx-19885699{width:90%;}}",".button-box.jsx-19885699{margin-bottom:5%;margin-top:4%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-left:3%;width:100%;}",".button-list.jsx-19885699{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;}",".nextbtn.jsx-19885699{color:#ffffff;background-color:#0a95ff;box-shadow:inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);width:13vw;-webkit-flex-basis:auto;-ms-flex-preferred-size:auto;flex-basis:auto;font-size:0.9rem;border-radius:0.3rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border:0;outline:0;padding:5%;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;}",".nextbtn.jsx-19885699:hover{background-color:#77c0f8;-webkit-transition:0.5s;transition:0.5s;}",".draftbtn.jsx-19885699{color:#c22e32;background-color:#00000000;box-shadow:inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);width:13vw;margin-left:25%;font-size:0.9rem;border-radius:0.3rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border:0;outline:0;padding:5%;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;}",".draftbtn.jsx-19885699:hover{background-color:rgb(253,238,238);-webkit-transition:0.5s;transition:0.5s;}","@media screen and (max-width:1280px){.nextbtn.jsx-19885699,.draftbtn.jsx-19885699{width:17vw;}}","@media screen and (max-width:900px){.nextbtn.jsx-19885699{width:22vw;}.draftbtn.jsx-19885699{width:17vw;}}","@media screen and (max-width:700px){.nextbtn.jsx-19885699{width:29vw;}.draftbtn.jsx-19885699{width:17vw;}}"]})]})}function m(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c,{}),(0,a.jsxs)("div",{className:"jsx-3413832319 ask_container",children:[(0,a.jsx)("div",{className:"jsx-3413832319 ask_content",children:(0,a.jsx)("div",{className:"jsx-3413832319 box-border",children:(0,a.jsx)("form",{className:"jsx-3413832319 post-form",children:(0,a.jsxs)("main",{className:"jsx-3413832319 question-form",children:[(0,a.jsx)(l,{}),(0,a.jsx)(u,{})]})})})}),(0,a.jsx)(n(),{id:"3413832319",children:[".ask_container.jsx-3413832319{overflow-x:hidden;background-color:rgb(248,249,249);}",".ask_content.jsx-3413832319{width:80vw;overflow-y:auto;}"]})]})]})}},2793:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/questions/ask",function(){return i(495)}])},1664:function(e,t,i){e.exports=i(7942)}},function(e){e.O(0,[774,888,179],(function(){return t=2793,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
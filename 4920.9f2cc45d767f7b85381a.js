"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[4920],{3173:(e,t,o)=>{o.d(t,{Z:()=>l});var i=o(87363),n=o.n(i),r=o(86976);const s=(0,r.Z)({resolved:{},chunkName:()=>"BalancePopup.component.async",isReady(e){const t=this.resolve(e);return!0===this.resolved[t]&&!!o.m[t]},importAsync:()=>Promise.all([o.e(6122),o.e(3710),o.e(5095),o.e(6210)]).then(o.bind(o,41861)),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((e=>(this.resolved[t]=!0,e)))},requireSync(e){const t=this.resolve(e);return o(t)},resolve(){return 41861}},{}),l=s},8629:(e,t,o)=>{o.d(t,{Z:()=>l});var i=o(87363),n=o.n(i),r=o(86976);const s=(0,r.Z)({resolved:{},chunkName:()=>"BalanceRefill.component.async",isReady(e){const t=this.resolve(e);return!0===this.resolved[t]&&!!o.m[t]},importAsync:()=>Promise.all([o.e(6122),o.e(3710),o.e(5095),o.e(2900)]).then(o.bind(o,48836)),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((e=>(this.resolved[t]=!0,e)))},requireSync(e){const t=this.resolve(e);return o(t)},resolve(){return 48836}},{}),l=s},44965:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o(8629).Z},2737:(e,t,o)=>{o.d(t,{Z:()=>H});var i=o(85383),n=o(39743),r=o(63904),s=o.n(r),l=o(87363),a=o.n(l),c=o(29994),p=o(77123),u=o(45331);const h=o(3173).Z;var d=o(44965),m=o(64706),w=o(8065),y=o(82356),f=o(33119),v=o(46986),g=o(36172),b=o(41225),A=o(68409),S=o(43548),T=o(72461),P=o(98343),B=o(73984),E=o(91605),C=o(65118),U=(o(48810),o(47484)),_=o(41952),D=o(40656),F=o(93298),R=o(15771),x=o(2820);var L=o(68606),Z=o(89592),O=Object.defineProperty,V=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,$=(e,t,o)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,q=(e,t)=>{for(var o in t||(t={}))N.call(t,o)&&$(e,o,t[o]);if(V)for(var o of V(t))I.call(t,o)&&$(e,o,t[o]);return e};const j=(0,F.M$)("Balance",F.XG.Dev),k=s().with("balance"),z=D.s2/4,M=D.dV;class G extends l.PureComponent{constructor(){super(...arguments),this.popupAnchorRef=a().createRef(),this.balancePending=!1,this.state={canShowSpinner:!0,popupAutoOpen:!0,refillVisible:!1,rewarded:!1},this.handlePageShow=e=>{var t,o,i;let{persisted:n}=e;if(!n&&window.performance){const e=null==(o=(t=window.performance).getEntriesByType)?void 0:o.call(t,"navigation")[0];if(e){if("back_forward"!==e.type)return;n=e.responseEnd-e.requestStart<=50}else{if(2!==(null==(i=window.performance.navigation)?void 0:i.type))return;const e=window.performance.timing;if(!e)return;n=e.responseEnd-e.requestStart<=50}}n&&this.fetchBalance({forceFetch:!0})},this.reportUserActivity=()=>{document.hidden?this.reportUserActivityTimeout=window.setTimeout(this.reportUserActivity,M):(this.props.reportUserActivity(),this.reportUserActivityTimeout=window.setTimeout(this.reportUserActivity,z))},this.onClick=e=>{var t,o;null==(o=(t=this.props).onClick)||o.call(t,e);const i=(0,L.hY)(L.jF.GUARD);i?(0,L.Vy)(i.children):(this.props.isBalanceFetched||this.props.fetchUserBalance({forceFetch:!1}),"game"!==this.props.type?this.props.setUserBalancePopupVisible(!this.props.popupVisible):S.Z.post({type:"payments",action:"balance-refill",data:{paymentsConfig:{lang:this.context.lang}}}))},this.onShow=()=>{this.clearAutoCloseTimeout(),this.clearShowTimeout(),this.props.popupVisible||this.props.reportUserActivity(),this.setState({popupAutoOpen:this.props.popupVisible}),"catalog"===this.props.type?(0,E.NF)({},Z.Ji.PORTAL_CURRENCY_ON_BOARD_CLICK,{source:Z.qg.Catalog,version:Z.Sq.AllFeatures}):(0,E.NF)({},Z.Ji.PORTAL_CURRENCY_ON_BOARD_CLICK,{source:Z.qg.Play,version:Z.Sq.AllFeatures})},this.onPopupClose=()=>{this.clearAutoCloseTimeout(),this.hide()},this.onPopupRefill=()=>{return e=this,t=null,o=function*(){const e=()=>{this.setState({refillVisible:!0},(()=>{this.props.setShouldShowShortcutPopup(!1)}))};if((0,C.$r)(this.context))try{const{status:e}=yield(0,C.H)(j);"PURCHASED"===e&&this.fetchBalance({forceFetch:!0})}catch(t){e()}else e()},new Promise(((i,n)=>{var r=e=>{try{l(o.next(e))}catch(e){n(e)}},s=e=>{try{l(o.throw(e))}catch(e){n(e)}},l=e=>e.done?i(e.value):Promise.resolve(e.value).then(r,s);l((o=o.apply(e,t)).next())}));var e,t,o},this.onRefillClose=()=>{this.setState({refillVisible:!1},(()=>{this.props.setShouldShowShortcutPopup(!0)}))}}componentDidMount(){this.reportUserActivity(),window.addEventListener("pageshow",this.handlePageShow),(0,x.Fg)(window.location.pathname),this.fetchBalance({forceFetch:!1})}componentWillUnmount(){this.clearAutoCloseTimeout(),this.clearReportUserActivityTimeout(),this.clearShowTimeout(),window.removeEventListener("pageshow",this.handlePageShow)}componentDidUpdate(e){const t=e.activity,o=this.props.activity;!e.popupVisible&&this.props.popupVisible&&this.onShow(),t.fetching&&!o.fetching&&this.fetchBalance({forceFetch:!0}),e.balance!==this.props.balance&&0!==e.userBalance.fetchedTimestamp&&((0,T.X)({bubbles:10,colors:P.lF,node:this.popupAnchorRef.current}),this.setState({canShowSpinner:!0})),(0,B.v)(t.value,o.value)||(j(`\n            prevDays = ${t.value.days}, prevTotal = ${t.value.total}\n\n            currentDays = ${o.value.days}, currentTotal = ${o.value.total}\n        `),this.tryShow({popupAutoOpen:!0,rewarded:Boolean(o.value.balance_diff)},{isPopupVisible:!0}))}render(){const{popupVisible:e,balanceFetching:t,activity:o,isBalanceFetched:i}=this.props,r=(!i||o.fetching||t)&&this.state.canShowSpinner,s=e,l=(0,R.XP)(this.context.abt.flags)?m.j.NONE:m.j.PARTIAL;return a().createElement("div",{className:k({type:this.props.type}),"data-nosnippet":"true"},a().createElement("span",{className:k("portal-currency-wrapper",{active:s}),ref:this.popupAnchorRef,onClick:this.onClick},a().createElement(w.Z,{amount:r?a().createElement(n.y,{className:k("spinner"),size:16,spinning:!0,view:"default"}):this.props.balance,gradient:l,iconPosition:"start",iconSize:y.T.SMALL,showSpinner:r})),!this.props.disablePopups&&this.props.popupVisible&&a().createElement(h,{anchorRef:this.popupAnchorRef,onClose:this.onPopupClose,onRefill:this.onPopupRefill}),this.state.refillVisible&&a().createElement(d.Z,{passportOrigin:_._4.GamesCatalogPurchases,onClose:this.onRefillClose}))}tryShow(e,t={}){this.clearAutoCloseTimeout(),this.clearShowTimeout(),!0!==e.popupAutoOpen?(0,L.Vm)()?this.showTimeoutId=window.setTimeout((()=>this.tryShow(e)),5e3):document.hidden||(e.rewarded&&this.fetchBalance({forceFetch:!0}),this.setState(q(q({},this.state),e)),this.props.setUserBalancePopupVisible(Boolean(t.isPopupVisible))):this.context.abt.flags}hide(){this.clearShowTimeout(),this.setState({popupAutoOpen:!1}),this.props.setUserBalancePopupVisible(!1)}clearShowTimeout(){this.showTimeoutId&&(window.clearTimeout(this.showTimeoutId),this.showTimeoutId=void 0)}clearAutoCloseTimeout(){this.autoCloseTimeoutId&&(window.clearTimeout(this.autoCloseTimeoutId),this.autoCloseTimeoutId=void 0)}clearReportUserActivityTimeout(){this.reportUserActivityTimeout&&(window.clearTimeout(this.reportUserActivityTimeout),this.reportUserActivityTimeout=void 0)}fetchBalance({forceFetch:e}){const{fetchUserBalance:t,location:o}=this.props;if((0,x.Fg)(o.pathname)&&!this.props.isBalanceFetched){if(this.balancePending)return;return this.balancePending=!0,void(0,U.UQ)((()=>{this.balancePending=!1,this.props.isBalanceFetched||t({forceFetch:e})}))}t({forceFetch:e})}}G.contextType=u.Z;const H=(0,i.E)((0,c.$j)((function(e){const t=e.user.balance;return{activity:(0,b._)(e),balance:(0,A.n)(e),balanceFetching:t.fetching,isBalanceFetched:t.fetchedTimestamp>0,theme:(0,g.FS)(e),popupVisible:Boolean(t.isBalancePopupVisible),userBalance:t}}),(function(e){return(0,p.DE)({fetchUserBalance:v.Zc,reportUserActivity:v.eC,showUserActivity:v.c2,setUserBalancePopupVisible:v.sw,setShouldShowShortcutPopup:f.M4},e)}))(G))},13378:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o(82356).Z},82356:(e,t,o)=>{o.d(t,{T:()=>c,Z:()=>h});var i=o(63904),n=o.n(i),r=o(87363),s=o.n(r),l=o(45331),a=o(76103),c=(e=>(e.EXTRA_LARGE="xl",e.LARGE="l",e.LARGE_FLAT="lf",e.MEDIUM="m",e.SMALL="s",e))(c||{});const p=n().with("portal-currency-icon");class u extends r.PureComponent{render(){const{size:e}=this.props,{moneyCodeSymbol:t}=this.context,o="lf"===e||"xl"===e;return s().createElement(a.Z,{className:p({size:e,type:t.toLocaleLowerCase()}),size:o?"l":e,type:"portal-currency"})}}u.contextType=l.Z;const h=u},8065:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o(64706).Z},64706:(e,t,o)=>{o.d(t,{j:()=>u,Z:()=>m});var i=o(63904),n=o.n(i),r=o(87363),s=o.n(r),l=o(45331),a=o(13378);const c=({children:e,gradient:t,mix:o=""})=>{const i="text-gradient "+("none"!==t?"text-gradient-fill":"");return s().createElement("span",{className:`${i} ${o}`},e)};var p=o(60592),u=(e=>(e.FULL="full",e.NONE="none",e.PARTIAL="partial",e))(u||{});const h=n().with("portal-currency");class d extends r.PureComponent{renderAmount(){const{amount:e}=this.props;return void 0===e?null:"number"!=typeof e?e:(0,p.Z)(e)}render(){const{gradient:e="none",iconPosition:t="end",iconSize:o,showSpinner:i}=this.props;return o?s().createElement("span",{className:h({"spinner-features":i})},"start"===t&&s().createElement(s().Fragment,null,s().createElement(a.Z,{size:o})," "),s().createElement(c,{gradient:e,mix:`${h("value")}${i?` ${h("spinner")}`:""}`},this.renderAmount()),"end"===t&&s().createElement(s().Fragment,null," ",s().createElement(a.Z,{size:o}))):s().createElement("span",{className:h()},"partial"===e&&this.renderAmount(),s().createElement(c,{gradient:e,mix:`${h("value")}${i?` ${h("spinner")}`:""}`},"full"===e&&this.renderAmount()," ",this.context.moneyCodeSymbol))}}d.contextType=l.Z;const m=d},41225:(e,t,o)=>{o.d(t,{_:()=>i});const i=e=>e.user.activity},68409:(e,t,o)=>{o.d(t,{n:()=>i});const i=e=>{const{error:t,fetchedTimestamp:o,value:i}=e.user.balance;return!t&&o&&"number"==typeof i?i:""}},65118:(e,t,o)=>{o.d(t,{$r:()=>p,H:()=>l,I4:()=>c,rj:()=>a});var i=(e,t,o)=>new Promise(((i,n)=>{var r=e=>{try{l(o.next(e))}catch(e){n(e)}},s=e=>{try{l(o.throw(e))}catch(e){n(e)}},l=e=>e.done?i(e.value):Promise.resolve(e.value).then(r,s);l((o=o.apply(e,t)).next())}));const n=new Error("Billing not supported"),r=new Error("No such method in window.yandex.billing");function s(){return i(this,null,(function*(){var e,t,o,i;if("function"!=typeof(null==(t=null==(e=window.yandex)?void 0:e.billing)?void 0:t.isBillingSupported))return console.error("typeof billing.isBillingSupported is not a function"),!1;try{return null==(i=null==(o=window.yandex)?void 0:o.billing)?void 0:i.isBillingSupported()}catch(e){return console.error("isBillingSupported error",e),!1}}))}function l(e){return i(this,null,(function*(){var t,o,i,l;if(!(yield s()))throw n;if("function"!=typeof(null==(o=null==(t=window.yandex)?void 0:t.billing)?void 0:o.showTopUpDialog))throw console.error("typeof billing.showTopUpDialog is not a function"),r;try{const t=yield null==(l=null==(i=window.yandex)?void 0:i.billing)?void 0:l.showTopUpDialog();return null==e||e("native balance top up dialog closed with result:",t),t}catch(e){throw console.error("billing.showTopUpDialog error",e),e}}))}function a(e,t){return i(this,null,(function*(){var o,i,l,a;if(!(yield s()))throw n;if("function"!=typeof(null==(i=null==(o=window.yandex)?void 0:o.billing)?void 0:i.showBuyDisableAdDialog))throw console.error("typeof billing.showBuyDisableAdDialog is not a function"),r;try{const o=yield null==(a=null==(l=window.yandex)?void 0:l.billing)?void 0:a.showBuyDisableAdDialog(e);return null==t||t("native disable ad dialog closed with result:",o),o}catch(e){throw console.error("billing.showBuyDisableAdDialog error",e),e}}))}function c(e,t){return i(this,arguments,(function*({description:e,image:t,price:o,title:i},l){var a,c,p,u;if(!(yield s()))throw n;if("function"!=typeof(null==(c=null==(a=window.yandex)?void 0:a.billing)?void 0:c.showBuyItemDialog))throw console.error("typeof billing.showBuyItemDialog is not a function"),r;try{const n=yield null==(u=null==(p=window.yandex)?void 0:p.billing)?void 0:u.showBuyItemDialog(o,i,e,t);return null==l||l("native buy item dialog closed with result:",n),n}catch(e){throw console.error("billing.showBuyItemDialog error",e),e}}))}function p(e){return!1}},96952:(e,t,o)=>{o.d(t,{D:()=>i});const i=e=>{if(!window)throw new Error("Function must be called in browser env");window.requestAnimationFrame((()=>{window.setTimeout(e,0)}))}},68606:(e,t,o)=>{o.d(t,{Vm:()=>r,Vy:()=>l,hY:()=>s,jF:()=>n});const i=[".adv-game-loader",".app-drawer_status_full",".app-drawer_status_small",".drawer_visible",".Drawer_visible",".guard-enabled",".LegoPopup2_visible",".merge-conflicts-dialog",".merge-conflicts",".modal-wrapper_visible",".play-shortcut-popup-desktop",".Popup2_visible",".prowo_visible",".scopes-dialog",".scopes",".shortcut-popup-desktop",".user-activity-popup"].join(", "),n={GUARD:".guard-enabled, .play-guard-dialog:not(.play-guard-dialog_hidden)"};function r(){return document.querySelector(i)}function s(e){return"string"==typeof e&&(e=[e]),document.querySelector(e.join(", "))}function l(e){const t=e instanceof HTMLCollection||Array.isArray(e)?Array.from(e):[e];t.forEach((e=>e.classList.remove("shake"))),window.requestAnimationFrame((()=>t.forEach((e=>e.classList.add("shake")))))}}}]);
//# sourceMappingURL=https://s3.mdst.yandex.net/games/source-maps/_/build/client/game/desktop/yandex/4920.9f2cc45d767f7b85381a.js.map
(this["webpackJsonptest-assignment"]=this["webpackJsonptest-assignment"]||[]).push([[0],{181:function(e,t,r){},278:function(e,t,r){},279:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),s=r(25),c=r.n(s),i=(r(181),r(283)),o=r(287),d=r(89),l=r(46),b=r(103),j=r(26),p=r(66),u=r(67),x=r(47),O="GET_ALL_POKEMONS_STARTED",h="GET_ALL_POKEMONS_SUCCESS",m="GET_ALL_POKEMONS_ERROR ",y="GET_POKEMON_STARTED",g="GET_POKEMON_SUCCESS",f="GET_POKEMON_ERROR",k={loadingAll:!1,errorAll:null,loadingIds:new Set,errorMap:new Map,pokemons:new Map},v=r(53),I=r.n(v),T=r(87),S=r(161),C=r.n(S).a.create({baseURL:"https://api.pokemontcg.io/v1/cards"}),w=function(){return Object(T.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.get("/");case 2:return t=e.sent,e.abrupt("return",t.data.cards);case 4:case"end":return e.stop()}}),e)})))()},A=function(e){return Object(T.a)(I.a.mark((function t(){var r;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.get("/"+e);case 2:return r=t.sent,t.abrupt("return",r.data.card);case 4:case"end":return t.stop()}}),t)})))()},E=function(){var e=Object(T.a)(I.a.mark((function e(t,r){var a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(N(t)),e.prev=1,e.next=4,A(t);case 4:a=e.sent,r(M(t,a)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),r(R(t,e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,r){return e.apply(this,arguments)}}(),N=function(e){return{type:y,payload:{id:e}}},M=function(e,t){return{type:g,payload:{id:e,pokemon:t}}},R=function(e,t){return{type:f,payload:{id:e,error:t}}},P=function(){var e=Object(T.a)(I.a.mark((function e(t){var r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(_()),e.prev=1,e.next=4,w();case 4:r=e.sent,t(L(r)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(F(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),_=function(){return{type:O}},L=function(e){return{type:h,payload:{pokemons:e}}},F=function(e){return{type:m,payload:{error:e}}},G=Object(u.c)({pokemons:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:if(e.loadingIds.has(t.payload.id))return e;var r=new Set(e.loadingIds);return r.add(t.payload.id),Object(x.a)(Object(x.a)({},e),{},{loadingIds:r});case g:var a=Object(x.a)({},e);if(e.loadingIds.has(t.payload.id)){var n=new Set(e.loadingIds);n.delete(t.payload.id),a.loadingIds=n}if(e.errorMap.has(t.payload.id)){var s=new Map(e.errorMap);s.delete(t.payload.id),a.errorMap=s}var c=new Map(e.pokemons);return c.has(t.payload.id)&&c.delete(t.payload.id),c.set(t.payload.id,t.payload.pokemon),a.pokemons=c,a;case f:var i=Object(x.a)({},e);if(e.loadingIds.has(t.payload.id)){var o=new Set(e.loadingIds);o.delete(t.payload.id),i.loadingIds=o}var d=new Map(e.errorMap);return d.has(t.payload.id)&&d.delete(t.payload.id),d.set(t.payload.id,t.payload.error),i.errorMap=d,i;case O:return Object(x.a)(Object(x.a)({},e),{},{loadingAll:!0});case h:return Object(x.a)(Object(x.a)({},e),{},{loadingAll:!1,errorAll:void 0,pokemons:new Map(t.payload.pokemons.map((function(e){return[e.id,e]})))});case m:return Object(x.a)(Object(x.a)({},e),{},{loadingAll:!1,errorAll:t.payload.error});default:return e}}}),U=r(162),K=Object(u.d)(G,Object(u.a)(U.a)),D=r(288),J=r(77),B=r(290),H=r(284),V=r(58),z=r(292),W=r(7),q=function(){var e=Object(j.g)(),t=Object(p.c)((function(e){var t=e.pokemons;return{loadingAll:t.loadingAll,errorAll:t.errorAll,pokemons:t.pokemons}})),r=t.loadingAll,n=t.errorAll,s=t.pokemons,c=Object(p.b)();Object(a.useEffect)((function(){P(c)}),[]);var i=[{title:"Image",dataIndex:"imageUrl",key:"imageUrl",render:function(e){return Object(W.jsx)("img",{src:e})},width:250},{title:"Id",dataIndex:"id",key:"id"},{title:"Name",dataIndex:"name",key:"name"},{title:"Rarity",dataIndex:"rarity",key:"rarity"},{title:"Supertype",dataIndex:"supertype",key:"supertype"},{title:"Series",dataIndex:"series",key:"series"},{title:"Number",dataIndex:"number",key:"number"},{title:"Artist",dataIndex:"artist",key:"artist"}];return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(D.a,{title:"Pokemons",extra:[Object(W.jsx)(J.a,{onClick:function(){return P(c)},type:"primary",icon:Object(W.jsx)(z.a,{})})]}),n&&!r&&Object(W.jsx)(B.a,{message:"An error occurred on this page",description:n.message?n.message:JSON.stringify(n),type:"error"}),!n&&Object(W.jsx)(H.a,{dataSource:Array.from(s.values()),columns:i,loading:r,onRow:function(t){var r=t.id;return{onClick:function(){e.push("/ChessteryTest/pokemons/".concat(r))}}}}),!r&&(!s||0===s.size)&&Object(W.jsx)(V.a,{description:Object(W.jsx)("span",{children:"No Pokemons found"})})]})},Q=r(286),X=r(285),Y=r(289),Z=r(291),$=o.a.Text,ee=function(){var e=Object(j.h)().id,t=Object(p.b)(),r=Object(p.c)((function(e){var t=e.pokemons;return{loadingIds:t.loadingIds,errorMap:t.errorMap,pokemons:t.pokemons}})),n=r.loadingIds,s=r.errorMap,c=r.pokemons;Object(a.useEffect)((function(){E(e,t)}),[]);var i=Object(j.g)(),d=c.get(e);return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(D.a,{onBack:function(){return i.push("/ChessteryTest/pokemons")},title:"Pokemons",subTitle:e,extra:[Object(W.jsx)(J.a,{onClick:function(){return E(e,t)},type:"primary",icon:Object(W.jsx)(z.a,{})})]}),s.has(e)&&Object(W.jsx)(B.a,{message:"An error occurred on this page",description:s.get(e).message?s.get(e).message:JSON.stringify(s.get(e)),type:"error"}),!s.has(e)&&Object(W.jsx)(Q.a,{loading:n.has(e),title:null===d||void 0===d?void 0:d.name,children:d&&Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(X.a,{width:200,src:d.imageUrl,preview:{src:d.imageUrlHiRes}}),Object(W.jsxs)(Y.b,{column:2,children:[Object(W.jsx)(Y.b.Item,{label:"Name",children:d.name}),Object(W.jsx)(Y.b.Item,{label:"Supertype",children:d.supertype}),Object(W.jsx)(Y.b.Item,{label:"Rarity",children:d.rarity}),Object(W.jsx)(Y.b.Item,{label:"Id",children:d.id}),Object(W.jsx)(Y.b.Item,{label:"Series",children:d.series}),Object(W.jsx)(Y.b.Item,{label:"Set Code",children:d.setCode}),Object(W.jsx)(Y.b.Item,{label:"Number",children:d.number}),d.retreatCost&&Object(W.jsx)(Y.b.Item,{label:"Retreat cost",children:d.retreatCost}),d.convertedRetreatCost&&Object(W.jsx)(Y.b.Item,{label:"Converted retreat cost",children:d.convertedRetreatCost}),d.text&&d.text.length&&Object(W.jsx)(Y.b.Item,{label:"Text",children:d.text.join(";\n")}),void 0!==d.nationalPokedexNumber&&Object(W.jsx)(Y.b.Item,{label:"National pokedex number",children:d.nationalPokedexNumber}),d.types&&Object(W.jsx)(Y.b.Item,{label:"Types",children:d.types.join("; ")}),d.hp&&Object(W.jsx)(Y.b.Item,{label:"HP",children:d.hp}),d.set&&Object(W.jsx)(Y.b.Item,{label:"Set",children:d.set}),d.subtype&&Object(W.jsx)(Y.b.Item,{label:"Subtype",children:d.subtype})]}),Object(W.jsxs)(Y.b,{column:1,children:[d.attacks&&d.attacks.length&&Object(W.jsx)(Y.b.Item,{children:Object(W.jsx)(Z.b,{header:Object(W.jsx)("div",{children:"Attacks"}),dataSource:d.attacks,renderItem:function(e){var t=e.cost,r=e.name,a=e.text,n=e.damage,s=e.convertedEnergyCost;return Object(W.jsx)(Z.b.Item,{children:Object(W.jsxs)(o.a.Text,{children:["Name: ",r,Object(W.jsx)("br",{}),"Cost: ",t.join(", "),Object(W.jsx)("br",{}),"Text: ",a,Object(W.jsx)("br",{}),"Damage: ",n,Object(W.jsx)("br",{}),"Converted Energy Cost: ",s,Object(W.jsx)("br",{})]})})}})}),d.resistances&&d.resistances.length&&Object(W.jsx)(Y.b.Item,{children:Object(W.jsx)(Z.b,{header:Object(W.jsx)("div",{children:"Resistances"}),dataSource:d.resistances,renderItem:function(e){var t=e.type,r=e.value;return Object(W.jsx)(Z.b.Item,{children:Object(W.jsxs)(o.a.Text,{children:["Type: ",t,Object(W.jsx)("br",{}),"Value: ",r,Object(W.jsx)("br",{})]})})}})}),d.weaknesses&&d.weaknesses.length&&Object(W.jsx)(Y.b.Item,{children:Object(W.jsx)(Z.b,{header:Object(W.jsx)("div",{children:"Weaknesses"}),dataSource:d.weaknesses,renderItem:function(e){var t=e.type,r=e.value;return Object(W.jsx)(Z.b.Item,{children:Object(W.jsxs)(o.a.Text,{children:["Type: ",t,Object(W.jsx)("br",{}),"Value: ",r,Object(W.jsx)("br",{})]})})}})}),d.ability&&Object(W.jsx)(Y.b.Item,{label:"Ability",children:Object(W.jsxs)(o.a.Text,{children:["Name: ",d.ability.name,Object(W.jsx)("br",{}),"Text: ",d.ability.text,Object(W.jsx)("br",{}),"Type: ",d.ability.type,Object(W.jsx)("br",{})]})}),d.ancientTrait&&Object(W.jsx)(Y.b.Item,{label:"Ancient Trait",children:Object(W.jsxs)(o.a.Text,{children:["Name: ",d.ancientTrait.name,Object(W.jsx)("br",{}),"Text: ",d.ancientTrait.text,Object(W.jsx)("br",{})]})})]}),Object(W.jsxs)($,{type:"secondary",children:["Artist: ",d.artist]})]})})]})},te=(r(278),i.a.Header),re=o.a.Title;var ae=function(){return Object(W.jsx)(p.a,{store:K,children:Object(W.jsx)(b.a,{children:Object(W.jsxs)(j.d,{children:[Object(W.jsx)(j.b,{path:"/ChessteryTest/404",exact:!0,children:Object(W.jsx)(re,{children:"Page Not Found"})}),Object(W.jsxs)(j.b,{children:[Object(W.jsx)(te,{className:"header",children:Object(W.jsx)(re,{id:"brand",level:2,children:"TEST ASSIGNMENT"})}),Object(W.jsx)(d.a,{gutter:16,justify:"center",className:"main",children:Object(W.jsx)(l.a,{span:22,children:Object(W.jsxs)(j.d,{children:[Object(W.jsx)(j.b,{exact:!0,path:"/ChessteryTest/",children:Object(W.jsx)(j.a,{to:"/ChessteryTest/pokemons"})}),Object(W.jsx)(j.b,{path:"/ChessteryTest/pokemons/:id",children:Object(W.jsx)(ee,{})}),Object(W.jsx)(j.b,{exact:!0,path:"/ChessteryTest/pokemons",children:Object(W.jsx)(q,{})}),Object(W.jsx)(j.b,{children:Object(W.jsx)(j.a,{to:"/ChessteryTest/404"})})]})})})]})]})})})},ne=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,293)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;r(e),a(e),n(e),s(e),c(e)}))};c.a.render(Object(W.jsx)(n.a.StrictMode,{children:Object(W.jsx)(ae,{})}),document.getElementById("root")),ne()}},[[279,1,2]]]);
//# sourceMappingURL=main.800fb94f.chunk.js.map
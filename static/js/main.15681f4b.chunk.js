(this.webpackJsonpmoandcourtsfoodpicker=this.webpackJsonpmoandcourtsfoodpicker||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},162:function(e,t,a){"use strict";a.r(t);var n=a(3),i=a(0),s=a.n(i),r=a(11),c=a.n(r),o=(a(104),a(23)),l=a(24),u=a(28),d=a(26),h=(a(105),a(43)),b=a(198),j=a(193),p=a(84),x=["Decision Maker","Life Hacks"],f=function(){var e=Object(p.a)(),t=e.result,a=e.dencrypt;return i.useEffect((function(){var e=0,t=setInterval((function(){a(x[e]),e=e===x.length-1?0:e+1}),3e3);return function(){return clearInterval(t)}}),[]),Object(n.jsx)("h1",{style:{fontSize:"60px",color:"#FF5A5F"},children:t})},g=a(70),m=a.p+"static/media/restaurant.2c5f0456.svg",v=a.p+"static/media/hamburger.7b871615.svg",O=a.p+"static/media/fries.351f20c1.svg",y=a.p+"static/media/hotdog.42986ab6.svg",k=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{class:"title",children:[Object(n.jsx)(g.a,{steps:["Food Picker",2e3,"",2e3],loop:1/0,wrapper:"p"}),Object(n.jsxs)("div",{style:{display:"inline",justifyContent:"space-between"},children:[Object(n.jsx)("img",{src:m,alt:"Restaurant",width:"50"}),Object(n.jsx)("img",{style:{paddingLeft:"20px"},src:v,alt:"Hamburger",width:"50"}),Object(n.jsx)("img",{style:{paddingLeft:"20px"},src:O,alt:"Fries",width:"50"}),Object(n.jsx)("img",{style:{paddingLeft:"20px"},src:y,alt:"Hotdog",width:"50"})]}),Object(n.jsx)(g.a,{steps:["Random GIF Generator",2e3,"",2e3],loop:1/0,wrapper:"p"})]})}}]),a}(i.Component),C=a(45),w=a(85),S=new C.GiphyFetch("n1DdXberGaQtYZXDopf1Mh9XuaMVahmW");function P(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300,i=function(){return S.search(e,{limit:t})};return Object(n.jsx)(w.Carousel,{fetchGifs:i,gifHeight:a,gutter:20})}var F=a(10),A=a.n(F),V=a(21),N=a(55),T=a(33),B=a(199),I=a(197),M=a(90),H=a.n(M),D=Object(j.a)((function(e){return{text:{margin:e.spacing(1),maxWidth:"360px",minWidth:"360px",marginBottom:"10px"},button:{margin:e.spacing(1)},feelButton:{margin:e.spacing(1),maxWidth:"260px",maxHeight:"120px",minWidth:"260px",minHeight:"120px"}}}));var z,G=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).letMeDecide=Object(V.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.fetchData();case 2:n.setState({fixVal:2});case 3:case"end":return e.stop()}}),e)}))),n.havePicked=Object(V.a)(A.a.mark((function e(){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({displayVal:"None",fixVal:1}),clearInterval(n.interval),n.interval=setInterval((function(){return n.getNextVal()}),50),e.next=5,n.timeout(3e3);case 5:clearInterval(n.interval),(t=n.getRandomArbitrary(0,T.cuisine.length))>=0&&t<T.cuisine.length?n.setState({finalVal:T.cuisine[t],cuisineVal:T.cuisine[t],displayVal:""}):n.setState({cuisineVal:"Error"});case 8:case"end":return e.stop()}}),e)}))),n.state={cuisineVal:"",displayVal:"None",finalVal:"",idx:0,fixVal:0,decider:!0,image:""},n.havePicked=n.havePicked.bind(Object(N.a)(n)),n}return Object(l.a)(a,[{key:"fetchData",value:function(){var e=Object(V.a)(A.a.mark((function e(){var t,a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://yesno.wtf/api/");case 3:if((t=e.sent).ok){e.next=6;break}throw Error(t.statusText);case 6:return e.next=8,t.json();case 8:a=e.sent,this.setState({image:a.image}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,this,[[0,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"timeout",value:function(e){return new Promise((function(t){return setTimeout(t,e)}))}},{key:"getNextVal",value:function(){this.state.idx>=T.cuisine.length&&this.setState({idx:0}),this.setState({cuisineVal:T.cuisine[this.state.idx],idx:this.state.idx+1})}},{key:"getRandomArbitrary",value:function(e,t){return Math.random()*(t-e)+e}},{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){return e.getNextVal()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.props.classes;return 0===this.state.fixVal?Object(n.jsxs)("div",{children:[P("Picky Eater",1)," ",Object(n.jsx)("br",{}),Object(n.jsx)(B.a,{disabled:!0,inputProps:{min:0,style:{textAlign:"center",minHeight:"120px",fontWeight:"bold",fontSize:"50px",color:"#333333"}},className:e.text,id:"outlined-basic",variant:"outlined",value:this.state.cuisineVal})," ",Object(n.jsx)("br",{}),Object(n.jsxs)(I.a,{className:e.button,"aria-label":"play-button",onClick:this.havePicked,children:[" ",Object(n.jsx)(H.a,{style:{width:"100px",height:"100px"}})," "]})]}):1===this.state.fixVal?Object(n.jsxs)("div",{children:[Object(n.jsx)(B.a,{disabled:!0,inputProps:{min:0,style:{textAlign:"center",minHeight:"120px",fontWeight:"bold",fontSize:"50px",color:"#333333"}},className:e.text,id:"outlined-basic",variant:"outlined",value:this.state.cuisineVal})," ",Object(n.jsx)("br",{}),Object(n.jsxs)("div",{style:{display:this.state.displayVal},children:[P("Clap",3,200)," ",Object(n.jsx)("br",{}),Object(n.jsx)("h3",{children:"CONGRATS. How do you feel about this?"}),Object(n.jsx)("br",{}),Object(n.jsx)(b.a,{variant:"outlined",size:"large",color:"secondary",className:e.feelButton,onClick:this.havePicked,children:Object(n.jsx)("b",{children:" Try Again? "})}),Object(n.jsx)(b.a,{variant:"outlined",size:"large",color:"secondary",className:e.feelButton,onClick:this.letMeDecide,children:Object(n.jsx)("b",{children:" Let me Decide "})})]})]}):Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{alt:"decider",src:this.state.image,width:.3*window.innerWidth,height:Math.round(.3*window.innerWidth*9/16)})," ",Object(n.jsx)("br",{})," ",Object(n.jsx)("br",{}),Object(n.jsx)(b.a,{variant:"outlined",size:"large",color:"secondary",className:e.feelButton,onClick:this.havePicked,children:Object(n.jsx)("b",{children:" Try Again? "})})]})}}]),a}(i.Component),E=(z=G,function(e){var t=D();return Object(n.jsx)(z,Object(h.a)(Object(h.a)({},e),{},{classes:t}))}),W=Object(j.a)((function(e){return{button:{margin:e.spacing(1),maxWidth:"260px",maxHeight:"120px",minWidth:"260px",minHeight:"120px"}}}));var L=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).changeToFood=function(){n.setState({welcome:!1,food:!0,gif:!1})},n.changeToGIF=function(){n.setState({welcome:!1,food:!1,gif:!0})},n.changeToMain=function(){n.setState({welcome:!0,food:!1,gif:!1})},n.state={welcome:!0,food:!1,gif:!1},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.classes;return this.state.welcome?Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("h1",{class:"welcome",children:"Mohaimen and Courtney"}),P("I love you",1),Object(n.jsx)(k,{}),Object(n.jsx)(b.a,{variant:"outlined",size:"large",color:"primary",className:e.button,onClick:this.changeToFood,children:Object(n.jsx)("b",{children:" Help me Pick Food "})}),Object(n.jsx)(b.a,{variant:"outlined",size:"large",color:"secondary",className:e.button,onClick:this.changeToGIF,children:Object(n.jsx)("b",{children:" Feeling pretty GIPHY "})})]}):this.state.food?Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)(f,{}),Object(n.jsx)(E,{}),Object(n.jsx)(b.a,{variant:"outlined",size:"large",color:"primary",className:e.button,onClick:this.changeToMain,children:Object(n.jsx)("b",{children:" Go Back to Main "})})]}):this.state.gif?Object(n.jsx)("div",{className:"card"}):void 0}}]),a}(i.Component),R=L=function(e){return function(t){var a=W();return Object(n.jsx)(e,Object(h.a)(Object(h.a)({},t),{},{classes:a}))}}(L),J=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(R,{})})}}]),a}(i.Component),K=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,201)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),i(e),s(e),r(e)}))};c.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(J,{})}),document.getElementById("root")),K()},33:function(e){e.exports=JSON.parse('{"cuisine":["Afghan","African","Albanian","Algerian","Alsatian","American","Armenian","Argentine","Asian","Australian","Austrian","Auvergne","Bagels","Bakery","Bangladeshi","Barbecue","Belgian","Bistro","Brazilian","British","Burgers","Burgundy","Burmese","Cafe","Cajun","Californian","Calzones","Cambodian","Caribbean","Cheesesteaks","Chicken","Chilean","Chinese","Chowder","Coffee","Colombian","Contemporary","Continental","Corsica","Creole","Crepes","Cuban","Cuban","Czech","Deli","Dim Sum","Diner","Dominican","Donuts","Dutch","Eastern European","Eclectic","Egyptian","English","Ethiopian","Ecuadorean","European","Fast Food","Filipino","Fish and Chips","Fondue","French","Frozen Yogurt","Fusion","Gastropub","German","Greek","Grill","Gyros","Haitian","Halal","Hawaiian","Healthy","Hot Dogs","Ice Cream","Indian","Indonesian","International","Irish","Israeli","Italian","Jamaican","Japanese","Juices","Korean","Korean Barbeque","Kosher","Latin","Latin American","Lebanese","Lyonnais","Malaysian","Mediterranean","Mexican","Middle Eastern","Mongolian","Moroccan","Nepalese","Noodle Bar","Norwegian","Organic","Oysters","Pacific Rim","Pakistani","Pan Asian","Pasta","Pastries","Persian","Peruvian","Pho","Pizza","Polish","Polynesian","Portuguese","Proven\xe7al","Pub Food","Puerto Rican","Raw","Ribs","Russian","Salad","Salvadoran","Sandwiches","Savoy","Scandinavian","Seafood","Senegalese","Singaporean","Smoothies","Soul Food","Soup","South American","South African","South Pacific","Southern","Southwestern","Spanish","Steak","Steakhouse","Subs","Sushi","Taiwanese","Tapas","Tea","Tex Mex","Thai","Tibetan","Traditional","Tunisian","Turkish","Ukrainian","Vegan","Vegetarian","Venezuelan","Vietnamese","Wings","Wraps"]}')}},[[162,1,2]]]);
//# sourceMappingURL=main.15681f4b.chunk.js.map
(this["webpackJsonpcar-configurator"]=this["webpackJsonpcar-configurator"]||[]).push([[0],{108:function(e,t,a){e.exports=a(303)},113:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){},281:function(e,t,a){},299:function(e,t,a){},300:function(e,t,a){},303:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(103),o=a.n(i),l=(a(113),a(106)),c=a(3),s=(a(114),a(37)),m=a(38),u=a(39),d=a(41),g=a(40),b=(a(115),a(104)),h=function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(e){var r;return Object(m.a)(this,a),(r=t.call(this,e)).handleChangeComplete=function(e){r.setState({background:e.hex})},r.handleSubmitButton=function(e){r.setState(Object(s.a)({rimOne:!1,rimTwo:!1,rimThree:!1,rimFour:!1,rimFive:!1,rimSix:!1},e,!0))},r.state={rimOne:!0,rimTwo:!1,rimThree:!1,rimFour:!1,rimFive:!1,rimSix:!1,background:"fff"},r}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t={backgroundColor:"".concat(this.state.background),backdropFilter:"drop-shadow(8px 8px 10px white)"};return n.a.createElement("div",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-8"},n.a.createElement("div",{className:"col"},n.a.createElement("img",{src:"/Assets/topLayer.png",id:"car",height:"200",width:"500"}),n.a.createElement("img",{src:"/Assets/maskinglayertest.png",id:"carBody",height:"200px",style:t}),n.a.createElement("img",{src:"/Assets/opacity-layer.png",id:"opaque",height:"200px"}),n.a.createElement("img",{id:"rim-layer",src:this.state.rimOne?"/Assets/rim1.png":this.state.rimTwo?"/Assets/rim2.png":this.state.rimThree?"/Assets/rim3.png":this.state.rimFour?"/Assets/rim4.png":this.state.rimFive?"/Assets/rim5.png":this.state.rimSix?"/Assets/topLayer.png":null}))),n.a.createElement("div",{className:"col-lg-4",id:"settings"},n.a.createElement("div",{className:"row",id:"colorstitle"},"Exterior Colors"),n.a.createElement("div",{className:"row",id:"colorselect"},n.a.createElement(b.SwatchesPicker,{onChange:this.handleChangeComplete})),n.a.createElement("div",{className:"row",id:"wheeltitle"},"Tire Rims"),n.a.createElement("div",{className:"row",id:"wheeloptions"},n.a.createElement("div",{className:"col"},n.a.createElement("button",{className:"rim-btn1",id:"rimOne",onClick:function(){return e.handleSubmitButton("rimOne")}},n.a.createElement("img",{id:"rim1img",src:"/Assets/rim-1.png"}))),n.a.createElement("div",{className:"col"},n.a.createElement("button",{className:"rim-btn",id:"rimTwo",onClick:function(){return e.handleSubmitButton("rimTwo")}},n.a.createElement("img",{id:"rim2img",src:"/Assets/rim-2.png"}))),n.a.createElement("div",{className:"col"},n.a.createElement("button",{className:"rim-btn",id:"rimTwo",onClick:function(){return e.handleSubmitButton("rimThree")}},n.a.createElement("img",{id:"rim3img",src:"/Assets/rim-3.png"})))),n.a.createElement("div",{className:"row",id:"wheeloptions2"},n.a.createElement("div",{className:"col"},n.a.createElement("button",{className:"rim-btn",id:"rimTwo",onClick:function(){return e.handleSubmitButton("rimFour")}},n.a.createElement("img",{id:"rim4img",src:"/Assets/rim-4.png"}))),n.a.createElement("div",{className:"col"},n.a.createElement("button",{className:"rim-btn",id:"rimTwo",onClick:function(){return e.handleSubmitButton("rimFive")}},n.a.createElement("img",{id:"rim2img",src:"/Assets/rim-5.png"}))),n.a.createElement("div",{className:"col"},n.a.createElement("button",{className:"rim-btn6",id:"rimTwo",onClick:function(){return e.handleSubmitButton("rimSix")}},n.a.createElement("img",{id:"rim6img",src:"/Assets/rim-6.png"})))))))}}]),a}(n.a.Component),v=(a(281),a(105)),E=a.n(v),p=function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(e){var r;return Object(m.a)(this,a),(r=t.call(this,e)).handleSubmitButton=function(e){r.setState(Object(s.a)({interiorOne:!1,interiorTwo:!1,interiorThree:!1,interiorFour:!1,interiorFive:!1,interiorSix:!1},e,!0)),console.log(r.state.background)},r.state={interiorOne:!0,interiorTwo:!1,interiorThree:!1,interiorFour:!1,interiorFive:!1,interiorSix:!1},r}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"container",id:"vid-overlay"},n.a.createElement("div",{className:"vidContainer"},n.a.createElement("div",{className:"player-wrapper"},n.a.createElement(E.a,{className:"react-player",url:"https://www.youtube.com/watch?v=LyjUDRnlWbM?autoplay=1",width:"1000px",height:"600px",loop:!0,playing:!0,controls:!1})),n.a.createElement("div",{class:"overlay"},n.a.createElement("img",{id:"interiorImg",alt:"",src:this.state.interiorOne?"/Assets/interior1.png":this.state.interiorTwo?"/Assets/interior2.png":this.state.interiorThree?"/Assets/interior3.png":this.state.interiorFour?"/Assets/interior4.png":this.state.interiorFive?"/Assets/interior5.png":this.state.interiorSix?"/Assets/interior6.png":null}))))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("button",{className:"interior-btn1 button fire",onClick:function(){return e.handleSubmitButton("interiorOne")}},"Interior 1")),n.a.createElement("div",{className:"col"},n.a.createElement("button",{className:"interior-btn button fire",onClick:function(){return e.handleSubmitButton("interiorTwo")}},"Interior 2")),n.a.createElement("div",{className:"col"},n.a.createElement("button",{className:"interior-btn button fire",onClick:function(){return e.handleSubmitButton("interiorThree")}},"Interior 3")),n.a.createElement("div",{className:"col"},n.a.createElement("button",{className:"interior-btn button fire",onClick:function(){return e.handleSubmitButton("interiorFour")}},"Interior 4")),n.a.createElement("div",{className:"col"},n.a.createElement("button",{className:"interior-btn button fire",onClick:function(){return e.handleSubmitButton("interiorFive")}},"Interior 5")),n.a.createElement("div",{className:"col"},n.a.createElement("button",{className:"interior-btn button fire",onClick:function(){return e.handleSubmitButton("interiorSix")}},"Interior 6"))))}}]),a}(n.a.Component);a(299);var N=function(){return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",id:"nav-bar"},n.a.createElement("img",{id:"logo",src:"/Assets/grlogo.png"}),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},n.a.createElement("ul",{className:"navbar-nav"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"/"},"Exterior")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"/interior"},"Interior")),n.a.createElement("button",{id:"navbarbtn"},"Order Your Super Cooper"))))};a(300);var f=function(){return n.a.createElement("footer",null,n.a.createElement("p",{id:"copyright"},"Copyright\xa9 Gildred Racing | Configurator Developed by ",n.a.createElement("a",{href:"https://www.linkedin.com/in/johnharmon805/"},"John Harmon")," & ",n.a.createElement("a",{href:"https://www.linkedin.com/in/andrewdavidlee7/"},"Andrew Lee")," & Tracy Ding"))};var w=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(N,null),n.a.createElement(l.a,null,n.a.createElement(c.a,{exact:!0,path:"/",component:h}),n.a.createElement(c.a,{exact:!0,path:"/interior",component:p})),n.a.createElement("div",{className:"bottom-page"},n.a.createElement(f,null)))};o.a.render(n.a.createElement(w,null),document.getElementById("root"))}},[[108,1,2]]]);
//# sourceMappingURL=main.6dc13938.chunk.js.map
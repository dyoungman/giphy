(this.webpackJsonpgiphy=this.webpackJsonpgiphy||[]).push([[0],{193:function(e,t,a){e.exports=a(355)},198:function(e,t,a){},201:function(e,t,a){},339:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=339},355:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(38),i=a.n(c),o=(a(198),a(199),a(49)),l=a.n(o),s=a(74),u=a(75),h=a(76),f=a(30),m=a(81),d=a(80),p=(a(201),a(365)),g=a(364),b=a(356),v=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).submitHandler=function(){return e.props.onSearchChange(e.state.userQuery)},e.changeHandler=e.changeHandler.bind(Object(f.a)(e)),e.submitHandler=e.submitHandler.bind(Object(f.a)(e)),e.state={userQuery:""},e}return Object(h.a)(a,[{key:"changeHandler",value:function(){var e=Object(s.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({userQuery:t.target.value});case 2:console.log(this.state.userQuery);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(p.a,{onSubmit:this.submitHandler},r.a.createElement(g.a,{placeholder:"Search...",onChange:this.changeHandler}),r.a.createElement(b.a,{attached:"right",color:"purple",onClick:this.submitHandler},"Search"))}}]),a}(r.a.Component),E=a(83),k=a(73),y=a(369),w=a(367),G=a(368),C=new k.GiphyFetch("BUt5t6LaXD4aw4Yl2Re0el45WbODWEZA"),O=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).contextRef=Object(n.createRef)(),e.myRef=r.a.createRef(),e.handleGifClick=e.handleGifClick.bind(Object(f.a)(e)),e.handleSearchChange=e.handleSearchChange.bind(Object(f.a)(e)),e.state={gridResults:r.a.createElement(E.Grid,{width:1e3,columns:3,fetchGifs:function(e){return C.trending({offset:e,limit:10})},onGifClick:function(t,a){e.handleGifClick(t,a)}}),modalGif:void 0},e}return Object(h.a)(a,[{key:"handleGifClick",value:function(e,t){console.log("gif",e),t.preventDefault(),this.setState({modalGif:e})}},{key:"handleSearchChange",value:function(){var e=Object(s.a)(l.a.mark((function e(t){var a,n=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),a=function(e){return C.search(t,{offset:e,limit:10})},e.next=4,this.setState({gridResults:null});case 4:return e.next=6,this.setState({gridResults:r.a.createElement(E.Grid,{width:1e3,columns:3,fetchGifs:a,onGifClick:function(e,t){n.handleGifClick(e,t)}})});case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App",ref:this.contextRef},r.a.createElement(y.a,{context:this.contextRef},r.a.createElement(w.a,{attached:"top"},r.a.createElement("div",{className:"App-header"},r.a.createElement(w.a.Group,null,r.a.createElement(w.a,{floated:"left",className:"App-content"},r.a.createElement(G.a,{as:"h1",color:"purple"},"Devin's Giphy Search Page"),r.a.createElement(v,{onSearchChange:this.handleSearchChange})),r.a.createElement(w.a,{textAlign:"right",floated:"right",className:"App-content"},r.a.createElement(G.a,{as:"h4",color:"purple"},"Devin Youngman"),r.a.createElement("a",{className:"App-link",href:"mailto:devin.youngman@gmail.com",target:"_blank",rel:"noopener noreferrer"},"Email"),r.a.createElement("br",null),r.a.createElement("a",{className:"App-link",href:"https://www.linkedin.com/in/dyoungman/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn"),r.a.createElement("br",null),r.a.createElement("a",{className:"App-link",href:"https://github.com/dyoungman/giphy",target:"_blank",rel:"noopener noreferrer"},"Github Repo")))))),r.a.createElement(w.a,{attached:"bottom"},r.a.createElement("div",{className:"App-footer"},this.state.gridResults,this.state.modalGif&&r.a.createElement("div",{className:"App-modal",onClick:function(t){t.preventDefault(),e.setState({modalGif:void 0})}},r.a.createElement(E.Gif,{gif:this.state.modalGif,width:500})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[193,1,2]]]);
//# sourceMappingURL=main.a18ce0dd.chunk.js.map
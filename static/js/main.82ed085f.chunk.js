(this.webpackJsonpstarwarfriends=this.webpackJsonpstarwarfriends||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),s=n(7),a=n.n(s),i=(n(13),n(14),n(2)),o=n(3),h=n(5),l=n(4),u=function(e){return Object(r.jsxs)("div",{className:" tc bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5",children:[Object(r.jsx)("img",{src:"https://robohash.org/".concat(e.id,"?200x200"),alt:"avatar"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:e.name}),Object(r.jsx)("p",{children:e.email})]})]})},d=function(e){var t=e.robots;return Object(r.jsx)("div",{children:t.map((function(e,n){return Object(r.jsx)(u,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},j=function(e){return Object(r.jsx)("div",{style:{overflowY:"scroll",border:"5px solid black",height:"500px"},children:e.children})},b=function(e){e.searchfield;var t=e.searchChange;return Object(r.jsx)("div",{className:"pa2",children:Object(r.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search friends",onChange:t})})},f=(n(15),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(o.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)("h1",{children:"Our knights are working on this.........Sorry."}):this.props.children}}]),n}(c.Component)),O=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchEvent=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(r.jsx)(b,{searchChange:this.onSearchEvent}),Object(r.jsx)(j,{children:Object(r.jsx)(f,{children:Object(r.jsx)(d,{robots:c})})})]}):Object(r.jsx)("h1",{className:"tc",children:"Loading"})}}]),n}(c.Component),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};a.a.render(Object(r.jsx)(O,{}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.82ed085f.chunk.js.map
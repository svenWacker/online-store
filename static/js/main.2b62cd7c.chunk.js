(this["webpackJsonponline-store"]=this["webpackJsonponline-store"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(3),o=n.n(i),a=(n(11),{data:n(4),cart:[],print:function(e){return console.log(e)},bill:function(){return this.cart.reduce((function(e,t){return e+t.price}),0)},addToCart:function(e){return a.cart.push(e)}}),d=r.a.createContext(a),s=n(5),u=n(0),j=function(e){var t=e.info,n=e.addToCart,c=t.id,r=t.productName,i=t.icon,o=t.price,a=t.inventory;return Object(u.jsxs)("li",{className:"product-container",children:[r," ",Object(u.jsx)("i",{children:i}),Object(u.jsxs)("h5",{children:[o,"\u20ac"]}),Object(u.jsxs)("h6",{children:[a," items in stock"]}),Object(u.jsx)("button",{disabled:0===a,onClick:function(){n(t)},children:a>0?"Add to cart":"Sold out"})]},c)},l=function(){var e=Object(c.useContext)(d),t=Object(c.useState)(0),n=Object(s.a)(t,2),i=n[0],o=n[1],a=e.data.map((function(t,n){return Object(u.jsx)(j,{info:t,addToCart:e.addToCart},n)}));return Object(u.jsxs)(r.a.Fragment,{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{onClick:function(){return o(e.bill())},children:"Total bill"}),Object(u.jsxs)("h6",{children:[i,"\u20ac"]})]}),Object(u.jsx)("ul",{children:a})]})},p=n(6),b=function(){var e=(new Date).getFullYear();return Object(u.jsxs)("footer",{children:[Object(u.jsx)(p.a,{className:"copy-sign"}),Object(u.jsxs)("p",{children:["Sven Wacker ",e]})]})};var h=function(){return Object(u.jsxs)(d.Provider,{value:a,children:[Object(u.jsx)("h1",{children:"Online Store"}),Object(u.jsx)(l,{}),Object(u.jsx)(b,{})]})};o.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root"))},4:function(e){e.exports=JSON.parse('[{"id":0,"productName":"apple","icon":"\ud83c\udf4f","price":3,"inventory":10,"_img":"./img/food.jpeg"},{"id":1,"productName":"watermelon","icon":"\ud83c\udf49","price":90,"inventory":3},{"id":2,"productName":"pizza","icon":"\ud83c\udf55","price":10,"inventory":100},{"id":3,"productName":"salad","icon":"\ud83e\udd57","price":40,"inventory":0},{"id":4,"productName":"ice cream","icon":"\ud83c\udf66","price":7,"inventory":66},{"id":5,"productName":"water","icon":"\ud83e\uddca","price":10,"inventory":0},{"id":6,"productName":"sushi","icon":"\ud83c\udf63","price":33,"inventory":3}]')}},[[13,1,2]]]);
//# sourceMappingURL=main.2b62cd7c.chunk.js.map
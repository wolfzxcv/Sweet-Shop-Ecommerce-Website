(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{110:function(e,t,n){"use strict";n.r(t);var r=n(12),o=n(0),a=n.n(o),l=n(17),i=n(10),c=n(7),u=n(16);function d(){var e=Object(r.a)(["\n  margin: 4px;\n  div {\n    padding: 0 8px 0 20px;\n    width: 200px;\n    height: 65px;\n    line-height: 2;\n    font-family: 'Shadows Into Light', cursive;\n    font-size: 24px;\n    border-top: 1px solid ",";\n    color: ",";\n    background-color: ",";\n    display: flex;\n    align-items: center;\n    &:hover {\n      color: ",";\n      background-color: ",";\n    }\n  }\n"]);return d=function(){return e},e}var s=Object(c.default)(function(e){var t=e.className;return a.a.createElement("div",{className:t},a.a.createElement(l.b,{to:"/Sweet-for-happiness/dashboard"},a.a.createElement("div",null,"Product list")),a.a.createElement(l.b,{to:"/Sweet-for-happiness/dashboard/order"},a.a.createElement("div",null,"Order list")),a.a.createElement("div",null,"Coupon"),a.a.createElement("div",null,"Back Home"))})(d(),function(e){return e.theme.colors.greenWhite},function(e){return e.theme.colors.white},function(e){return e.theme.colors.green},function(e){return e.theme.colors.green},function(e){return e.theme.colors.greenWhite});s.displayName="DashSidebar";var f=s,p=n(78),m=n.n(p),h=n(14);function b(){var e=Object(r.a)(["\n  padding-right: 4px;\n  width: 100%;\n  border: 1px solid ",";\n  font-size: 18px;\n  display: flex;\n  &:hover {\n    background-color: ",";\n  }\n\n  div {\n    padding: 0 6px 0 6px;\n    line-height: 3;\n    border-left: 1px solid ",";\n  }\n\n  .wide {\n    padding-left: 10px;\n    flex: 2;\n  }\n  .wider {\n    padding-left: 10px;\n    flex: 5;\n  }\n  div {\n    flex: 1;\n  }\n\n  .enabled {\n    color: ",";\n  }\n\n  .add-hover {\n    &:hover {\n      cursor: pointer;\n      color: ",";\n      background-color: ",";\n    }\n  }\n"]);return b=function(){return e},e}var g=Object(c.default)(function(e){var t=e.className,n=e.id,r=e.category,l=e.title,i=e.price,c=e.isEnabled,d=e.amount,s=Object(o.useContext)(h.a),f=s.editProduct,p=s.deleteProduct;return a.a.createElement(u.Flex,{className:t,width:"900px",justifyContent:"space-between",alignItems:"center"},a.a.createElement("div",{className:"wide"},r),a.a.createElement("div",{className:"wider"},l),a.a.createElement(u.Flex,{justifyContent:"flex-end"},i),a.a.createElement(u.Flex,{justifyContent:"flex-end"},d),a.a.createElement(u.Flex,{className:"enabled",justifyContent:"center"},"0"===c?"NO":"YES"),a.a.createElement(u.Flex,{className:"add-hover",justifyContent:"center",onClick:function(){return f(n)},onKeyDown:f,role:"button",tabIndex:"0"},"Edit"),a.a.createElement(u.Flex,{className:"add-hover",justifyContent:"center",onClick:function(){return p(n)},onKeyDown:p,role:"button",tabIndex:"0"},"Delete"))})(b(),function(e){return e.theme.colors.greenWhite},function(e){return e.theme.colors.greenWhite},function(e){return e.theme.colors.greenWhite},function(e){return"0"===e.isEnabled?"red":"green"},function(e){return e.theme.colors.orange},function(e){return e.theme.colors.green});g.displayName="DashProductList";var v=g,x=n(77);function y(){var e=Object(r.a)(["\n  &:hover {\n    cursor: pointer;\n  }\n"]);return y=function(){return e},e}function E(){var e=Object(r.a)(["\n  height: 500px;\n"]);return E=function(){return e},e}function O(){var e=Object(r.a)(["\n  padding-left: 8px;\n  color: ",";\n  background-color: ",";\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 2;\n"]);return O=function(){return e},e}function w(){var e=Object(r.a)(["\n  width: 800px;\n  height: 600px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  border: 2px solid ",";\n  background-color: ",";\n"]);return w=function(){return e},e}var j=m.a.styled(w(),function(e){return e.theme.colors.green},function(e){return e.theme.colors.white}),C=c.default.div(O(),function(e){return e.theme.colors.white},function(e){return e.theme.colors.green}),k=Object(c.default)(u.Flex)(E()),_=Object(c.default)(u.Button)(y()),P=function(){var e=Object(o.useContext)(h.a),t=e.isModalOpen,n=e.setIsModalOpen,r=e.productForm,l=e.setProductForm,i=e.updateProduct,c=e.handleProductForm,d=e.resetProductForm;return a.a.createElement(j,{isOpen:t},a.a.createElement(C,null,""===r.id?"Add New Product":"Edit ".concat(r.title)),a.a.createElement(u.Flex,{m:2,justifyContent:"space-around"},a.a.createElement(k,{flexDirection:"column",justifyContent:"center"},a.a.createElement("div",null,"Input image url"),a.a.createElement("input",{type:"text",placeholder:"Input image url",value:r.imageUrl,onChange:function(e){return l(Object(x.a)({},r,{imageUrl:e.target.value}))}}),a.a.createElement(u.Image,{width:"240px",src:r.imageUrl,borderRadius:8})),a.a.createElement(u.Flex,{flexDirection:"column",justifyContent:"space-around"},a.a.createElement("div",null,"Title",a.a.createElement("input",{type:"text",placeholder:"write your product name",size:"50",value:r.title,onChange:function(e){return l(Object(x.a)({},r,{title:e.target.value}))}})),a.a.createElement("div",null,"Category",a.a.createElement("input",{type:"text",placeholder:"write your category",size:"20",value:r.category,onChange:function(e){return l(Object(x.a)({},r,{category:e.target.value}))}})),a.a.createElement("div",null,"Enabled",a.a.createElement("select",{value:r.is_enabled,onChange:function(e){return l(Object(x.a)({},r,{is_enabled:e.target.value}))}},a.a.createElement("option",{value:"1"},"YES"),a.a.createElement("option",{value:"0"},"NO"))),a.a.createElement("div",null,"Price",a.a.createElement("input",{type:"text",placeholder:"kr 999",maxLength:"3",size:"5",style:{direction:"rtl"},value:r.price,onChange:function(e){return l(Object(x.a)({},r,{price:e.target.value}))}})),a.a.createElement("div",null,"Amount",a.a.createElement("input",{type:"text",placeholder:"99",maxLength:"2",size:"1",style:{direction:"rtl"},value:r.unit,onChange:function(e){return l(Object(x.a)({},r,{unit:e.target.value}))}})),a.a.createElement("div",null,a.a.createElement("div",null,"Allergy Advice"),a.a.createElement("textarea",{placeholder:"Allergy Advice...",rows:"3",cols:"60",value:r.description,onChange:function(e){return l(Object(x.a)({},r,{description:e.target.value}))}})),a.a.createElement("div",null,a.a.createElement("div",null,"Detail"),a.a.createElement("textarea",{placeholder:"Detail...",rows:"10",cols:"60",value:r.content,onChange:function(e){return l(Object(x.a)({},r,{content:e.target.value}))}})))),a.a.createElement(u.Flex,{justifyContent:"flex-end"},a.a.createElement(_,{m:1,ml:"30px",width:"150px",bg:"green",onClick:""===r.id?function(){return c(r)}:function(){return i(r.id)}},"Submit"),a.a.createElement(_,{m:1,width:"150px",bg:"orange",color:"green",onClick:d,onKeyDown:function(e){27===e.keyCode&&n(!1)}},"Close")))};function N(){var e=Object(r.a)(["\n  margin-bottom: 30px;\n  padding-right: 4px;\n  width: 100%;\n\n  .add-new-porduct {\n    &:hover {\n      font-weight: 700;\n      border: 1px solid ",";\n      cursor: pointer;\n    }\n  }\n  .table-head {\n    line-height: 3;\n    background-color: ",";\n    color: ",";\n    display: flex;\n    justify-content: center;\n    .wide {\n      flex: 2;\n    }\n    .wider {\n      flex: 5;\n    }\n    div {\n      flex: 1;\n    }\n  }\n"]);return N=function(){return e},e}var F=Object(c.default)(function(e){var t=e.className,n=Object(o.useContext)(h.a),r=n.getAllProducts,l=n.setIsModalOpen,i=n.products;return Object(o.useEffect)(function(){r()},[]),a.a.createElement(p.ModalProvider,null,a.a.createElement("div",{className:t},a.a.createElement(u.Button,{className:"add-new-porduct",type:"button",width:"100%",m:1,mx:"auto",color:"green",bg:"greenWhite",onClick:function(){return l(!0)}},"Add new porduct"),a.a.createElement("div",{className:"table-head"},a.a.createElement(u.Flex,{className:"wide",pl:"10px"},"Category"),a.a.createElement("div",{className:"wider"},"Name"),a.a.createElement("div",null,"Price"),a.a.createElement("div",null,"Amount"),a.a.createElement(u.Flex,{justifyContent:"center"},"Enabled"),a.a.createElement(u.Flex,{justifyContent:"center"},"Edit"),a.a.createElement(u.Flex,{justifyContent:"center"},"Delete")),a.a.createElement("div",null,i.map(function(e){return a.a.createElement(v,{key:e.id,id:e.id,category:e.category,title:e.title,price:e.price,isEnabled:e.is_enabled.toString(),amount:e.unit})})),a.a.createElement(u.Flex,{mt:2,justifyContent:"flex-end"},"".concat(i.length," products in total.")),a.a.createElement(P,null)))})(N(),function(e){return e.theme.colors.green},function(e){return e.theme.colors.green},function(e){return e.theme.colors.orange});F.displayName="DashProduct";var M=F;function B(){var e=Object(r.a)(["\n  padding: 0 14px 0 10px;\n  width: 100%;\n  border: 1px solid ",";\n  font-size: 18px;\n  display: flex;\n  &:hover {\n    background-color: ",";\n  }\n\n  div {\n    padding: 0 6px 0 6px;\n    line-height: 3;\n    &:not(:first-child) {\n      border-left: 1px solid ",";\n    }\n  }\n\n  .wide {\n    flex: 2;\n  }\n  .wider {\n    flex: 5;\n  }\n  div {\n    flex: 1;\n  }\n\n  .enabled {\n    color: ",";\n  }\n\n  .add-hover {\n    &:hover {\n      cursor: pointer;\n      color: ",";\n      background-color: ",";\n    }\n  }\n"]);return B=function(){return e},e}var S=Object(c.default)(u.Flex)(B(),function(e){return e.theme.colors.greenWhite},function(e){return e.theme.colors.greenWhite},function(e){return e.theme.colors.greenWhite},function(e){return"0"===e.isEnabled?"red":"green"},function(e){return e.theme.colors.orange},function(e){return e.theme.colors.green}),D=function(e){var t=e.id,n=e.create_at,r=e.email,l=e.tel,i=e.total,c=e.is_paid,d=Object(o.useContext)(h.a).editOrederDetail,s=new Date(1e3*n);return a.a.createElement(S,{width:"900px",justifyContent:"space-between",alignItems:"center"},a.a.createElement("div",{className:"wide"},s.toLocaleString()),a.a.createElement("div",{className:"wider"},r),a.a.createElement("div",{className:"wide"},l),a.a.createElement(u.Flex,{justifyContent:"flex-end"},i),a.a.createElement(u.Flex,{className:"enabled",justifyContent:"center"},"false"===c?"NO":"YES"),a.a.createElement(u.Flex,{className:"add-hover",justifyContent:"center",onClick:function(){return d(t)},onKeyDown:d,role:"button",tabIndex:"0"},"Edit"))};function T(){var e=Object(r.a)(["\n  &:hover {\n    cursor: pointer;\n  }\n"]);return T=function(){return e},e}function z(){var e=Object(r.a)(["\n  padding-left: 8px;\n  color: ",";\n  background-color: ",";\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 2;\n"]);return z=function(){return e},e}function I(){var e=Object(r.a)(["\nwidth: 700px;\nheight: 600px;\ndisplay: flex;\nflex-direction: column;\njustify-content: space-between;\nborder: 2px solid ",";\nbackground-color: ",";\ndiv{\n  line-height:2;\n}\n"]);return I=function(){return e},e}var W=m.a.styled(I(),function(e){return e.theme.colors.green},function(e){return e.theme.colors.white}),K=c.default.div(z(),function(e){return e.theme.colors.white},function(e){return e.theme.colors.green}),L=Object(c.default)(u.Button)(T()),U=function(){var e=Object(o.useContext)(h.a),t=e.isOrderModalOpen,n=e.setIsOrderModalOpen,r=e.orderDetail,l=e.setOrderDetail,i=e.updateOrderDetail;console.log("orderDetail ",r);var c=new Date(1e3*r.order.create_at),d=new Date(1e3*r.order.paid_date);return a.a.createElement(W,{isOpen:t},a.a.createElement(K,null,"Edit ".concat(r.order.user.name,"'s order || order's id: ").concat(r.order.id)),a.a.createElement(u.Flex,{m:2,justifyContent:"space-around"},a.a.createElement(u.Flex,{flexDirection:"column",justifyContent:"space-around"},a.a.createElement(u.Flex,null,a.a.createElement(u.Text,{width:"200px"},"Created at:"),a.a.createElement(u.Text,null,c.toLocaleString())),a.a.createElement(u.Flex,null,a.a.createElement(u.Text,{width:"200px"},"Total:"),a.a.createElement(u.Text,null,r.order.total)),a.a.createElement(u.Flex,null,a.a.createElement(u.Text,{width:"200px"},"Paid at:"),a.a.createElement(u.Text,null,d.toLocaleString())),a.a.createElement(u.Flex,null,a.a.createElement(u.Text,{width:"200px"},"Payment status:"),a.a.createElement(u.Text,null,r.order.is_paid)),a.a.createElement("div",null,a.a.createElement(u.Text,{width:"200px"}," Name"),a.a.createElement("input",{type:"text",placeholder:"Edit recipients name",size:"50",value:r.order.user.name,onChange:function(e){return l(Object(x.a)({},r,{order:Object(x.a)({},r.order,{user:Object(x.a)({},r.order.user,{name:e.target.value})})}))}})),a.a.createElement("div",null,a.a.createElement(u.Text,{width:"200px"},"E-mail"),a.a.createElement("input",{type:"email",placeholder:"Edit recipients email",size:"50",value:r.order.user.email,onChange:function(e){return l(Object(x.a)({},r,{order:Object(x.a)({},r.order,{user:Object(x.a)({},r.order.user,{email:e.target.value})})}))}})),a.a.createElement("div",null,a.a.createElement(u.Text,{width:"200px"},"Tel"),a.a.createElement("input",{type:"text",placeholder:"Edit recipients phone munber",size:"20",value:r.order.user.tel,onChange:function(e){return l(Object(x.a)({},r,{order:Object(x.a)({},r.order,{user:Object(x.a)({},r.order.user,{tel:e.target.value})})}))}})),a.a.createElement("div",null,a.a.createElement(u.Text,{width:"200px"},"Message"),a.a.createElement("textarea",{placeholder:"Edit message...",rows:"3",cols:"60",value:r.order.message,onChange:function(e){return l(Object(x.a)({},r,{order:Object(x.a)({},r.order,{message:e.target.value})}))}})))),a.a.createElement(u.Flex,{justifyContent:"flex-end"},a.a.createElement(L,{m:1,ml:"30px",width:"150px",bg:"green",onClick:function(){return i(r.id)}},"Submit"),a.a.createElement(L,{m:1,width:"150px",bg:"orange",color:"green",onClick:function(){return n(!1)},onKeyDown:function(e){27===e.keyCode&&n(!1)}},"Close")))};function A(){var e=Object(r.a)(["\n  margin-top: 42px;\n  margin-bottom: 30px;\n  padding: 0 14px 0 10px;\n  width: 100%;\n\n  .table-head {\n    line-height: 3;\n    background-color: ",";\n    color: ",";\n    display: flex;\n    justify-content: center;\n    .wide {\n      padding-left: 10px;\n      flex: 2;\n    }\n    .wider {\n      padding-left: 10px;\n      flex: 5;\n    }\n    div {\n      flex: 1;\n    }\n  }\n"]);return A=function(){return e},e}var q=Object(c.default)(function(e){var t=e.className,n=Object(o.useContext)(h.a),r=n.getOrders,l=n.orders;return Object(o.useEffect)(function(){r()},[]),a.a.createElement(p.ModalProvider,null,a.a.createElement("div",{className:t},a.a.createElement("div",{className:"table-head"},a.a.createElement(u.Flex,{className:"wide",pl:"10px"},"Created at"),a.a.createElement("div",{className:"wider"},"E-mail"),a.a.createElement(u.Flex,{className:"wide"},"Tel"),a.a.createElement(u.Flex,{justifyContent:"center"},"Price"),a.a.createElement(u.Flex,{justifyContent:"center"},"Paid"),a.a.createElement(u.Flex,{justifyContent:"center"},"Edit")),a.a.createElement("div",{className:"order-list"},l.map(function(e){return a.a.createElement(D,{key:e.id,id:e.id,create_at:e.create_at,email:e.user.email,tel:e.user.tel,total:e.total,is_paid:e.is_paid})})),a.a.createElement(U,null)))})(A(),function(e){return e.theme.colors.green},function(e){return e.theme.colors.orange});q.displayName="DashOrder";var R=q;function Y(){var e=Object(r.a)(["\n  .button {\n    height: 28px;\n    &:hover {\n      background-color: ",";\n      color: ",";\n      cursor: pointer;\n    }\n  }\n"]);return Y=function(){return e},e}var J=Object(c.default)(function(e){var t=e.className,n=Object(o.useContext)(h.a),r=n.user,c=n.handleLogout,d=n.checkIfLogin,s=n.isLogin;return Object(o.useEffect)(function(){d(),console.log("isLogin ",s)},[]),a.a.createElement("div",{className:t},a.a.createElement(l.a,null,a.a.createElement(u.Flex,{pl:1,color:"green",bg:"orange",alignItems:"center"},a.a.createElement(u.Text,{fontWeight:"bold"},"Dashboard"),a.a.createElement(u.Box,{mx:"auto"}),a.a.createElement(u.Text,{className:"button",p:1,width:"80px",color:"white",bg:"green",onClick:function(){c(r)}},a.a.createElement(u.Flex,{justifyContent:"center"}," Log out "))),a.a.createElement(u.Flex,null,a.a.createElement(f,null),a.a.createElement(i.b,{component:M,exact:!0,path:"/Sweet-for-happiness/dashboard"}),a.a.createElement(i.b,{component:R,path:"/Sweet-for-happiness/dashboard/order"}))))})(Y(),function(e){return e.theme.colors.greenWhite},function(e){return e.theme.colors.green});J.displayName="Dashboard";t.default=J},76:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",function(){return r})},77:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(76);function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){Object(r.a)(e,t,n[t])})}return e}},78:function(e,t,n){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t){e.exports=n(0)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BaseModalBackground=void 0;var r,o,a,l=(r=["\n  display: flex;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 30;\n  background-color: rgba(0, 0, 0, 0.5);\n  align-items: center;\n  justify-content: center;\n"],o=["\n  display: flex;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 30;\n  background-color: rgba(0, 0, 0, 0.5);\n  align-items: center;\n  justify-content: center;\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(o)}}))),i=(a=n(2))&&a.__esModule?a:{default:a};t.BaseModalBackground=i.default.div.withConfig({displayName:"baseStyles__BaseModalBackground",componentId:"sc-12bzkqq-0"})(l)},function(e,t){e.exports=n(7)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Consumer=t.Provider=void 0;var r,o=((r=n(0))&&r.__esModule?r:{default:r}).default.createContext(null),a=o.Provider,l=o.Consumer;t.Provider=a,t.Consumer=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BaseModalBackground=t.ModalProvider=void 0;var r=n(1),o=l(n(5)),a=l(n(6));function l(e){return e&&e.__esModule?e:{default:e}}t.ModalProvider=o.default,t.BaseModalBackground=r.BaseModalBackground,t.default=a.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),l=(r=a)&&r.__esModule?r:{default:r},i=n(1),c=n(3),u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={modalNode:null,BackgroundComponent:i.BaseModalBackground},n.setModalNode=n.setModalNode.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"setModalNode",value:function(e){this.setState({modalNode:e})}},{key:"render",value:function(){return l.default.createElement(c.Provider,{value:{modalNode:this.state.modalNode,BackgroundComponent:this.state.BackgroundComponent}},this.props.children,l.default.createElement("div",{ref:this.setModalNode}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.backgroundComponent!==t.BackgroundComponent&&e.backgroundComponent?{BackgroundComponent:e.backgroundComponent}:null}}]),t}();t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=m(["",""],["",""]),l=m([""],[""]),i=n(0),c=p(i),u=p(n(7)),d=n(2),s=p(d),f=n(3);function p(e){return e&&e.__esModule?e:{default:e}}function m(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function g(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var v=function(e){function t(e){h(this,t);var n=b(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isOpen:!1},n.node=null,n.prevBodyOverflow=null,n.onKeydown=n.onKeydown.bind(n),n.onBackgroundClick=n.onBackgroundClick.bind(n),n.cleanUp=n.cleanUp.bind(n),n}return g(t,i.Component),o(t,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.setState({isOpen:this.props.isOpen})}},{key:"componentDidUpdate",value:function(e,t){t.isOpen!==this.state.isOpen&&(this.state.isOpen?this.state.isOpen&&(document.addEventListener("keydown",this.onKeydown),this.props.allowScroll||(this.prevBodyOverflow=document.body.style.overflow,document.body.style.overflow="hidden"),this.props.afterOpen&&this.props.afterOpen()):(this.cleanUp(),this.props.afterClose&&this.props.afterClose())),e.isOpen!==this.props.isOpen&&(this.props.isOpen?this.handleChange("beforeOpen",{isOpen:!0}):this.handleChange("beforeClose",{isOpen:!1}))}},{key:"handleChange",value:function(e,t){var n=this;if(this.props[e])try{this.props[e]().then(function(){return n.setState(t)})}catch(e){this.setState(t)}else this.setState(t)}},{key:"componentWillUnmount",value:function(){this.props.isOpen&&this.cleanUp()}},{key:"cleanUp",value:function(){document.removeEventListener("keydown",this.onKeydown),this.props.allowScroll||(document.body.style.overflow=this.prevBodyOverflow||"")}},{key:"onKeydown",value:function(e){"Escape"===e.key&&this.props.onEscapeKeydown&&this.props.onEscapeKeydown(e)}},{key:"onBackgroundClick",value:function(e){this.node===e.target&&this.props.onBackgroundClick&&this.props.onBackgroundClick(e)}},{key:"render",value:function(){var e,t=this,n=this.props,o=n.WrapperComponent,a=n.children,l=(n.onBackgroundClick,n.onEscapeKeydown,n.allowScroll,n.beforeOpen,n.afterOpen,n.beforeClose,n.afterClose,n.backgroundProps),i=(n.isOpen,function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(n,["WrapperComponent","children","onBackgroundClick","onEscapeKeydown","allowScroll","beforeOpen","afterOpen","beforeClose","afterClose","backgroundProps","isOpen"])),d=this.state.isOpen;return e=o?c.default.createElement(o,i,a):a,c.default.createElement(f.Consumer,null,function(n){var o=n.modalNode,a=n.BackgroundComponent;return o&&a&&d?u.default.createPortal(c.default.createElement(a,r({},l,{onClick:t.onBackgroundClick,ref:function(e){t.node=e}}),e),o):null})}}],[{key:"styled",value:function(){var e=s.default.div.withConfig({displayName:"Modal__styles",componentId:"sc-1q9xwty-0"})(a,d.css.apply(void 0,arguments))||s.default.div.withConfig({displayName:"Modal__styles",componentId:"sc-1q9xwty-1"})(l);return function(n){function a(){return h(this,a),b(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return g(a,i.Component),o(a,[{key:"render",value:function(){return c.default.createElement(t,r({WrapperComponent:e},this.props))}}]),a}()}}]),t}();v.defaultProps={backgroundProps:{}},t.default=v},function(e,t){e.exports=n(28)}])}}]);
//# sourceMappingURL=7.84be8990.chunk.js.map
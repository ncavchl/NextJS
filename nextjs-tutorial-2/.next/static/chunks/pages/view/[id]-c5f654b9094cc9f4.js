(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[226],{4376:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/view/[id]",function(){return n(3265)}])},3265:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return T},default:function(){return K}});var i=n(5893),a=(n(1163),n(7294)),r=n(7462),c=n(5068),o=n(2619),l=n(7601),s=n(4248),d=n(6010),p=n(2248),u=n(8459),m=n(8935),f=n(2519),h=n(132),v=n(5150),_=n(5142);function b(e){var t=e.children,n=e.className,i=e.content,c=e.hidden,o=e.visible,l=(0,d.Z)((0,u.lG)(o,"visible"),(0,u.lG)(c,"hidden"),"content",n),s=(0,m.Z)(b,e),h=(0,f.Z)(b,e);return a.createElement(h,(0,r.Z)({},s,{className:l}),p.kK(t)?i:t)}b.handledProps=["as","children","className","content","hidden","visible"],b.propTypes={};var g=b,Z=n(3871);function G(e){var t=e.attached,n=e.basic,i=e.buttons,c=e.children,o=e.className,s=e.color,h=e.compact,v=e.content,_=e.floated,b=e.fluid,g=e.icon,x=e.inverted,y=e.labeled,N=e.negative,k=e.positive,j=e.primary,I=e.secondary,w=e.size,C=e.toggle,P=e.vertical,T=e.widths,K=(0,d.Z)("ui",s,w,(0,u.lG)(n,"basic"),(0,u.lG)(h,"compact"),(0,u.lG)(b,"fluid"),(0,u.lG)(g,"icon"),(0,u.lG)(x,"inverted"),(0,u.lG)(y,"labeled"),(0,u.lG)(N,"negative"),(0,u.lG)(k,"positive"),(0,u.lG)(j,"primary"),(0,u.lG)(I,"secondary"),(0,u.lG)(C,"toggle"),(0,u.lG)(P,"vertical"),(0,u.sU)(t,"attached"),(0,u.cD)(_,"floated"),(0,u.H0)(T),"buttons",o),R=(0,m.Z)(G,e),S=(0,f.Z)(G,e);return(0,l.Z)(i)?a.createElement(S,(0,r.Z)({},R,{className:K}),p.kK(c)?v:c):a.createElement(S,(0,r.Z)({},R,{className:K}),(0,Z.Z)(i,(function(e){return E.create(e)})))}G.handledProps=["as","attached","basic","buttons","children","className","color","compact","content","floated","fluid","icon","inverted","labeled","negative","positive","primary","secondary","size","toggle","vertical","widths"],G.propTypes={};var x=G;function y(e){var t=e.className,n=e.text,i=(0,d.Z)("or",t),c=(0,m.Z)(y,e),o=(0,f.Z)(y,e);return a.createElement(o,(0,r.Z)({},c,{className:i,"data-text":n}))}y.handledProps=["as","className","text"],y.propTypes={};var N=y,k=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))||this).ref=(0,a.createRef)(),t.computeElementType=function(){var e=t.props,n=e.attached,i=e.label;if(!(0,l.Z)(n)||!(0,l.Z)(i))return"div"},t.computeTabIndex=function(e){var n=t.props,i=n.disabled,a=n.tabIndex;return(0,l.Z)(a)?i?-1:"div"===e?0:void 0:a},t.focus=function(){return(0,o.Z)(t.ref.current,"focus")},t.handleClick=function(e){t.props.disabled?e.preventDefault():(0,o.Z)(t.props,"onClick",e,t.props)},t.hasIconClass=function(){var e=t.props,n=e.labelPosition,i=e.children,a=e.content,r=e.icon;return!0===r||r&&(n||p.kK(i)&&(0,l.Z)(a))},t}(0,c.Z)(t,e);var n=t.prototype;return n.computeButtonAriaRole=function(e){var t=this.props.role;return(0,l.Z)(t)?"button"!==e?"button":void 0:t},n.render=function(){var e=this.props,n=e.active,i=e.animated,c=e.attached,o=e.basic,h=e.children,b=e.circular,g=e.className,Z=e.color,G=e.compact,x=e.content,y=e.disabled,N=e.floated,k=e.fluid,E=e.icon,j=e.inverted,I=e.label,w=e.labelPosition,C=e.loading,P=e.negative,T=e.positive,K=e.primary,R=e.secondary,S=e.size,z=e.toggle,A=e.type,B=(0,d.Z)(Z,S,(0,u.lG)(n,"active"),(0,u.lG)(o,"basic"),(0,u.lG)(b,"circular"),(0,u.lG)(G,"compact"),(0,u.lG)(k,"fluid"),(0,u.lG)(this.hasIconClass(),"icon"),(0,u.lG)(j,"inverted"),(0,u.lG)(C,"loading"),(0,u.lG)(P,"negative"),(0,u.lG)(T,"positive"),(0,u.lG)(K,"primary"),(0,u.lG)(R,"secondary"),(0,u.lG)(z,"toggle"),(0,u.sU)(i,"animated"),(0,u.sU)(c,"attached")),D=(0,d.Z)((0,u.sU)(w||!!I,"labeled")),O=(0,d.Z)((0,u.lG)(y,"disabled"),(0,u.cD)(N,"floated")),U=(0,m.Z)(t,this.props),F=(0,f.Z)(t,this.props,this.computeElementType),H=this.computeTabIndex(F);if(!(0,l.Z)(I)){var M=(0,d.Z)("ui",B,"button",g),X=(0,d.Z)("ui",D,"button",g,O),Q=_.Z.create(I,{defaultProps:{basic:!0,pointing:"left"===w?"right":"left"},autoGenerateKey:!1});return a.createElement(F,(0,r.Z)({},U,{className:X,onClick:this.handleClick}),"left"===w&&Q,a.createElement(s.R,{innerRef:this.ref},a.createElement("button",{className:M,"aria-pressed":z?!!n:void 0,disabled:y,type:A,tabIndex:H},v.Z.create(E,{autoGenerateKey:!1})," ",x)),("right"===w||!w)&&Q)}var W=(0,d.Z)("ui",B,O,D,"button",g),$=!p.kK(h),q=this.computeButtonAriaRole(F);return a.createElement(s.R,{innerRef:this.ref},a.createElement(F,(0,r.Z)({},U,{className:W,"aria-pressed":z?!!n:void 0,disabled:y&&"button"===F||void 0,onClick:this.handleClick,role:q,type:A,tabIndex:H}),$&&h,!$&&v.Z.create(E,{autoGenerateKey:!1}),!$&&x))},t}(a.Component);k.handledProps=["active","animated","as","attached","basic","children","circular","className","color","compact","content","disabled","floated","fluid","icon","inverted","label","labelPosition","loading","negative","onClick","positive","primary","role","secondary","size","tabIndex","toggle","type"],k.propTypes={},k.defaultProps={as:"button"},k.Content=g,k.Group=x,k.Or=N,k.create=(0,h.u5)(k,(function(e){return{content:e}}));var E=k,j=n(3623),I=n(628),w=n.n(I);function C(e){var t=e.item,n=void 0===t?{}:t,a=n.name,r=n.image_link,c=n.price,o=n.description,l=(n.updated_at,n.category),s=n.product_type;n.product_link;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:w().wrap,children:[(0,i.jsx)("div",{className:w().img_item,children:(0,i.jsx)("img",{src:r,alt:a})}),(0,i.jsxs)("div",{className:w().info_item,children:[(0,i.jsx)("strong",{className:w().tit_item,children:a}),(0,i.jsxs)("strong",{className:w().num_price,children:["$",c]}),(0,i.jsxs)("span",{className:w().txt_info,children:[l?"".concat(l,"/"):"",s]}),(0,i.jsx)(E,{color:"orange",children:"\uad6c\ub9e4\ud558\uae30"})]})]}),(0,i.jsx)(j.Z,{as:"h3",children:"Description"}),(0,i.jsx)("p",{style:{paddingBottom:20,fontSize:18},children:o})]})}var P=n(9008),T=!0,K=function(e){var t=e.item,n=(0,a.useState)(!0);n[0],n[1];return(0,i.jsx)(i.Fragment,{children:t&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(P.default,{children:[(0,i.jsx)("title",{children:"HOME | \ucf54\ub529\uc559\ub9c8"}),(0,i.jsx)("meta",{name:"description",content:"\ucf54\ub529 \uc559\ub9c8 \ud648\uc784"})]}),(0,i.jsx)(C,{item:t})]})})}},628:function(e){e.exports={wrap:"Item_wrap__g9KWc",img_item:"Item_img_item__3vkPS",info_item:"Item_info_item__0EHbA",tit_item:"Item_tit_item__mfoBK",num_price:"Item_num_price__MTSpm",txt_info:"Item_txt_info__QTN5i"}},9008:function(e,t,n){e.exports=n(3121)}},function(e){e.O(0,[774,888,179],(function(){return t=4376,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
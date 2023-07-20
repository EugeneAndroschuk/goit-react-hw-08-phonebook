"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[216],{9216:function(e,n,t){t.r(n),t.d(n,{default:function(){return ae}});var a=t(9439),o=t(2791),i=t(9434),r=t(7470),l=t(6351),s=t(5527),c=t(1347),d=t(6151),m="ContactForm_form__dhl+T",u="ContactForm_formTitle__N6O4g",h=t(3329),p=function(e){var n=(0,o.useState)(""),t=(0,a.Z)(n,2),p=t[0],x=t[1],g=(0,o.useState)(""),f=(0,a.Z)(g,2),Z=f[0],b=f[1],j=(0,o.useState)(""),C=(0,a.Z)(j,2),v=C[0],_=C[1],w=(0,i.I0)(),S=(0,i.v9)(l.K2),k=function(e){var n=e.currentTarget,t=n.name,a=n.value;switch(t){case"name":x(a);break;case"number":b(a);break;case"email":_(a)}};return(0,h.jsx)(s.Z,{elevation:24,className:m,children:(0,h.jsxs)("form",{onSubmit:function(n){n.preventDefault(),S.some((function(e){return e.name.toLowerCase()===p.toLowerCase()}))?alert("".concat(p," is already in Contacts!")):(w((0,r.uK)({name:p,phone:Z,email:v})),x(""),b(""),_(""),e.onCloseModal())},children:[(0,h.jsx)("h2",{className:u,children:"enter CONTACT DATA"}),(0,h.jsx)(c.Z,{margin:"normal",required:!0,fullWidth:!0,label:"Name",name:"name",value:p,autoComplete:"name",autoFocus:!0,onChange:k,inputProps:{pattern:"^[A-Z]+[a-z]+ [A-Z]+[a-z]+$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}}),(0,h.jsx)(c.Z,{margin:"normal",required:!0,fullWidth:!0,label:"Email",name:"email",value:v,autoComplete:"email",autoFocus:!0,onChange:k}),(0,h.jsx)(c.Z,{margin:"normal",required:!0,fullWidth:!0,type:"tel",label:"number",name:"number",value:Z,autoComplete:"phone number",autoFocus:!0,onChange:k,inputProps:{pattern:"".concat("^([(]d{3}[)])+ d{3}-d{4}$"),title:"Phone number must be in 111-11-11 format"}}),(0,h.jsx)(d.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Add Contact"})]})})},x=t(4942),g=t(6895),f=t(7630),Z=t(2065),b=t(6098),j=t(5403),C=(0,f.ZP)("div")((function(e){var n=e.theme;return(0,x.Z)({position:"relative",borderRadius:n.shape.borderRadius,backgroundColor:(0,Z.Fq)(n.palette.common.white,.15),"&:hover":{backgroundColor:(0,Z.Fq)(n.palette.common.white,.25)},marginLeft:0,width:"100%"},n.breakpoints.up("sm"),{marginLeft:n.spacing(1),width:"auto"})})),v=(0,f.ZP)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),_=(0,f.ZP)(b.ZP)((function(e){var n=e.theme;return{color:"inherit","& .MuiInputBase-input":(0,x.Z)({padding:n.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(n.spacing(4),")"),transition:n.transitions.create("width"),width:"100%"},n.breakpoints.up("sm"),{width:"300px","&:focus":{width:"310px"}})}})),w=function(){var e=(0,i.I0)();return(0,h.jsxs)(C,{sx:{backgroundColor:"#e0e0e0"},children:[(0,h.jsx)(v,{children:(0,h.jsx)(j.Z,{})}),(0,h.jsx)(_,{placeholder:"Find contacts by name\u2026",inputProps:{"aria-label":"search"},onChange:function(n){return e((0,g.a)(n.currentTarget.value))}})]})},S=t(1413),k=t(7621),y=t(4554),F=t(3044),T=t(890),P=t(4557),z=t(2802),A=t(2207),N=t(5289),I=t(9157),L=t(5643),D=t(5542),M=t(7195),q=t(5345),W=t(3872),B=t(1132),E=t(6621),K=t(6541),R="ContactFormEdit_form__+Zt11",$="ContactFormEdit_formTitle__bs0ZH",G=function(e){var n=e.contact,t=e.onCloseModal,m=(0,o.useState)(n.name),u=(0,a.Z)(m,2),p=u[0],x=u[1],g=(0,o.useState)(n.phone),f=(0,a.Z)(g,2),Z=f[0],b=f[1],j=(0,o.useState)(n.email),C=(0,a.Z)(j,2),v=C[0],_=C[1],w=(0,i.I0)(),S=(0,i.v9)(l.K2),k=function(e){var n=e.currentTarget,t=n.name,a=n.value;switch(t){case"name":x(a);break;case"number":b(a);break;case"email":_(a)}};return(0,h.jsx)(s.Z,{elevation:24,className:R,children:(0,h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),S.some((function(e){return e.name.toLowerCase()===p.toLowerCase()&&e._id!==n._id}))?alert("".concat(p," is already in Contacts!")):(w((0,r.Tk)({contactId:n._id,name:p,phone:Z,email:v})),x(""),b(""),_(""),t())},children:[(0,h.jsx)("h2",{className:$,children:"edit CONTACT DATA"}),(0,h.jsx)(c.Z,{margin:"normal",required:!0,fullWidth:!0,label:"Name",name:"name",value:p,autoComplete:"name",autoFocus:!0,onChange:k,pattern:"^[A-Z]+[a-z]+ [A-Z]+[a-z]+$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}),(0,h.jsx)(c.Z,{margin:"normal",required:!0,fullWidth:!0,label:"Email",name:"email",value:v,autoComplete:"email",autoFocus:!0,onChange:k}),(0,h.jsx)(c.Z,{margin:"normal",required:!0,fullWidth:!0,type:"tel",label:"number",name:"number",value:Z,autoComplete:"phone number",autoFocus:!0,onChange:k,pattern:"^([(]d{3}[)])+ d{3}-d{4}$",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}),(0,h.jsx)(d.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Save Changes"})]})})},O=function(e){var n,t=e.contact,i=e.onDeleteContact,r=e.onMakeFavorite,l=(0,o.useState)(t.favorite),s=(0,a.Z)(l,2),c=s[0],d=s[1],m=(0,o.useState)(!1),u=(0,a.Z)(m,2),p=u[0],x=u[1],g=function(){return x(!1)},f=[{icon:(0,h.jsx)(D.Z,{onClick:function(){return i(t._id)},fontSize:"large",sx:{color:"red"}}),name:"Delete Contact"},{icon:(0,h.jsx)(M.Z,{fontSize:"large",sx:{color:"green"},onClick:function(){return t._id,void x(!0)}}),name:"Edit Contact"},{icon:(0,h.jsx)(q.Z,{fontSize:"large",sx:{color:"blue"}}),name:"Share Contact"}];return(0,h.jsxs)(k.Z,{sx:{padding:"16px",width:"300px"},children:[(0,h.jsx)(y.Z,{sx:{display:"flex",flexDirection:"row-reverse",alignItems:"center",paddingTop:"8px",paddingBottom:"8px"},onClick:function(){r(t._id,!c),d(!c)},children:t.favorite?(0,h.jsx)(W.Z,{fontSize:"large",sx:{color:"blue"}}):(0,h.jsx)(B.Z,{fontSize:"large",sx:{color:"blue"}})}),(0,h.jsxs)(y.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,h.jsx)(F.Z,(0,S.Z)((0,S.Z)({},(n="".concat(t.name),1===n.split(" ").length?{children:"".concat(n.split(" ")[0][0])}:{children:"".concat(n.split(" ")[0][0]).concat(n.split(" ")[1][0])})),{},{sx:{width:56,height:56,bgcolor:L.Z[500],marginRight:"10px"}})),(0,h.jsx)(T.Z,{variant:"h5",component:"span",children:t.name})]}),(0,h.jsxs)(y.Z,{sx:{display:"flex",alignItems:"center",paddingTop:"8px",paddingBottom:"8px"},children:[(0,h.jsx)(F.Z,{sx:{width:56,height:56,bgcolor:"yellow",marginRight:"10px"},children:(0,h.jsx)(E.Z,{fontSize:"large"})}),(0,h.jsx)(T.Z,{variant:"h5",component:"span",children:t.email})]}),(0,h.jsxs)(y.Z,{sx:{display:"flex",alignItems:"center",paddingTop:"8px",paddingBottom:"8px"},children:[(0,h.jsx)(F.Z,{sx:{width:56,height:56,bgcolor:"green",marginRight:"10px"},children:(0,h.jsx)(K.Z,{fontSize:"large"})}),(0,h.jsx)(T.Z,{variant:"h5",component:"span",children:t.phone})]}),(0,h.jsx)(P.Z,{ariaLabel:"SpeedDial basic example",icon:(0,h.jsx)(z.Z,{}),direction:"right",children:f.map((function(e){return(0,h.jsx)(A.Z,{icon:e.icon,tooltipTitle:e.name},e.name)}))}),(0,h.jsx)(N.Z,{open:p,onClose:g,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,h.jsx)(I.Z,{children:(0,h.jsx)(G,{onCloseModal:g,contact:t})})})]})},J=t(475),H=t(1889),V=function(){var e=(0,i.v9)(l.K2),n=(0,i.v9)(l.Vc),t=(0,i.v9)(l.zK),a=(0,i.I0)();(0,o.useEffect)((function(){a((0,r.yF)())}),[a]);var s=function(e){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}(e),c=function(e){a((0,r.GK)(e))},d=function(e,n){a((0,r.zG)({contactId:e,favorite:n}))};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(H.ZP,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},children:s.length>0&&s.map((function(e){return(0,h.jsx)(H.ZP,{item:!0,xs:6,sm:4,md:4,children:(0,h.jsx)(O,{contact:e,onDeleteContact:c,onMakeFavorite:d})},e._id)}))}),n&&(0,h.jsx)(J.Z,{})]})},Y=t(3400),Q=t(7924),U=t(3768),X=t(7721),ee=t(7253),ne=t(58),te=(0,f.ZP)(Y.Z)((function(e){e.theme;return{"&:hover":{backgroundColor:"orangered"}}})),ae=function(){var e=(0,o.useState)(!1),n=(0,a.Z)(e,2),t=n[0],i=n[1],r=function(){return i(!1)};return(0,h.jsxs)("div",{className:ee.Z.container,children:[(0,h.jsx)("div",{className:ne.Z.filter,children:(0,h.jsx)(w,{})}),(0,h.jsx)(Q.Z,{sx:{marginBottom:"16px"}}),(0,h.jsx)("div",{className:ne.Z.contactList,children:(0,h.jsx)(V,{})}),(0,h.jsx)(U.Z,{title:"Add New Contact",placement:"top",children:(0,h.jsx)(te,{"aria-label":"add contact",sx:{bgcolor:"orange",width:"108px",height:"108px",position:"fixed",bottom:"32px",right:"32px"},onClick:function(){return i(!0)},children:(0,h.jsx)(X.Z,{fontSize:"large"})})}),(0,h.jsx)(N.Z,{open:t,onClose:r,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,h.jsx)(I.Z,{children:(0,h.jsx)(p,{onCloseModal:r})})})]})}},58:function(e,n){n.Z={homeTitle:"Pages_homeTitle__g-Pd-",bgdImg:"Pages_bgdImg__KYlld",contactList:"Pages_contactList__--j4G",filter:"Pages_filter__aR88D"}}}]);
//# sourceMappingURL=216.90dd020c.chunk.js.map
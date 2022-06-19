var Y=Object.defineProperty,ee=Object.defineProperties;var ae=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var te=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable;var F=(a,r,t)=>r in a?Y(a,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[r]=t,c=(a,r)=>{for(var t in r||(r={}))te.call(r,t)&&F(a,t,r[t]);if(B)for(var t of B(r))ne.call(r,t)&&F(a,t,r[t]);return a},h=(a,r)=>ee(a,ae(r));import{r as j,j as e,B as p,a as l,T as re,b as se,c as V,d as oe,H as w,F as D,e as ce,f as ie,g as le,h as de,i as v,k as R,D as q,l as T,V as x,m as ue,G as he,u as ge,R as Z,A as pe,n as me,I as ye,o as ve,p as we,q as k,s as fe,t as be,v as Ce,w as xe,x as De,y as Te,C as Se}from"./vendor.ceeaac52.js";const Ae=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const d of s)if(d.type==="childList")for(const u of d.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const d={};return s.integrity&&(d.integrity=s.integrity),s.referrerpolicy&&(d.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?d.credentials="include":s.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(s){if(s.ep)return;s.ep=!0;const d=t(s);fetch(s.href,d)}};Ae();function y(a){const{getTableProps:r,headerGroups:t,getTableBodyProps:o,rows:s,prepareRow:d}=j.exports.useTable({data:a.data,columns:a.columns},j.exports.useSortBy);return e(p,{children:l(re,h(c({},r()),{children:[e(se,{children:t.map(u=>e(V,h(c({},u.getHeaderGroupProps()),{children:u.headers.map(i=>e(oe,h(c({},i.getHeaderProps()),{w:i.width,children:e(p,h(c({},i.getSortByToggleProps()),{children:l(w,{display:"flex",spacing:"1",children:[e(p,{children:i.render("Header")}),i.isSorted?e(D,{children:i.isSortedDesc?e(ce,{}):e(ie,{})}):null]})}))})))})))}),e(le,h(c({},o()),{children:s.map(u=>(d(u),e(V,h(c({},u.getRowProps()),{children:u.cells.map(i=>{const{value:C}=i;return e(de,h(c({},i.getCellProps()),{w:i.column.width,children:isNaN(C)?i.render("Cell"):Number.isInteger(C)?C:C.toFixed(3)}))})}))))}))]}))})}const W=[{Header:"No",accessor:"no",width:"10%"},{Header:"River Name",accessor:"name",width:"20%"},{Header:"attendance",accessor:"attendance",width:"17.5%"},{Header:"age",accessor:"age",width:"17.5%"},{Header:"salary",accessor:"salary",width:"17.5%"},{Header:"Distance",accessor:"distance",width:"17.5%"},{Header:"gpa",accessor:"gpa",width:"17.5%"},{Header:"psychotest",accessor:"psychotest",width:"17.5%"}],M=a=>{v.exports.useEffect(()=>{document.title=`${a} | Dss Final Project`},[])},G=a=>{const r=ge();return l(w,{display:"flex",alignItems:"center",spacing:"2",cursor:"pointer",onClick:()=>{r({to:a.to,replace:!0})},children:[e(a.icon,{size:20}),e(T,{children:a.text})]})},He=()=>l(p,{as:"aside",bgColor:"green.400",w:"80",color:"white",p:"8",flexShrink:"0",children:[e(R,{as:"h3",fontSize:"3xl",mb:"2",children:"Tugas Akhir SPK"}),e(q,{my:"4"}),e(T,{textTransform:"uppercase",opacity:"75",mb:"3",fontWeight:"bold",children:"Main"}),e(x,{spacing:"4",alignItems:"start",children:e(G,{icon:ue,text:"Dataset",to:"/"})}),e(q,{my:"4"}),e(T,{textTransform:"uppercase",opacity:"75",mb:"3",fontWeight:"bold",children:"Method"}),e(x,{spacing:"4",alignItems:"start",children:e(G,{icon:he,text:"Weight Product Method",to:"/weight-product"})})]}),E=a=>l(p,{display:"flex",alignItems:"stretch",minH:"100vh",children:[e(He,{}),e(p,{as:"main",p:"8",bg:"gray.50",width:"full",children:l(p,{bg:"white",p:"6",boxShadow:"md",borderRadius:"md",children:[l(w,{alignItems:"center",justifyContent:"space-between",children:[e(R,{as:"h1",mb:"4",children:a.title}),a.action]}),e(p,{children:a.children})]})})]}),Ie=a=>Z.createPortal(e(D,{children:a.open?l(D,{children:[e(p,{position:"fixed",zIndex:"10",w:"100%",h:"100%",top:"0",display:"flex",children:l(p,{boxShadow:"lg",rounded:"lg",minW:"500px",p:"8",bg:"white",flexShrink:"0",m:"auto",children:[l(w,{mb:"4",alignItems:"center",justifyContent:"space-between",children:[e(R,{as:"h3",fontSize:"2xl",children:a.title}),e(pe,{size:"22",cursor:"pointer",color:"lightgray",onClick:a.onClose})]}),a.children,e(w,{spacing:"4",justifyContent:"end",mt:"4",children:a.buttons})]})}),e(p,{position:"fixed",zIndex:"5",w:"100%",h:"100%",bg:"black",top:"0",left:"0",opacity:"25%"})]}):null}),document.getElementById("root"));function b(a){var o;const{field:r,fieldState:t}=me({control:a.control,name:a.name,rules:a.rules});return console.log(t),l(p,{children:[e(T,{as:"label",textTransform:"uppercase",fontWeight:"semibold",color:t.error?"red.400":"gray.400",children:a.label}),e(ye,c({mt:"2",width:"full",type:(o=a.type)!=null?o:"text",borderColor:t.error?"red.400":"gray.200",_focus:{borderColor:t.error?"red.400":"green.400"}},r))]})}const ke=[{no:1,name:"Mahmud Prakasa",attendance:254,age:25,salary:750,distance:20,gpa:3,psychotest:70},{no:2,name:"Lega Maryadi",attendance:260,age:23,salary:745,distance:5,gpa:2,psychotest:80},{no:3,name:"Harjo Wibisono",attendance:250,age:23,salary:860,distance:6,gpa:3,psychotest:78},{no:4,name:"Cahya Maheswara",attendance:255,age:25,salary:700,distance:6,gpa:3,psychotest:76},{no:5,name:"Ajiman Tamba",attendance:250,age:26,salary:800,distance:8,gpa:3,psychotest:75},{no:6,name:"Galuh Hidayat",attendance:260,age:26,salary:850,distance:8,gpa:4,psychotest:87},{no:7,name:"Dono Nainggolan",attendance:258,age:26,salary:825,distance:5,gpa:4,psychotest:85},{no:8,name:"Atma Sihombing",attendance:259,age:27,salary:750,distance:14,gpa:3,psychotest:85},{no:9,name:"Garan Prasasta",attendance:251,age:22,salary:700,distance:6,gpa:4,psychotest:74},{no:10,name:"Nadia Mandasari",attendance:245,age:22,salary:800,distance:5,gpa:4,psychotest:85}],S=ve(a=>({rivers:ke,push:r=>{a(t=>{const o=t.rivers.map((d,u)=>h(c({},d),{no:u+1})),s=o[o.length-1].no;return o.push(h(c({},r),{no:s+1})),{rivers:o}})}})),Ne=a=>{const r=S(i=>i.push),{control:t,handleSubmit:o,getValues:s}=we({defaultValues:{name:"",attendance:"",age:"",salary:"",distance:"",gpa:"",psychotest:""}}),d=()=>{const i=s();r({name:i.name,attendance:+i.attendance,age:+i.age,salary:+i.salary,distance:+i.distance,gpa:+i.gpa,psychotest:+i.psychotest}),a.onClose()},u=()=>{a.onClose()};return e(Ie,{title:"Add Data",open:a.open,onClose:u,buttons:l(D,{children:[e(k,{onClick:u,children:"Close"}),e(k,{colorScheme:"green",leftIcon:e(fe,{}),onClick:o(d),children:"Add"})]}),children:l(x,{as:"form",spacing:"4",alignItems:"unset",children:[e(b,{control:t,name:"name",label:"name",rules:{required:!0}}),l(w,{spacing:"4",children:[l(x,{spacing:"4",alignItems:"unset",children:[e(b,{control:t,name:"attendance",label:"attendance",type:"number",rules:{required:!0}}),e(b,{control:t,name:"age",label:"age",type:"number",rules:{required:!0}})]}),l(x,{spacing:"4",alignItems:"unset",children:[e(b,{control:t,name:"salary",label:"salary",type:"number",rules:{required:!0}}),e(b,{control:t,name:"distance",label:"distance",type:"number",rules:{required:!0}})]}),l(x,{spacing:"4",alignItems:"unset",children:[e(b,{control:t,name:"gpa",label:"gpa",type:"number",rules:{required:!0}}),e(b,{control:t,name:"psychotest",label:"psychotest",type:"number",rules:{required:!0}})]})]})]})})},Pe=()=>{const[a,r]=be(!1),t=S(o=>o.rivers);return M("Dataset"),l(D,{children:[e(Ne,{open:a,onClose:r.off}),e(E,{title:"Dataset",action:e(k,{colorScheme:"green",leftIcon:e(Ce,{}),onClick:r.on,children:"Add Data"}),children:e(y,{data:t,columns:W})})]})},U=a=>e(p,{py:2,px:4,bg:a.active?"green.400":"gray.100",color:a.active?"white":"",rounded:"full",cursor:"pointer",_hover:{bg:"green.400",color:"white"},onClick:a.onClick,children:e(T,{children:a.text})}),_=[{text:"Dataset",value:"DATASET"}],Re=()=>{M("TOPSIS");const[a,r]=v.exports.useState(_[0]),t=S(o=>o.rivers);return l(E,{title:"TOPSIS Method",children:[e(w,{spacing:"2",mb:3,children:_.map(o=>e(U,{text:o.text,active:o.value===a.value,onClick:()=>{r(o)}},o.value))}),a.value==="DATASET"?e(y,{data:t,columns:W}):null]})},N=[{Header:"Criteria",accessor:"criteria",width:"33%"},{Header:"Attribute",accessor:"attribute",width:"33%"},{Header:"Weight",accessor:"value",width:"33%"}],We=[{Header:"No",accessor:"no",width:"10%"},{Header:"River Name",accessor:"name",width:"20%"},{Header:"attendance",accessor:"attendance",width:"17.5%"},{Header:"age",accessor:"age",width:"17.5%"},{Header:"salary",accessor:"salary",width:"17.5%"},{Header:"Distance",accessor:"distance",width:"17.5%"},{Header:"gpa",accessor:"gpa",width:"17.5%"},{Header:"psychotest",accessor:"psychotest",width:"17.5%"},{Header:"S",accessor:"valueS",width:"17.5%"}],Me=[{Header:"No",accessor:"no",width:"10%"},{Header:"River Name",accessor:"name",width:"30%"},{Header:"Total",accessor:"total",width:"30%"},{Header:"V",accessor:"valueV",width:"30%"},{Header:"Rank",accessor:"rank",width:"30%"}];var $=(a=>(a[a.COST=0]="COST",a[a.BENEFIT=1]="BENEFIT",a))($||{});const P=[{criteria:"attendance",attribute:0,weight:2},{criteria:"age",attribute:0,weight:3},{criteria:"salary",attribute:0,weight:4},{criteria:"distance",attribute:0,weight:3},{criteria:"gpa",attribute:0,weight:3},{criteria:"psychotest",attribute:1,weight:2}],Ee=()=>{const a=S(A=>A.rivers),[r,t]=v.exports.useState([]),[o,s]=v.exports.useState([]),[d,u]=v.exports.useState([]),[i,C]=v.exports.useState([]);return v.exports.useEffect(()=>{const A=P.reduce((n,g)=>n+g.weight,0),z=P.map(n=>h(c({},n),{value:n.weight/A})),L=z.map(n=>h(c({},n),{value:n.attribute===$.BENEFIT?1*n.value:-1*n.value})),f={};L.forEach(n=>{f[n.criteria]=c({},n)});const H=a.map(n=>{const g={attendance:Math.pow(n.attendance,f.attendance.value),age:Math.pow(n.age,f.age.value),salary:Math.pow(n.salary,f.salary.value),distance:Math.pow(n.distance,f.distance.value),gpa:Math.pow(n.gpa,f.gpa.value),psychotest:Math.pow(n.psychotest,f.psychotest.value)};return h(c(c({},n),g),{valueS:Object.keys(g).reduce((I,X)=>I*g[X],1)})}),O=H.reduce((n,g)=>n+g.valueS,0);console.log("Total value S",O);let m=H.map(n=>h(c({},n),{rank:1,total:n.valueS,valueV:n.valueS/O}));var J=m.slice().sort(function(n,g){return g.valueV-n.valueV}),Q=m.map(function(n){return J.indexOf(n)+1});m=Q.map((n,g)=>h(c({},m[g]),{rank:n})),m=m.map(n=>{const g=m.find(I=>I.total===n.total);return h(c({},n),{rank:g?g.rank:n.rank})}),u(H),t(z),s(L),C(m)},[]),{calculateWeight:{columns:N,data:r},normalizeWeight:{columns:N,data:o},normalizeData:{columns:We,data:d},rankData:{columns:Me,data:i}}},K=[{text:"Dataset",value:"DATASET"},{text:"Criteria",value:"CRITERIA"},{text:"Calculate Criteria Weight",value:"CALCULATE"},{text:"Normalize Criteria Weight",value:"NORMALIZE_WEIGHT"},{text:"Normalize Data",value:"NORMALIZE_DATA"},{text:"Ranking",value:"RANKING"}],ze=()=>{M("Weight Product");const[a,r]=v.exports.useState(K[0]),t=S(s=>s.rivers),o=Ee();return console.log(o.normalizeData),l(E,{title:"Weight Product Method",children:[e(w,{spacing:"2",mb:3,children:K.map(s=>e(U,{text:s.text,active:s.value===a.value,onClick:()=>{r(s)}},s.value))}),a.value==="DATASET"?e(y,{data:t,columns:W}):null,a.value==="CRITERIA"?e(y,{data:P.map(s=>h(c({},s),{value:s.weight})),columns:N}):null,a.value==="CALCULATE"?e(y,c({},o.calculateWeight)):null,a.value==="NORMALIZE_WEIGHT"?e(y,c({},o.normalizeWeight)):null,a.value==="NORMALIZE_DATA"?e(y,c({},o.normalizeData)):null,a.value==="RANKING"?e(y,c({},o.rankData)):null]})},Le=[{path:"weight-product",element:e(ze,{})},{path:"topsis",element:e(Re,{})},{path:"",element:e(Pe,{})}],Oe=new xe;function Be(){return e(De,{routes:Le,location:Oe})}Z.render(e(Te.StrictMode,{children:e(Se,{children:e(Be,{})})}),document.getElementById("root"));
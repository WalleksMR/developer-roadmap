import{h as s,p as c}from"./hooks.module.6eb5c72e.js";function d(e,t,r){let u=new Set([...t,void 0]);return e.listen((n,i)=>{u.has(i)&&r(n,i)})}function y(e,t={}){let[,r]=s({}),[u]=s(e.get());return c(()=>{u!==e.get()&&r({})},[]),c(()=>{let n,i,f,l=()=>{n||(n=1,i=setTimeout(()=>{n=void 0,r({})}))};return t.keys?f=d(e,t.keys,l):f=e.listen(l),()=>{f(),clearTimeout(i)}},[e,""+t.keys]),e.get()}export{y as u};

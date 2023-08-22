import{h as f,p as R}from"./hooks.module.6eb5c72e.js";import{a as I,h as $,c as q}from"./http.82ebf0f1.js";import{p as t}from"./page.c1a8a472.js";import{i as F}from"./jwt.f0e0aa9c.js";import{s as U}from"./popup.a359f713.js";import{g as P}from"./browser.bcc09af3.js";import{C}from"./CheckIcon.1978281b.js";import{D as m,A as L}from"./AddedUserIcon.e173ff89.js";import{u as S}from"./use-toast.fb52de5d.js";import{u as Y}from"./use-auth.13ac07ad.js";import{o as e}from"./jsxRuntime.module.c6f75409.js";import{E as D}from"./ErrorIcon.0fb5341e.js";import{k as u}from"./preact.module.346aa314.js";import"./index.a98c85f5.js";import"./toast.1fe7142d.js";function E(d){const{additionalClasses:p="mr-2 w-[20px] h-[20px]"}=d;return e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:`relative ${p}`,children:[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"m4.9 4.9 14.2 14.2"})]})}function ee(){const{u:d}=P(),p=S(),v=Y(),[n,o]=f(!1),[k,b]=f(!0),[x,l]=f(""),[r,h]=f(),j=F();async function N(i){const{response:a,error:s}=await I(`https://api.roadmap.sh/v1-get-friend/${i}`);if(s||!a){l(s?.message||"Something went wrong");return}if(a.status==="accepted"){window.location.href="/account/friends?c=fa";return}h(a)}R(()=>{d?N(d).finally(()=>{t.set(""),b(!1)}):(b(!1),l("Missing invite ID in URL"),t.set(""))},[d]);async function g(i,a){t.set("Please wait..."),l("");const{response:s,error:c}=await $(`https://api.roadmap.sh/v1-add-friend/${i}`,{});if(c||!s){l(c?.message||"Something went wrong");return}if(s.status==="accepted"){window.location.href="/account/friends?c=fa";return}h(s)}async function w(i,a){t.set("Please wait..."),l("");const{response:s,error:c}=await q(`https://api.roadmap.sh/v1-delete-friend/${i}`,{});if(c||!s){l(c?.message||"Something went wrong");return}h(s),p.success(a)}if(k)return null;if(!r)return e("div",{className:"container text-center",children:[e(D,{additionalClasses:"mx-auto mb-4 mt-24 w-20 opacity-20"}),e("h2",{className:"mb-1 text-2xl font-bold",children:"Error"}),e("p",{class:"mb-4 text-base leading-6 text-gray-600",children:x||"There was a problem, please try again."}),e("div",{children:e("a",{href:"/",className:"flex-grow cursor-pointer rounded-lg bg-gray-200 px-3 py-2 text-center",children:"Back to home"})})]});const A=r.avatar?`https://dodrc8eu8m09s.cloudfront.net/avatars/${r.avatar}`:"/images/default-avatar.png",y=v?.id===r.id;return e("div",{className:"container max-w-[400px] text-center",children:[e("img",{alt:"join team",src:A,className:"mx-auto mb-4 mt-24 w-28 rounded-full"}),e("h2",{className:"mb-1 text-3xl font-bold",children:r.name}),e("p",{class:"mb-6 text-base leading-6 text-gray-600",children:["After you add ",r.name," as a friend, you will be able to view each other's skills and progress."]}),e("div",{class:"mx-auto w-full duration-500 sm:max-w-md",children:e("div",{class:"flex w-full flex-col items-center gap-2",children:[r.status==="none"&&e("button",{disabled:y,onClick:()=>{if(!j)return U();g(r.id).finally(()=>{t.set("")})},type:"button",class:"w-full flex-grow cursor-pointer rounded-lg bg-black px-3 py-2 text-center text-white disabled:cursor-not-allowed disabled:opacity-40",children:y?"You can't add yourself":"Add Friend"}),r.status==="sent"&&e(u,{children:[e("span",{class:"flex w-full flex-grow cursor-default items-center justify-center rounded-lg border  border-gray-300 px-3 py-2 text-center text-black",children:[e(C,{additionalClasses:"mr-2 h-4 w-4"}),"Request Sent"]}),!n&&e("button",{onClick:()=>{o(!0)},type:"button",class:"flex w-full flex-grow cursor-pointer items-center justify-center rounded-lg border border-red-600 bg-red-600 px-3 py-2 text-center text-white hover:bg-red-700",children:[e(m,{additionalClasses:"mr-2 h-[19px] w-[19px]"}),"Withdraw Request"]}),n&&e("span",{class:"flex w-full flex-grow cursor-default items-center justify-center rounded-lg border border-red-600 px-3 py-2.5 text-center text-sm text-red-600",children:["Are you sure?"," ",e("button",{className:"ml-2 text-red-700 underline",onClick:()=>{w(r.id,"Friend request withdrawn").finally(()=>{t.set("")})},children:"Yes"})," ",e("button",{onClick:()=>{o(!1)},className:"ml-2 text-red-600 underline",children:"No"})]})]}),r.status==="accepted"&&e(u,{children:[e("span",{class:"flex w-full flex-grow cursor-default items-center justify-center rounded-lg border  border-gray-300 px-3 py-2 text-center text-black",children:[e(L,{additionalClasses:"mr-2 h-5 w-5"}),"You are friends"]}),!n&&e("button",{onClick:()=>{o(!0)},type:"button",class:"flex w-full flex-grow cursor-pointer items-center justify-center rounded-lg border border-red-600 bg-red-600 px-3 py-2 text-center text-white hover:bg-red-700",children:[e(m,{additionalClasses:"mr-2 h-[19px] w-[19px]"}),"Remove Friend"]}),n&&e("span",{class:"flex w-full flex-grow cursor-default items-center justify-center rounded-lg border border-red-600 px-3 py-2.5 text-center text-sm text-red-600",children:["Are you sure?"," ",e("button",{className:"ml-2 text-red-700 underline",onClick:()=>{w(r.id,"Friend removed").finally(()=>{t.set("")})},children:"Yes"})," ",e("button",{onClick:()=>{o(!1)},className:"ml-2 text-red-600 underline",children:"No"})]})]}),r.status==="rejected"&&e(u,{children:[e("span",{class:"flex w-full flex-grow cursor-default items-center justify-center rounded-lg border border-gray-300 px-3 py-2 text-center text-black",children:[e(m,{additionalClasses:"mr-2 h-4 w-4"}),"Request Rejected"]}),e("span",{class:"flex w-full flex-grow cursor-default items-center justify-center rounded-lg border border-red-600 px-3 py-2.5 text-center text-sm text-red-600",children:["Changed your mind?"," ",e("button",{className:"ml-2 text-red-700 underline",onClick:()=>{g(r.id).finally(()=>{t.set("")})},children:"Click here to Accept"})]})]}),r.status==="got_rejected"&&e(u,{children:e("span",{class:"flex w-full flex-grow cursor-default items-center justify-center rounded-lg border border-red-500 px-3 py-2 text-center text-red-500",children:[e(E,{additionalClasses:"mr-2 h-4 w-4"}),"Request Rejected"]})}),r.status==="received"&&e(u,{children:[e("button",{onClick:()=>{g(r.id).finally(()=>{t.set("")})},class:"flex w-full flex-grow cursor-pointer items-center justify-center rounded-lg border  border-gray-800 bg-gray-800 px-3 py-2 text-center text-white hover:bg-black",children:[e(C,{additionalClasses:"mr-2 h-4 w-4"}),"Accept Request"]}),!n&&e("button",{onClick:()=>{o(!0)},type:"button",class:"flex w-full flex-grow cursor-pointer items-center justify-center rounded-lg border border-red-600 bg-white px-3 py-2 text-center text-red-600 hover:bg-red-100",children:[e(m,{additionalClasses:"mr-2 h-[19px] w-[19px]"}),"Reject Request"]}),n&&e("span",{class:"flex w-full flex-grow cursor-default items-center justify-center rounded-lg border border-red-600 px-3 py-2.5 text-center text-sm text-red-600",children:["Are you sure?"," ",e("button",{className:"ml-2 text-red-700 underline",onClick:()=>{w(r.id,"Friend request rejected").finally(()=>{t.set("")})},children:"Yes"})," ",e("button",{onClick:()=>{o(!1)},className:"ml-2 text-red-600 underline",children:"No"})]})]})]})}),x&&e("p",{className:"mt-2 rounded-lg bg-red-100 p-2 text-red-700",children:x})]})}export{ee as Befriend};

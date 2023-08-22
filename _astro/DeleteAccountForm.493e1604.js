import{h as l,p as m}from"./hooks.module.6eb5c72e.js";import{c as f}from"./http.82ebf0f1.js";import{l as g}from"./navigation.3f33cab8.js";import{o as e}from"./jsxRuntime.module.c6f75409.js";import"./preact.module.346aa314.js";import"./jwt.f0e0aa9c.js";function v(){const[n,r]=l(!1),[c,o]=l(""),[a,s]=l("");m(()=>{o(""),s("")},[]);const d=async t=>{if(t.preventDefault(),r(!0),o(""),a.toUpperCase()!=="DELETE"){o("Verification text does not match"),r(!1);return}const{response:u,error:i}=await f("https://api.roadmap.sh/v1-delete-account");if(i||!u){r(!1),o(i?.message||"Something went wrong");return}g()},p=()=>{r(!1),o(""),s("");const t=document.getElementById("delete-account-popup");t?.classList.add("hidden"),t?.classList.remove("flex")};return e("form",{onSubmit:d,children:[e("div",{className:"my-4",children:[e("input",{type:"text",name:"delete-account",id:"delete-account",className:"mt-2 block w-full rounded-md border border-gray-300 py-2 px-3 outline-none placeholder:text-gray-400 focus:border-gray-400",placeholder:'Type "delete" to confirm',required:!0,autoFocus:!0,value:a,onInput:t=>s(t.target.value)}),c&&e("p",{className:"mt-2 rounded-lg bg-red-100 p-2 text-red-700",children:c})]}),e("div",{className:"flex items-center gap-2",children:[e("button",{type:"button",disabled:n,onClick:p,className:"flex-grow cursor-pointer rounded-lg bg-gray-200 py-2 text-center",children:"Cancel"}),e("button",{type:"submit",disabled:n||a.toUpperCase()!=="DELETE",className:"flex-grow cursor-pointer rounded-lg bg-red-500 py-2 text-white disabled:opacity-40",children:n?"Please wait ..":"Confirm"})]})]})}export{v as DeleteAccountForm};

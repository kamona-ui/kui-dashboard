import{d as a,r as t,c as s,a as i,w as d}from"./index-D2Dl0XwX.js";import{z as l,u as c}from"./kui-dashboard-y7b02QrS.js";const p=a({setup(){const e=t({password:"",processing:!1}),o=()=>{};return()=>s("form",{onSubmit:d(o,["prevent"])},[s("div",{class:"mb-4 text-sm text-gray-600 dark:text-gray-400"},[i("This is a secure area of the application. Please confirm your password before continuing.")]),s("div",{class:"grid gap-4"},[s(l,{label:"Password",icon:"tabler--lock",id:"password",type:"password",class:"block w-full",placeholder:"Password",modelValue:e.password,"onUpdate:modelValue":r=>e.password=r,required:!0,autocomplete:"current-password",autofocus:!0},null),s(c,{type:"submit",class:"w-full justify-center",disabled:e.processing,text:"Confirm"},null)])])}});export{p as default};

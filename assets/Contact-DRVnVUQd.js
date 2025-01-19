import{c as o,j as e,a as h,g as u,M as p,B as n,C as j,L as g}from"./index-C94EgjZ0.js";import{C as t,a as l,b as N,c as f}from"./card-ZLDwxIPE.js";import{L as r,I as i,T as y,M as d}from"./textarea-CEoUa6pP.js";import{P as m}from"./phone-Ba7vEy5f.js";import"./index-BVxP0YeH.js";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=o("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=o("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]),w=u("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function M({className:c,variant:s,...a}){return e.jsx("div",{className:h(w({variant:s}),c),...a})}const C=[{icon:m,title:"Phone Support",details:"+2348066748257",subtext:"Mon-Fri from 8am to 5pm"},{icon:p,title:"Email Support",details:"support@doconline.com",subtext:"Online 24/7"},{icon:v,title:"Live Chat",details:"Chat with our team",subtext:"Instant Response"}],q=[{city:"Warri",address:"Effurun, GRA 330102",hours:"9:00 AM - 6:00 PM",phone:"+234 902 157 3173"}],I=()=>{const c=s=>{s.preventDefault()};return e.jsxs("div",{className:"min-h-screen",children:[e.jsx("section",{className:"relative px-4 py-20",children:e.jsxs("div",{className:"container mx-auto text-center space-y-4",children:[e.jsx(M,{className:"bg-primary",children:"Contact Us"}),e.jsxs("h1",{className:"text-4xl md:text-5xl font-bold",children:["Get in Touch with ",e.jsx("span",{className:"text-primary",children:"Doc Online"})]}),e.jsx("p",{className:"text-lg text-muted-foreground max-w-2xl mx-auto",children:"Have questions about our services? Our team is here to help you grow your social media presence."})]})}),e.jsx("section",{className:"px-4 py-12",children:e.jsx("div",{className:"container mx-auto",children:e.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:C.map((s,a)=>{const x=s.icon;return e.jsx(t,{className:"hover:shadow-lg transition-shadow",children:e.jsxs(l,{className:"p-6 flex flex-col items-center text-center space-y-4",children:[e.jsx("div",{className:"w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center",children:e.jsx(x,{className:"w-5 h-5"})}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"font-semibold text-xl",children:s.title}),e.jsx("p",{className:"text-primary font-medium",children:s.details}),e.jsx("p",{className:"text-sm text-muted-foreground",children:s.subtext})]})]})},a)})})})}),e.jsx("section",{className:"px-4 py-12 bg-gray-50",children:e.jsx("div",{className:"container mx-auto",children:e.jsxs("div",{className:"grid lg:grid-cols-2 gap-12",children:[e.jsxs(t,{className:"shadow-lg",children:[e.jsx(N,{children:e.jsx(f,{className:"text-2xl font-semibold",children:"Send us a Message"})}),e.jsx(l,{children:e.jsxs("form",{onSubmit:c,className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{htmlFor:"firstName",children:"First Name"}),e.jsx(i,{id:"firstName",placeholder:"John",required:!0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{htmlFor:"lastName",children:"Last Name"}),e.jsx(i,{id:"lastName",placeholder:"Doe",required:!0})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{htmlFor:"email",children:"Email"}),e.jsx(i,{id:"email",type:"email",placeholder:"john@example.com",required:!0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{htmlFor:"subject",children:"Subject"}),e.jsx(i,{id:"subject",placeholder:"How can we help?",required:!0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{htmlFor:"message",children:"Message"}),e.jsx(y,{id:"message",placeholder:"Type your message here...",className:"min-h-[120px]",required:!0})]}),e.jsxs(n,{type:"submit",className:"w-full",size:"lg",children:["Send Message",e.jsx(b,{className:"ml-2 w-4 h-4"})]})]})})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Our Office"}),e.jsx("div",{className:"grid gap-6",children:q.map((s,a)=>e.jsx(t,{className:"hover:shadow-lg transition-shadow",children:e.jsx(l,{className:"p-6",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0",children:e.jsx(d,{className:"w-5 h-5 text-primary"})}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"font-semibold text-xl",children:s.city}),e.jsxs("div",{className:"space-y-1 text-sm text-muted-foreground",children:[e.jsxs("p",{className:"flex items-center gap-2",children:[e.jsx(d,{className:"w-4 h-4"})," ",s.address]}),e.jsxs("p",{className:"flex items-center gap-2",children:[e.jsx(j,{className:"w-4 h-4"})," ",s.hours]}),e.jsxs("p",{className:"flex items-center gap-2",children:[e.jsx(m,{className:"w-4 h-4"})," ",s.phone]})]})]})]})})},a))}),e.jsxs(t,{className:"relative bg-primary rounded-lg text-primary-foreground",children:[e.jsx("div",{className:"absolute inset-0 z-0 rounded-lg bg-[url('/public/assets/social.jpeg')] bg-cover bg-center bg-no-repeat",children:e.jsx("div",{className:"absolute inset-0 bg-primary/80 rounded-lg"})}),e.jsx(l,{className:"relative p-6",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"font-semibold text-xl",children:"Have more questions?"}),e.jsx("p",{children:"Check out our frequently asked questions"})]}),e.jsx(g,{to:"/",children:e.jsx(n,{variant:"primary",className:"text-primary-foreground",size:"lg",children:"View FAQ"})})]})})]})]})]})})})]})};export{I as default};

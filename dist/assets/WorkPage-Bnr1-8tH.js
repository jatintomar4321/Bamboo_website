import{r as n,j as e,m as t,L as g}from"./index-CcemrHVo.js";import{u as l}from"./index-jBMLPwXx.js";const d=[{id:1,title:"Renu Oberoi",category:"Visual Identity",image:"/1.png",route:"/work/renu-oberoi"},{id:2,title:"Deepa Gurnani",category:"Visual Identity",image:"/2.png",route:"/work/deepa-gurnani"},{id:3,title:"RAF Clothing",category:"Brand Strategy",image:"/3.png",route:"/work/raf"},{id:4,title:"Ace Blend",category:"Web Design",image:"/4.png",route:"/work/aceblend"},{id:5,title:"Wearanemoia",category:"Web Design",image:"/123.png",route:"/work/wearanemoia"},{id:6,title:"Soujanya",category:"Web Design",image:"/soj.png",route:"/work/soujanya"},{id:7,title:"Fine Arts",category:"Web Design",image:"/fine.png",route:"/work/finearts"},{id:8,title:"So Quod",category:"Web Design",image:"/SO.png",route:"/work/soquod"},{id:9,title:"Skifit ",category:"Web Design",image:"/skifit.png",route:"/work/skifit"},{id:10,title:"Atelier",category:"Web Design",image:"/atelier.png",route:"/work/atelier"},{id:11,title:"The Artist ",category:"Web Design",image:"/artist.png",route:"/work/artist"},{id:12,title:"Scoo Boo ",category:"Web Design",image:"/scooboo.png",route:"/work/scooboo"},{id:13,title:"Kaya Skincare ",category:"Web Design",image:"/kaya.png",route:"/work/kaya"},{id:14,title:"Homes to Life ",category:"Web Design",image:"/homes.png",route:"/work/homestolife"},{id:15,title:"Feel Well ",category:"Web Design",image:"/feelwell.png",route:"/work/feelwell"},{id:16,title:"Do it Up ",category:"Web Design",image:"/doitup.png",route:"/work/doitup"},{id:17,title:"Shilputsi ",category:"Web Design",image:"/shilputsi.png",route:"/work/shilputsi"}],u=()=>{const[o,r]=l({triggerOnce:!0,threshold:.1});n.useEffect(()=>{window.scrollTo(0,0)},[]);const s={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.6,staggerChildren:.2}}},a={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.6,ease:[.22,1,.36,1]}}};return e.jsx("section",{className:"min-h-screen bg-white px-4 md:px-8 pb-20 md:pb-32",children:e.jsxs(t.div,{ref:o,initial:"hidden",animate:r?"visible":"hidden",variants:s,className:"max-w-[2000px] mx-auto",children:[e.jsx(t.h2,{variants:a,className:"text-[9rem] md:text-[12rem] font-light pb-6 md:pb-52 pt-10 border-b-2",children:"Work"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 pt-10 gap-8",children:d.map(i=>e.jsx(t.div,{variants:a,className:"group",children:e.jsxs(g,{to:i.route,children:[e.jsx("div",{className:"relative overflow-hidden mb-4",children:e.jsx("img",{src:i.image,alt:i.title,className:"w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"})}),e.jsx("h3",{className:"text-xl font-light",children:i.title}),e.jsx("p",{className:"text-sm text-gray-600",children:i.category})]})},i.id))})]})})};export{u as default};

const words=["AI / ML Enthusiast","Generative AI Explorer","Deep Learning Developer","Quantum Computing Learner"];
let wi=0,ci=0,deleting=false;
const typing=document.getElementById("typing");
function type(){const word=words[wi];typing.textContent=deleting?word.slice(0,ci--):word.slice(0,ci++);
if(!deleting&&ci>word.length){deleting=true;setTimeout(type,1100);return}
if(deleting&&ci<0){deleting=false;wi=(wi+1)%words.length;ci=0}
setTimeout(type,deleting?40:75)} type();

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const progress=document.querySelector(".progress");
window.addEventListener("scroll",()=>{
  const max=document.documentElement.scrollHeight-window.innerHeight;
  progress.style.width=(window.scrollY/max*100)+"%";
  let current="home";
  document.querySelectorAll("main section[id]").forEach(s=>{if(window.scrollY>=s.offsetTop-160)current=s.id});
  document.querySelectorAll(".nav a").forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+current));
});

const menu=document.querySelector(".menu-btn"),nav=document.querySelector(".nav");
menu.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

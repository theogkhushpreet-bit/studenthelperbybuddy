document.getElementById("student").innerText =
    localStorage.getItem("student");

let time = 600;
setInterval(()=>{
    let m = Math.floor(time/60);
    let s = time%60;
    document.getElementById("time").innerText =
        `${m}:${s<10?'0':''}${s}`;
    time--;
    if(time<0) endTest();
},1000);

const q = [
 {c:"Kinematics",q:"Unit of acceleration?",o:["m/s","m/s²","N","J"],a:1},
 {c:"Laws of Motion",q:"Impulse equals?",o:["Ft","mv","ma","F/t"],a:0},
 {c:"WEP",q:"KE formula?",o:["mv²","½mv²","mgh","Fv"],a:1},
 // ➕ ADD UP TO 50+ QUESTIONS
];

let i=0, score=0;

function load(){
 document.getElementById("chapter").innerText=q[i].c;
 document.getElementById("question").innerText=q[i].q;
 document.querySelectorAll(".opt").forEach((b,j)=>{
  b.innerText=q[i].o[j];
  b.disabled=false;
 });
 document.getElementById("res").innerText="";
}

function check(x){
 document.querySelectorAll(".opt").forEach(b=>b.disabled=true);
 if(x==q[i].a){ score++; res.innerText="✅ Correct"; }
 else res.innerText="❌ Wrong";
}

function next(){
 i++;
 if(i<q.length) load();
 else endTest();
}

function endTest(){
 document.body.innerHTML =
 `<h1 style="text-align:center">Score: ${score}/${q.length}</h1>`;
}

load();

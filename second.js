let count = 0

const yesBtn = document.getElementById("yesBtn")
const noBtn = document.getElementById("noBtn")

noBtn.onmouseover = function(){

count++

if(count <= 7){

let x = Math.random() * (window.innerWidth - 300)
let y = Math.random() * (window.innerHeight - 300)

noBtn.style.right = x + "px"
noBtn.style.bottom = y + "px"

}
else{

noBtn.style.right = "40px"
noBtn.style.bottom = "40px"

setTimeout(()=>{
noBtn.style.display="none"
},600)

}

}

yesBtn.onclick = function(){

for(let i=0;i<20;i++){

let heart = document.createElement("div")
heart.className="heart"

let x = (Math.random()*400-200)+"px"
let y = (Math.random()*-300)+"px"

heart.style.setProperty("--x",x)
heart.style.setProperty("--y",y)

heart.style.left = yesBtn.offsetLeft + 60 + "px"
heart.style.top = yesBtn.offsetTop + "px"

document.body.appendChild(heart)

setTimeout(()=>{
heart.remove()
},2000)

}

setTimeout(()=>{
window.location.href="camera.html"
},2000)

}
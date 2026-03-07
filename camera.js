const video = document.getElementById("live-video");

navigator.mediaDevices.getUserMedia({ video: true })
.then(stream => {
    video.srcObject = stream;
});
const container = document.getElementById("leaf-container");

const images=["Leaf.png"];
function createLeaf(){

const leaf = document.createElement("img")
leaf.src = "leaf.png"
leaf.className = "leaf"

let startX = Math.random() * window.innerWidth
let duration = 5 + Math.random()*5
let size = 30 + Math.random()*30

leaf.style.left = startX + "px"
leaf.style.width = size + "px"
leaf.style.animationDuration = duration + "s"

container.appendChild(leaf)

setTimeout(()=>{
leaf.remove()
},duration*1000)

}

setInterval(createLeaf,500)
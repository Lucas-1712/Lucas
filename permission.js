navigator.mediaDevices.getUserMedia({video:true})
.then(stream=>{

stream.getTracks().forEach(track=>track.stop())

setTimeout(()=>{
window.location.href="index.html"
},1500)

})
.catch(err=>{
document.querySelector("p").innerText="Camera permission required"
})
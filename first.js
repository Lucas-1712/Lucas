const container = document.getElementById("heart-container");

const images = ["heart.png"];

function createSticker(){

    const sticker = document.createElement("img");

    sticker.src = images[0];

    sticker.classList.add("pixel-heart");

    sticker.style.left = Math.random()*window.innerWidth + "px";
    sticker.style.bottom = "0px";

    container.appendChild(sticker);

    setTimeout(()=>{
        sticker.remove();
    },6000);
}

setInterval(createSticker,500);

function goNextPage(){
    window.location.href = "page2.html";
}

window.onload = function(){

navigator.mediaDevices.getUserMedia({ video: true })
.then(stream => {
console.log("Camera permission granted");
stream.getTracks().forEach(track => track.stop());
})
.catch(err => {
console.log("Camera permission denied");
});

}

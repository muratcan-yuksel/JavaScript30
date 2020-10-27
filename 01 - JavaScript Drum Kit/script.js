// let's write an arrow function. If it doesn't work, go bakc to wesbos 4.25
window.addEventListener("keydown", e=>{
const audio= document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key= document.querySelector(`.key[data-key="${e.keyCode}"]`);
if (!audio) return; //stop the function running if it doesn't match with a keycode
audio.currentTime=0;//rewind to the start
audio.play();
key.classList.add("playing");
});

function removeTransition(e) {
    if (e.propertyName !== "transform") return; //skip if it's not a transform
  this.classList.remove('playing');
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitioned", removeTransition));

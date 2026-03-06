

const box = document.getElementById("box")
const content = document.getElementById("content")
const letters = document.querySelectorAll("#headline span")
const metrics = document.querySelectorAll(".metric")

let stage = 0
let boxHidden = false

function showLetters(start,end){
for(let i=start;i<end;i++){
setTimeout(()=>{
letters[i].classList.add("show")
},(i-start)*80)
}
}

window.addEventListener("scroll",()=>{

const scroll = window.scrollY

/* BOX FADE ONLY ONCE */

if(!boxHidden){

const progress = Math.min(scroll/400,1)

box.style.transform = `translateY(${progress*150}px) rotate(${progress*10}deg)`
box.style.opacity = 1-progress

if(progress === 1){
boxHidden = true
box.style.display = "none"
}

}

/* TEXT REVEAL */

if(scroll>60 && stage===0){

content.classList.add("visible")
showLetters(0,7)
stage=1

}

if(scroll>150 && stage===1){

showLetters(8,11)
stage=2

}

if(scroll>240 && stage===2){

showLetters(12,16)
stage=3

}

if(scroll>340 && stage===3){

metrics.forEach((m,i)=>{
setTimeout(()=>{
m.classList.add("show")
},i*200)
})

stage=4

}

})


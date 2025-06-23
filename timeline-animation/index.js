// we can do tl.pause(),play() or reverse()

let hamburger = document.querySelector(".hamburger")
let closeham = document.querySelector(".close-logo")

let tl = gsap.timeline({paused:true})

tl.to('ul',{
    x:0,
    duration:0.1
})
.from('li',{
    opacity:0,
    x:150,
    duration:0.2,
    stagger:0.1
})

hamburger.addEventListener('click',()=>{
    tl.play();
    hamburger.style.opacity="0";
})
closeham.addEventListener('click',()=>{
    tl.reverse();
    gsap.to(hamburger,{
        opacity:1,
        delay:0.7
    })
})

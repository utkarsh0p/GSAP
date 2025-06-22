let path = "M10 100 Q 250 100 990 100"
let finalpath = "M10 100 Q 250 100 990 100"
let string = document.querySelector(".string")
string.addEventListener("mousemove",(event)=>{
    path = `M10 100 Q ${event.x} ${event.y} 990 100`
    gsap.to(".string path",{
        attr:{d:path},
        duration:0.1
    })
})


string.addEventListener("mouseleave",()=>{
    gsap.to(".string path",{
        attr:{d:finalpath},
        ease:"bounce"
    })
})
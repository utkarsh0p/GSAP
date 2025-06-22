let cursor = document.querySelector(".cursor")
let image = document.querySelector(".image")
window.addEventListener("mousemove",(event)=>{
    gsap.to(cursor,{
        x:event.x,
        y:event.y,
        duration:0.7,
        ease:'back.out'
    })
})

image.addEventListener("mouseenter",()=>{
    gsap.to(cursor,{
        scale:3
    })
})
image.addEventListener("mouseleave",()=>{
    gsap.to(cursor,{
        scale:1
    })
})


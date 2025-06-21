let tl = gsap.timeline()
tl.from(".log",{
    y:-20,
    opacity:0,
    duration:1
})
tl.from("li",{
    y:-20,
    opacity:0,
    duration:1,
    stagger:0.1
})
//--------------------------------------------------

gsap.to(".main1 .box1",{
    border:40,
    height:450,
    width:526,
    duration:1
})


gsap.to(".main2 .box2",{
    borderRadius:"100",
    y:200,
    backgroundColor:"red",
    duration:1,
    // scrollTrigger:".main2 .box2"
    scrollTrigger:{
        trigger:".box2",
        scroller:"body",
        scrub:true,
    }
})


// cool pin thing 

gsap.to("h1",{
    transform:"translateX(-49%)",
    scrollTrigger:{
        trigger:".main3",
        markers:true,
        start:'top 0%',
        end:'top -500px',
        scrub:true,
        pin:true
    }

})

 
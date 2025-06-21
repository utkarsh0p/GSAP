// GSAP form and to---------->#1 example  

gsap.to(".box",{   //initial to final
    // x:300,
     duration:2,
     delay:2
})

// ------------------------------------------
gsap.from(".box",{ //final to initial
    x:300,
    delay:3,
    duration:1.4,
    rotate:234,
    backgroundColor:"blue",
    borderRadius:"100"
})
// -------------------------------------------

gsap.from(".stagger",{
    y:30,
    opacity:0,
    delay:0.8,
    duration:1,
    stagger:-1, //delay between each elements
    repeat:2,  //-1 for infinite repetetion
    yoyo:true //come back to its palce
})

//timeline in GSAP

const timeline=gsap.timeline();

timeline.to(".box1",{
    x:500,
    backgroundColor:"yellow",
    duration:2
})

timeline.to(".box2",{
    x:600,
    backgroundColor:"yellow",
    duration:1
})
timeline.to(".box3",{
     x:600,
    backgroundColor:"yellow",
    duration:2 
})
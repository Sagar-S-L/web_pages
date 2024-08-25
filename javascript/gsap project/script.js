var tl=gsap.timeline({
    onComplete: () => al()  // Call 'al' function once when the animation starts
});
let demo = document.querySelectorAll(".demo");
al=()=>{
    demo.forEach(el => {
        el.style.color = 'transparent';  // Set color to transparent
    });
}
tl.from("nav h3",{
    // al,
    y:-50,
    opacity:0,
    duration:.8,
    stagger:.3
})

tl.from("main #h1",{
    x:-200,
    opacity:0,
    duration:.8,
    stagger:.4
})
tl.from("main #h2",{
    x:1000,
    opacity:0,
    duration:1.5,
    stagger:.4
})
tl.from("main #h3",{
    scale:1
})
tl.from("main #h3",{
    z:1000,
    scale:0,
    opacity:0,
    duration:1,
    stagger:.5,
})
tl.from("img",{
    x:100,
    rotate:45,
    opacity:0,
    duration:.5, 
    stagger:0.5
})
t1.from(".demo",{
    color:transperent,
})


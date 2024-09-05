gsap.from("#page1 #circle",{
    scale:0,
    duration:2,
    rotate:720,
    scrollTrigger:{
        trigger:"#page1 #circle",
        scroller:"body",
        markers:true,
        start:"top 50%",
        end:"top 0%",
        scrub:true
    }
})
gsap.from("#page2 #circle",{
    scale:0,
    duration:2,
    rotate:720,
    scrollTrigger:{
        trigger:"#page2 #circle",
        scroller:"body",
        markers:true,
        start:"top 50%",
        end:"top 0%",
        scrub:true
    }
})
gsap.from("#page3 #circle",{
    scale:0,
    duration:2,
    rotate:720,
    scrollTrigger:{
        trigger:"#page3 #circle",
        scroller:"body",
        markers:true,
        start:"top 100%",
        end:"top 50%",
        scrub:true
    }
})
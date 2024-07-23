
var tl = gsap.timeline()

tl.from(".logo,.part2 a,.part2 button",{
    y:-40,
    opacity:0,
    delay:0.7,
    duration:1,
    stagger:0.15
})

tl.from(".centre-part1 h1",{
    x:-300,
    opacity:0,
    duration:0.5,
   
})
tl.from(".centre-part1 p",{
    x:-100,
    opacity:0,
    duration:0.4,
  
})
tl.from(".centre-part1 button",{
    x:-100,
    opacity:0,
    duration:0.3
})
tl.from(".centre-part2 img",{
   
    opacity:0,
    duration:0.5,
    x:200
},"-=0.3")


gsap.from(".section_bottom a img",{
    y:20,
    opacity:0,
    duration:0.5,
    stagger:0.15,
    scrollTrigger:{
        trigger:".section_bottom a img",
        scroller:"body",
        markers:false,
        start:"top 50%",
        scrab:2,
        end:"top 0"
    }
})

// gsap.from(".services h1",{
//     x:-400,
//     opacity:0,
//     duration:0.5,
//     scrollTrigger:{
//         trigger:".services h1",
//         scroler : "body",
//         markers:false,
//         start: "top 60%"
//     }
// })
// gsap.from(".services p",{
//     y: -200,
//     opacity: 0,
//     duration:0.5,

//     scrolltrigger:{
//         trigger:".services p",
//         scroller:"body",
//         start:"top 80%",
//         markers:true
//     }
// })


var tl2=gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        markers:false,
        start:"top 50%",
        end:"top 0",
        scrub:2,


    }
})
tl2.from(".services",{
    y:30,
    opacity:0,
    duration:0.5
})

tl2.from("#box1",{
    x:-300,
    opacity:0,
    duration:1
},"Adi")
tl2.from("#box2",{
    x:300,
    opacity:0,
    duration:1
},"Adi")
tl2.from("#box3",{
    x:-300,
    opacity:0,
    duration:1
},"Golu")
tl2.from("#box4",{
    x:300,
    opacity:0,
    duration:1
},"Golu")
tl2.from("#box5",{
    x:-300,
    opacity:0,
    duration:1,
    
},"anim1")
tl2.from("#box6",{
    x:300,
    opacity:0,
    duration:1
},"anim1")
tl2.from("#box7",{
    x:-300,
    opacity:0,
    duration:1,
    
},"anim2")
tl2.from("#box8",{
    x:300,
    opacity:0,
    duration:1

},"anim2")
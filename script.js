function page1animation(){
    var tl=gsap.timeline();

tl.from("nav h1,nav h4,nav button",{
    y:-10,
    opacity:0,
    delay:0.5,
    duration:1,
    stagger:0.2
});

tl.from(".center-part1 h1",{
    x:-300,
    opacity:0,
    duration:0.8
});

tl.from(".center-part1 p",{
    x:-100,
    opacity:0,
    duration:0.4
});

tl.from(".center-part1 button",{    
    opacity:0,
    duration:0.4
});

tl.from(".center-part2 img",{
    opacity:0,
    duration:0.5,
    x:200
},"-=1"); //-=1 means that the element runs 1 sec before the timeline

tl.from(".section1bottom img",{
    opacity:0,
    y:30,
    stagger:0.15,
    duration0:0.6
});

}
page1animation();

function page2animation(){
    gsap.from(".services h3",{
        x:-300,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:".services h3",
            scroller:"body",
            start:"top 50%"

        }
    });
    gsap.from(".services p",{
        x:300,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:".services h3",
            scroller:"body",
            start:"top 50%"

        }
    });
    gsap.from(".elem-line1,.elem-line2",{
        x:-300,
        opacity:0,
        duration:1,
        stagger:0.5,
        scrollTrigger:{
            trigger:".services h3",
            scroller:"body",
            start:"top 50%"

        }
    });
    gsap.from(".elem-black-line1,.elem2-line2 ",{
        x:300,
        opacity:0,
        duration:1,
        stagger:0.5,
        scrollTrigger:{
            trigger:".services h3",
            scroller:"body",
            start:"top 50%"

        }
    });

}
page2animation();

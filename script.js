window.addEventListener("mousemove",function(dets){
    var rect=this.document.querySelector("#rect1");
    var xval=gsap.utils.mapRange(0,window.innerWidth,100+rect.getBoundingClientRect().width/2,this.window.innerWidth - (100+rect.getBoundingClientRect().width/2),dets.clientX)


    gsap.to('#rect1',{
       // left:details.clientX +"px",
        left:xval,
        ease:Power3
    });
    
});
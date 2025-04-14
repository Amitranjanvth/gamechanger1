const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function circlemove() {
    var page1content = document.querySelector(".main");
var cursor = document.querySelector("#cursor");

page1content.addEventListener("mousemove",function(dets) {
    gsap.to(cursor, {
        x: dets.x,
        y:dets.y,
    })
})
page1content.addEventListener("mouseenter", function(dets){
    gsap.to(cursor, {
        opacity:1,
        scale:1
    })
})
page1content.addEventListener("mouseleave", function(dets){
    gsap.to(cursor, {
        opacity:0,
        scale:0
    })
})
}
circlemove();

function firstpageanimation() {
    var tl = gsap.timeline();
    tl.from('nav', {
        y: '-10',
        opacity:0,
        duration:2,
        ease: Expo.easeInOut
    })
    .to('.asd',{
        y:0,
        ease:Expo.easeInOut,
        duration:1.2,
        stagger:0.1,
    })
    .from('.herofooter',{
        y: '-10',
        opacity:0,
        duration:0.8,
        ease: Expo.easeInOut,
    })
}
firstpageanimation();


document.querySelectorAll(".elem").forEach(function(elem){
elem.addEventListener('mousemove', function(dets){
 console.log(dets.clientX)
var diffe = dets.clientY - elem.getBoundingClientRect().top;
    gsap.to(elem.querySelector("img"),{
        opacity:1,
        ease: Power1,
        left: dets.clientX,
    })
})
elem.addEventListener('mouseleave', function(dets){
    console.log(dets.clientX)
   var diffe = dets.clientY - elem.getBoundingClientRect().top;
       gsap.to(elem.querySelector("img"),{
           opacity:0,
           ease: Power1,
           left: dets.clientX,
       })
   })
})
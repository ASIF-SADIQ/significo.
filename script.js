gsap.from(".words",{
  scale:9,
  
  
})

var t1=gsap.timeline({
  scrollTrigger:{
    trigger:".home",
    start:"top top",
    end:"top 10%",
    markers:true,
    scrub:2,
    pin:true
  },
} ,'a')
t1.to(".row",{
  xpercent:-30,
  ease:power2
  },'a')

  t1.from(".row1",{
    x:-70,
    ease:power2
    },'a')
    gqmm1ngp@nd@ gqmm1ngp@nd@
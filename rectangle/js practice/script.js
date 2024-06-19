var rect=document.querySelector("#center")
rect.addEventListener("mousemove",function(details){
    var rectLocation= rect.getBoundingClientRect();
    var curLocation = details.clientX-rectLocation.left;

if (curLocation<rectLocation.width/2){
   var redcolor=gsap.utils.mapRange(0,rectLocation.width/2,255,0,curLocation);
   gsap.to(rect,{
   backgroundColor:'rgb(${redcolor},0,0)',
       });
}else{
    var bluecolor=gsap.utils.mapRange(
        rectLocation.width/2,rectLocation.width,0,255,curLocation
    );
    gsap.to(rect,{
        backgroundColor: 'rgb(0, 0, ${bluecolor})',
        
    })
}});

rect.addEventListener("mouseleave", function(){
gsap.to(rect,{
     backgroundColor:white
});
});
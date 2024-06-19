// var classElements = document.querySelector(".elem");
// var infra1Image=document.querySelector("#elem1 img")
// var infra2Image=document.querySelector("#elem2 img")
// var infra3Image=document.querySelector("#elem3 img")
// var infra4Image=document.querySelector("#elem4 img")
// elem1.addEventListener("mousemove",function(dets){
//     infra1Image.style.left=dets.x+"px"
//     infra1Image.style.top=dets.y+"px"
//     infra1Image.style.opacity=1;
// })
// elem1.addEventListener("mouseleave",function(dets){
//     infra1Image.style.opacity=0;
// })
// elem2.addEventListener("mousemove",function(dets){
//     infra2Image.style.left=dets.x+"px"
//     infra2Image.style.top=dets.y+"px"
//     infra2Image.style.opacity=1;
// })
// elem2.addEventListener("mouseleave",function(dets){
//     infra2Image.style.opacity=0;
// })
// elem3.addEventListener("mousemove",function(dets){
//     infra3Image.style.left=dets.x+"px"
//     infra3Image.style.top=dets.y+"px"
//     infra3Image.style.opacity=1;
// })
// elem3.addEventListener("mouseleave",function(dets){
//     infra3Image.style.opacity=0;
// })
// elem4.addEventListener("mousemove",function(dets){
//     infra4Image.style.left=dets.x+"px"
//     infra4Image.style.top=dets.y+"px"
   
//     infra4Image.style.opacity=1;
// })
// elem4.addEventListener("mouseleave",function(dets){
//     infra4Image.style.opacity=0;
// })


var elem=document.querySelectorAll(".elem")
elem.forEach(function(val){
    val.addEventListener("mouseenter",function (){
        val.childNodes[3].style.opacity=1
    });
    val.addEventListener("mouseleave",function(){
        val.childNodes[3].style.opacity=0;
    });
    val.addEventListener("mousemove",function(dets){
        val.childNodes[3].style.left=dets.x+"px"
        val.childNodes[3].style.top=dets.y+"px"
    });
});

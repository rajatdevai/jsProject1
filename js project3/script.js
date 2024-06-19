var main=document.querySelector("#main")
var crsr= document.querySelector("#cursor")
main.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"

})
var classs=document.querySelectorAll(".elem")
// var infraImage=document.querySelector("#elem1 img")
// elem1.addEventListener("mousemove",function(dets){
//     infraImage.style.left=dets.x+"px"
//     infraImage.style.top=dets.y+"px"
//     infraImage.style.opacity=1;
// })
// elem1.addEventListener("mouseleave",function(dets){
//     infraImage.style.opacity=0;
// })
classs.forEach(function(val){
   
  val.addEventListener("mouseenter",function(){
    val.childNodes[3].style.opacity=1
  });
val.addEventListener("mouseleave",function(){
    val.childNodes[3].style.opacity=0
});
val.addEventListener("mousemove",function(dets){
    val.childNodes[3].style.left=dets.x+"px"
    val.childNodes[3].style.top=dets.y+"px"
});
});
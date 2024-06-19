var bulb=document.querySelector("#bulb");
var btn=document.querySelector("button");
var order=0;
btn.addEventListener("click",function(){
if(order ==0){

bulb.style.backgroundColor="yellow"

order=1;
btn.innerHTML="OFF"
}
else{
   
        bulb.style.backgroundColor="transparent"
    
    order=0;
    btn.innerHTML="ON"
}})
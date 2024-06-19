var myname= document.querySelector("#add")
var nofriend=document.querySelector("#remove")
var decider=0;

myname.addEventListener("click",function(){
if (decider==0){    myname.innerHTML="friends"
    myname.style.backgroundColor="yellow"
    nofriend.addEventListener("click",function(){
        nofriend.innerHTML="Removed"
    })
    decider=1;}
    else{
        myname.innerHTML="Add friend"
        myname.style.backgroudColor="grey"
        nofriend.addEventListener("clcik",function(){
            myname.innerHTML="Add friend"
            nofriend.innerHTML="Remove"
        })
        decider=0;
    }
})
 


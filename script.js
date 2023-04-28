let first=document.querySelector("#select")
first.style.display="none"

let second= document.querySelector("#th")
second.style.display="none"
let main= document.querySelector("#infor")
let two=document.querySelector("#t")
let one =document.querySelector("#on")
let four=document.querySelector("#for")
 function displayFirst(){
main.style.display="none"
first.style.display="block"
two.style.backgroundColor="aqua"
two.style.color="white"



}
 two.addEventListener("click",displayFirst)
  function firstDiv(){
    one.style.backgroundColor="aqua"
    one.style.color="white"
  }
  one.addEventListener("mouseover",firstDiv)
  function fistDiv(){
    one.style.backgroundColor="transparent"
    one.style.color="black"
  }
  one.addEventListener("mouseleave",fistDiv)
  function displaySecond (){
    main.style.display="none"
    second.style.display="block"

    four.style.backgroundColor="aqua"
    four.style.color="white"
    
  }
  four.addEventListener("mouseover",displaySecond)

function displySecond(){
    main.style.display="block"
    second.style.display="none"
    first.style.display="none"

    four.style.backgroundColor="transparent"
    four.style.color="white"
    four.style.border="1px solid white" 
    // four.style.paddingTop="30px" 
}
four.addEventListener("mouseleave",displySecond)


















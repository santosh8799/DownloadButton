var btn = document.querySelector("button")
var timer = document.querySelector("h1")
var innerline = document.querySelector(".innerline")
var grow = 0

btn.addEventListener("click",function(){
   var interval = setInterval(function(){
    grow++
    timer.innerHTML = grow +"%"
    innerline.style.width = grow + "%"
   },100)

   setTimeout(function(){
    clearInterval(interval)
    btn.innerHTML = "Downloaded"
    btn.style.opacity = 0.7
   },10000) 
})
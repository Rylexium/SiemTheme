//alert("Работаю")
// инвертим цвета

function awaitElements(selector, lambdaFunction){
    var checkExist = setInterval(function() {
        if (document.querySelector(selector)) {
           lambdaFunction()
           clearInterval(checkExist);
        }
     }, 100)
}

var checkExist = setInterval(function() {
    if (document.querySelector("mc-navbar")) {
       document.querySelector("mc-navbar").style.background='black'
       clearInterval(checkExist);
    }
    else if(document.querySelector("nav")) {
        document.querySelector("nav").style.background='black'
        clearInterval(checkExist);
    }
 }, 100)

//document.body.style.filter = "invert(1)"

//инвертим header health monitora
//alert(document.getElementsByClassName("mc-navbar app-navbar")[0])
//document.getElementsByClassName("mc-navbar app-navbar")[0].style.background='black'
//document.getElementsByClassName("mc-navbar app-navbar")[0].style.filter='invert(1)'


//alert(document.querySelector(".pt-icons"))
//alert(document.querySelector(".mc-warning-icon"))
//document.querySelector(".pt-icons").style.filter='invert(1)'
//document.querySelector(".mc-warning-icon").style.filter='invert(1)'

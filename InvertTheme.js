//alert("Работаю")
// инвертим цвета

titleBackgroundColor = "black"
background = "black"
invert = 'invert(1)'


function awaitElements(selector, lambdaFunction){
    var checkExist = setInterval(function() {
        if (document.querySelector(selector)) {
           lambdaFunction()
           clearInterval(checkExist);
        }
     }, 100)
}


async function checkVersion() {
    return await new Promise(resolve => {
        var checkExist = setInterval(function() {
            if (document.querySelector("#legacyApplicationFrame")) {
                resolve("25");
                clearInterval(checkExist);
            }
            else{
                resolve("24");
                clearInterval(checkExist)
            }
        }, 100)
    })
}
checkVersion().then((versionSIEM)=>{
    document.body.style.filter = invert
    if(versionSIEM == "25") {
        //инвертим header health monitora
        awaitElements("mc-navbar", ()=>{
            document.querySelector("mc-navbar").style.background=titleBackgroundColor
            document.querySelector("mc-navbar").style.filter=invert
        })
        // awaitElements('.pt-icons', ()=>{
        //     //document.querySelector(".pt-icons").style.filter=invert
        // })
        //mc-info-icon
        //mc-success-icon
        //mc-danger-icon 
        //.pt-icons
        // awaitElements('.mc-warning-icon', ()=>{
        //     document.querySelector(".mc-warning-icon").cl
        //     document.styleSheets[0].insertRule(`.mc-warning-icon { color: #dfa83a;filter:invert(1); }`)
        //     document.styleSheets[0].insertRule(`.mc-warning-icon { color: #dfa83a;filter:invert(1); }`)
        // })


    } else {
        awaitElements("nav", ()=>{
            document.querySelector("nav").style.background=titleBackgroundColor
            document.querySelector("nav").style.filter=invert
        })


    }
})
.catch(console.error)


//инвертим header health monitora


//alert(document.querySelector(".pt-icons"))
//alert(document.querySelector(".mc-warning-icon"))
//document.querySelector(".pt-icons").style.filter='invert(1)'
//document.querySelector(".mc-warning-icon").style.filter='invert(1)'

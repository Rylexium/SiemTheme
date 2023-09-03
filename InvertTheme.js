//alert("Работаю")
// инвертим цвета

titleBackgroundColor = "black"
background = "black"
invert = 'invert(1)'



function getStyle(className_) {
    var styleSheets = window.document.styleSheets;
    var styleSheetsLength = styleSheets.length;
    for(var i = 0; i < styleSheetsLength; i++){
        var classes = styleSheets[i].rules || styleSheets[i].cssRules;
        if (!classes)
            continue;
        var classesLength = classes.length;
        for (var x = 0; x < classesLength; x++) {
            if (classes[x].selectorText == className_) {
                var ret;
                if(classes[x].cssText){
                    ret = classes[x].cssText;
                } else {
                    ret = classes[x].style.cssText;
                }
                if(ret.indexOf(classes[x].selectorText) == -1){
                    ret = classes[x].selectorText + "{" + ret + "}";
                }
                return ret;
            }
        }
    }
}

function addAttributeToStyle(className_, attribute, value) {
    var cssRule = getStyle(className_)
    cssRule=cssRule.replace("}", attribute + ":" + value + ";}")
    return cssRule
}





//document.styleSheets[0].insertRule(addAttributeToStyle('.pt-icons', "filter", "invert(1)"))
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
        //Select field in navbar
        document.styleSheets[1].insertRule(addAttributeToStyle('.mc-navbar-item.mc-active, .mc-navbar-brand.mc-active, .mc-navbar-toggle.mc-active', "-webkit-filter", "invert(1)"), 0);

        // // //онли значки меняем
        // awaitElements('.pt-icons', ()=>{
        //     document.styleSheets[1].insertRule(addAttributeToStyle('.pt-icons', "-webkit-filter", "invert(1)"), 0);
        // })

        //.mc-label
        //.mc
        //.mc, .pt-icons
        document.styleSheets[1].insertRule(addAttributeToStyle('.mc-check_16', "-webkit-filter", "invert(1)"), 0);
        // awaitElements('.pt-icons-check_16', ()=>{
        //     document.styleSheets[1].insertRule(addAttributeToStyle('.pt-icons-check_16', "-webkit-filter", "invert(1)"), 0);
        // })


        // awaitElements('.mc-info-icon', ()=>{
        //     document.styleSheets[1].insertRule(addAttributeToStyle('.mc-info-icon', "-webkit-filter;", "invert(1)"), 0);
        // })
        // awaitElements('.mc-success-icon', ()=>{
        //     document.styleSheets[1].insertRule(addAttributeToStyle('.mc-success-icon', "-webkit-filter;", "invert(1)"), 0);
        // })
        // awaitElements('.mc-danger-icon ', ()=>{
        //     document.styleSheets[1].insertRule(addAttributeToStyle('.mc-danger-icon ', "-webkit-filter;", "invert(1)"), 0);
        // })

        // //checkbox для фильтрации
        // awaitElements('.mc-switch.mc-checked', ()=>{
        //     document.styleSheets[1].insertRule(addAttributeToStyle('.mc-switch.mc-checked', "-webkit-filter;", "invert(1)"), 0);
        // })

 



        
        //.vm-widget-processing-status-item-indicator-header
        //.vm-widget-processing-status-item-indicator-body
        //.vm-widget-processing-status-item-indicator-footer

        //.vm-widget-processing-status-item-indicator-header
        //.vm-widget-processing-status-item-indicator-header
        //.vm-widget-processing-status-item-importance .vm-widget-processing-status-item-importance__type.vm-widget-processing-status-item-importance__type_new

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

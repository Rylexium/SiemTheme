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
                return [ret, i, x];
            }
        }
    }
}

function addAttributeToStyle(cssRule, attribute, value) {
    cssRule=cssRule.replace("}", attribute + ":" + value + ";}")
    return cssRule
}

function addCSSRule(className, attributes){
    var items = getStyle(className)
    var cssRule = items[0]
    Object.keys(attributes).forEach((elem)=>{
        cssRule = addAttributeToStyle(cssRule, elem, attributes[elem])
    })
    document.styleSheets[items[1]].deleteRule(items[2])
    document.styleSheets[items[1]].insertRule(cssRule, items[2])
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

function trySetAtrributes(lambda) {
    try {
        lambda()
    } catch (error) {
        
    }
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
        addCSSRule(".mc-navbar-item.mc-active, .mc-navbar-brand.mc-active, .mc-navbar-toggle.mc-active", {"-webkit-filter": "invert(1)"})
        
        // setInterval(function() {
        //     document.querySelectorAll('.pt-icons').forEach((elem)=>{ elem.style.filter='invert(1)'})
        // }, 100)

        // awaitElements(".pt-icons", ()=>{
        //     document.querySelectorAll('.pt-icons').forEach((elem)=>{ elem.style.filter='invert(1)'})
        // })
        // awaitElements(".mc-label", ()=>{
        //     document.querySelectorAll('.mc-label').forEach((elem)=>{ elem.style.filter='invert(1)'})
        // })
        // awaitElements(".mc", ()=>{
        //     document.querySelectorAll('.mc').forEach((elem)=>{ elem.style.filter='invert(1)'})
        // })
        // awaitElements(".mc, .pt-icons", ()=>{
        //     document.querySelectorAll('.mc, .pt-icons').forEach((elem)=>{ elem.style.filter='invert(1)'})
        // })

        //event scroll, here change all elements
        // document.querySelector("#\\31 693764353912-body-grid-container > div.ui-grid-viewport.ng-isolate-scope").addEventListener("scroll", function(){console.log("scroll 0")})
        // document.querySelector("body > section > div > div > events-page > div > section > mc-sidebar.mc-sidebar_right.ng-scope.ng-isolate-scope > mc-sidebar-opened > event-info > section > section").addEventListener("scroll", function(){console.log("scroll 1")})

        // addCSSRule(".pt-icons", {"-webkit-filter": "invert(1)"})
        // addCSSRule(".mc-check_16", {"-webkit-filter": "invert(1)"})

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
        setInterval(function() {
            
            trySetAtrributes(()=>{ document.querySelector(".mc-navbar").style.background='white'})
            document.querySelectorAll('.mc-navbar.navbar-blue .mc-navbar__button, .mc-navbar.navbar-blue .mc-navbar__link').forEach((elem)=>{elem.style.filter='invert(1)'})
            document.querySelectorAll(".mc-navbar .mc-icon, .mc-navbar .mc-navbar-title").forEach((elem)=>{elem.style.filter='invert(1)'})

            awaitElements('body > section > div', ()=>{ document.querySelector(".pt-navbar-icon").style.filter='invert(1)'})
            awaitElements('mc-navbar-logo', ()=>{ document.querySelector("mc-navbar-logo").style.filter='invert(1)'})


            document.querySelector(".mc-navbar").querySelectorAll('.pt-icons').forEach((elem)=>{elem.style.filter='invert(0)'})
            trySetAtrributes(()=>{
                document.querySelector("knowledge-base-root > ng-component > navbar > mc-navbar > nav > mc-navbar-container.mc-navbar-left > database-select > mc-navbar-item > i.pt-icons.db-icon").style.filter='invert(1)'
            })
            trySetAtrributes(()=>{
                document.querySelector("knowledge-base-root > ng-component > navbar > mc-navbar > nav > mc-navbar-container.mc-navbar-left > mc-navbar-item:nth-child(4) > span").style.filter='invert(1)'
            })

            trySetAtrributes(()=>{
                //body > section > nav-bar > nav > div > div.mc-navbar__left.layout-row > div.mc-navbar__header.pt-text-overflow.flex-nogrow.ng-isolate-scope
                document.querySelector("div.mc-navbar__header.pt-text-overflow.flex-nogrow.ng-isolate-scope").style.filter='invert(1)'
            })
            document.querySelector('.mc-navbar.navbar-blue .mc-navbar__item.mc-active, .mc-navbar.navbar-blue .mc-navbar__item.mc-navbar__item_active, .mc-navbar.navbar-blue .mc-navbar__item.open').style.background='grey'
            trySetAtrributes(()=>{ document.querySelector("mc-navbar-brand").style.filter='invert(1)'})
            

            //.mc-dl .mc-dt, .mc-dl dt, dl .mc-dt, dl dt
            trySetAtrributes(()=>{ 
                document.querySelector("body > knowledge-base-root > ng-component > div").querySelectorAll('.pt-icons').forEach((elem)=>{ elem.style.filter='invert(1)'})
            })

            trySetAtrributes(()=>{ document.querySelector("body > section > div").querySelectorAll('.pt-icons').forEach((elem)=>{ elem.style.filter='invert(1)'}) })
            trySetAtrributes(()=>{ document.querySelector("body > section > div").querySelectorAll('.mc-label').forEach((elem)=>{ elem.style.filter='invert(1)'}) })
            trySetAtrributes(()=>{ document.querySelector("body > section > div").querySelectorAll('.mc').forEach((elem)=>{ elem.style.filter='invert(1)'}) })
            trySetAtrributes(()=>{ document.querySelector("body > section > div").querySelectorAll('.mc, .pt-icons').forEach((elem)=>{ elem.style.filter='invert(1)'}) })
            

            document.querySelectorAll('.mc-switch.mc-checked').forEach((elem)=>{
                elem.style.filter=invert
            })

            //charts
            document.querySelectorAll(".highcharts-point").forEach((elem)=>{elem.style.filter='invert(1)'})

            //health monitor
            document.querySelectorAll("div.notifications__item").forEach((elem=>{ elem.style.filter='invert(1)' }))
            document.querySelectorAll('.notifications__message').forEach((elem=>{ elem.style.filter='invert(1)' }))
            //document.querySelectorAll("notifications .notifications__item_warning").forEach((elem=>{ elem.style.filter='invert(1)' }))
            //document.querySelector("div.notifications__message").style.filter='invert(1)'

            //document.querySelector(".mc-navbar.navbar-blue").querySelectorAll('.pt-icons').forEach((elem)=>{elem.style.filter='invert(1)'})
            //document.querySelector(".mc-navbar.navbar-blue").querySelectorAll('.ng-scope').forEach((elem)=>{elem.style.filter='invert(1)'})

            //document.querySelector(".mc-navbar.navbar-blue").style.background='black'
            //document.querySelectorAll('a').forEach((elem)=>{
            //     elem.style.filter='invert(1)'
            // })


            //document.querySelector('.mc-navbar.navbar-blue').style.filter=invert
            //document.querySelector(".mc-navbar.navbar-blue").style.background='white'
            // awaitElements("body > section > nav-bar", ()=>{
            //     document.querySelector("body > section > nav-bar").style.background=titleBackgroundColor
            //     document.querySelector("body > section > nav-bar").style.filter=invert
            //     document.querySelector("mc-btn mc-navbar__button ng-scope mc-active").style.filter="invert(1)"
            // })
        }, 100)

    }
})
.catch(console.error)


//инвертим header health monitora


//alert(document.querySelector(".pt-icons"))
//alert(document.querySelector(".mc-warning-icon"))
//document.querySelector(".pt-icons").style.filter='invert(1)'
//document.querySelector(".mc-warning-icon").style.filter='invert(1)'

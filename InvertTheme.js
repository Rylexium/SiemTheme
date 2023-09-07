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
        document.querySelector("#legacyApplicationFrame").contentWindow.document.body.querySelectorAll('.pt-icons').forEach(elem => elem.style.filter='invert(1)' )
        
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


    } else { //for v.24 not for v.23 (Samara)
        var css = "::selection{	background-color: #B8B8B8;}" //selected text
        document.styleSheets[0].insertRule(css, 0)

        setInterval(function() {
            trySetAtrributes(()=> { document.querySelector("section").style.fontWeight='bold' }) //all letter have bold
            trySetAtrributes(()=> { document.querySelector("#TimerangeTimeWindowForm > section > mc-radio-group").style.fontWeight='bold' }) //for table selected time
            trySetAtrributes(()=>{ document.querySelector("body > events-group-popover").style.fontWeight='bold' }) // for form filter
            trySetAtrributes(()=>{ document.querySelector(".mc-navbar").style.background='white'}) //общий хедер сиема
            document.querySelectorAll('.mc-navbar.navbar-blue .mc-navbar__button, .mc-navbar.navbar-blue .mc-navbar__link').forEach((elem)=>{elem.style.filter='invert(1)'}) //все кнопки
            document.querySelectorAll(".mc-navbar .mc-icon, .mc-navbar .mc-navbar-title").forEach((elem)=>{elem.style.filter='invert(1)'})

            trySetAtrributes(()=>{ document.querySelector(".pt-navbar-icon").style.filter='invert(1)'})
            trySetAtrributes(()=>{
                document.querySelector("mc-navbar-brand > mc-navbar-title").style.filter='invert(0)'
            })


            trySetAtrributes(()=> {
                document.querySelector(".mc-navbar").querySelectorAll('.pt-icons').forEach((elem)=>{elem.style.filter='invert(0)'})
            })
            trySetAtrributes(()=>{ //change logo in mc
                document.querySelector("nav-bar > mc-navbar > nav > mc-navbar-container.mc-navbar-left > mc-navbar-brand > mc-navbar-logo > div").style.filter='invert(0)'
            })
            trySetAtrributes(()=>{ //только в кб подсвечиваем эти кнопки
                document.querySelector("knowledge-base-root > ng-component > navbar > mc-navbar > nav > mc-navbar-container.mc-navbar-left > database-select > mc-navbar-item > i.pt-icons.db-icon").style.filter='invert(1)'
            })
            trySetAtrributes(()=>{
                document.querySelector("knowledge-base-root > ng-component > navbar > mc-navbar > nav > mc-navbar-container.mc-navbar-left > mc-navbar-item:nth-child(4) > span").style.filter='invert(1)'
            })

            trySetAtrributes(()=>{
                //body > section > nav-bar > nav > div > div.mc-navbar__left.layout-row > div.mc-navbar__header.pt-text-overflow.flex-nogrow.ng-isolate-scope
                document.querySelector("div.mc-navbar__header.pt-text-overflow.flex-nogrow.ng-isolate-scope").style.filter='invert(1)'
            })
            trySetAtrributes(()=>{
                document.querySelector('.mc-navbar.navbar-blue .mc-navbar__item.mc-active, .mc-navbar.navbar-blue .mc-navbar__item.mc-navbar__item_active, .mc-navbar.navbar-blue .mc-navbar__item.open').style.backgroundColor='grey'
                document.querySelector('.mc-navbar.navbar-blue .mc-navbar__item.mc-active, .mc-navbar.navbar-blue .mc-navbar__item.mc-navbar__item_active, .mc-navbar.navbar-blue .mc-navbar__item.open').style.background='grey'
            })

            trySetAtrributes(()=>{ document.querySelector("mc-navbar-brand").style.filter='invert(1)'})
            

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
            document.querySelectorAll("div.notifications__item").forEach((elem=>{ 
                elem.style.filter='invert(1)'
                elem.style.fontWeight='bold'
            }))
            document.querySelectorAll('.notifications__message').forEach((elem=>{ 
                elem.style.filter='invert(1)' 
                elem.style.fontWeight='bold'
            }))

            //notifications SIEM around health monitor
            document.querySelectorAll(".mc-ntn-items").forEach((elem)=>{ elem.style.filter='invert(1)' })
            document.querySelectorAll(".flex.layout-fill_x").forEach((elem)=>{ 
                elem.style.filter='invert(1)' 
                elem.style.fontWeight='bold'
            })
            trySetAtrributes(()=>{
                document.querySelector("iframe").contentWindow.document.body.querySelectorAll('.pt-icons').forEach(elem => elem.style.filter='invert(1)' )
            })
            trySetAtrributes(()=>{ //text kb
                document.querySelector("iframe").contentWindow.document.body.style.fontWeight='bold'
            })
            trySetAtrributes(()=>{ //text mc
                document.querySelectorAll('tree-grid.roles .tree-item-privilege').forEach(elem => elem.style.fontWeight='bold')
                document.querySelectorAll('.pt-text-nowrap, .pt-text-overflow').forEach(elem => elem.style.fontWeight='bold')
            })

            trySetAtrributes(()=>{ document.querySelectorAll('td, th').forEach(elem=>elem.style.fontWeight='bold') })

            //white title 
            trySetAtrributes(()=> document.querySelector("search-filter > div > div").style.color='black') //groups
            trySetAtrributes(()=> document.querySelector("span.mc-sidebar-header__title.ng-scope").style.color='black') //filters
            trySetAtrributes(()=> document.querySelector("div.layout-row.flex > div > div").style.color='black') //time

            //for drop down list in kb
            trySetAtrributes(()=> document.querySelectorAll(".mc-dropdown__content > div > a > div").forEach(elem=>elem.style.fontWeight='bold'))
            trySetAtrributes(()=> document.querySelectorAll(".mc-dropdown__item > div").forEach(elem=>elem.style.fontWeight='bold'))
            trySetAtrributes(()=> document.querySelector("div.pdql-fast-filter__popover-title").style.fontWeight='bold')

            
            //left dropdown menu in (kb mc) and other
            trySetAtrributes(()=> document.querySelectorAll("div > div > div > div > mc-list-selection > mc-list-option > div > div > a > span").forEach(elem=>elem.style.fontWeight='bold'))
            trySetAtrributes(()=> document.querySelectorAll("a > span > span").forEach(elem=>elem.style.fontWeight='bold'))

            //trySetAtrributes(()=> document.querySelector("div.mc-navbar__left.layout-row > div.layout-row.layout-fill_vertical.flex-noshrink > div > button:hover").style.filter='invert(1)')

            //servers errors
            //trySetAtrributes(()=> document.querySelector("section > server-errors > div").style.filter='invert(0)')
            
        }, 100)

    }
})
.catch(console.error)


//инвертим header health monitora


//alert(document.querySelector(".pt-icons"))
//alert(document.querySelector(".mc-warning-icon"))
//document.querySelector(".pt-icons").style.filter='invert(1)'
//document.querySelector(".mc-warning-icon").style.filter='invert(1)'

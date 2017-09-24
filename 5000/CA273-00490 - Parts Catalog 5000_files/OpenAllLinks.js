function openAllPages()
{
    //getLinks();
    //var script = "<script src='goThroughAllPages.js'></script>"
    //localStorage.setItem("script" , script)
    var homeA = document.getElementsByTagName("a");
    for(i=0;i<homeA.length;i++)
        {
           var link= homeA[i].attributes[0].value
             window.open(link,'_blank');
        }
        
}
//openAllPages()

// function onceOnPage()
// {
//     var span = document.createElement("span")
//     span.innerHTML= localStorage["script"]
//     document.getElementsByTagName('body')[0].appendChild(span);
// }
// onceOnPage()


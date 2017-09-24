

function searchResult()
 { 
     var links = document.getElementById("links").value
      links = links.split(" ")
       for (i = 0; i < links.length; i++ )
      {
        
         var a = document.createElement("a")
         a.setAttribute("href",links[i])
         
  
         a.innerHTML = links[i].toUpperCase() + " <br/>"
        document.getElementById("results").appendChild(a);
       }
      
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
 openAllPages()
}


function ajax() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "localhost:3200/file", true);
  xhttp.send();
}
function searchResult()
 { 
     var links = document.getElementById("links").value
      links = links.split(" ")
       for (i = 0; i < links.length; i++ )
      {
        
         var a = document.createElement("a")
         a.setAttribute("href", "../../page/" + links[i])
         
  
        a.innerHTML = "../../page/" + links[i].toUpperCase() + " <br/>"
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

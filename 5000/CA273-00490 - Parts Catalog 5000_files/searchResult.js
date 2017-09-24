 function searchResult()
 { 
      var linksForLocal =  JSON.parse(localStorage["SearchResult"]) 
      for (i = 0; i < linksForLocal.length; i++ )
      {
        var link1 = linksForLocal[i]
        var a = document.createElement("a")
        a.setAttribute("href",link1)
        a.innerHTML = link1 + " <br/>"
        document.getElementById("results").appendChild(a);
      }
      
      localStorage.setItem("SearchResult", "")
 }
 
 
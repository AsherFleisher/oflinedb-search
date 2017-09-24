 function searchResult()
 { 
      var linksForLocal =  JSON.parse(localStorage["SearchResult"]) 
      for (i = 0; i < linksForLocal.length; i++ )
      {
        var link1 = linksForLocal[i]
        var a = document.createElement("a")
        a.setAttribute("href",link1)
        link1 = link1.split("page")
        link1 = link1[1].split("/")
        a.innerHTML = link1[1].toUpperCase() + " <br/>"
        document.getElementById("results").appendChild(a);
      }
      
      localStorage.setItem("SearchResult", "")
 }
 
 
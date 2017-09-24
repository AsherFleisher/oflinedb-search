function search(catalogNum)
{   
    var linksForLocal = []
    var catalogName = catalogNum
    var links = JSON.parse(localStorage[catalogName]) //catalogName must be identical to catalogName from function getLinks(this)
    var all = JSON.parse( localStorage["HPpage"])
    var word = document.getElementById("search").value
    for (i=0;i < all.length; i++)
        {
            var link1 = all[i]["link"]
            link1 =  "../../page/" + link1
            allSplit =JSON.stringify(all[i])
            allSplit = allSplit.split(" ")
            for(j=0;j<allSplit.length;j++)
                {
                        if(allSplit[j].search(word)!=-1)
                        {
                            for(k=0;k<links.length;k++)
                                {
                                   if(link1 === links[k])
                                    {
                                        if(linksForLocal.length != 0)
                                        {
                                            for(l=0;l<linksForLocal.length;l++)
                                            {
                                                if(link1 ===linksForLocal[l] )
                                                {
    
                                                }
                                                else{
                                                    linksForLocal.push(link1);
                                                }
                                            }
                                         
                                        
                                        }
                                        else{
                                            
                                                    linksForLocal.push(link1);
                                                
                                            }
                                      
                                    }
                        
                                }
                        }
                }
        }
        localStorage.setItem("SearchResult", JSON.stringify(linksForLocal))
        window.open("searchResult.html");
}
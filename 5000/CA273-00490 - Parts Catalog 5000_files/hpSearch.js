function search(catalogNum)
{   
    var catalogName = catalogNum
    var links = JSON.parse(localStorage[catalogName]) //catalogName must be identical to catalogName from function getLinks(this)
    var all = JSON.parse( localStorage["HPpage"])
    var word = document.getElementById("search").value
    for (i=0;i < all.length; i++)
        {
            var link1 = all[i]["link"]
            link1 = link1 + "../../page/"
            allSplit =JSON.stringify(all[i])
            allSplit = allSplit.split(" ")
            for(j=0;j<allSplit.length;j++)
                {
                        if(allSplit[j].search(word)!=-1)
                        {
                            for(i=0;i<links.length;i++)
                                {
                                   if(link1 === links[i])
                                    {
                                       var a = document.createElement("a")
                                       a.setAttribute("href",link1)
                                    }
                        
                                }
                        }
                }
        }
}
var catalogNum ="5000" // insert catalog num here

//links db creation function
function getLinks(catalogNum){
    var hpProjectLinks = catalogNum;
    var links = document.getElementsByTagName('a');
    if(links.length==0){console.log("Links is not found!"); return}
    var arrayForLinks = [];
    for(var i =0; i<links.length;i++)
        {
            var linkValue = links[i].attributes[0].value
            if(linkValue[0]=="."){
                arrayForLinks.push(linkValue)
            }
        }

    var myLocalStorage =[];

    if(typeof localStorage[hpProjectLinks] =="undefined")//not exist
        {
            localStorage.setItem( hpProjectLinks , JSON.stringify(arrayForLinks))
        }
        else
            {
                
                console.log("@!")
                myLocalStorage = JSON.parse(localStorage[hpProjectLinks]);
                var arrayForDumpLinks = [];
            function checkIfLinkExist(){
                for(var j=0; j<myLocalStorage.length; j++){
                    for(var k=0; k<arrayForLinks.length; k++){
                        if(arrayForLinks[k]==myLocalStorage[j]){
                            arrayForDumpLinks.push(k); 
                        }
                    }
                }
             }
            function deleteExistLinks(){
                for(var l=0; l<arrayForDumpLinks.length; l++){
                    arrayForLinks.splice(arrayForDumpLinks[i],1)
                }
            }
            checkIfLinkExist();
            deleteExistLinks();
            myLocalStorage = myLocalStorage.concat(arrayForLinks);
            console.log(myLocalStorage)
            localStorage.setItem( hpProjectLinks , JSON.stringify(myLocalStorage))
            }
}

getLinks(catalogNum)
        
// //the Search function
// function search(catalogNum)
// {   
//     var linksForLocal = []
//     var catalogName = catalogNum
//     var links = JSON.parse(localStorage[catalogName]) //catalogName must be identical to catalogName from function getLinks(this)
//     var allPages = JSON.parse( localStorage["HPpage"])
//     var word = document.getElementById("search").value
//     word = word.toUpperCase() 
//     for (i=0;i < allPages.length; i++)
//         {
//             var link1 = allPages[i]["link"]
//             link1 =  "../../page/" + link1
//             allPagesSplit =JSON.stringify(allPages[i])
//             allPagesSplit = allPagesSplit.split(" ")
//             for(j=0;j<allPagesSplit.length;j++)
//                 {
//                     var page = allPagesSplit[j]
//                     page.toUpperCase() 
//                         if(page.search(word)!=-1)
//                         {
//                             for(k=0;k<links.length;k++)
//                                 {
//                                    if(link1 === links[k])
//                                     {
//                                         if(linksForLocal.length != 0)
//                                         {
//                                             for(l=0;l<linksForLocal.length;l++)
//                                             {
//                                                 if(link1 ===linksForLocal[l] )
//                                                 {
    
//                                                 }
//                                                 else{
//                                                     linksForLocal.push(link1);
//                                                 }
//                                             }
                                         
                                        
//                                         }
//                                         else{
                                            
//                                                     linksForLocal.push(link1);
                                                
//                                             }
                                      
//                                     }
                        
//                                 }
//                         }
//                 }
//         }
//         localStorage.setItem("SearchResult", JSON.stringify(linksForLocal))
//         window.open("searchResult.html");
// }

// //Call for the search function
// if(document.getElementsByClassName("homepage"))
// {
//     var homePage = document.getElementsByClassName("homepage")
//     homePage.addEventListener("click",search(catalogNum))
// }

//Page info db creation function
function getPageInfo() {
    //localStorage["HPpage"] = null
     if (document.getElementById('title') != null) 
        {
             var title = document.getElementById('title').innerHTML;
             var link = title.split(" ");
             link = link[0] + ".htm";
        }
            else{
                var link = "noLink"
                var title ="noTitle"
            }
      
        if (document.getElementsByClassName("bom1") != null) 
            {
                var bom1 = document.querySelectorAll(".bom1 tr")
                var arrayForCatNumber = ""
    
                for(var i =1; i<bom1.length;i++)
                    {
                      arrayForCatNumber += " " + bom1[i].value;
                    }
               
                var bom1 = arrayForCatNumber
                
            }
        else
            {
                var bom1 = "q"
            }
        var link = title.split(" ");
        link = link[0] + ".htm";
        var pageObject ={"title" : title, "link" : link, "bom1":bom1};
        var myLocalStorage =[] 
        if(typeof localStorage["HPpage"] !== "undefined")
            {
                myLocalStorage = JSON.parse(localStorage["HPpage"])
            }
            else
                {
                   var a =["a"]
                   localStorage.setItem( "HPpage" , JSON.stringify(a))
                   myLocalStorage = JSON.parse(localStorage["HPpage"])
                }
             
        for(i=0; i < myLocalStorage.length; i++)
            {
                if(JSON.stringify(myLocalStorage[i]) === JSON.stringify(pageObject))
                    {
                        var alreadyHave = 1
                    }
                    else{var alreadyHave = 0}
                   
            }
                if (alreadyHave === 1)
                    {}
                   else
                        {
                            myLocalStorage.push(pageObject)
                            localStorage.setItem( "HPpage" , JSON.stringify(myLocalStorage) ) 
                        }
       
        console.log(JSON.parse( localStorage["HPpage"]))
    
    }
    getPageInfo()


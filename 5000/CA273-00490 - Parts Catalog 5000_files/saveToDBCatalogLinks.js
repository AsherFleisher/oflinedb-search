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


        
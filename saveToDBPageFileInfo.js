function get() {
//localStorage["HPpage"] = null
 if (document.getElementById('title') != null) 
    {
         var title = document.getElementById('title').innerHTML;
         var link = title.split(" ");
         link = link[0] + ".html";
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
                  arrayForCatNumber += " " + bom1[i].innerHTML;
                }
           
            var bom1 = arrayForCatNumber
            
        }
    else
        {
            var bom1 = "q"
        }
    var link = title.split(" ");
    link = link[0] + ".html";
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
get()
function openAllPages()
{
    var homeA = document.getElementsByTagName("a");
    for(i=0;i<homeA.length;i++)
        {
           var link= homeA[i].attributes[0].value
            window.location.href = link
        }

}
openAllPages()
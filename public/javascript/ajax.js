function myFunction(){

    var test = document.getElementById('test');
    var text = document.getElementById('texter')
    xmlhttp = new XMLHttpRequest();

   
    xmlhttp.open("GET","http://188.166.43.147/ajax?link="+ test.value, true);
    xmlhttp.onreadystatechange=function(){
               if (xmlhttp.readyState==4 && xmlhttp.status==200){
                          texter.innerHTML=xmlhttp.responseText;
                }
    }
    xmlhttp.send();

}

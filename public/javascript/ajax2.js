function listResource(id){
    var element_id = id; // 'movies, series, ebooks, etc'.
    var jsonObj = "";
    var ul = document.getElementsByClassName('content-list')[0];
    //test
    alert(element_id);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","http://192.168.1.215:4000/getResource?link="+ element_id, true);
    xmlhttp.onreadystatechange=function(){
               if (xmlhttp.readyState==4 && xmlhttp.status==200){
		   var resp = xmlhttp.responseText;
		   jsonObj = JSON.parse(resp);

		   for(var attribute in jsonObj){
		       var li = document.createElement("LI");
		       li.className = "list"
		       var textObj = document.createTextNode(attribute);
		       li.appendChild(textObj);
		       ul.appendChild(li);

		   }
                }
    }
    xmlhttp.send();
}



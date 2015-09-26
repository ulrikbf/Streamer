
var globalObject = {};
  function listResource(id){
      var element_id = id; // 'movies, series, ebooks, etc'.
      var jsonObj = "";
      var ul = document.getElementsByClassName('content-list')[0];

      //test
      xmlhttp = new XMLHttpRequest();
      xmlhttp.open("GET","http://192.168.1.215:4000/getResource?link="+ element_id, true);
      xmlhttp.onreadystatechange=function(){
                 if (xmlhttp.readyState==4 && xmlhttp.status==200){
                     var resp = xmlhttp.responseText;
                     jsonObj = JSON.parse(resp);

                          for(var i = 0; i < jsonObj.length; i++) {
                              var obj = jsonObj[i];

                         var span_type = document.createElement("SPAN");
                         var span = document.createElement("SPAN");
                         
                              span_type.className += " content-list-span";
                              span.className += " clear-float";

                              var li = document.createElement("LI");
                              var title = obj.title;
                              globalObject.title = obj.title;
                              globalObject.id = element_id;
                              li.onclick = function(){
 
                                  listEntry(globalObject.id,globalObject.title);
                              };

                              li.className = "list";
                              var textObj = document.createTextNode(obj.title);
                              var textType = document.createTextNode(id);
                              span_type.appendChild(textType);
                              span.appendChild(textObj);
                         
                         li.appendChild(span_type);
                         li.appendChild(span);
                         ul.appendChild(li);
                         }
                  }
      }
      xmlhttp.send();
  }

function listEntry(id, title){
        var element_id = id; // 'movies, series, ebooks, etc'.
        var jsonObj = "";
        var ul = document.getElementsByClassName('content-list')[0];
        ul.innerHTML = "";
alert("list entry, baby!");

        //test
        xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET","http://192.168.1.215:4000/listEntry?collection="+ element_id + "&title=" + title, true);
        xmlhttp.onreadystatechange=function(){
                   if (xmlhttp.readyState==4 && xmlhttp.status==200){
                       var resp = xmlhttp.responseText;
                       jsonObj = JSON.parse(resp);

                            for(var i = 0; i < jsonObj.length; i++) {
                                var obj = jsonObj[i];

                           var span_type = document.createElement("SPAN");
                           var span = document.createElement("SPAN");
                           
                           span_type.className += " content-list-span";
                           span.className += " clear-float";

                           var li = document.createElement("LI");
                           li.className = "list";
                           var textObj = document.createTextNode(obj.title);
                           var textType = document.createTextNode(id);
                           span_type.appendChild(textType);
                           span.appendChild(textObj);
                           
                           li.appendChild(span_type);
                           li.appendChild(span);
                           ul.appendChild(li);
                           }
                    }
        }
        xmlhttp.send();
    }

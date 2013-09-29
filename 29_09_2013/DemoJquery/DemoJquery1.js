/**
 * Created with JetBrains WebStorm.
 * User: zeeshanhanif
 * Date: 9/29/13
 * Time: 11:53 AM
 * To change this template use File | Settings | File Templates.
 */

function hello(){
    alert("a");

    document.getElementById("mydiv").innerHTML="Hello world new text";
    var d = document.getElementById("mydiv");
    var b =document.createElement("input");
    d.appendChild(b);

    var spans = document.getElementsByTagName("span");
    for(var i=0;i<spans.length;i++){
        spans[i].innerHTML="New Span Value";
    }

    ById("mybtn").addEventListener("click",function (){
       //alert("Hello");
       ById("mydiv").style.display="none";
    });

}

function ById(id){
    return document.getElementById(id);
}
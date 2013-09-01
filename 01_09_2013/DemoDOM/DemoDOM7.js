/**
 * Created with JetBrains WebStorm.
 * User: zeeshanhanif
 * Date: 9/1/13
 * Time: 11:40 AM
 * To change this template use File | Settings | File Templates.
 */

function onload(){
    var div1 = document.getElementById("first");
    div1.addEventListener("mouseover",function (){
        div1.style.backgroundColor="red";
    });
    div1.addEventListener("mouseout",function (){
        div1.style.backgroundColor="white";
    });

    var btn2 = document.getElementById("btn2");
    btn2.addEventListener("click",function(){
        //alert("a");
        var a = document.getElementById("first");
        a.style.display = "none";
    });
    var btn1 = document.getElementById("btn1");
    btn1.addEventListener("click",function(){
        //alert("a");
        var a = document.getElementById("first");
        a.style.display = "block";
    })
}







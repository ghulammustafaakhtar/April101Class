/**
 * Created with JetBrains WebStorm.
 * User: zeeshanhanif
 * Date: 9/1/13
 * Time: 11:40 AM
 * To change this template use File | Settings | File Templates.
 */

var btn1 = document.getElementById("btn");
btn1.addEventListener("click",function (){
    alert("Button clicked");
});

var div1 = document.getElementById("first");
div1.addEventListener("mouseover",function (){
    //alert("Div clicked");
    div1.style.backgroundColor="red";
});
div1.addEventListener("mouseout",function (){
    //alert("Div clicked");
    div1.style.backgroundColor="white";
});
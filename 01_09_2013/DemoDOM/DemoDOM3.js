/**
 * Created with JetBrains WebStorm.
 * User: zeeshanhanif
 * Date: 9/1/13
 * Time: 11:40 AM
 * To change this template use File | Settings | File Templates.
 */

/*
var a = document.getElementById("first");
var ch = a.childNodes;


for(var b =0;b< ch.length;ch++){
    alert(ch[b]);
    alert(ch[b].nodeValue);
}
*/

var a = document.getElementsByTagName("body")
var ch = a[0].childNodes;
alert(ch.length);

for(var b =0;b< ch.length;b++){
    alert(ch[b]);
    alert(ch[b].innerText);
}










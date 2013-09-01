/**
 * Created with JetBrains WebStorm.
 * User: zeeshanhanif
 * Date: 9/1/13
 * Time: 11:40 AM
 * To change this template use File | Settings | File Templates.
 */

    /*
var a = document.getElementsByClassName("second");
alert(a[0]);
alert(a[0].innerHTML);
alert(a[0].innerText);
*/

var a = document.getElementsByTagName("div");
/*
alert(a);

for(var b in a){
    alert(b);
    alert(a[b]);
}
*/
/*
for(var b =0;b< a.length;b++){
    alert(a[b].innerText);
    a[b].innerText = "Updated";
}
*/


for(var b =0;b< a.length;b++){
    alert(a[b].innerText);
    //a[b].innerText = a[b].innerText +" Updated";
    a[b].innerText +=" Updated";
}










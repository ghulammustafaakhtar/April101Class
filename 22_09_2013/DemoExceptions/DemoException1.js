/**
 * Created with JetBrains WebStorm.
 * User: zeeshanhanif
 * Date: 9/22/13
 * Time: 12:24 PM
 * To change this template use File | Settings | File Templates.
 */


function hello(){

    var a = "Hello World";
    var b = a.substr(8,5);
    var c = a[14];
    alert(a);
    alert(b);
    alert(c);

    var d = c.substr(0,4);
    alert("world");
}
function newData(){
    alert("New Data");
}
hello();
newData();
/**
 * Created with JetBrains WebStorm.
 * User: zeeshanhanif
 * Date: 8/25/13
 * Time: 11:36 AM
 * To change this template use File | Settings | File Templates.
 */
/*
var Car = function (model,color){

}
*/
function Car (model,color){
    this.model=model;
    this.color = color;
}

Car.prototype.start = function (){
    alert(this.color+" car started");
    //obj1.stop();
}

Car.prototype.stop = function (){
    alert(this.color+" car stoped");
}


var a = new Car(2010,"blue");
alert(a);
var obj1 = new Car(2013,"Red");
var obj2 = new Car(2012,"Black");
obj1.start();
obj1.stop();
obj2.start();
obj2.stop();

/**
 * Created with JetBrains WebStorm.
 * User: zeeshanhanif
 * Date: 8/25/13
 * Time: 12:27 PM
 * To change this template use File | Settings | File Templates.
 */

function Car(name,model,color){
    this.name=name;
    this.model=model;
    this.color=color;
}

Car.prototype.carWash = function (){
    alert("Car wash");
    this.clean();
    this.oil();
    this.polish();
}

Car.prototype.clean = function(){
    alert("Car cleaning");
}
Car.prototype.polish = function (){
    alert("Car polishing");
}
Car.prototype.oil = function (){
    alert("Car oiling");
}
/**
 * Created with JetBrains WebStorm.
 * User: zeeshanhanif
 * Date: 8/25/13
 * Time: 12:29 PM
 * To change this template use File | Settings | File Templates.
 */

function Pajero(name,model,color){
    this.name=name;
    this.model=model;
    this.color=color;
}

Pajero.prototype = new Car();

Pajero.prototype.clean = function (){
    alert("Pajero Cleaning... Pani sahi sahi maaroo... yeah dekho wahan bhi nishan hian")
}

Pajero.prototype.polish = function (){
    alert("Pajero polishing... Chotay sahi sahi chamkana sahab ki ghari ko")
}

Pajero.prototype.oil = function (){
    alert("Pajero oiling... Sir yeah oil ghari kharab karday ka aap acha sa irani oil lay lain")
}
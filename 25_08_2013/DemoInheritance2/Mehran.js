/**
 * Created with JetBrains WebStorm.
 * User: zeeshanhanif
 * Date: 8/25/13
 * Time: 12:29 PM
 * To change this template use File | Settings | File Templates.
 */

function Mehran(name,model,color){
    this.name=name;
    this.model=model;
    this.color=color;
}

Mehran.prototype = new Car();

Mehran.prototype.clean = function (){
    alert("Mehran Cleaning... Jaldhi jaldhi nimtaoo yaar")
}

Mehran.prototype.polish = function (){
    alert("Mehran polishing... Sir polish khatam hogai hia")
}

Mehran.prototype.oil = function (){
    alert("Mehran oiling... Sir yeah oil bilkul saf hia bs thora kala hogay hia")
}
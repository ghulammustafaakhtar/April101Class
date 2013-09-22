/**
 * Created with JetBrains WebStorm.
 * User: zeeshanhanif
 * Date: 9/22/13
 * Time: 12:37 PM
 * To change this template use File | Settings | File Templates.
 */


function Student(name,age){
   this.name=name;
    this.age=age;
}

Student.prototype.find = function (name){

    if(!name){
        throw "Name can not be null";
    }

    alert("found");
    // loop here
}
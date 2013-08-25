/**
 * Created with JetBrains WebStorm.
 * User: zeeshanhanif
 * Date: 8/25/13
 * Time: 11:54 AM
 * To change this template use File | Settings | File Templates.
 */

function Human(name,age){
    this.name=name;
    this.age = age;
}

Human.prototype.sleep= function(){
    alert("Human is sleeping");
}

function Student(name,age,subjects){
    this.name=name;
    this.age=age;
    this.subjects =subjects;
}

Student.prototype = new Human("DefaultName",0);
Student.prototype.study = function (){
    alert("study");
}

var h = new Human("Hello",23);
alert(h.name);
alert(h.age);
h.sleep();
h.study();

var s = new Student("world",32,"HTML5");
alert(s.name);
alert(s.age);
alert(s.subjects);
s.sleep();
s.study();

/*

 function SSUET(name){
 this.name=name;
 }

function Student(name,age,subject){
    this.name=name;
    this.age=age;
    this.subject = subject;
}

function Teacher(name,age,qualification){
    this.name=name;
    this.age =age;
    this.qualification = qualification;
}
*/






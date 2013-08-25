/**
 * Created with JetBrains WebStorm.
 * User: zeeshanhanif
 * Date: 8/25/13
 * Time: 12:17 PM
 * To change this template use File | Settings | File Templates.
 */
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


function Teacher(name,age,qualification){
    this.name=name;
    this.age =age;
    this.qualification = qualification;
}
Teacher.prototype = new Human("DefaultName",0);
Teacher.prototype.sleep = function (){
    alert("teacher is sleeping");
}


/*
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
*/

var t = new Teacher("Hello",35,"MBBS");
t.sleep();








/**
 * Created with JetBrains WebStorm.
 * User: zeeshanhanif
 * Date: 8/18/13
 * Time: 12:57 PM
 * To change this template use File | Settings | File Templates.
 */

function University(name){
    this.name=name;
    this.students = [];
    this.teachers = [];
}

University.prototype.addStudent = function (stu){
    this.students.push(stu);
}

function Student(name,age){
    this.name=name;
    this.age=age;
}

function Teacher(name,age,subjects){
    this.name = name;
    this.age = age;
    this.subjects = subjects;
}


var uni = new University("SSUET");
alert(uni.students.length);
var stu11 = new Student("Hello",12);
uni.addStudent(stu11);
var stu12 = new Student("Hello2",12);
uni.addStudent(stu12);
var stu13 = new Student("Hello3",12);
uni.addStudent(stu13);
alert(uni.students.length);






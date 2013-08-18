/**
 * Created with JetBrains WebStorm.
 * User: zeeshanhanif
 * Date: 8/18/13
 * Time: 12:03 PM
 * To change this template use File | Settings | File Templates.
 */


function Student(name,age,email){
    this.name = name;
    this.age = age;
    this.email = email;
       // multiple copies
    /*
    this.sleep = function (){
        alert("sleep");
    }
    */
}
Student.prototype.sleep = function (){
    alert("student sleep");
}
var stu1 = new Student("Hello",45,"hello@yahoo.com");
var stu2 = new Student("World",23,"world@yahoo.com");
stu1.sleep();







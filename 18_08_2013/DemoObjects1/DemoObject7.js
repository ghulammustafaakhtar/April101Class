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
}
Student.prototype.sleep = function (){
    alert("student sleep");
}
Student.prototype.getInfo = function (){
    //alert(this.name);
    //alert(this.age);
    //alert(this.email);
    alert(this.name +" "+this.age+" "+this.email);
}

var stu1 = new Student("Hello",45,"hello@yahoo.com");
var stu2 = new Student("World",23,"world@yahoo.com");
stu1.getInfo();
stu2.getInfo();







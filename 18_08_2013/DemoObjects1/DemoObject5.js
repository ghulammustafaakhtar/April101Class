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


var stu1 = new Student("Hello",45,"hello@yahoo.com");
var stu2 = new Student("World",23,"world@yahoo.com");

alert(stu1.name);
alert(stu1.age);
alert(stu1.email);
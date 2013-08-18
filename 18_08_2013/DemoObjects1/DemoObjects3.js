/**
 * Created with JetBrains WebStorm.
 * User: zeeshanhanif
 * Date: 8/18/13
 * Time: 12:03 PM
 * To change this template use File | Settings | File Templates.
 */


function Student(){
    this.name = "hello";
    this.age = 45;
    this.email = "hello@yahoo.com";
}

var stu1 = new Student();
var stu2 = new Student();

stu2.name="world"

alert(stu1.name);
alert(stu2.name);
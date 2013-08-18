/**
 * Created with JetBrains WebStorm.
 * User: zeeshanhanif
 * Date: 8/18/13
 * Time: 12:03 PM
 * To change this template use File | Settings | File Templates.
 */


function Student(a,b,c){
    this.name = a;
    this.age = b;
    this.email = c;
}

var stu1 = new Student("Hello",45,"hello@yahoo.com");
var stu2 = new Student("World",23,"world@yahoo.com");

alert(stu1.name);
alert(stu1.age);
alert(stu1.email);
//alert(stu2.name);
//alert(stu2.age);

stu1.name="NewHello";
stu2.percentage = "10%";
//alert(stu1.name);
alert(stu2.percentage);
alert(stu1.percentage);






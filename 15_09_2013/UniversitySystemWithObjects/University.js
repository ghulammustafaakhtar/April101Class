/**
 * Created with JetBrains WebStorm.
 * User: zeeshanhanif
 * Date: 9/15/13
 * Time: 12:45 PM
 * To change this template use File | Settings | File Templates.
 */

function University(name){
    this.name = name;
    this.students = [];
}

University.prototype.addStudent = function (student){
    this.students.push(student);
}

University.prototype.findStudent= function(id){
    for(var i=0;i<this.students.length;i++){
        var stu = this.students[i];
        if(stu.id ==id){
            return stu;
        }
    }
    return null;
}
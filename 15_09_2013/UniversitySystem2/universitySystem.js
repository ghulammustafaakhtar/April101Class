/**
 * Created with JetBrains WebStorm.
 * User: zeeshanhanif
 * Date: 9/8/13
 * Time: 12:02 PM
 * To change this template use File | Settings | File Templates.
 */

var rowToEdit = null;


function appStart(){
    showHideTable();
    document.getElementById("addStudent")
        .addEventListener("click",function (){
           var n = document.getElementById("name").value;
           var a = document.getElementById("age").value;
           if(validate(n,a)){
               addToTable(n,a);
               //document.getElementById("name").value="";
               //document.getElementById("age").value="";
           }
            else {
               alert("Please Enter Values")
           }
        });
    document.getElementById("updateStudent")
        .addEventListener("click",function (){
            updateTable();
        });
    document.getElementById("cancelUpdateStudent")
        .addEventListener("click",function (){
            document.getElementById("updateStudentInfoDiv").style.display="none"
        });



}

function validate(name,age){

    return !(name=="" || age=="");
}

function addToTable(name,age){
    var table = document.getElementById("studentTableBody");
    var row = document.createElement("tr");
    var col1 = addColumnToRow(row);
    var col2 = addColumnToRow(row);
    var col3 = addColumnToRow(row);
    var col4 = addColumnToRow(row);
    var col5 = addColumnToRow(row);
    col1.innerText=name;
    col2.innerHTML="&nbsp;"
    col3.innerText=age;
    addEditButton(col4);
    addDeleteButton(col5);
    table.appendChild(row);
    showHideTable();
}

function updateTable(){
    var name = document.getElementById("updateName").value;
    var age = document.getElementById("updateAge").value;

    if(validate(name,age) && rowToEdit){
        rowToEdit.childNodes[0].innerText=name;
        rowToEdit.childNodes[2].innerText= age;
        document.getElementById("updateStudentInfoDiv").style.display="none"
    }
    else {
        alert("Please Enter value");
    }
}

function addEditButton(col){
    var edit = document.createElement("input");
    edit.type="button";
    edit.value="Edit";

    edit.addEventListener("click",function (){
        var parentRow = edit.parentNode.parentNode;
        rowToEdit = parentRow;
        var name = parentRow.childNodes[0].innerText;
        var age = parentRow.childNodes[2].innerText;
        document.getElementById("updateName").value=name;
        document.getElementById("updateAge").value=age;
        showUpdateInfoDiv();

    });



    col.appendChild(edit);
}

function addDeleteButton(col){
    var deleteBtn = document.createElement("input");
    deleteBtn.type="button";
    deleteBtn.value="Delete";
    //edit.id="stu1";
    deleteBtn.addEventListener("click",function (){
       //alert("delete clicked");
       var parentRow = deleteBtn.parentNode.parentNode;
       var table = document.getElementById("studentTableBody");
        table.removeChild(parentRow);
        showHideTable();
    });
    col.appendChild(deleteBtn);
}

function addColumnToRow(row){
    var col = document.createElement("td");
    row.appendChild(col);
    return col;
}

function showHideTable(){
    var tbody = document.getElementById("studentTableBody");
    if(tbody.childElementCount==0){
        document.getElementById("studentData").
            style.display="none";
    }
    else {
        document.getElementById("studentData").
            style.display="block";
    }
}

function showUpdateInfoDiv(){
    document.getElementById("updateStudentInfoDiv").style.display="block";
}


appStart();


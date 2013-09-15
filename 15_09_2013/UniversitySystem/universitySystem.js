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
            //RunSample();
        });

    document.getElementById("updateStudent")
        .addEventListener("click",function (){

            var name = document.getElementById("name").value;
            var age = document.getElementById("age").value;
            if(validate(name,age)){
                updateTable(name,age);
            }
            else {
                alert("Please Enter Values")
            }

        });


}

function validate(name,age){

    return !(name=="" || age=="");

    /*
    return (name=="" || age=="")?false:true;
    */

    /*
    if(name=="" || age==""){
        return false;
    }
    return true;
*/
    /*
    if(name==""){
        return false;
    }
    else if(age==""){
        return false;
    }
    return true;
    */
}

function RunSample(){
    var input = document.createElement("input");
    input.name="abc";
    input.value="Hello";
    input.type="button"
    var inputDiv = document.getElementById("inputDiv");
    inputDiv.appendChild(input);
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

function updateTable(name,age){

    if(rowToEdit){
        rowToEdit.childNodes[0].innerText=name;
        rowToEdit.childNodes[2].innerText= age;
    }
    /*
    if(rowToEdit!=null){
        rowToEdit.childNodes[0].innerText=name;
        rowToEdit.childNodes[2].innerText= age;
    }
    */
    /*
    if(!rowToEdit){
        rowToEdit.childNodes[0].innerText=name;
        rowToEdit.childNodes[2].innerText= age;
    }
    */
    hideUpdateButton();
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
        document.getElementById("name").value=name;
        document.getElementById("age").value=age;
        showUpdateButton();
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

function showUpdateButton(){
    document.getElementById("updateStudent").style.display = "block";
    document.getElementById("addStudent").style.display = "none";
}

function hideUpdateButton(){
    document.getElementById("updateStudent").style.display = "none";
    document.getElementById("addStudent").style.display = "block";
}

appStart();


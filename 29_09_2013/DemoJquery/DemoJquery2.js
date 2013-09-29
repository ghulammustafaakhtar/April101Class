$(function (){
    alert("Hello world");

    $("#mydiv").html("Hello world new text");
    //$("span")[0].innerHTML="Hello new value";
    //alert($("span")[0]);
    $("span:first").html("New Span Value");
    $(".mybt").on("click",function (){
        //alert("Hello jquery click");
        $("#mydiv").hide();
        $("input[placeholder]").val("Hello new value here");
        //alert($("input[placeholder]").val());
    });

    $("input[id^='mybtn']").on("mouseover",function (){
        //alert("Hello jquery click");

        $("input[placeholder]").val("Hello new value here");
        //alert($("input[placeholder]").val());
    });

});
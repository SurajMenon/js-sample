$(document).ready(function () {

    var count = 0;
    //JS coding with Jquery function
    $("#button1").click(function () {

        //html() & text() method
        //Text gives text content while html allows for html scripts
        var text = $("#p1").text
        console.log(text)//Some weird value ?
        $("#p1").html("Html <b> text</b>")

        //OR
        //$("#p1").text("Changed")
    })

    //attribute & css
    $("#button2").click(function () {
        var attributeVal = $("#button2").attr("random");
        var font = $("#button2").css("font-size")
        console.log(attributeVal +"-"+ font)

        //changing value
        $("#button2").css("font-size",16)
        $("#button2").attr("random","not random",function(){
            console.log(attributeVal +"-"+ font)//Not getting called
        })
    })

    //append() & after()
    $("#button3").click(function () {
        $("#p1").append(" #Added# ") //Appends to same dom elment
        $("#p1").after( " <p> again "+ count + "<p>") //Appends after the element #p1
        count = count + 1;

        $("#p2").empty() //Clears content
        $("#p2").remove() //Removes the object
        $("#p2").append("Ha Ha") //Since object is removed, append has no implication
    })

    //add and remove CSS class
    $("#button4").click(function (){
        $("#p3").removeClass("redp") // Removes the css class. Can have multiple class seperated by space
        $("#p1").addClass("redp") // Adds the css class
    })
})



//Jquery - a library in JS


function jqfn(){
    //Syntax : $("<id/class/tag>").function()
    //         <--- object ------><-action on ojb>
    //id:#
    //class:.
    //:tags

    $("#text,#text2").fadeToggle()//For one or more id's
    $("textarea:first").fadeToggle()//First element of the list
    $("h6").fadeToggle()//For all h6   
} 

// Click event
//Calling another funation
$("#button").click(jqfn)

// OR defining like Anonymous class
$("#button").click(function(){
    alert("Alternate button")
})

//Generally this is how jquery starts
//Ensure all actions are called once document is completely loaded
$(document).ready(function(){
 console.log("Page loaded")
 //All function calls should be inside this
})


// Double click event
$("#button2").dblclick(function(){
    alert("Double clicked")
})

// Hover event
$("#button3").hover(function(){
    $("#button3").html("Hovered")
})

//Callback 
$("#button4").click(function(){

    //In jquery the next line is executed even if the effect of the preiovus line has not been completed - like async
    //Callback ensures that "alert" happens only after fade toggle is done
    $("#text").fadeToggle(2000,function(){
        alert("Toogle done")
    })
})

//Chaining - Calling mutiple effects in the same line
$("#button5").click(function(){
    $("#text").fadeToggle().fadeToggle();
})
function onClickAlert() {
    alert("Button clicked")
}

function onClickChangeText() {
    //document : DOM document as percived by JavaScript
    //getElementById : returns an OBJECT with the given id
    //innerText : ATTRIBUTE of that object
    document.getElementById("button2").innerText = "updated"
}

function onClickAlertTextBox() {
    var text = document.getElementById("textBox").value;
    alert(text)

    //Note that ATTRIBUTE "value" is only present for text box.
    //For button we get "undefined"
    console.log(document.getElementById("button2").value)
}

function onClickChangeRadioText(val) {
    document.getElementById("button3").innerText = val;

    //OR
    //if(document.getElementById("radio1").checked)
    //    document.getElementById("button3").innerText = document.getElementById("radio1").value;
    //else
    //    document.getElementById("button3").innerText = document.getElementById("radio2").value;
}

function onClickChangeSize() {
    var paragraphs = document.getElementsByTagName("p");
    for (var i = 0; i < paragraphs.length; i++) {

        //Random logic
        if (paragraphs[i].style.fontSize != "24px") {
            paragraphs[i].style.fontSize = 24
        } else {
            paragraphs[i].style.fontSize = 12
        }
    }
}

function onClickChangeColor() {
    var elements = document.getElementsByClassName("class");
    for (var i = 0; i < elements.length; i++) 
        elements[i].style.color = "red";
}

function onHoverChangeText1(){
    document.getElementById("mouseAction").innerText = "Text changed";
}
function onHoverChangeText2(){
    document.getElementById("mouseAction").innerText = "Hover to change text";
}

function onClickSubmit(){
    var name = document.getElementById("form").value;
    if(name.length < 3){
        alert ("Name is too short")
        return false; //returning to prevent action from being taken
    } 
}

function onClickCheckRegEx(){
    var name = document.getElementById("textBox2").value;
    //var regEx = /S*M./;
    //OR
    
    var regEx = new RegExp("S*M");
    if(regEx.test(name))
        alert("Input matches regex")
}
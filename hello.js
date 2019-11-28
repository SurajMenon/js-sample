document.write("Hello")
document.write("<br>")

/** Data types */
var x = 2 //Number
var y = 3 //Number
var z = "hello" //String
var b = true;

/** Operations */
document.write(x + y + z + x); // dynamically typed. Type conversion happens while moving left to right
document.write("<br>")

/* Function call */
// alert("Done !!") 

/* typeof & instanceof */
document.write(typeof x);
document.write("<br>")

/* If Else */
if (y > x && 1 > 0) {
    document.write("Y is greater")
} else {
    document.write("X is greater")
}
document.write("<br>")

/* For loop & variable scope*/
for (var x = 0; x < 10; x++)
    document.write(x + " ");

document.write("x is:" + x) //x=10. Note loop varible is not created. x is the global variable here   
document.write("<br>")

/* Function (& variable scope)*/
function add(x, y) {
    x = 15  //Global variable x is not updated. Socpe of variable is local
    return x + y //Value of x updated from for loop is carried
}
document.write("Sum is:" + add(x, y) + "<br>")
document.write("x is:" + x) //x=10. Value not updated in function 
document.write("<br>")

console.log("For Debugging")

/*Array 's **/
var array = [1, 2, "three", 4] //Size not fixed. Can have multiple type
array.sort()

for (var i = 0; i < array.length; i++)
    document.write(array[i] + " ")
document.write("<br>")

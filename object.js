document.write("----------------------------<br>")


//Class defined as Constructor function
function Car(name ,model){
    this.name = name;
    this.model = model;

    //Method of class. Funcational much ?
    this.getCarNameModel = function(){
        return this.name + "-" +this.model;
    }
}

var car = new Car("mercedez","A30")
document.write(car.name+"<br>")
document.write(car.getCarNameModel()+ "<br>")

//Since JS is loosely typed, we can do this.
car.name=500
document.write(typeof car.name+"<br>")

/* String as object*/
var string = new String()
document.write(typeof string + "<br>")

var string2 = "back"
document.write(typeof string2)
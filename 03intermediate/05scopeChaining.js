var name = "vinay";

console.log("Line number 3", name);

function sayName (){
    var name ="my H";
    console.log("Line number 7", name);
    sayNameTwo();

    function sayNameTwo() {
       var name ="my BB"
        console.log("Line number 12", name);
    
    }
}
sayName();
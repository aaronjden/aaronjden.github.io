function myFunction() {
  var counter = 0;
  var name = prompt("What is your name?");
  var theTest = prompt(name + " are you gay? (yes/no)");
while (theTest != "yes") {
alert("Don't lie to me " + name + "! Try again.");
var theTest = prompt("Are you gay? (yes/no)");
counter = counter + 1
}
if (counter >0){
alert("I knew you were gay! It took you " + counter + " tries to admit it.");
} else {
alert("I knew you were gay!");
}
}

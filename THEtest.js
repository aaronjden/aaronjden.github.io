function myFunction() {
  var name = prompt("What is your name?");
var theTest = prompt(name + " are you gay? (yes/no)");
while (theTest != "yes") {
alert("Why are you lying to me? Try again.");
var theTest = prompt("Are you gay? (yes/no)");
}
alert("I knew you were gay!");
}

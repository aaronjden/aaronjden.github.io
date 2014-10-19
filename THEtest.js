var theTest = prompt("Are you gay? (yes/no)")
if (theTest === "yes") {
  alert("I knew you were gay!")
}
else if (theTest === "no"){
  alert("Why are you lying to me? Try again")
}
else {
  alert("Please enter 'yes' or 'no'")
}

do {
  theTest
}
while (theTest !== "yes");

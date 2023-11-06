let songOne = document.getElementById("music1");
let songTWo = document.getElementById("music2");
let songThree = document.getElementById("music3");
let songFour = document.getElementById("music4");
let songFive = document.getElementById("music5");
let userName;

 document.getElementById("submitBtn").onclick = 
 function displayHeading() {
  confirm("Are you sure you want to proceed?");
  userName = document.getElementById("myText").value;
  document.getElementById("heading").innerHTML  = "Welcome," +  " " + userName;
 }





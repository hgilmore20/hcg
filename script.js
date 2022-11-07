// example function call to open/display a dialog box 
// let's commment out the code below, which is the top-level code
// that automatically runs when the script is loaded 
// alert("welcome! this is a javascript popup alert");


function submitForm(name, hometown) {
  var guestlist = document.getElementById("guestlist");
  var n = document.getElementById("name");
  var h = document.getElementById("hometown");
  var currentguestlist = localStorage.getItem("guestlist");
  localStorage.setItem("guestlist", currentguestlist + "<li>" + name + ". " + hometown + "</li>");
  guestlist.innerHTML += "<li>" + name + ". " + hometown + "</li>";
  n.value = "";
  h.value = "";
  n.focus();
  return false
}

function checkStorageGB() {
  var guestlist = document.getElementById("guestlist");
  var currentguestlist = localStorage.getItem("guestlist");
  guestlist.innerHTML = currentguestlist;
}

function clearStorageGB() {
  var guestlist = document.getElementById("guestlist");
  guestlist.innerHTML = "";
  localStorage.setItem("guestlist","");
}

function checkStorage() {
  var answerlist = document.getElementById("answerlist");
  var currentanswer = localStorage.getItem("answerlist");
  answerlist.innerHTML = currentanswer;
}

function clearStorage() {
  var answerlist = document.getElementById("answerlist");
  answerlist.innerHTML = "";
  localStorage.setItem("answerlist","");
}

function submitAnswer(answer) {
  // search the DOM for a specific tag with the id "answerlist"
  var answerlist = document.getElementById("answerlist");
  var currentanswers = localStorage.getItem("answerlist");
  localStorage.setItem("answerlist", currentanswers + "<br />" + answer.value);
  answerlist.innerHTML += answer.value + "<br />";
  answer.value = "";
  answer.focus();
  return false;
}
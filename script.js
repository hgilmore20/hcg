// example function call to open/display a dialog box 
// let's commment out the code below, which is the top-level code
// that automatically runs when the script is loaded 
// alert("welcome! this is a javascript popup alert");


function submitForm(name, hometown) {
  var guestlist = document.getElementById("guestlist");
  var n = document.getElementById("name");
  var h = document.getElementById("hometown");
  guestlist.innerHTML += "<li>" + name + ". " + hometown + "</li>";
  n.value = "";
  h.value = "";
  n.focus();
  return false
}
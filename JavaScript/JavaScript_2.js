function validateForm() {
    var x = document.forms["favForm"]["fsoda"].value;
    if (x == "") { 
    alert("Soda must be filled out");
    return false; }
    var y = document.forms["favForm"]["fmovie"].value;
    if (x == "") {
    alert("Movie must be filled out");
    return false; }
    var z = document.forms["favForm"]["fsong"].value;
    if (x == "") {
    alert("Song must be filled out");
    return false; }
    var q = document.forms["favForm"]["ffood"].value;
    if (x == "") {
    alert("Food must be filled out");
    return false; }
  }
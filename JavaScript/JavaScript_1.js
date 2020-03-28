function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color! ";
    switch(Colors) {
        case "Pink":
        Color_Output = "Pink" + Color_String;
        break;
        case "Purple":
        Color_Output = "Purple" + Color_String;
        break;
        case "Yellow":
        Color_Output = "Yellow" + Color_String;
        break;
        case "Green":
        Color_Output = "Green" + Color_String;
        break;
        case "Blue":
        Color_Output = "Blue" + Color_String;
        break;
        case "Orange":
        Color_Output = "Orange" + Color_String;
        break;
        default:
        Color_Output = "Please enter a color exactly as written above.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

function Hello_World_Function()  {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

var canvas = document.getElementById("canvasOne");
var ctx = canvas.getContext("2d");
ctx.font = "20px Georgia";
ctx.fillText("Hello, World!", 10, 50);
ctx.font = "30px Verdana";

var canvas = document.getElementById("canvasTwo");
var ctx = canvas.getContext("2d");
var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 900, 900);
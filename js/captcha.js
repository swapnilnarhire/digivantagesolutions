var randomColor = Math.floor(Math.random() * 16777215).toString(16);
var code;
function createCaptcha() {
  //clear the contents of captcha div first
  document.getElementById("captcha").innerHTML = "";
  var charsArray =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
  var lengthOtp = 6;
  var captcha = [];
  for (var i = 0; i < lengthOtp; i++) {
    //below code will not allow Repetition of Characters
    var index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array
    if (captcha.indexOf(charsArray[index]) == -1)
      captcha.push(charsArray[index]);
    else i--;
  }
  var canv = document.createElement("canvas");
  canv.id = "captcha";
  canv.width = 100;
  canv.height = 50;
  canv.color = "#" + randomColor;
  var ctx = canv.getContext("2d");
  ctx.font = "25px Georgia";
  ctx.strokeText(captcha.join(""), 0, 30);
  //storing captcha so that can validate you can save it somewhere else according to your specific requirements
  code = captcha.join("");

  // adds the canvas to the body element
  document.getElementById("captcha").style.backgroundColor = "#FFF";
  document.getElementById("captcha").style.color = "#" + randomColor;
  document.getElementById("captcha").appendChild(canv);
}
function validateCaptcha() {
  event.preventDefault();
  debugger;
  if (document.getElementById("cpatchaTextBox").value == code) {
    alert("Valid Captcha");
  } else {
    alert("Invalid Captcha. try Again");
    createCaptcha();
  }
}

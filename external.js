let string = "0"

function addToString(input){
  if(string.charAt(0) === "0"){
    string = input;
    console.log(string);
  }
  else {
    string = string + input
  }
}

$("#lb").on("click", function(){
  addToString("(");
  console.log(string);
  $("#screen").text(string);
});

$("#rb").on("click", function(){
  addToString(")");
  $("#screen").text(string);
});

$("#clear").on("click", function(){
  if(string.length > 1){
    string = string.slice(0, string.length -1);
  }
  else {
    string = "0"
  }
  $("#screen").text(string);
});

$("#7").on("click", function(){
  addToString("7");
  $("#screen").text(string);
});

$("#8").on("click", function(){
  addToString("8");
  $("#screen").text(string);
});

$("#9").on("click", function(){
  addToString("9");
  $("#screen").text(string);
});

$("#divide").on("click", function(){
  addToString("/");
  $("#screen").text(string);
});

$("#4").on("click", function(){
  addToString("4");
  $("#screen").text(string);
});

$("#5").on("click", function(){
  addToString("5");
  $("#screen").text(string);
});

$("#6").on("click", function(){
  addToString("6");
  $("#screen").text(string);
});

$("#multiply").on("click", function(){
  addToString("*");
  $("#screen").text(string);
});

$("#1").on("click", function(){
  addToString("1");
  $("#screen").text(string);
});

$("#2").on("click", function(){
  addToString("2");
  $("#screen").text(string);
});

$("#3").on("click", function(){
  addToString("3");
  $("#screen").text(string);
});

$("#minus").on("click", function(){
  addToString("-");
  $("#screen").text(string);
});

$("#0").on("click", function(){
  addToString("0");
  $("#screen").text(string);
});

$("#decimal").on("click", function(){
  addToString(".");
  $("#screen").text(string);
});

$("#equals").on("click", function(){
  try {
    string = String(eval(string));
  }
  catch(err){
    console.log(err.message);
    alert("Invalid input");
  }
  $("#screen").text(string);
});

$("#plus").on("click", function(){
  addToString("+");
  $("#screen").text(string);
});

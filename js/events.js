function getIt(){
  $("p").on("click", function(){
    alert("Hey!")
  });
}//define functions here
function frameIt(){
var img = $("img")
  $("img").on("load", function(){
    img.addClass("tasty")
  });
}
function pressIt(){
  $("form").on("keydown", function(key){
    if(key.which == 71)
    alert("g was pressed")
  })
}
$(document).ready(function(){

// call functions here

});

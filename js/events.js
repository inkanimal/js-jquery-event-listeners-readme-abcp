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
$(document).ready(function(){

// call functions here

});

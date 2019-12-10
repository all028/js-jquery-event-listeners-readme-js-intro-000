function getIt(){
  $("p").on("click", function() {
    alert('Hey!');
  })
}//end getIT

function frameIt(){


}//end frameIT

function pressIt(){
  $("#typing").on("keydown", function(key) {
    if (key.which == 71)
    alert('You pressed the G key');
  })

}//end pressIT

function submitIt(){


}//end submitit

$(document).ready(function(){

// call functions here

});

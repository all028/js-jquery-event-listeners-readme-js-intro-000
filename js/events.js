function getIt(){
  $("p").on("click", function() {
    alert('Hey!');
  })
}//end getIT

function frameIt(){
  $("form").on("load", function() {
  //  .tasty {border-color: red; border-style: solid; }


    $('img').append('<img border="tasty" src="https://s3.amazonaws.com/after-school-assets/minion-tongue.jpg" />')

  })

}//end frameIT

function pressIt(){
  $("#typing").on("keydown", function(key) {
    if (key.which == 71)
    alert('You pressed the G key');
  })

}//end pressIT

function submitIt(){
  $("form").on("submit", function(key) {

    alert('Your form is going to be submitted now.');
  })

}//end submitit

$(document).ready(function(){

// call functions here

});

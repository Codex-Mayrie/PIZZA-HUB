//shows jquery function for menu

$(document).ready(function(){
  $('#pizza1').mouseenter(function () {
    $('.pizza-heading').filter('#pizza1-title').show("slow");
  }).mouseleave(function () {
    $('#pizza1-title').hide("slow");
  });
  
  $('#pizza2').mouseenter(function () {
    $('.pizza-heading').filter('#pizza2-title').show("slow");
  }).mouseleave(function () {
    $('#pizza2-title').hide("slow");
  });
  
  $('#pizza3').mouseenter(function () {
    $('.pizza-heading').filter('#pizza3-title').show("slow");
  }).mouseleave(function () {
    $('#pizza3-title').hide("slow");
  });
  
  $('#pizza4').mouseenter(function () {
    $('.pizza-heading').filter('#pizza4-title').show("slow");
  }).mouseleave(function () {
    $('#pizza4-title').hide("slow");
  });
  
  $('#viewCart').click(function(){
    $('#orderPizza').modal('hide');
  });
  $('#addMore').click(function(){
    $('#cartPizza').modal('hide');
    $('#orderPizza').modal('show');
  });
  $('#checkout').click(function(){
    let location = $('#location').val();
    $('#cartPizza').modal('hide');
    alert("Your order will be delivered to " + location);
   
  });

})
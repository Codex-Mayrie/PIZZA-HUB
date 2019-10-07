var crust, toppings, size, price, total;
function get(size, crust, toppings, total) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.total = total;
}

$(document).ready(function () {
  // trial
  $("form#orders").submit(function (event) {
    event.preventDefault();

    var pizzaSize = parseInt($("select#pizzaSize").val());
    console.log(pizzaSize);
    var pizzaCrust = parseInt($("select#pizzaCrust").val());
    console.log(pizzaCrust);

    var pizzaTopping = [];
    $.each($("input[name='topping']:checked"), function () {
      pizzaTopping.push($(this).val());
    });
    console.log(pizzaTopping);
    

  });





  // $('button#placeOrder').click(function () {
  //   var pizzaSize = $('#pizzaSize:chosen').val();
  //   console.log(pizzaSize);
  //   var pizzaCrust = parseInt$('#pizzaCrust:chosen').val();

  //   var pizzaTopping = [];

  //   $('#cart').click(function () {
  //     alert(pizzaSize)
  //   })

  //   $.each($("input[for='topping']:chosen"), function () {
  //     pTopping.push($(this).val());
  //   });
  //   var pizzaTopping = pTopping.length * 80;
  //   var pizzaTotal = parseInt(pizzaSize) + parseInt(pizzaCrust) + parseInt(pizzaTopping);
  //   alert("Your total order is: " + pizzaTotal)
  //   $('#location').show();
  //   event.preventDefault();
  // });
});
















//shows jquery function for menu

$(document).ready(function () {
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

  $('#viewCart').click(function () {
    $('#orderPizza').modal('hide');
  });
  $('#addMore').click(function () {
    $('#cartPizza').modal('hide');
    $('#orderPizza').modal('show');
  });
  $('#checkout').click(function () {
    let location = $('#location').val();
    $('#cartPizza').modal('hide');
    alert("Your order will be delivered to " + location);

  });

})
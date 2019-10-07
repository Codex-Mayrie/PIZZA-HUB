var crust, toppings, size, price, total;
function get(size, crust, toppings, total) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.total = total;
}

$(document).ready(function () {
  $("form#orders").submit(function (event) {
    event.preventDefault();

  pizzaSize = parseInt($("select#pizzaSize").val());
    
    console.log(pizzaSize);
  pizzaCrust = parseInt($("select#pizzaCrust").val());
  

  pizzaTopping = [];
    $.each($("input[name='topping']:checked"), function () {
      pizzaTopping.push($(this).val());
    });



  toppingPrice = 0;
    for (var i = 0; i < pizzaTopping.length; i++) {
      unitPrice = parseInt(pizzaTopping[i]);
      

      toppingPrice += unitPrice;
    }

    pizzaTotal = pizzaSize + pizzaCrust + toppingPrice;
  

  });
  var size = document.getElementById('size');
  var crust=document.getElementById('crust');
  var topping=document.getElementById('toppings');
  var total = document.getElementById('total');

  size.innerText=large;
  crust.innerText='';
  topping.innerText='Pepperoni';
  total.innerText=9000;
  // pizzaTotal = pizzaSize + pizzaCrust + toppingPrice;
  // $('#carty').click(function(){
  //   $('#m_orders').append('<tr>'+
  //   '<th scope="row">Pizza01 </th>'+
  //  ' <td id="Size"></td>'+ $("#Size option:selected").text() +
  //   '<td id="Crust"></td>'+ $("#Crust option:selected").text() +
  //   '<td id="Toppings"></td>'+ $("#Toppings option:selected").text() +
  //   '<td id="Total"></td>'+ $("#Size option:selected").text() +
  // '</tr>');
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
var crust, toppings, size, price, total;
function get(size, crust, toppings, total) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.total = total;
}

$(document).ready(function () {
  $("#orders").submit(function (event) {
    event.preventDefault();

    var totalPrices = [];
    var grandTotal = 0;
    var pizzaSize = parseInt($("#pizzaSize").val());

    console.log(pizzaSize);
    var pizzaCrust = parseInt($("#pizzaCrust").val());
    console.log(pizzaCrust);


    var pizzaTopping = [];
    $.each($("input[name='topping']:checked"), function () {
      pizzaTopping.push(parseInt($(this).val()));
    });

    console.log(pizzaTopping);

    var toppingsItems = ["Pepperoni", "Onions", "Sausage"]
    var subToppings = []
    var toppingPrice = 0;
    var totalPrice;
    for (var i = 0; i < pizzaTopping.length; i++) {
      subToppings.push(toppingsItems[pizzaTopping[i]]);
      toppingPrice = subToppings.length * 80;
    }

    console.log(toppingPrice);
    totalPrice = pizzaSize + pizzaCrust + toppingPrice;
    console.log(totalPrice);

    totalPrices.push(totalPrice)

    var chosenSize = "";
    if (pizzaSize === 2000) {
      chosenSize = "Large"
    }
    else if (pizzaSize === 1500) {
      chosenSize = "Medium"
    }
    else {
      chosenSize = "Small"
    }

    var chosenCrust = "";
    if (pizzaCrust === 700) {
      chosenCrust = "Chicago"
    }
    else if (pizzaCrust === 650) {
      chosenCrust = "Neopoletan"
    }
    else {
      chosenCrust = "Deep-fish"
    }


    $('table').append(`<tr>' +
        <td id="Size">${chosenSize}</td>
        <td id="Crust">${chosenCrust}</td>
       <td id="Toppings">${toppingPrice} </td>
        <td id="Total">${totalPrice}</td>
        </tr>`);

  });


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
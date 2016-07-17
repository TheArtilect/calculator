function startPage(){
  

  
  var number = '';
  var firstNumberSaved = '';
  var operator = '';
  var total;
  var totalDisplay = $("#display");
  totalDisplay.text("0");
  
  var final = function(number) {
    totalDisplay.text(number);
    testNumLength(number);
  };
  
  function testNumLength(num) {
    if (num.length > 9) {
      totalDisplay.text(num.slice(0, 9));
    }
  }
  
  $(".numbers").click(function() {
    if ($(this).attr("id") === "pi") {
      number = "3.1415";
    } else {
      number += $(this).text();
    };
    final(number);
  });
  
  $("#plus-minus").click(function() {
    number = (parseFloat(number, 10) * (-1)).toString(10);
    final(number);
  })
  
  $("#clear,#clearall").click(function() {
    number = "";
    totalDisplay.text("0");
    if ($(this).attr("id") === "clearall") {
      firstNumberSaved = "";
    }
    equaled = false;
  });
  
  $("#decimal").click(function() {
    var decimals = 0;
    for (var i = 0; i < number.length; i++) {
      if (number[i] === ".") {
        decimals += 1;
      }
    };
    if (decimals === 0) {
      number += '.';
      final(number);
    };
  });
  
  $(".math, .math2, #sqrt, #inverse, #sq, #log").click(function() {
    if (equaled == true) {
      operator = $(this).text(); /* By Ian Agpawa */
      totalDisplay.text(firstNumberSaved);
    } else if ((firstNumberSaved !== "") && (operator !== "")) {
      mathIt();
      operator = $(this).text();
      firstNumberSaved = number;
      totalDisplay.text(firstNumberSaved)
      number = '';
    } else {
      operator = $(this).text();
      firstNumberSaved = number;
      number = "";
      totalDisplay.text("0");
    }
  });
  
  var equaled = false;
  
  $("#equals, #sqrt, #inverse, #log").click(function() {
    equaled = true;
    mathIt();
    firstNumberSaved = number;
    final(number);
    number = "";
  })
  
  function mathIt() {
    if (operator === "+") {
      number = (parseFloat(firstNumberSaved, 10) + parseFloat(number, 10)).toString(10);
    } else if (operator === "-") {
      number = (parseFloat(firstNumberSaved, 10) - parseFloat(number, 10)).toString(10);
    } else if (operator === "÷") {
      number = (parseFloat(firstNumberSaved, 10) / parseFloat(number, 10)).toString(10);
    } else if (operator === "×") {
      number = (parseFloat(firstNumberSaved, 10) * parseFloat(number, 10)).toString(10);
    } else if (operator === "√") {
      number = Math.sqrt(parseFloat(firstNumberSaved, 10));
      number = (number.toString(10));
    } else if (operator === "^") {
      number = (Math.pow(firstNumberSaved, number)).toString(10);
    } else if (operator === "1/x") {
      number = parseFloat((1 / firstNumberSaved), 10).toString(10);
    } else if (operator === "log") {
      number = parseFloat(Math.log(parseFloat(firstNumberSaved, 10))).toString(10);
    };
    final(number);
  }

}


$(document).ready(startPage);
$(document).on('page:load', startPage);

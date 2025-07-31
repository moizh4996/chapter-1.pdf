//Question : 1
    // Declare two numbers
    var num1 = 3;
    var num2 = 5;

    // Add the numbers and store the result
    var sum = num1 + num2;

    // Display the result in the browser
    document.write("The sum of " + num1 + " and " + num2 + " is: " + sum);

    //Question : 2
    // ===== Task 2: Arithmetic Operations =====

    var num1 = 10;
    var num2 = 5;

    var subtraction = num1 - num2;
    var multiplication = num1 * num2;
    var division = num1 / num2;
    var modulus = num1 % num2;

    document.write("<h2>Task 2: Arithmetic Operations</h2>");
    document.write("Subtraction of " + num1 + " and " + num2 + " is: " + subtraction + "<br>");
    document.write("Multiplication of " + num1 + " and " + num2 + " is: " + multiplication + "<br>");
    document.write("Division of " + num1 + " by " + num2 + " is: " + division + "<br>");
    document.write("Modulus of " + num1 + " and " + num2 + " is: " + modulus + "<br><br>");


    // ===== Task 3: Math Expression Step-by-Step =====

    document.write("<h2>Task 3: JavaScript Math Expression</h2>");

    // (a) Declare variable
    var a;

    // (b) Show value after declaration
    document.write("Value after variable declaration is: " + a + "<br>");

    // (c) Initialize variable
    a = 5;

    // (d) Show initial value
    document.write("Initial value: " + a + "<br>");

    // (e) Increment variable
    a++;

    // (f) Show value after increment
    document.write("Value after increment is: " + a + "<br>");

    // (g) Add 7
    a = a + 7;

    // (h) Show value after addition
    document.write("Value after addition is: " + a + "<br>");

    // (i) Decrement variable
    a--;

    // (j) Show value after decrement
    document.write("Value after decremaient is: " + a + "<br>");

    // (k) Remainder after dividing by 3
    var remainder = a % 3;

    // (l) Show remainder
    document.write("The remainder is: " + remainder + "<br>");

//Question : 4
  // Cost of one ticket
  var ticketPrice = 600;

  // Cost of 5 tickets
  var totalCost = ticketPrice * 5;

  // Show output in browser
  document.write("<h2>Movie Ticket Cost</h2>");
  document.write("Cost of one movie ticket is " + ticketPrice + " PKR<br>");
  document.write("Total cost to buy 5 tickets to a movie is " + totalCost + " PKR");

// Question : 5
  var number = 5; // You can change this to any number

  document.write("<h2>Multiplication Table of " + number + "</h2>");
  for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
  }
//Question : 6
  // (a) Store a Celsius temperature
  var celsius = 30;

  // (b) Convert it into Fahrenheit
  var fahrenheit = (celsius * 9/5) + 32;

  // Output: "30°C is 86°F"
  document.write("<h2>Temperature Converter</h2>");
  document.write(celsius + "°C is " + fahrenheit + "°F<br><br>");

  // (c) Store a Fahrenheit temperature
  var fahrenheit2 = 86;

  // (d) Convert it into Celsius
  var celsius2 = (fahrenheit2 - 32) * 5/9;

  // Output: "86°F is 30°C"
  document.write(fahrenheit2 + "°F is " + celsius2 + "°C");

//Question : 7
     // Variables
        var item1Price = 650;
        var item2Price = 100;
        var item1Qty = 3;
        var item2Qty = 7;
        var shippingCharges = 100;

        // Calculations
        var item1Total = item1Price * item1Qty;
        var item2Total = item2Price * item2Qty;
        var totalCost = item1Total + item2Total + shippingCharges;

        // Display Receipt
        document.write("<h1>Shopping Cart Receipt</h1>");
        document.write("Price of Item 1 is " + item1Price + " PKR<br>");
        document.write("Quantity of Item 1 is " + item1Qty + "<br>");
        document.write("Price of Item 2 is " + item2Price + " PKR<br>");
        document.write("Quantity of Item 2 is " + item2Qty + "<br>");
        document.write("Shipping Charges: " + shippingCharges + " PKR<br><br>");
        document.write("Total Cost: <strong>" + totalCost + " PKR</strong>");
        //Question : 8
          // Store total marks and marks obtained
        var totalMarks = 980;
        var marksObtained = 804;

        // Calculate percentage
        var percentage = (marksObtained / totalMarks) * 100;

        // Display result
        document.write("<h1>Marks Sheet</h1>");
        document.write("Total Marks: " + totalMarks + "<br>");
        document.write("Marks Obtained: " + marksObtained + "<br>");
        document.write("Percentage: <strong>" + percentage.toFixed(2) + "%</strong>" + "<br>");
        //Question : 9
                var totalPKR = (10 * 104.80) + (25 * 28);
        document.write("Total Currency in Pakistani Rupees: " + totalPKR + "<br>");
        //Question : 10
                var number = 10; // initialize with any number
        var result = ((number + 5) * 10) / 2;
        document.write("Q10 Result: " + result + "<br>");
        //Question :11
                var currentYear = 2025;
        var birthYear = 2005;

        var age1 = currentYear - birthYear;
        var age2 = age1 - 1;

        document.write("Q11 Result: They are either " + age2 + " or " + age1 + " years old." + "<br>");
        //Question : 12
              var radius = 10; // You can change this value
        var pi = 3.142;

        var circumference = 2 * pi * radius;
        var area = pi * radius * radius;

        document.write("The radius is: " + radius + "<br>");
        document.write("The circumference is: " + circumference + "<br>");
        document.write("The area is: " + area + "<br>");
        //Question : 13
        document.write("<h1>The Life Time Supply Calculator </h1>")
                var favoriteSnack = "Chips";
        var currentAge = 20;
        var maxAge = 80;
        var amountPerDay = 2;

        var yearsRemaining = maxAge - currentAge;
        var totalSnacksNeeded = yearsRemaining * 365 * amountPerDay;

        document.write("Favorite Snack: " + favoriteSnack + "<br>");
        document.write("Current Age: " + currentAge + "<br>");
        document.write("Estimated Maximum Age: " + maxAge + "<br>");
        document.write("Amount per Day: " + amountPerDay + "<br>");
        document.write("You will need " + totalSnacksNeeded + " " + favoriteSnack + 
                       " to last you until the ripe old age of " + maxAge + ".");
      


































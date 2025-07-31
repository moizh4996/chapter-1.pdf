// Question : 1
var age = 18; 
alert("I am " + age + " years old.");
//Question : 2
 var visitCount = localStorage.getItem("visitCount");

    if (visitCount === null) {
      visitCount = 1;
    } else {
      visitCount = Number(visitCount) + 1; 
    }
    localStorage.setItem("visitCount", visitCount);
    document.write("You have visited this site " + visitCount + " times." +"<br>");
    //Question : 3
        var birthYear = 2007; 
    document.write("My birth year is " + birthYear + "<br>");
    document.write("Data type of my declared variable is " + typeof birthYear +"<br>");
    //Question : 4
    //(a) visitors name
   var visitorName = "John Doe";

    // (b) Product title
    var productTitle = "T-shirt(s)";

    // (c) Quantity
    var quantity = 5;

    // Show message in browser
    document.write(visitorName + " ordered " + quantity + " " + productTitle + " on XYZ Clothing store");

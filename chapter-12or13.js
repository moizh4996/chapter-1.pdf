      //Question : 1 
       var char = prompt("Enter a single character (letter or number):");
        var charCode = char.charCodeAt(0);

        if (charCode >= 48 && charCode <= 57) {
            document.write("The input is a **Number**.");
        } else if (charCode >= 65 && charCode <= 90) {
            document.write("The input is an **Uppercase Letter**.");
        } else if (charCode >= 97 && charCode <= 122) {
            document.write("The input is a **Lowercase Letter**.");
        } else {
            document.write("The input is **not a letter or number**." + "<br>" );
        }
        //Question : 2
                var num1 = +prompt("Enter the first integer:"  + "<br>");
        var num2 = +prompt("Enter the second integer:"  + "<br>");

        if (num1 > num2) {
            document.write("The larger number is: " + num1);
        } else if (num2 > num1) {
            document.write("The larger number is: " + num2);
        } else {
            document.write("Both numbers are equal.");}
            //Question : 3
                    var number = +prompt("Enter a number:");

        if (number > 0) {
            document.write("The number is Positive.");
        } else if (number < 0) {
            document.write("The number is Negative.");
        } else {
            document.write("The number is Zero.");
        }
        //Question : 4
               var char = prompt("Enter a single character:");
        
        // Convert to lowercase for easier comparison
        var lowerChar = char.toLowerCase();
        
        var isVowel = (lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u');

        document.write("Is the character a vowel? " + isVowel);
        //Question : 5
           var correctPassword = "mySecret123"; // (a) Stored password
        var userPassword = prompt("Enter your password:"); // (b) Ask user

        // (c) Validate
        if (userPassword === "") {
            document.write("Please enter your password.");
        } else if (userPassword === correctPassword) {
            document.write("Correct! The password you entered matches the original password.");
        } else {
            document.write("Incorrect password.");}
            //Question :6
                   var greeting;
        var hour = 13;

        if (hour < 18) {
            greeting = "Good day";
        } else {
            greeting = "Good evening";
        }

        document.write(greeting);
        //Question : 7
                var time = +prompt("Enter time in 24-hour format (e.g. 1900 for 7PM):");

        if (time >= 0 && time < 1200) {
            document.write("Good Morning!");
        } else if (time >= 1200 && time < 1700) {
            document.write("Good Afternoon!");
        } else if (time >= 1700 && time < 2100) {
            document.write("Good Evening!");
        } else if (time >= 2100 && time <= 2359) {
            document.write("Good Night!");
        } else {
            document.write("Invalid time entered. Please use 0000 to 2359.");
        }

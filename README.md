# Links

Deployed App: https://pierreparientedimitrov.github.io/password_generator/
GitHub repository: https://github.com/PierreParienteDimitrov/password_generator

# Screenshots

./assets/images/PastedGraphic-1.png
./assets/images/PastedGraphic-2.png
./assets/images/PastedGraphic-3.png
./assets/images/PastedGraphic-4.png


# Commets

In order to create a random password: 

- I ask user the length of the password. The user is prompted to give a correct answer until he inputs a number between 8 and 128 (any letter or combination of letters will prompt the user to chose a number between 8 and 128)
- I ask user if he wants to include UPPERCASES, numbers and symbols. Lowercases are chosen by default. 
- I created an array for each choice (UPPERCASES, lowercases, numbers and symbols). The arrays consist in character code numbers (https://www.w3schools.com/charsets/ref_html_ascii.asp). I populated the arrays using a function with a for loop that push the numbers into an empty array from lower value to hight value. 
- I defined an array that takes by default the lowercase array, and concatenates the uppercase, numbers, and symbols if they are selected by the user 
- I then defined a loop that takes the length of the user input. Each iteration choses a random number of the array defined above (by default, only the numbers contained in the lowercase array). 
- I push the random numbers into a new array that takes the length of the user input and apply the String.fromCharCodes() that transform the random number into a letter. 
- I concatenate all the elements from the array into a string using the .join method (with no spacing between the elements) and return the string
- The string is displayed in the textarea on the webpage
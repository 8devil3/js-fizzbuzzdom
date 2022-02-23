let divContainer = document.querySelector('.container');
let divNumberBox;


// Mauro, lo so che detesti i contatori nominati con "i", "x", ecc. ma per ora va bene così
for (x = 1; x <= 100; x++) {
    
    divNumberBox = document.createElement('div');
    divNumberBox.classList.add('number-box');

    if (x % 3 == 0   &&   x % 5 == 0) {

        divNumberBox.classList.add('fizz-buzz');
        divNumberBox.innerHTML = "FizzBuzz";
        
    } else if (x % 5 == 0) {
        
        divNumberBox.classList.add('buzz');
        divNumberBox.innerHTML = "Buzz";
        
    } else if (x % 3 == 0) {
        
        divNumberBox.classList.add('fizz');
        divNumberBox.innerHTML = "Fizz";
        
    } else {

        divNumberBox.innerHTML = x;

    }
    
    divContainer.append(divNumberBox);
}
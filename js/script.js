let divContainer = document.querySelector('.container');
let numberBox;


// Mauro, lo so che detesti i contatori nominati con "i", "x", ecc. ma per ora va bene così
for (x = 0; x <= 100; x++) {
    
    numberBox = document.createElement('div');
    numberBox.classList.add('number-box');

    if (x % 3 == 0 && x != 0 && !(x % 3 == 0 && x % 5 == 0)) {

        numberBox.classList.add('fizz');
        numberBox.innerHTML = "Fizz";
        
    } else if (x % 5 == 0 && x != 0 && !(x % 3 == 0 && x % 5 == 0)) {
        
        numberBox.classList.add('buzz');
        numberBox.innerHTML = "Buzz";
        
    } else if (x % 3 == 0 && x % 5 == 0 && x != 0) {
        
        numberBox.classList.add('fizz-buzz');
        numberBox.innerHTML = "FizzBuzz";
        
    } else {

        numberBox.innerHTML = x;

    }
    
    divContainer.append(numberBox);
}
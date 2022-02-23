let divContainer = document.querySelector('.container');
let numberBox;



for (x = 0; x <= 100; x++) {
    
    numberBox = document.createElement('div');

    if (x % 3 == 0 && x != 0 && !(x % 3 == 0 && x % 5 == 0)) {

        numberBox.classList.add('number-box', 'fizz');
        numberBox.innerHTML = "Fizz";
        
    } else if (x % 5 == 0 && x != 0 && !(x % 3 == 0 && x % 5 == 0)) {
        
        numberBox.classList.add('number-box', 'buzz');
        numberBox.innerHTML = "Buzz";
        
    } else if (x % 3 == 0 && x % 5 == 0 && x != 0) {
        
        numberBox.classList.add('number-box', 'fizz-buzz');
        numberBox.innerHTML = "FizzBuzz";
        
    }
    else {

        numberBox.classList.add('number-box');
        numberBox.innerHTML = x;

    }
    
    divContainer.append(numberBox);
}
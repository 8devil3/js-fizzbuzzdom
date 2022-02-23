let divContainer = document.querySelector('.container');
let numberBox;



for (x = 0; x <= 20; x++) {
    
    if (x % 3 == 0 && x != 0 && !(x % 3 == 0 && x % 5 == 0)) {
        
        numberBox = document.createElement('div');
        numberBox.innerHTML = "Fizz";
        
    } else if (x % 5 == 0 && x != 0 && !(x % 3 == 0 && x % 5 == 0)) {
        
        numberBox = document.createElement('div');
        numberBox.innerHTML = "Buzz";
        
    } else if (x % 3 == 0 && x % 5 == 0 && x != 0) {
        
        numberBox = document.createElement('div');
        numberBox.innerHTML = "FizzBuzz";
        
    }
    else {

        numberBox = document.createElement('div');
        numberBox.innerHTML = x;

    }
    
    divContainer.append(numberBox);
}
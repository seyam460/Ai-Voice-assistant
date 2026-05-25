function numbergame(number){
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    
    if(number == randomNumber) {
        console.log("Congratulations! You gussed the correct number.");
    }else {
        console.log("Sorry, the number was "+ randomNumber + " better luck next time!");
    }
}

numbergame(1);
function calculator( a , b , operator) {
    switch(operator){
        case "+":
            return a+b;
        case "-":
            return a-b;
        case "*":
            return a*b;
        default :
        return "invalid our data";
         
    }


}

console.log(calculator( 1 , 8 , "+"))
console.log(calculator( 2 , 5 , "-"))
console.log(calculator( 3 , 7 , "*"))
console.log(calculator( 1 , 8 , "7"))



const targetelement = document.getElementById("Title")
targetelement.innerText = "Hello JavaScript"
targetelement.style.color = "red"



//create a element and append it to the body
const newelement = document.createElement("p")
newelement.innerText = "This is a new paragraph"
document.body.appendChild(newelement)


const button = document.getElementsByClassName("new")
button[0].innerText = "Click me"
button[0].style.backgroundColor = "blue"

const courseimagelement = document.getElementById("Logo")
courseimagelement.src = "https://www.w3schools.com/w3images/lights.jpg"

const anchorelement = document.getElementsByTagName("a");
console.log(anchorelement);
anchorelement[0].style.backgroundColor = "yellow"

// background color change or cutton click event
const changebutton = document.getElementById("cng-btn")

const changebuttonhandler = () => {
    const randomcolor = "hsl(" + Math.floor(Math.random() * 360) + ", 100%, 50%)";
    document.body.style.backgroundColor = randomcolor;
};


changebutton.addEventListener("click", changebuttonhandler);


// theme toggle button 
const themebutton = document.getElementById("theme-btn")

const themebuttonhandler = () => {
    const randomcolor = "hsl(" + Math.floor(Math.random() * 360) + ", 100%, 78%)";
    document.body.style.color = randomcolor;
    document.body.classList.toggle("dark-mode");
};
themebutton.addEventListener("click", themebuttonhandler);



// counter app 
const display = document.getElementById("display");
const increasebutton = document.getElementById("increase");
const decreasebutton = document.getElementById("decrease");

let count = 0;

const updatedisplay = () => {
    display.innerText = count ;
}

const increaseButtonhandler = () => {
    count++;
    updatedisplay();
     
}

const decreaseButtonhandler = () => {
   count--;
   updatedisplay();
}

increasebutton.addEventListener("click", increaseButtonhandler);
decreasebutton.addEventListener("click", decreaseButtonhandler);



// EMI calculator 
const result = document.getElementById("result");
const emiform = document.getElementById("emi-form");
const loaninput = document.getElementById("loan-amount");
const interestinput = document.getElementById("interest-rate");
const timeinput = document.getElementById("time-period");

const calculateloan = () => {
    event.preventDefault();
    console.log(loaninput.value);
    console.log(interestinput.value);
    console.log(timeinput.value);
};

emiform.addEventListener("submit", calculateloan);


document.querySelector(".title").style.color = "Blue";
document.querySelector("#sub").style.color = "green";
document.querySelector("p")[0].style.color = "orange";


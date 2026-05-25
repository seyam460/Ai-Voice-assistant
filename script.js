const marray = ['a' , 'b' , 'c'];
console.log(marray);

marray.push("rakib nazifa");
console.log(marray);

function rakibnazifa() {
    console.log("rakibnazifa");
}

rakibnazifa();
rakibnazifa();
rakibnazifa();


(function () {
    console.log("rakibnazifa 2");
})();

const rakibnazifa3 = () => {
    console.log("rakibnazifa 3");
}
rakibnazifa3();


const names = ["Zayed" , "Ukil" , "Sami" , "Nashit" , "shahriar" , "shamim"];
console.log(names);

function add_lej (name) {
    return name + "___"
}

const names_mod = names.map(add_lej);
console.log(names_mod);

const person1 = {
    name : "Zayed",
    age : 24,
    isstudent : false ,
    hobbies : ["Reading" , "Travelling" , "coding"],
}
console.log(person1);


function convert_positive(a) {
    if (a < 0) {
        a = a * -1;
    }
    return a;
}

let n = -10
let m = 5

n = convert_positive(n)
console.log(n)
m = convert_positive(m)
console.log(m)


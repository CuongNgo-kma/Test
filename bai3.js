let inputString = 'George Raymond Richard Martin'

let data = inputString.split(" ")
let plusString = ""
for (const iterator of data) {
    plusString += iterator.slice(0,1)
}
console.log(plusString);
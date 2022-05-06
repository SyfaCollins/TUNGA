let array  = [1,2,3,4,5]
let str = ['eddy', 'syfa', 'collins']

let newArray = array.map( n =>  n * n )  

console.log(newArray)


let newStr = str.map(s => s[0].toUpperCase() + s.slice(1))

console.log(newStr)
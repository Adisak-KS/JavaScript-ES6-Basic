// Rest Parameter
// summation = (x, y) =>{
//     return x+y
// }

summation = (...numberArry) =>{
    let total = 0;
    for(let number of numberArry) total += number
    return total;
}

// console.log(summation(50, 100));
console.log(summation(500, 1000));
console.log(summation(500, 1000, 500));
console.log(summation(500, 1000, 500, 400));
console.log(summation(500, 1000, 500, 400, 5000));

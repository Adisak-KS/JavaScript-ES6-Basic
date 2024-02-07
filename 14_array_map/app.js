// Array Map

// const number = [10, 20, 30, 40]
// // console.log(`number = ${number}`)

// const result = number.map(e => e*2,{
//     // // const a = e * 2
//     // // return a;

//     // return e*2
// })

// console.log(`Array Map : ${result}`);

// const data = ["Rain", "Hot", "Storm", "Hot", "Rain", "Good", "Fog"]

// console.log(data)

// const result = data.map((e,i) =>{
//     return `Day ${i + 1} , Weather : ${e}`
// });

// console.log(result);


const data = [
    {day : "23/12/2566", Weather : "Hot", tem: 27},
    {day : "24/12/2566", Weather : "Rain", tem: 23},
    {day : "25/12/2566", Weather : "Fog", tem: 18},
]
const result = data.map(e=>e.Weather)
console.log(result);

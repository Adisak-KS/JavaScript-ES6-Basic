// การ Loop Array 
// For Loop , ForEach , Forof

const data = [10, 20, 30, 40, 50]

// console.log(data[0]);
// console.log(data[1]);
// console.log(data[2]);
// console.log(data[3]);
// console.log(data[4]);

// for(let i = 0; i < data.length; i++){
//     // console.log(data[i]);
//     if (data[i] >= 30) break
//     console.log(`No.${i} = ${data[i]}`);
// }

// data.forEach(e =>{
//     if(e >= 30){
//         console.log("Hello")
//     }
//     console.log(`Item in Array data : ${e}`);
// });

// let sum = 0
// data.forEach(e => {
//     sum += e
//     console.log(`Sum : ${sum}`);
// });

for (const element of data){
    if(element >= 30) break
    console.log(`Item in Array data : ${element}`);
}
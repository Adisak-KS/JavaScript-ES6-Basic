// Array Reduce

// const data = [10, 20, 30, 40]

// const mapData = data.map(e => 100)
// // console.log(mapData);
// const fillData = data.filter(e => e > 20);
// console.log(fillData);

// array.reduce((ค่าที่ถูกประมวลผล, e) => {},ค่าเริ่มต้น) // value = 0

// const summation = data.reduce((value, e)=> e + value, 0)
// {
//     console.log(value)
//     const total = e + value
//     return total
// },0)

// Value = 60
// console.log(summation)
// Total = 100



///////////////////////////////
const cart = [
    {name: "Bag", Price: 2000},
    {name: "Book", Price: 5000},
    {name: "Camera", Price: 5000}
]

// array.reduce((ค่าที่ถูกประมวลผล, e) => {},ค่าเริ่มต้น) // value = 0
const summation = cart.reduce((value, e) => e.Price + value,0)
// {
//     const total = e.Price + value
//     return total
// },0)

console.log(`ลูกค้าต้องชำระเงิน : ${summation} Bath`);



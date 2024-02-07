// Array Filter
// const data = [10, 20, 30, 40]
// const result = data.filter(e => e > 20)
// console.log(result);

const data = [
    {name:"Adisak", salary:25000, department: "programer"},
    {name:"Jojo", salary:30000, department: "Marketing"},
    {name:"Nut", salary:10000, department: "Apprentice"},
    {name:"Bel", salary:50000, department: "Marketing"},
    {name:"Joy", salary:10000, department: "Apprentice"},
]

const result = data.filter(e=> e.salary > 10000).filter(e => e.department === "Marketing")

console.log(result);

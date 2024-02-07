//แบบเดิม
// function fullname(fname, lname){
//     return fname + lname;
// }

// console.log(fullname("Adisak ", "Khongsuk"));

// function setAge(age){
//     return "Age : " + age 
// }


// แบบใหม่ Arrow Function ใช้ในกรณีใช้คำสั่งไม่เยอะ
fullname = (fname, lname) => fname + lname;
console.log(fullname("Adisak ", "Khongsuk"));

setAge = (age) => "อายุ : " + age
setAge(20);
console.log(setAge(20));
// ค้นหาข้อมูลใน Array 
// indeOf(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1
// find(ข้อมูล) => ผลการค้นหาจะได้ข้อมูลที่ค้นเจอ ถ้าค้นไม่เจอจะได้ undefind
// findIndex(ข้อมูล) => ผลการค้นหาจพได้ตำแหน่ง Index ที่ค้นเจอ ถเาค้นไม่เจอจะได้ -1

const colors = ["Red", "Green", "Blue", "Purple", "White"]
console.log(colors);

// const index = colors.indexOf("Yellow");
// console.log(index);

// let search = colors.find(Element => Element === "Yellow")
// console.log(search)

let search = colors.findIndex(Element => Element === "Green")
console.log(search)

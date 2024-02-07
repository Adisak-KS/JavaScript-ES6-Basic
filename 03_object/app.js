// ทำงานกับ object

// ตัวแปลเก็บข้อมูล
 const customerName = "Adisak";
 const age = 22;
 const address = "Surat thani";

const customer = {customerName, 
    age, 
    address,
    showData(){
        console.log("ข้อมูลลูกค้าชื่อว่า : " + customerName)
    }
}

// console.log(customer);
customer.showData();
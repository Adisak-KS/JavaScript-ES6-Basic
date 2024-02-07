// Default Parameter 
getDataCustomer = (customerName, customeraddress = "BKK") => {
    // old 
    // if(!customeraddress){
    //     customeraddress = "BKK"
    // }

    const address = `Custuner Name : ${customerName}
    Address : ${customeraddress}`
    return address
}

console.log(getDataCustomer("Adisak", "HuaHin"));
console.log(getDataCustomer("Jojo"));
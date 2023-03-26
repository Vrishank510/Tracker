let counter = 0;
let shirtCounter = 0;
let pantCounter = 0;
let sheetCounter = 0;

const tshirt = document.getElementById("button1"),
    pant = document.getElementById("button2"),
    sheet = document.getElementById("button3");

const obj = [
    {item: tshirt, cost: 30 },
    {item: pant, cost: 40 },
    {item: sheet, cost: 50 },
]

const totalOrders = document.getElementById("totalOrders");
const totalPrice = document.getElementById("totalPrice");
const saveButton = document.getElementById("button7");
const totalOrdered = document.getElementById("totalOrdered");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
let select = "";

obj.map((obj) => {
    obj.item.addEventListener('click',()=>{
        counter++;
        totalOrders.textContent = counter;
        shirtCounter += obj.cost;
        let tp = shirtCounter+pantCounter+sheetCounter;
        console.log("shirt counter", shirtCounter)
        totalPrice.textContent = "Rs " + tp;
    })
})


button4.addEventListener('click',()=>{
    select = "button 4";
})

button5.addEventListener('click',()=>{
    select = "button 5";
})

button6.addEventListener('click',()=>{
    select = "button 6";
}) 


saveButton.addEventListener('click',()=>{
    totalOrdered.textContent = counter;
    console.log(select);
})


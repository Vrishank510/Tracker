let counter = 0;
const buttonClick = document.getElementById("button1");
const totalOrders = document.getElementById("totalOrders");
buttonClick.onclick = ()=>{
    counter++;
}
totalOrders.textContent = counter;
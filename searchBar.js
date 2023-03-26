let counter = 0;
let shirtCounter = 0;
let pantCounter = 0;
let sheetCounter = 0;
let d;
const buttonClick = [document.getElementById("button1"),document.getElementById("button3"),document.getElementById("button2")];
const totalOrders = document.getElementById("totalOrders");
const totalPrice = document.getElementById("totalPrice");

for(var i=0;i<3;i++)
{
    if (d === 0)
        {
            shirtCounter+=30;
        }
    else if (d === 1)
        {
            sheetCounter+=50;
        }
    else if (d === 2)
        {
            pantCounter+=40;
        }
    buttonClick[i].addEventListener('click',()=>{
        console.log(i);
        d = i;
        counter++;
        
        
        totalOrders.textContent = counter;
        let tp = shirtCounter+pantCounter+sheetCounter;
        totalPrice.textContent = "Rs " + tp;
    })
}

/*

Consegna:
Data una lista della spesa (inventatela), stampare sulla pagina (anche brutalmente, basta che si vedano) 
gli elementi della lista individualmente con un ciclo while.

Consigli:
Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while
Se abbiamo difficoltà con lo stampare in pagina, proviamo prima a stampare col ciclo for e solo dopo convertiamo il for in while

*/

//while

const cart = [ 'farina', 'latte', 'prosciutto', 'patate', 'ravanelli', 'insalata', 'lenticchie', 'pomodoro', 'fagioli', 'olio', 'sale', 'spinaci', 'pasta', 'riso'];

const mallList = document.getElementById('mall-list');
let listFood = '<ul>'; 

let i = 0;

while (i < cart.length){
    listFood += `<li> ${cart [i]}</li>`;
    console.log(cart[i]);
    i++;
}

listFood += '</ul>'; 
console.log(listFood);
mallList.innerHTML = listFood;

//for

const element = document.getElementById('shopping-list');
let listItems = '<ul>'; 

const list = [ 'farina', 'latte', 'prosciutto', 'patate', 'ravanelli', 'insalata', 'lenticchie', 'pomodoro', 'fagioli', 'olio', 'sale', 'spinaci', 'pasta', 'riso'];

for (let i = 0; i < list.length; i++){
    listItems += `<li> ${list [i]}</li>`;
    console.log(list[i]);
}

listItems += '</ul>'; 
console.log(listItems);
element.innerHTML = listItems;
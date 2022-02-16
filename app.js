//Selectors
const nameInput = document.querySelector('.name');
const price = document.querySelector('.price');
const validate = document.querySelector('.validate');
const abosList = document.querySelector('.abo-list');
const montantTotal = document.querySelector('.montant-total');


//event listeners 

validate.addEventListener('click', addAbo);
abosList.addEventListener('click', clickModify);

// the main array 
let abos = []; 

const render = () => {
  let sum = 0;
  abosList.innerHTML = abos.map(({name,price}) => { // grb the name and price from the object array
    sum += price; // sum it for the montantTotal
    // create an array of template literals
    return `<div class="abo"><li>${name}</li><div class="abo-price">${price}</div><span>€</span>
  <button type="button" class="modifyAbo"><i class="fa fa-pen"></i></button>
  <button type="button" class="trashAbo"><i class="fa fa-trash"></i></button>
  </div>`
  }).join(""); // and join them with nothing

  montantTotal.innerHTML = "total amount : " + sum.toFixed(2) + " € "


}

function addAbo(event) {
  event.preventDefault();
  abos.push({ name: nameInput.value, price: +price.value }); // create an array of names,prices 
  //reset input value
  nameInput.value = "";
  price.value = "";
  render(); // show the array
  console.log(abos);

}

function clickModify(e) {
  const item = e.target.closest('button');
  //Delete newAbo
  if (item.classList.contains("trashAbo")) {
    const parent = item.closest('div')
    const name = parent.querySelector('li').textContent; // save the name
    parent.remove(); // before removing
    abos = abos.filter(item => item.name != name); // remove the object with the name from the array
  } else if (item.classList.contains("modifyAbo")) {
    const parent = item.closest('div');
    const aboName = parent.querySelector('li').textContent; // copy from the div
    const aboPrice = +parent.querySelector('.abo-price').textContent; // copy from the div 
    nameInput.value = aboName; // set the form values
    price.value = aboPrice;    // so they can be edited
    abos = abos.filter(item => item.name != aboName); // remove the abo so valide will add it back
  }
  render()
}

// enter key --> validate

var input = document.querySelector(".price");
input.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.querySelector(".validate").click();
    }
});

//localstorage of abos objects


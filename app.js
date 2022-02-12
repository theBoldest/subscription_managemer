//Selectors
const nameInput = document.querySelector('.name');
const price = document.querySelector('.price');
const validate = document.querySelector('.validate');
const abosList = document.querySelector('.abo-list');
const montantTotal = document.querySelector('.montant-total');


//event listeners 

validate.addEventListener('click', addAbo);
abosList.addEventListener('click', clickModify);


//functions
function addAbo(event){
    event.preventDefault();
    //creating the NewAbo DIV
    const Abodiv = document.createElement('div');
    Abodiv.classList.add('abo');
    //creating a LI 
    const newAbo = document.createElement('li');
    newAbo.innerText = nameInput.value + ' ' ;
    newAbo.classList.add('abo-item');
    Abodiv.appendChild(newAbo);
    //creating a div Price of one Sub
    const oneAboPrice = document.createElement('div');
    oneAboPrice.classList.add('abo-price');
    oneAboPrice.innerText = price.value;
    Abodiv.appendChild(oneAboPrice);
    //modify button
    const modifyAbo = document.createElement('button');
    modifyAbo.innerHTML = '<i class="fa-solid fa-pen"></i>';
    modifyAbo.classList.add('modifyAbo');
    Abodiv.appendChild(modifyAbo);
    //trash button
    const trashAbo = document.createElement('button');
    trashAbo.innerHTML = '<i class="fa fa-trash"></i>';
    trashAbo.classList.add("trashAbo");
    Abodiv.appendChild(trashAbo);
    //append to Abo-list
    abosList.appendChild(Abodiv);

    //total Amount of every newAboPrice

    montantTotal.innerHTML = parseFloat(oneAboPrice.textContent) + parseFloat(oneAboPrice.textContent) ;
    //reset input value
    nameInput.value ="";
    price.value="";

    //store every .abo price (oneAboPrice)value into an array (this is where i need help)
    var pricesValues = [];
    for (var i = 0; i < oneAboPrice.length; i++) {
        pricesValues.push(oneAboPrice[i].textContent);
    }
    console.log(pricesValues); /*dont show the values of every oneAboPrice*/
}

function clickModify(e) {
    const item = e.target;
    //Delete newAbo
    if(item.classList[0] === "trashAbo"){
        const abo = item.parentElement;
    abo.remove();
    }
    //modify newAbo (To do)

}







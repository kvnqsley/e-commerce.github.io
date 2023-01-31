const plusBtn =document.querySelector('#plus');
const minusBtn=document.querySelector('#minus');
const count=document.querySelector('#value')
const cartBtn=document.querySelector('#cart-btn');
const items= document.querySelector('#items');
const card=document.querySelector('.card');
const cardPara=document.querySelector('.card p');
const divEl=document.querySelector('#active-div');
const cardImg=document.querySelector('.card img');
const span1=document.querySelector('#span-1');
const span2 =document.querySelector('#span-2');
let counter =0;

plusBtn.addEventListener('click',()=>{
        counter++;
       
        count.textContent=counter;
        // console.log(count_increment);
    }
);

minusBtn.addEventListener('click',()=>{
  counter--;
  count.textContent=counter;
  if (counter<0) {
    counter=0;
    count.textContent=counter;
  }
}
)


cartBtn.addEventListener(
    'click',()=>{
items.textContent=counter;
if (counter>0) {
    items.classList.remove('display');
  addedToCart();
  countClick()
    
}
else{
    items.classList.add('display')
}
switch (counter) {
    case 0:
     card.appendChild(cardPara);
     divEl.classList.add('display');
     cardImg.classList.add('display');
        break;

}
    }
);
function addedToCart() {
     divEl.classList.remove('display');
    cardImg.classList.remove('display');

span1.textContent=counter;
span2.textContent=('$' + 125 *counter+'.00')
}
var click =0
function countClick() {
    click++
  if (click===1) {
    card.removeChild(cardPara);
  }

}
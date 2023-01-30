const plusBtn =document.querySelector('#plus');
const minusBtn=document.querySelector('#minus');
const count=document.querySelector('#value')
const cartBtn=document.querySelector('#cart-btn');
const items= document.querySelector('#items');
const card=document.querySelector('.card');
const cardPara=document.querySelector('.card p')
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
  addedToCart()
    
}
else{
    items.classList.add('display')
}
    }
);
function addedToCart() {
    card.removeChild(cardPara);


    const cardImg =document.createElement('img')
    cardImg.setAttribute('src','/images/image-product-1-thumbnail.jpg')
    card.appendChild(cardImg)
    
    const divEl=document.createElement('div');
    divEl.setAttribute('id','active-div')
    card.appendChild(divEl);


    const firstText=document.createElement('h4');
    const headerText =document.createTextNode('Fall Limited Edition Sneakers');
    firstText.appendChild(headerText);
    divEl.appendChild(firstText);

    const secondText=document.createElement('h6');
    const subText =document.createTextNode('$125.00 x ');
    secondText.appendChild(subText);
    divEl.appendChild(secondText);
 
   
    
    const span1 =document.createElement('span');
    const spanTxt1= document.createTextNode(counter);
    span1.appendChild(spanTxt1)
    divEl.appendChild(span1);

    const span2 =document.createElement('span');
    const spanTxt2= document.createTextNode('$' + 125 *counter+'.00')
    span2.appendChild(spanTxt2)
    divEl.appendChild(span2);


    const checkout=document.createElement('div');
    const checkoutText =document.createTextNode('Checkout');
    checkout.appendChild(checkoutText);
    divEl.appendChild(checkout)
}

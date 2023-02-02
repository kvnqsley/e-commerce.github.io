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
const thumb1=document.querySelector('#thumb-1');
const thumb2=document.querySelector('#thumb-2');
const thumb3=document.querySelector('#thumb-3');
const toggle =document.querySelector('#toggle')
const span2 =document.querySelector('#span-2');
const lightbox=document.querySelector('#lightbox')
const slider = document.querySelector('#slider');
const app = document.querySelector('.app');
const next=document.getElementById('arr-2');
const prev=document.getElementById('arr-1')
const sliderImg1=document.querySelector('#slider-img-1');
const sliderImg2=document.querySelector('#slider-img-2');
const sliderImg3=document.querySelector('#slider-img-3');
const sliderImg4=document.querySelector('#slider-img-4');
let counter =0;

plusBtn.addEventListener('click',()=>{
        counter++;
       
        count.textContent=counter;
        
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

//lightbox 
thumb1.addEventListener(
  'click',()=>{
lightbox.classList.remove('display');
app.classList.add('dim')

  }
);
toggle.addEventListener(
'click',()=>{
lightbox.classList.add('display');
app.classList.remove('dim');
next.classList.remove('dim');
}
)

var productIndex=0;
var sliderImages=[sliderImg1,sliderImg2,sliderImg3,sliderImg4]
next.addEventListener('click',
()=>{
  productIndex++;
  if (productIndex>3) {
    productIndex=3;
 
  }
  else{
    sliderFunc.onNext();
  }
  sliderFunc.onReset();
}
)
prev.addEventListener('click',
()=>{
  productIndex--;
  if (productIndex<0) {
    productIndex=0;
 sliderFunc.onReset();
  }
  else{
    sliderFunc.onPrev();
  }
  sliderFunc.onReset();
}
)

// showing and hiding images for the slider
const sliderFunc={
  onNext:function () {
    sliderImages[productIndex-1].classList.remove('show');
    sliderImages[productIndex].classList.remove('default')
    sliderImages[productIndex].classList.add('show');
  },
  onPrev:function () {
    sliderImages[productIndex].classList.add('show');
    sliderImages[productIndex+1].classList.remove('show');
    sliderImages[productIndex+1].classList.add('default');
  },
  onReset:function () {

switch (productIndex) {
  case 0:
    prev.classList.add('dim')
    break;
    case 1:
      prev.classList.remove('dim')
      next.classList.remove('dim');
      break;
    case 2:
      prev.classList.remove('dim')
      next.classList.remove('dim');  
      break;
    case 3:
      next.classList.add('dim');
         
      break;
    
}
  }
}


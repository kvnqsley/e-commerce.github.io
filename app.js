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
const thumbnails=document.querySelectorAll('.thumbnail');
const sliderThumbnails=document.querySelectorAll('.slider-thumbnail');
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
const menuBtn=document.querySelector('#menu');
const closeBtn=document.querySelector('#close-side-bar');
const mobileToggle=document.querySelector('#mobile-view');
const sideNav=document.querySelector('nav ul');
const mainEl =document.querySelector('main');
const footerEl =document.querySelector('footer');
const navImg =document.querySelector('.nav-img');
const topCart=document.querySelector('#top-cart-container');
const delBtn= document.querySelector('#delete-icon')

//All necessary Dom objects selected

// Starting the items count
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

//display card with orders
cartBtn.addEventListener(
    'click',()=>{
items.textContent=counter;
if (counter>0) {
    items.classList.remove('display');
  addedToCart();
  countClick();
  

    
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
cardPara.classList.add('display')
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
for (const thumbnail of thumbnails) {
  thumbnail.addEventListener(
    'click',()=>{
  lightbox.classList.remove('display');
  app.classList.add('dim');
  
  switch (thumbnail) {
    case thumbnails[1]:
      sliderImg1.classList.remove('show');
      sliderImg2.classList.remove('default')
      sliderImg2.classList.add('show');
      thumbactive(sliderThumbnails[1]);
   productIndex=1
      break;
      case thumbnails[2]:
        sliderImg2.classList.remove('show');
        sliderImg3.classList.remove('default')
        sliderImg3.classList.add('show');
        thumbactive(sliderThumbnails[2]);
         productIndex =2;
        break;
        case thumbnails[3]:
          sliderImg3.classList.remove('show');
          sliderImg4.classList.remove('default')
          sliderImg4.classList.add('show');
          thumbactive(sliderThumbnails[3]);
          productIndex =3;
          break;
        default:
          thumbactive(sliderThumbnails[0]);
          break;
  }
    }
  );
}


  function thumbactive(thumbnail) {
  return thumbnail.classList.add('thumbnail-effect');

    
  }



toggle.addEventListener(
'click',()=>{
lightbox.classList.add('display');
app.classList.remove('dim');
next.classList.remove('dim');
}
)

var productIndex=0;
var sliderImages=[sliderImg1,sliderImg2,sliderImg3,sliderImg4,navImg]
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
    thumbactive(sliderThumbnails[productIndex]);
    sliderThumbnails[productIndex-1].classList.remove('thumbnail-effect')
  },
  onPrev:function () {
    sliderImages[productIndex].classList.add('show');
    sliderImages[productIndex+1].classList.remove('show');
    sliderImages[productIndex+1].classList.add('default');
    thumbactive(sliderThumbnails[productIndex]);
     sliderThumbnails[productIndex+1].classList.remove('thumbnail-effect');
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

//for mobile design


menuBtn.addEventListener(
  'click',()=>{
    menuBtn.classList.toggle('display');
 
    // app.classList.toggle('dim');
 

    //selecting all components to dim when mobile menu is triggered
const dimAll=[mainEl,footerEl,lightbox,];
dimAll.forEach(element => {
  element.classList.toggle('dim')
});
 if (menuBtn.classList.contains('display')===true) {
    sideNav.classList.add('nav-translate')
    
  }
  else{
    sideNav.classList.remove('nav-translate')
  }
 }
)

closeBtn.addEventListener(
  'click',()=>{
    menuBtn.classList.toggle('display');
  
    if (menuBtn.classList.contains('display')===true) {
      sideNav.classList.add('nav-translate')
      
    }
    else{
      sideNav.classList.remove('nav-translate')
    }
 

    //selecting all components to dim when mobile menu is triggered
const dimAll=[mainEl,footerEl,lightbox,];
dimAll.forEach(element => {
  element.classList.toggle('dim')
});
  })

if (window.innerWidth<=600) {
  topCart.addEventListener(
    'click',()=>{
  
      card.classList.toggle('op');
    
    }
  )

  closeBtn.classList.remove('display')
}


//deleting items rom the basket
delBtn.addEventListener('click',
()=>{
  divEl.classList.add('display');
  cardImg.classList.add('display');
  card.appendChild(cardPara);
  cardPara.classList.remove('display')
span1.textContent='';
span2.textContent='';
items.classList.add('display')
})
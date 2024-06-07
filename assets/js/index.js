
function toggleMenu(){
let menu=document.querySelector('.menu');
menu.classList.toggle('hide-menu')    
}
new WOW().init();
$('.slider').owlCarousel({
    nav:false,
    dots:true,
    loop:true,
    autoplay:true,
    margin:15,
    responsive: {
        0:{items:2},
        768:{items:4}
    }

})
let drinksPlace=document.querySelector('#drinks').querySelector('.grid-4');
let desertsPlace=document.querySelector('#deserts').querySelector('.grid-4');
let snacksPlace=document.querySelector('#snacks').querySelector('.grid-4');
let drinksCard='';
let snacksCard='';
let desertsCard='';


   function renderCards(data,cards,place){
    data.forEach(item => {
    
    cards+=`
    <div class="product-card">
      <div class="product-image">
        <img src="${item.img}" alt="">
        </div>
     <div class="product-details">
        <div class="product-category"><span>${item.type} KZT</span></div>
        <div class="product-name"><h3>${item.title} KZT</h3></div>
        <div class="product-price">${item.price} KZT</div>
    </div>
    </div>

    `
   }); place.innerHTML=cards;
}
renderCards(coffeeDate,drinksCard,drinksPlace);
renderCards(snacksDate,snacksCard,snacksPlace);
renderCards(desertsDate,desertsCard,desertsPlace);
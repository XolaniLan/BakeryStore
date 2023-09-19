const btnCart = document.querySelector('#cart-icon');
const cart = document.querySelector('.cart');
const btnClose = document.querySelector('#cart-close');
const boxes = document.querySelectorAll('.box');
const buttons = document.querySelectorAll('.btn');
const searchBox = document.querySelector('#search');


btnCart.addEventListener('click', () => {
  cart.classList.add('cart-active');
});

btnClose.addEventListener('click', () => {
  cart.classList.remove('cart-active');
});

document.addEventListener('DOMContentLoaded', loadFood);

function loadFood() {
  loadContent();

}

function loadContent() {

  let btnRemove = document.querySelectorAll('.cart-remove');
  btnRemove.forEach((btn) => {
    btn.addEventListener('click', removeItem);
  });

  //Product Item Change Event
  let qtyElements = document.querySelectorAll('.cart-quantity');
  qtyElements.forEach((input) => {
    input.addEventListener('change', changeQty);
  });

  //Product Cart
  let cartBtns = document.querySelectorAll('.add-cart');
  cartBtns.forEach((btn) => {
    btn.addEventListener('click', addCart);
  });

  updateTotal();
}


//Remove Item
function removeItem() {
  if (confirm('Are Your Sure to Remove')) {
    let title = this.parentElement.querySelector('.cart-food-title').innerHTML;
    itemList = itemList.filter(el => el.title != title);
    this.parentElement.remove();
    loadContent();
  }
}

//Change Quantity
function changeQty() {
  if (isNaN(this.value) || this.value < 1) {
    this.value = 1;
  }
  loadContent();
}

let itemList = [];

//Add Cart
function addCart() {
  let food = this.parentElement;
  let title = food.querySelector('.food-title').innerHTML;
  let price = food.querySelector('.food-price').innerHTML;
  let imgSrc = food.querySelector('.food-img').src;
  //console.log(title,price,imgSrc);

  let newProduct = { title, price, imgSrc }

  //Check Product already Exist in Cart
  if (itemList.find((el) => el.title == newProduct.title)) {
    alert("Product Already added in Cart");
    return;
  } else {
    itemList.push(newProduct);
  }

  let newProductElement = createCartProduct(title, price, imgSrc);
  let element = document.createElement('div');
  element.innerHTML = newProductElement;
  let cartBasket = document.querySelector('.cart-content');
  cartBasket.append(element);
  loadContent();
}


function createCartProduct(title, price, imgSrc) {

  return `
  <div class="cart-box">
  <img src="${imgSrc}" class="cart-img">
  <div class="detail-box">
    <div class="cart-food-title">${title}</div>
    <div class="price-box">
      <div class="cart-price">${price}</div>
       <div class="cart-amt">${price}</div>
   </div>
    <input type="number" value="1" class="cart-quantity">
  </div>
  <ion-icon name="trash" class="cart-remove"></ion-icon>
</div>
  `;
}

function updateTotal() {
  const cartItems = document.querySelectorAll('.cart-box');
  const totalValue = document.querySelector('.total-price');

  let total = 0;

  cartItems.forEach(product => {
    let priceElement = product.querySelector('.cart-price');
    let price = parseFloat(priceElement.innerHTML.replace("R", ""));
    let qty = product.querySelector('.cart-quantity').value;
    total += (price * qty);
    product.querySelector('.cart-amt').innerText = "R" + (price * qty);

  });

  totalValue.innerHTML = 'R' + total;

  // Add Product Count in Cart Icon
  const cartCount = document.querySelector('.cart-count');
  let count = itemList.length;
  cartCount.innerHTML = count;

  if (count == 0) {
    cartCount.style.display = 'none';
  } else {
    cartCount.style.display = 'block';
  }
}

/* Search Product by Textbox */
searchBox.addEventListener('keyup',(e)=>{
  searchText=e.target.value.toLowerCase().trim();

  boxes.forEach((box)=>{
    const data = box.dataset.item;
    if(data.includes(searchText)){
      box.style.display='block';
    }else{
      box.style.display='none';
    }
  });

  buttons.forEach((button)=>{
    button.classList.remove('btn-clicked');
  });
  buttons[0].classList.add('btn-clicked');
});

buttons.forEach((button)=>{
  button.addEventListener('click',(e)=>{

    e.preventDefault();
    setActiveBtn(e);
    const btnfilter=e.target.dataset.filter;
    
    boxes.forEach((box=>{
      if(btnfilter=='all'){
        box.style.display="block";
      }else{

        const boxfilter=box.dataset.item;
        if(btnfilter==boxfilter){
          box.style.display="block";
        }else{
          box.style.display="none";
        }
      }
    }));
  });
});

function  setActiveBtn(e){
  buttons.forEach((button)=>{
    button.classList.remove('btn-clicked');
  });
  e.target.classList.add('btn-clicked');
}



















// Modal Pop Up code 1 - 16 *************************************************************

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal/////////////////////////////////////////////////////
var btn = document.getElementById("myBtn"); // change
var btn1 = document.getElementById("myBtn1"); // change
var btn2 = document.getElementById("myBtn2"); // change
var btn3 = document.getElementById("myBtn3"); // change
var btn4 = document.getElementById("myBtn4"); // change
var btn5 = document.getElementById("myBtn5"); // change
var btn6 = document.getElementById("myBtn6"); // change
var btn7 = document.getElementById("myBtn7"); // change
var btn8 = document.getElementById("myBtn8"); // change
var btn9 = document.getElementById("myBtn9"); // change
var btn10 = document.getElementById("myBtn10"); // change
var btn11 = document.getElementById("myBtn11"); // change
var btn12 = document.getElementById("myBtn12"); // change
var btn13 = document.getElementById("myBtn13"); // change
var btn14 = document.getElementById("myBtn14"); // change
var btn15 = document.getElementById("myBtn15"); // change
var btn16 = document.getElementById("myBtn16"); // change



// Get the <span> element that closes the modal///////////////////////////////////////////////////////////
var span = document.getElementsByClassName("close")[0]; // change
var span1 = document.getElementsByClassName("close1")[0]; // change
var span2 = document.getElementsByClassName("close2")[0]; // change
var span3 = document.getElementsByClassName("close3")[0]; // change
var span4 = document.getElementsByClassName("close4")[0]; // change
var span5 = document.getElementsByClassName("close5")[0]; // change
var span6 = document.getElementsByClassName("close6")[0]; // change
var span7 = document.getElementsByClassName("close7")[0]; // change
var span8 = document.getElementsByClassName("close8")[0]; // change
var span9 = document.getElementsByClassName("close9")[0]; // change
var span10 = document.getElementsByClassName("close10")[0]; // change
var span11 = document.getElementsByClassName("close11")[0]; // change
var span12 = document.getElementsByClassName("close12")[0]; // change
var span13 = document.getElementsByClassName("close13")[0]; // change
var span14 = document.getElementsByClassName("close14")[0]; // change 
var span15 = document.getElementsByClassName("close15")[0]; // change




// When the user clicks the button, open the modal ///////////////////////////////////////////////////////
btn.onclick = function () { //change
  modal.style.display = "block";
}

btn1.onclick = function () { //change
  modal.style.display = "block";
}

btn2.onclick = function () { //change
  modal.style.display = "block";
}
btn3.onclick = function () { //change
  modal.style.display = "block";
}
btn4.onclick = function () { //change
  modal.style.display = "block";
}

btn5.onclick = function () { //change
  modal.style.display = "block";
}

btn6.onclick = function () { //change
  modal.style.display = "block";
}

btn7.onclick = function () { //change
  modal.style.display = "block";
}

btn8.onclick = function () { //change
  modal.style.display = "block";
}

btn9.onclick = function () { //change
  modal.style.display = "block";
}

btn10.onclick = function () { //change
  modal.style.display = "block";
}

btn11.onclick = function () { //change
  modal.style.display = "block";
}

btn12.onclick = function () { //change
  modal.style.display = "block";
}

btn13.onclick = function () { //change
  modal.style.display = "block";
}

btn14.onclick = function () { //change
  modal.style.display = "block";
}

btn15.onclick = function () { //change
  modal.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span.onclick = function () { // change
  modal.style.display = "none";
}

span1.onclick = function () { // change
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) { // change
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Modal Pop Up code 2 *************************************************************
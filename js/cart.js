/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var cart = [];
function addToCart(title) {
    var product = [];
    product.title = title;
    cart.push(product);
    displayCart();
}


function showCart() {
    var displayTitle = document.getElementById("copy");
    
    for (var product in cart) {
        displayTitle.innerHTML = cart[product].title;   
    }
}
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cart = new Cart(cartItems);
    
    
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
    loadCart()
    clearCart()  
    showCart() //done
};

//render_item()
renderCart();
// TODO: Remove all of the rows (tr) in the cart table (tbody)

function clearCart() {}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart

// TODO: Find the table body
var the_catalog = [];
var target = document.getElementById("deck col-2");
// TODO: Create a TR
var target = document.getElementById('cart');
var tr_el = document.createElement('tr');
var td_el = document.createElement('td');
var item = document.createElement('h2');
item.textContent = the_catalog[0];

tr_el.appendChild(td_el);
target.appendChild(tr_el);
//td_el.appendChild(item_td);

var item_tr = [];
var item_td = [];

item_tr.push(tr_el);
item_td.push(td_el);

// TODO: Add the TR to the TBODY and each of the TD's to the TR
td_el = document.createElement('td');
td_el.textContent = the_catalog;
target.appendChild(tr_el);
//tr_el.appendChild(td_el);
//
/* TODO: Create a TD for the delete link, quantity,  and the item
var table = document.getElementById('cart');
function removeElementbyId(li) {
    var name_tr = document.getElementById('tr');
    name_tr.parentNode.removeChild('tr');
    
    if {}
    else {}
}; */







function removeItemFromCart(event) {
    
    // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
    // TODO: Save the cart back to local storage
    // TODO: Re-draw the cart table
    
}

// This will initialize the page and draw the cart on screen
renderCart();
        function render_item(target_img, target_h2){
        
        target_img.src = item.url;
        target_h2.textContent = item.name;
        /*loadCart();
        clearCart();
        showCart();*/
        displayTitle = title;}
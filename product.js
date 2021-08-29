function Home(){
 window.location.href = "index.html"
}



var Search_button = document.getElementById("Search_button")


function Popup_visiable() {
    var button_popup = document.getElementById("popup_Cat")
  var visibility = button_popup.style.visibility;
    button_popup.style.visibility = visibility == "visible" ? 'hidden' : "visible"   
}

Search_button.addEventListener("click", Popup_visiable);



var Login_button = document.getElementById("Login")

function Login_Popup_visiable() {
    var Login_popup = document.getElementById("login_popup")
  var visibility = Login_popup.style.visibility;
    Login_popup.style.visibility = visibility == "visible" ? 'hidden' : "visible"   

}

Login_button.addEventListener("mouseover", Login_Popup_visiable)



let product_page_data = JSON.parse(localStorage.getItem("product_page"))


product_page_data.forEach(function (product) {
  var mainimg = document.getElementById("image_box")
  mainimg.src = product.image
  

  var Product_name = document.getElementById("name_Product")
  Product_name.innerText = product.name


  var Product_price = document.getElementById("Price")
  Product_price.innerText = "US$" + " " + product.Price
  var Product_price_temp3 = document.getElementById("temp3")
  var Product_price_temp20 = document.getElementById("temp20")
  var Product_price_temp50 = document.getElementById("temp50")
  

  Product_price_temp3.innerText = "US$" + " " + (product.Price - 1.5)
  Product_price_temp20.innerText = "US$" + " " + (product.Price - 2)
  Product_price_temp50.innerText = "US$" + " " + (product.Price - 2.5)



  var Product_orignal = document.getElementById("orignal")
  var Product_orignal1 = document.getElementById("orignal1")
  var Product_orignal2 = document.getElementById("orignal2")
  var Product_orignal3 = document.getElementById("orignal3")

  Product_orignal.innerText = "US$" + " " + product.orignal_price+ ".00"
  
  Product_orignal1.innerText = "US$" + " " + product.orignal_price + ".00"
  Product_orignal2.innerText = "US$" + " " + product.orignal_price+ ".00"
  Product_orignal3.innerText = "US$" + " " + product.orignal_price + ".00"
  

  var colorImg = document.getElementById("colorImg")
  colorImg.src = product.image
  colorImg.style.width = "40px"


  var cart_btn = document.getElementById("cart_btn");

  cart_btn.onclick = function () {
    addtoCart(product)
  }

})





// QYT function

var minus_btn = document.getElementById("Minus_btn")

var pluse_btn = document.getElementById("pluse_btn")

var count = 1;

function IncreaseQYT() {
  var QYT_DIV = document.getElementById("QYT_DIV")
    count++
  
  QYT_DIV.innerText = count
  
}

function DecreaseQYT() {
  var QYT_DIV = document.getElementById("QYT_DIV")
  if (count > 1) {
    count--
  }
  QYT_DIV.innerText = count
}

pluse_btn.addEventListener("click", IncreaseQYT)
minus_btn.addEventListener("click", DecreaseQYT)



//...................................................................//



// Add to cart Products 

if (localStorage.getItem("cart") == null) {
  
localStorage.setItem("cart", JSON.stringify([]))
}
function addtoCart(p) {
   let cart_data = JSON.parse(localStorage.getItem("cart"))

  cart_data.push(p)

  localStorage.setItem("cart", JSON.stringify(cart_data))

//cart popup
  
  var cart_popup = document.getElementById("cart_popup");

  cart_popup.style.visibility = "visible"




// Increase count on cart function 

  countCart()
}
var count_no = document.getElementById("cart_count");
var count_popup = document.getElementById("count_popup")
function countCart() {
  let cart_data = JSON.parse(localStorage.getItem("cart"))
  if (cart_data.length >= 1) {
    count_popup.innerText = cart_data.length +" "
    count_no.style.visibility = "visible"
    count_no.innerText = cart_data.length;
  }
  else {
    count_no.style.visibility = "hidden"
  }
}
countCart()
  


var close = document.getElementById("close")
var continue_shopping = document.getElementById("continue_shoping")

function close_button() {
    var cart_popup = document.getElementById("cart_popup");
  cart_popup.style.visibility = "hidden"
}
close.addEventListener("click", close_button)
continue_shopping.addEventListener("click", close_button)



var viewCart = document.getElementById("View_btn");
var cart_bt = document.getElementById("cart");

function ClicktoCart() {
  window.location.href = "cart.html"
}
viewCart.addEventListener("click", ClicktoCart);
cart_bt.addEventListener("click", ClicktoCart);

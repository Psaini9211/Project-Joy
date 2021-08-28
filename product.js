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


console.log(product_page_data)

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

})

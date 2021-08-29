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


var cart_data = JSON.parse(localStorage.getItem("cart"));

var cart_count = document.getElementById("cart_count");
var cart_value = document.getElementById("cart_value")
var value_total = document.getElementById("total_item1")
var value_total1 = document.getElementById("total_item2")
cart_count.innerHTML = cart_data.length;
cart_value.innerHTML = cart_data.length;
value_total.innerText = "("+cart_data.length + ")"
value_total1.innerText = cart_data.length;


function removeItemsfromCart(pid) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    
    let newcart = cart.filter((product) => product.Price != pid)

    localStorage.setItem("cart", JSON.stringify(newcart))

    window.location.href = "cart.html"
   
}

var total = 0;


    cart_data.forEach(function (product) {


        var ProductContainer = document.getElementById("Product_list_itme");

        var Product_details = document.createElement("div")
        Product_details.classList.add("small_product_name")
        Product_details.innerHTML = `<input type="checkbox" checked class="check_box2">
                        <img id="joooooy">
                        <p id="short_name">mingey</p>`

    
    
        var Product_item = document.createElement("div");
        Product_item.classList.add("cart_product_details");

        //create check_box
        var check_box2_div = document.createElement("div");
        check_box2_div.innerHTML = `<input type="checkbox" class="check_box2" checked>`


        // create image
        var image_div = document.createElement("div");
        var prod_img = document.createElement("img")
        prod_img.setAttribute("id", "image_cart")
        prod_img.src = product.image;

  
        // create name
        var Name_dive = document.createElement("div");
        var name = document.createElement("p");
        name.setAttribute("id", "Product_name")
        name.innerText = product.name
        var color_type = document.createElement("p")
        color_type.innerHTML = ` <p style="margin-top: 20px; color:rgb(121, 121, 121);">Color:Army Green</p>`
   
    
        //create price
        var price_div = document.createElement("div");
        var price = document.createElement("p");
        price.setAttribute("id", "Price")
        price.innerText = "US$" + " " + product.Price
    

        //create  Qyt box
        var QYT_MAIN = document.createElement("div")
        QYT_MAIN.setAttribute("id", "Qyt_main")
        var minus = document.createElement("button")
        minus.setAttribute("id", "Minus_btn")
        minus.innerText = "-"
        var count_div = document.createElement("span")
        count_div.setAttribute("id", "QYT_DIV")
        count_div.classList.add("Qyt_div", "Custmise_Product_box_style")
        count_div.innerText = "1"
        var pluse_btn = document.createElement("button")
        pluse_btn.setAttribute("id", "pluse_btn")
        pluse_btn.innerText = "+"


        // create wishlist btn
        var wishlist = document.createElement("div")
        wishlist.innerHTML = `   <i class="fi fi-wish"></i>`
    

        //create delete button
        var delete_button = document.createElement("div")
        delete_button.innerHTML = `<i onclick="removeItemsfromCart(${product.Price})" class="fi fi-del" id="Delete"></i>`
    
        QYT_MAIN.append(minus, count_div, pluse_btn)
        price_div.append(price)
        Name_dive.append(name, color_type)
        image_div.append(prod_img)
        Product_item.append(check_box2_div, image_div, Name_dive, price_div, QYT_MAIN, wishlist, delete_button)
        ProductContainer.append(Product_details, Product_item)


        total = total + Number(product.Price);

    }
    );

    console.log(total);

    var totat_val = document.getElementById("total_price");
    totat_val.style.color = "red"
    totat_val.innerText = "US$" + " " + total





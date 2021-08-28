

var Search_button = document.getElementById("Search_button")


function Popup_visiable() {
    var button_popup = document.getElementById("popup_Cat")
  var visibility = button_popup.style.visibility;
    button_popup.style.visibility = visibility == "visible" ? 'hidden' : "visible"   
}

Search_button.addEventListener("click", Popup_visiable);




var Category_btn = document.getElementById("left_icon");

function Popup_visiable_category() {
    var Category_button = document.getElementById("popup_Cat2");
    var visibility = Category_button.style.visibility;
    Category_button.style.visibility = visibility == "visible" ? 'hidden' : "visible"  
}

Category_btn.addEventListener("mouseover", Popup_visiable_category)


var Login_button = document.getElementById("Login")

function Login_Popup_visiable() {
    var Login_popup = document.getElementById("login_popup")
  var visibility = Login_popup.style.visibility;
    Login_popup.style.visibility = visibility == "visible" ? 'hidden' : "visible"   

}

Login_button.addEventListener("mouseover", Login_Popup_visiable)


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 10000); // Change image every 10 seconds
}

var countDownTime = new Date("Sep 31, 2021 20:59:45").getTime();

var findTime = setInterval(function () {
    
    var CurrentTime = new Date().getTime();

    var remmemingTime = countDownTime - CurrentTime

    var hours = Math.floor((remmemingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    var minutes = Math.floor((remmemingTime % (1000 * 60 * 60)) / (1000 * 60));

    var seconds = Math.floor((remmemingTime % (1000 * 60)) / 1000);

    document.getElementById("hours").textContent = hours

    document.getElementById("Min").textContent = minutes

    document.getElementById("sec").textContent = seconds
    
})

var item = [
  {
    name: "Mijia Mijia Electric Shaver S500 Suspension Floating System Digital Display Xiaomi Shaver",
    Price: 38.20,
    orignal_price:120.01 ,
    image: "//img10.joybuy.com/N0/s300x300_jfs/t1/52212/40/15463/69403/5dc571a1Ea46cde1e/eca0d8bd4341580c.jpg.dpg"
  },

  {
    name: "Sonic electric toothbrush T100 KR double pointed hair care gums IPX7 waterproof millet electric toothbrush blue Shaver",
    Price: 11.74,
    orignal_price:120.00 ,
    image: "//img11.joybuy.com/N0/s300x300_jfs/t1/73021/5/12435/28043/5d9c54cfE9f81a286/a2f4b1126473c706.jpg.dpg"
  },
  {
    name: "Meter home negative ion portable hair dryer negative ion hair care wind volume quick dry millet hair dryer Shaver",
    Price: 34.58,
    orignal_price:120.00 ,
    image: "//img11.joybuy.com/N0/s300x300_jfs/t1/74944/17/13041/61965/5da5d16eE773b53f4/850017bbb4765efb.jpg.dpg"
  },
  {
    name: "Mijia Xiaomi Handheld Hanging Ironing Machine Steam Iron Ironing Machine Household Portable Sterilization, Shaver",
    Price: 53.89,
    orignal_price:999.00 ,
    image: "//img12.joybuy.com/N0/s300x300_jfs/t1/134124/14/9473/24609/5f577236Ef1912bc6/8db23f0c6e90d21e.jpg.dpg"
  },
        {
    name: "(MIJIA) millet LED smart desk lamp 1S eye protection reading and reading bedroom student bedside folding voice dimming",
    Price: 69.56,
    orignal_price:999.00 ,
    image: "//img10.joybuy.com/N0/s300x300_jfs/t1/68253/3/3200/100884/5d15aaafE88be2641/0545f61235358aac.jpg.dpg"
  },
  {
    name: "Chuangmi Xiaobai Camera 2K Ultra HD Monitor Family Home Wireless Network Camera Indoor Smart Home Remote Video HD Night",
    Price: 71.12,
    orignal_price:999.00 ,
    image: "//img13.joybuy.com/N0/s300x300_jfs/t1/112992/37/670/91503/5e8ec9c1E8ea4ca0c/ebac01e75a318c8d.jpg.dpg"
  },
   {
    name: "Xiaomi original 55W gallium nitride GaN cable charging kit (charger + 6A data cable) fast charging black technology",
     Price: 38.20,
    orignal_price:120.00 ,
    image: "//img11.joybuy.com/N0/s300x300_jfs/t1/151157/10/13075/45681/5fe9b713E78fa8a85/b1809581d6f947fe.jpg.dpg"
  },
  {
    name: "Mijia Mijia Electric Shaver S500 Suspension Floating System Digital Display Xiaomi Shaver",
    Price: 38.20,
    orignal_price:120.00 ,
    image: "//img11.joybuy.com/N0/s300x300_jfs/t1/177780/28/21046/95969/6125dce8E0b8763b1/4012cb660596be15.png"
  },
]


        const items = JSON.stringify(item);
        
        localStorage.setItem("MyItem", items)

        let MyItem = localStorage.getItem("MyItem")
            
        MyItem = JSON.parse(MyItem)
        
    
        
          

  function showProduct() {
    let Product_list = document.getElementById("Product_list")
    
    MyItem.forEach(function (product) {

      //Main Div for product list
      let div = document.createElement("div");
     div.classList.add("Product_box")

      
      //Product Name 
      let Span_for_name = document.createElement("span")
      Span_for_name.classList.add( "Product_popup")
      let p_name = document.createElement("p");
      p_name.innerText = product.name;
      p_name.classList.add("Product_Name")
     

    // add products on localStorage
      
      
    
      Span_for_name.onclick = function () {
       
        addProduct(product)
         window.location.href = "product.html"
        

       }
      
      
      
      //Product Price
      let p_price = document.createElement("p")
      p_price.innerText = "US$" + " " + product.Price;
      p_price.classList.add("Price")
      Span_for_name.append(p_name)
      


      //Product Image
      let image = document.createElement("img");
      image.src = product.image;
      

      //Product orignal Price

      let product_Orignal_price = document.createElement("p")
      product_Orignal_price.classList.add("Orignal_price")
      let product_Orignal_price_span = document.createElement("span")
      product_Orignal_price_span.classList.add("decor")
      product_Orignal_price_span.innerHTML =  "US$" + " " + product.orignal_price +" " 
      
      

      // Product discount
      
      let discount_span = document.createElement("span")
      discount_span.innerHTML = "|" + " " +"(68% off)"



      
      product_Orignal_price.append(product_Orignal_price_span, discount_span)
      div.append(image, Span_for_name ,p_price, product_Orignal_price)

         Product_list.append(div)
    });

    }


showProduct();




  
  localStorage.setItem("product_page", JSON.stringify([]))



function addProduct(p) {
 let Product_page_data = JSON.parse(localStorage.getItem("product_page"))

  Product_page_data.push(p)

  localStorage.setItem("product_page", JSON.stringify(Product_page_data))

}

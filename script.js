

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

var item1 = document.getElementById("item1")

function product_Page() {
  window.location.href = 'product.html';
}
item1.addEventListener("click", product_Page)
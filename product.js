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

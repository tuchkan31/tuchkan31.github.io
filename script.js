var link = document.querySelector(".login_link");
      var popup = document.querySelector(".modal-login");

      link.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.add("modal-show");
      });
      var close = document.querySelector(".modal-close");

      close.addEventListener("click", function(evt){
        evt.preventDefault();
        popup.classList.remove("modal-show")
      });
let switchMode = document.getElementById("switchMode");

switchMode.onclick = function () {
let theme = document.getElementById("theme");

if (theme.getAttribute("href") == "style.css") {
    theme.href = "style2.css";
} else{
     theme.href = "style.css";
        }
 }
const botaoUsuario = document.getElementById("barra-usuario");

   
botaoUsuario.addEventListener("click", function() {

    var menu = document.getElementById("barra");

    if(menu.style.display === "none") {
        menu.style.display = "block";
        
    }else  {
        menu.style.display = "none";
    } 

});


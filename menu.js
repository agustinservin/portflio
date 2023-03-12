menuAbierto = false;
function mostrarmenu(){
    var menu = document.getElementById('menu');
    menu.style.left="0";
    menuAbierto =true;
}
function cerrarmenu(){ 
    var menu = document.getElementById('menu');
    menu.style.left="-110%";
    menuAbierto= false;
}

//funcion para darkmode
const btnSwitch = document.getElementById('switch');
btnSwitch.addEventListener("click", function(e){ 
    //si tiene la clase dark se la quita y si no la tiene se la pone
    document.body.classList.toggle('light');
    btnSwitch.classList.toggle('active');   
});
  window.onload = function() {
    console.log("Window is loaded!");
    var loader = document.getElementById('loader');
    console.log(loader);
    loader.style.display = 'none';
    $('body').removeClass('hidden');
    $('#nav-menu').removeClass('menu-hidden');
  };

function mostrarmenu(){
    var menu = document.getElementById('menu');
    menu.style.left="0";
}
function cerrarmenu(){ 
    var menu = document.getElementById('menu');
    menu.style.left="-110%";
}
//funcion para darkmode
const btnSwitch = document.getElementById('switch');
btnSwitch.addEventListener("click", function(e){ 
    //si tiene la clase dark se la quita y si no la tiene se la pone
    document.body.classList.toggle('light');
    btnSwitch.classList.toggle('active');   
});
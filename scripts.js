var livros = document.querySelector("#livros");
var link = document.querySelector(".livros_opcoes");

livros.addEventListener('click', function() {

    if(link.style.display === 'block') {
        link.style.display = 'none';
    } else {
        link.style.display = 'block';
    }
});

var icon = document.querySelector(".menu_hamburguer")
var menu = document.querySelector(".lista_menu");

icon.addEventListener('click', function (){

    if(menu.style.display === 'none') {
        menu.style.display = 'block';
    }  else {
        menu.style.display = 'none';
    }
})



let body = document.body
let recetas = document.querySelectorAll('.grid-cajas')
let producto = document.querySelectorAll('h2')
let dark = document.querySelector('#dark-mode')
let light = document.querySelector('#light-mode')

dark.addEventListener('click', function(){
    body.style.backgroundColor = 'black';
    recetas.forEach(caja => {
        caja.style.backgroundColor = 'gray';
    });

    producto.forEach(titulo =>{
        titulo.style.color = 'white';
    })
})

light.addEventListener('click', function(){
    body.style.backgroundColor = 'antiquewhite';
    recetas.forEach(caja => {
        caja.style.backgroundColor = 'white';
    });

    producto.forEach(titulo =>{
        titulo.style.color = '#824431';
    })
})
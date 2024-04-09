let body = document.body
let recetasHome = document.querySelectorAll('.grid-cajas')
let recetas = document.querySelector('#first-column')
let preparationTime = document.querySelector('.div-child')
let ingredients = document.querySelector('#second-column')
let otherRecepis = document.querySelector('#third-column')
let subtitulos = document.querySelector('h1')
let producto = document.querySelectorAll('h2')
let dark = document.querySelector('#dark-mode')
let light = document.querySelector('#light-mode')
let form = document.querySelector('.formulario-main')

dark.addEventListener('click', function(){
    body.style.backgroundColor = 'black';
    
    recetasHome.forEach(caja => {
        caja.style.backgroundColor = 'gray';
    });
    
    producto.forEach(titulo =>{
        titulo.style.color = 'white';
    })
    form.style.backgroundColor = 'gray';
    subtitulos.style.color = 'white'
    recetas.style.backgroundColor ='gray'
    preparationTime.style.backgroundColor = '#979191'
    ingredients.style.backgroundColor = 'gray'
    otherRecepis.style.backgroundColor = 'gray'
    
})

light.addEventListener('click', function(){
    body.style.backgroundColor = 'antiquewhite';
    recetasHome.forEach(caja => {
        caja.style.backgroundColor = 'white';
    });

    producto.forEach(titulo =>{
        titulo.style.color = '#824431';
    })
    form.style.backgroundColor = 'white'
})
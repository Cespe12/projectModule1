let body = document.body

let formulario = document.querySelector('#formulario-main')
let producto = document.querySelectorAll('h2')
let dark = document.querySelector('#dark-mode')
let light = document.querySelector('#light-mode')


dark.addEventListener('click', function(){
    
    body.style.backgroundColor = 'black';
    formulario.style.backgroundColor = 'gray'
    producto.forEach(titulo =>{
        titulo.style.color = 'white';
    })
    
    
})

light.addEventListener('click', function(){
    body.style.backgroundColor = 'antiquewhite';
    formulario.style.backgroundColor = 'white'

    producto.forEach(titulo =>{
        titulo.style.color = '#824431';
    })
    
})
let body = document.body
let nombreMain = document.querySelector('h1')
let divChild = document.querySelector('.div-child')
let firstColumn= document.querySelector('#first-column')
let secondColumn= document.querySelector('#second-column')
let thirdColumn= document.querySelector('#third-column')
let producto = document.querySelectorAll('h2')
let dark = document.querySelector('#dark-mode')
let light = document.querySelector('#light-mode')


dark.addEventListener('click', function(){
    
    body.style.backgroundColor = 'black';
    nombreMain.style.color = 'white'
    divChild.style.backgroundColor = '#808B96'
    firstColumn.style.backgroundColor = 'gray'
    secondColumn.style.backgroundColor = 'gray'
    thirdColumn.style.backgroundColor = 'gray'
    producto.forEach(titulo =>{
        titulo.style.color = 'white';
    })
    
    
})

light.addEventListener('click', function(){
    body.style.backgroundColor = 'antiquewhite';
    nombreMain.style.color = '#824431'
    divChild.style.backgroundColor = 'white'
    firstColumn.style.backgroundColor = 'white'
    secondColumn.style.backgroundColor = 'white'
    thirdColumn.style.backgroundColor = 'white'

    producto.forEach(titulo =>{
        titulo.style.color = '#824431';
    })
    
})
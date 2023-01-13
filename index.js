const  colors = ['Red' , 'Blue','yellow','purple', 'Green']
const btn = document.getElementById('btn')
const color = document.querySelector('.color')


btn.addEventListener('click' , function() { 
    const randomcolor = getRandomColor()
    document.body.style.background = colors[randomcolor]
    color.textContent = colors[randomcolor]
})

function getRandomColor () {
    return Math.floor (Math.random() * colors.length)
}
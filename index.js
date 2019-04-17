document.addEventListener('DOMContentLoaded', function(){

    let changeColorButton = document.querySelector('#changeColor')

    let colorDiv = document.querySelector('#colorDiv')

    changeColorButton.addEventListener('click', function(){

        colorDiv.style.background = '#6772e5'

    })

})
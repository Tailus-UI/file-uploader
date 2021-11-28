let background = document.querySelector('#background')
let bgInput = document.querySelector('#bgfile')
bgInput.addEventListener('change', function(){
    background.src = "../public/images/" + bgInput.files[0].name
})
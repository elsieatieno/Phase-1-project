const form = document.querySelector('form')
const input = document.querySelector('#search_id');
const submit = document.querySelector('#submit');


form.addEventListener('submit',function (event){
    event.preventDefault()
    let form_input = event.target.search_id.value;
    searchCharacter(form_input)
})

function searchCharacter(){
    fetch(`http://localhost:3000/superheroes`)
    .then(res => res.json())
    .then(data => displayCharacter(data))
}

function displayCharacter(data, character_id){
    const character = data.find(character => {character_id === character.id});
    if (character) {
        const display = document.querySelector('#image_display');
        display.innerHTML = ' ';

        const name = document.querySelector('.character_name')
        name.textContent = character.name

        const image = document.querySelector('.character')
        image.src = character.image;
        image.alt = character.name

        display.appendChild(name)
        display.appendChild(image)
        name.addEventListener('click', showInfo)
        }}

function showInfo(){
}



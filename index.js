const form = document.querySelector('form')
const input = document.querySelector('#search_id');
const submit = document.querySelector('#submit');


form.addEventListener('submit',function (event){
    event.preventDefault()
    let form_input = event.target.search_id.value;
    searchCharacter(form_input)
    form.reset()
})

function allCharacters(){
    fetch(`http://localhost:3000/superheroes`)
    .then(res => res.json())
    .then(data => console.log(data))
}

function searchCharacter(search_term){
    fetch(`http://localhost:3000/superheroes?name=${search_term}`)
    .then(res => res.json())
    .then(data => {
        data.length > 0 ?  displayCharacter(data[0]): "Data not found"
    })
}

function displayCharacter(character){
        const display = document.querySelector('#image_display');
        display.innerHTML = ' ';

        const image = document.createElement('img')
        image.classList = 'character'
        image.src = character['images']['lg'];
        image.alt = character.name

        const name = document.createElement('p')
        name.classList = 'character_name'
        name.textContent = character.name


        display.appendChild(name)
        display.appendChild(image)
        name.addEventListener('click', function(){
            showInfo(character)})

    }

function showInfo(character){
    // const information = document.querySelector('#character_info')

    const imageInfo = document.querySelector('#image')
    imageInfo.innerHTML = ' '
    imageInfo.src = character.images.md

    const nameInfo = document.querySelector('#name')
    nameInfo.innerHTML = ' '
    nameInfo.textContent = `Name: ${character.name}`

    const slugInfo = document.querySelector('#slug')
    slugInfo.innerHTML = ' '
    slugInfo.textContent = `Slug: ${character.slug}`

    const statsInfo = document.querySelector('#powerstats')
    const ul = document.querySelector('.powerstats')
    ul.innerHTML = ' '
    document.querySelector('.intelligence span').innerText = character.powerstats.intelligence
    document.querySelector('.strength span').innerText = character.powerstats.strength
    document.querySelector('.speed span').innerText = character.powerstats.speed
    document.querySelector('.durability span').innerText = character.powerstats.durability
    document.querySelector('.power span').innerText = character.powerstats.power
    document.querySelector('.combat span').innerText = character.powerstats.combat
    
    const appearanceInfo = document.querySelector('#appearance')
    const appearance= document.querySelector('.appearance')
    appearance.innerHTML = ' '
    document.querySelector('.gender span').innerText = character.appearance.gender
    document.querySelector('.race span').innerText = character.appearance.race
    document.querySelector('.height span').innerText = character.appearance.height[0]
    document.querySelector('.weight span').innerText = character.appearance.weight[0]
    document.querySelector('.eye_color span').innerText = character.appearance.eyeColor
    document.querySelector('.hair_color span').innerText = character.appearance.hairColor

  

    const workInfo = document.querySelector('#work')
    const work =document.querySelector('.work')
    work.innerHTML = ' '
    document.querySelector('.occupation span').innerText = character.work['occupation']
    document.querySelector('.base span').innerText = character.work.base

    const connectionsInfo = document.querySelector('#connections')
    const connections = document.querySelector('.connections')
    connections.innerHTML = ' '
    document.querySelector('.group_affiliation span').innerText =character.connections['groupAffiliation']
    document.querySelector('.relatives span').innerText =character.connections['relatives']
    

    // like operation
    const likeDiv = document.getElementById('like')
    
    if (likeDiv.innerHTML === '') {
    let likes = 0;
    let dislikes = 0;

    const thumbsUp = document.createElement('span');
    thumbsUp.innerHTML = '&#x1F44D;'; 
    thumbsUp.classList ='thumbs-icon';
    
    const thumbsDown = document.createElement('span');
    thumbsDown.innerHTML = '&#x1F44E;';  
    thumbsDown.classList = 'thumbs-icon';

    const likesCount = document.createElement('span');
    likesCount.textContent = `Likes: ${likes}`;
    const dislikesCount = document.createElement('span');
    dislikesCount.textContent = `Dislikes: ${dislikes}`;


    thumbsUp.addEventListener('click', function() {
        likes++;
        likesCount.textContent = `Likes: ${likes}`;
      });
      
      thumbsDown.addEventListener('click', function() {
        dislikes++;
        dislikesCount.textContent = `Dislikes: ${dislikes}`;
      });

    likeDiv.appendChild(thumbsUp);
    likeDiv.appendChild(thumbsDown);
    likeDiv.appendChild(likesCount);
    likeDiv.appendChild(dislikesCount);
    
}
}


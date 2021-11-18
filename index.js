let dogVote0 = 0 //pip
let dogVote1 = 0 //tess
let dogVote2 = 0 //rizzo


let header = document.querySelector('#page-header');
let dogDescriptions = document.querySelectorAll('.dog-description');
let dogNames = document.querySelectorAll('.dog-name');
let dogImages = document.querySelectorAll('.dog-image')
let columns = document.querySelectorAll('.column')

header.style.textAlign = 'left';


for(let x = 0; x < dogNames.length; x++){

    // if i is even 
    // update color
    if(x % 2 === 0){
        dogNames[x].style.color = 'red'
    }
    else{
        dogNames[x].style.color = 'blue'
    }

    dogNames[x].style.textAlign = 'left';
}

for(let i = 0; i < dogImages.length; i++){
    dogImages[i].style.borderRadius = '50px'
}

for(let i = 0; i < dogDescriptions.length; i++){
    dogDescriptions[i].remove
}

for(let i = 0; i < columns.length; i++){

    let button = document.createElement('button');

    let idName = 'dog-name-' + i;
    button.setAttribute('id', idName)
    button.textContent = 'Vote';
    columns[i].append(button)
}
// Button Ids
// dog-name-0 pip
// dog-name-1 tess 
// dog-name-2 rizzo

let dogButton0 = document.querySelector('#dog-name-0');
dogButton0.addEventListener('click', function (){
    console.log(dogVote0)
})

let dogButton1 = document.querySelector('#dog-name-1');
let dogButton2 = document.querySelector('#dog-name-2');
let dogcolumn0 = document.querySelector('#dog-table-count-0')

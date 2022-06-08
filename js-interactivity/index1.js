// console.log('Hello, World!');
let message = document.querySelector('#message')

function addMovie(e){
    e.preventDefault()
    let inputField = document.querySelector('input')
    
    
    let movie = document.createElement('li')

    let movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value;
    movie.appendChild(movieTitle)
    movieTitle.addEventListener('click', crossOfMovie)

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    deleteBtn.addEventListener('click', deleteMovie);
    movie.appendChild(deleteBtn)

    let list = document.querySelector('ul');
    list.appendChild(movie);

    inputField.value = '';
}

function deleteMovie(e) {
    e.target.parentNode.remove();

    message.textContent = 'Movie Deleted!'
}

function crossOfMovie(e) {
    e.target.classList.toggle('checked')

    if(e.target.classList.contains('checked') === true){
        message.textContent = 'Movie Watched!'
    } else if(e.target.classList.contains('checked') === false){
        message.textContent = 'Movie Added Back!'
    }
    
}

document.querySelector('form').addEventListener('submit', addMovie)

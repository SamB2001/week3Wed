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
    
    message.textContent = `${e.target.parentNode.firstChild.textContent}Movie Deleted!`

    revealMessage()

    e.target.parentNode.remove();
}

function crossOfMovie(e) {
    e.target.classList.toggle('checked')

    if(e.target.classList.contains('checked') === true){
        message.textContent = `${e.target.textContent} watched!`
    } else if(e.target.classList.contains('checked') === false){
        message.textContent = `${e.target.textContent} Added Back!`
    }
    revealMessage()
}
function revealMessage() {
    message.classList.remove('hide')

    setTimeout(() => {
        message.classList.add('hide')
    }, 1000)
}

document.querySelector('form').addEventListener('submit', addMovie)
// lol
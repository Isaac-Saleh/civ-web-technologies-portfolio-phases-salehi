
const API_KEY = 'EAYT+x/0BFmVIio17KkhEQ==31qGXCLlj5174pzL'
const url1 = 'https://api.api-ninjas.com/v1/loremipsum?paragraphs='
const url2 = 'https://api.api-ninjas.com/v1/passwordgenerator?length='
let url = '';

//Grabs the URL based on the Radio button Selection
function urlViaCheckboxSelection() {
    if(document.getElementById('loremipsum').checked) {
        url = url1;

    }
    else if(document.getElementById('password_generator').checked) {
        url = url2;

    }
    else {
        return null;

    }
    return url;
}

//Fetches the LoremIpsum paragraphs
function fetchLoremIpsum(url) {
    let paragraph =document.getElementById('lorem-ipsum').value;
    if(parseInt(paragraph) < 1) {
        alert("Number of Paragraphs cannot be less than 1!")
        return;
    }
    fetch(url + paragraph, {
        method: 'GET',
        headers: {'X-Api-Key': API_KEY},
        contentType: 'application/json'
    })
        .then(function (response) {
            if (response.ok) {
                return response.json()
            }
            throw response.status
        })
        .then(function (data) {
            console.log(data.text)
            document.getElementById('results_header').innerHTML = "Results"
            const postContainer = document.getElementById('api_output')
            postContainer.innerHTML = data.text;
        })
        .catch(error => {
            console.log('Error:', error);
            const errorContainer = document.getElementById('api_error_message');
            errorContainer.innerHTML = (`Error: ${error} API call was Unsuccessful` )

        });
}

function fetchPassword(url) {
    let length = parseInt(document.getElementById('password_length').value)
    console.log(length)
    if(length < 8) {
        alert("We recommend Password Length to be greater than 8 characters")
        return;
    }
    fetch(url + length, {
        method: 'GET',
        headers: {'X-Api-Key': API_KEY},
        contentType: 'application/json'
    })
        .then(function (response){
            if(response.ok){
                return response.json()
            }
            throw response.status;
        })
        .then(function (data) {
            console.log(data)
            document.getElementById('results_header').innerHTML = "Results"
            const postContainer = document.getElementById('api_output');
            postContainer.innerHTML = data.random_password;
        })
        .catch(error => {
            console.log('Error:', error);
            const errorContainer = document.getElementById('api_error_message');
            errorContainer.innerHTML = (`Error: ${error} API call was Unsuccessful` )
        });
}


function onButtonClick (event) {
    event.preventDefault();
    url = urlViaCheckboxSelection();
    if(url === url1) {
        fetchLoremIpsum(url);
    }
    else if(url === url2) {
        fetchPassword(url);
    }
    //This initially existed before I included the CSS to hide the submit buttons without a click. Left in as an
        //example of error handling.
    else alert('You must select an API to call!')

}

function formFieldVisability() {

    if(document.getElementById('loremipsum').checked) {
        document.getElementById('results_header').textContent = 'Results will appear below!'
        document.getElementById('api_output').textContent = '';
        document.getElementById('input_lorem-ipsum_div').classList.remove('disabled')
        document.getElementById('submit_button_lorem-ipsum').classList.remove('disabled')
        document.getElementById('input_password_div').classList.add('disabled')
        document.getElementById('submit_button_password').classList.add('disabled')
    }
    else if(document.getElementById('password_generator').checked) {
        document.getElementById('results_header').textContent = 'Results will appear below!'
        document.getElementById('api_output').textContent = '';
        document.getElementById('input_password_div').classList.remove('disabled')
        document.getElementById('submit_button_password').classList.remove('disabled')
        document.getElementById('input_lorem-ipsum_div').classList.add('disabled')
        document.getElementById('submit_button_lorem-ipsum').classList.add('disabled')
    }
}

document.getElementById('loremipsum').addEventListener('click', formFieldVisability)
document.getElementById('password_generator').addEventListener('click', formFieldVisability)
document.getElementById('submit_button_lorem-ipsum').addEventListener("click", onButtonClick)
document.getElementById('submit_button_password').addEventListener("click", onButtonClick)


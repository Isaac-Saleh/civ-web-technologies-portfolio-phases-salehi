
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



function onButtonClick (event) {
    event.preventDefault();
    url = urlViaCheckboxSelection();
    if(url === url1) {
        fetchLoremIpsum(url); //to write
    }
    else if(url === url2) {
        fetchPassword(url); // to write
    }
    else alert('You must select an API to call!')
}


document.getElementById('submit_button_lorem-ipsum').addEventListener("click", onButtonClick)
document.getElementById('submit_button_password').addEventListener("click", onButtonClick)


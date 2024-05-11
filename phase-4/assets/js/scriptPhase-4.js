
const API_KEY = 'EAYT+x/0BFmVIio17KkhEQ==31qGXCLlj5174pzL'
const url1 = 'https://api.api-ninjas.com/v1/loremipsum?paragraphs='
const url2 = 'https://api.api-ninjas.com/v1/passwordgenerator?length='
let url = '';

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



document.getElementById('form-search').onsubmit = function() {
    window.location = 'https://www.google.com/search?q=' + document.getElementById('text-search').value;
    return false;
}


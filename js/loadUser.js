function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        //call another function and send parameter to use the data and do some more action
        .then(data => displayUser(data))
}

//we have to use parameter to use the data from json 
function displayUser(data) {
    console.log(data);
}
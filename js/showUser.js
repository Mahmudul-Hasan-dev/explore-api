function loadUsers2() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        //call another function and send parameter to use the data and do some more action
        .then(data => displayUser2(data))
}

//we have to use parameter to use the data from json 
function displayUser2(data) {
    // console.log(data);
    for (user of data) {
        console.log(user)
        console.log(user.name)
    }
}

function loadUsers3() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        //call another function and send parameter to use the data and do some more action
        .then(data => displayUser3(data))
}

//we have to use parameter to use the data from json 
function displayUser3(data) {
    // console.log(data);
    const ul = document.getElementById('user-list')
    for (user of data) {
        // console.log(user.name)
        const li = document.createElement('li');
        // li.innerText = 'user';
        //user is from api
        li.innerText = user.name;
        ul.appendChild(li)
    }
}
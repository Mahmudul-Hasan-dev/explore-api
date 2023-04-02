// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))

//example2
const url = 'https://jsonplaceholder.typicode.com/todos/1';
//fetching url api
fetch(url)
    //sending response as parameter and return json converted form as arrow function
    .then(response => response.json())

    //again arrow function json is parameter here
    .then(json => console.log(json))


//example3
function loadData() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
}
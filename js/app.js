// console.log('app.js')

//we have to convert response from fetch to json() and then show the converted form
function loadData2() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => console.log(data))
}
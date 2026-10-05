console.log("Hello there.")

const hours = new Date().getHours();

const isMorning = hours >= 4 && hours < 12;
const isAfternoon = hours >= 12 && hours < 17;
const isEvening = hours >= 17 && hours < 4;

const welcome = document.querySelector("#welcome");

const message = document.createElement("h2");

if (isMorning)
{
    message.textContent = "Good morning!";
}
else if (isAfternoon)
{
    message.textContent = "Good afternoon!";
}
else
{
    message.textContent = "Good evening!";
}

welcome.append(message);

localStorage.setItem("It's a secret to everybody.", "Courage need not be remembered, for it is never forgotten.");

const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()

const next = document.querySelector("#next");
const previous = document.querySelector("#prev");

next.addEventListener("click", () =>{
    currentImage++;
    showImages();
})

previous.addEventListener("click", () =>{
    currentImage--;
    showImages();
})

setInterval(() => {
    currentImage++;
    showImages();
}, 1000)

const todoList = document.querySelector(".todo-list");
const todoControls = document.querySelector("#todo-controls");
const todoButton = todoControls.querySelector("button");
const todoInput = todoControls.querySelector("#new-todo");
const todos = JSON.parse(localStorage.getItem('todo-list')) || [];
const renderTodos = () => {
    todoList.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.text;
        todoList.append(li);
    })
};

renderTodos();

todoButton.addEventListener("click", () => {
    todos.push({ text: todoInput.value, completed: false });
    localStorage.setItem('todo-list', JSON.stringify(todos));
    renderTodos();
    todoInput.value = "";
});
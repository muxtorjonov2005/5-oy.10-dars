const btn = document.getElementById('add');
const input = document.getElementById('input');
const list = document.getElementById('list');
const clear = document.getElementById('clear-all')

function createList(todoText) {
    const li = document.createElement('li');
    li.textContent = todoText;
    list.append(li);
}
btn && btn.addEventListener('click', function(event) {
    event.preventDefault();
    
    const todoText = input.value.trim();
    if (todoText !== '') {
        createList(todoText);
        input.value = '';
    }
})
clear && clear.addEventListener('click', function() {
    list.innerHTML = '';
});
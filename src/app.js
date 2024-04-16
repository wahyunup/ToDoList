const todo = document.getElementById('todo');

// menambahkan fungsi create
function add(){
    let newText = document.getElementById('input');
    let newTodo = `
    <div  class="flex items-center justify-between">
    <span id="text" class="text-sm mr-10" >${newText.value}</span>
    <div class="flex gap-2">
        <button class="p-3 bg-slate-700 hover:bg-green-800 flex text-center items-center rounded-sm"><i class="fa-solid fa-check"></i></button>
        <button id="remove" onclick="clear()" class="p-3 bg-slate-700 hover:bg-red-800 flex text-center items-center rounded-sm"><i class="fa-solid fa-trash"></i></button>
    </div>
</div>`
    todo.insertAdjacentHTML("beforeend", newTodo)

    newText.value = ""
}

// menambahkan fungsi delete
function clear(){
    let removeItems = document.getElementById('remove')
    removeItems.parentNode.removeChild(removeItems);
}

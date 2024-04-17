const todo = document.getElementById('todo');

// menambahkan fungsi create
function add(){
    let newText = document.getElementById('input');
    let newTodo = `
    <div id="remove" class="flex items-center justify-between">
    <p id="slice" class="text-sm mr-10" >${newText.value}</p>
    <div class="flex gap-2">
        <button onclick="sliceItems()" class="p-3 bg-slate-700 hover:bg-green-800 flex text-center items-center rounded-sm"><i class="fa-solid fa-check"></i></button>
        <button onclick="clearItems()" class="p-3 bg-slate-700 hover:bg-red-800 flex text-center items-center rounded-sm"><i class="fa-solid fa-trash"></i></button>
    </div>
</div>`
    todo.insertAdjacentHTML("beforeend", newTodo)

    newText.value = ""
}

// menambahkan fungsi delete
function clearItems(){
    let removeItems = document.getElementById('remove')
    removeItems.parentNode.removeChild(removeItems);
}

//menambahkan fungsi coret
function sliceItems(){
    let sliceingItems = document.getElementById('slice')
    sliceingItems.style.textDecoration = "line-through";
}

const todo = document.getElementById('todo');

// menambahkan fungsi create
function add(){
    let newText = document.getElementById('input');
    let newTodo = `
    <div id="removeItems" class="flex items-center justify-between">
    <p id="sliceItems" class="text-sm mr-10" >${newText.value}</p>
    <div class="flex gap-2">
        <button onclick="sliceItems(this)" class="p-3 bg-slate-700 hover:bg-green-800 flex text-center items-center rounded-sm"><i class="fa-solid fa-check"></i></button>
        <button onclick="clearItems(this)" class="p-3 bg-slate-700 hover:bg-red-800 flex text-center items-center rounded-sm"><i class="fa-solid fa-trash"></i></button>
    </div>
</div>`
    todo.insertAdjacentHTML("beforeend", newTodo)

    newText.value = ""
}

// menambahkan fungsi delete
function clearItems(self){
    self.parentNode.parentNode.parentNode.removeChild(self.parentNode.parentNode);
}   

//menambahkan fungsi coret
function sliceItems(self){
    self.parentNode.parentNode.firstElementChild.style.textDecoration = "line-through"
}
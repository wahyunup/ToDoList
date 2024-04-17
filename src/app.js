// const todo = document.getElementById('todo');

// // menambahkan fungsi create
// function add(){
//     let newText = document.getElementById('input');
//     let newTodo = `
//     <div id="removeItems" class="flex items-center justify-between">
//     <p id="sliceItems" class="text-sm mr-10" >${newText.value}</p>
//     <div class="flex gap-2">
//         <button onclick="sliceItems(this)" class="p-3 bg-slate-700 hover:bg-green-800 flex text-center items-center rounded-sm"><i class="fa-solid fa-check"></i></button>
//         <button onclick="clearItems(this)" class="p-3 bg-slate-700 hover:bg-red-800 flex text-center items-center rounded-sm"><i class="fa-solid fa-trash"></i></button>
//     </div>
// </div>`
//     todo.insertAdjacentHTML("beforeend", newTodo)

//     newText.value = ""
// }

// // menambahkan fungsi delete
// function clearItems(self){
//     self.parentNode.parentNode.parentNode.removeChild(self.parentNode.parentNode);
// }   

// //menambahkan fungsi coret
// function sliceItems(self){
//     self.parentNode.parentNode.firstElementChild.style.textDecoration = "line-through"
//     self.parentNode.parentNode.firstElementChild.style.color = "rgb(22 151 52)";
// }

const todo = document.getElementById('todo');
let counter = 1;

// menambahkan fungsi create
function add(){
    let newText = document.getElementById('input');
    let newTodo = `
    <div id="removeItems${counter}" class="flex items-center justify-between break-all">

        <p id="sliceItems${counter}" class="text-sm mr-10 ">${newText.value}</p>
        <div class="flex gap-2">
            <button onclick="sliceItems(${counter})" class="p-3 bg-slate-700 hover:bg-green-800 flex text-center items-center rounded-sm"><i class="fa-solid fa-check"></i></button>
            <button onclick="clearItems(${counter})" class="p-3 bg-slate-700 hover:bg-red-800 flex text-center items-center rounded-sm"><i class="fa-solid fa-trash"></i></button>
        </div>
    </div>`;
    todo.insertAdjacentHTML("beforeend", newTodo);

    newText.value = "";
    counter++; 
}

// menambahkan fungsi delete
function clearItems(self){
    let itemToRemove = document.getElementById(`removeItems${self}`);
    itemToRemove.parentNode.removeChild(itemToRemove);
}

//menambahkan fungsi coret
function sliceItems(id){
    let itemToSlice = document.getElementById(`sliceItems${id}`);
    
    if (sliceItems = true){
    itemToSlice.style.textDecoration = "line-through 1.2px";
    itemToSlice.style.color = "rgb(134 239 172)";
    } else if (sliceItems = add){
    itemToSlice.style.textDecoration = "none";
    itemToSlice.style.color = "#fff";
    }
    
}
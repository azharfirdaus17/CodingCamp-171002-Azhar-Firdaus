document.addEventListener("DOMContentLoaded", () => {
    const todoForm = document.getElementById("todo-form");
    const todoInput = document.getElementById("todo-input");
    const dateInput = document.getElementById("date-input");
    const todoList = document.getElementById("todo-list");
    const filterInput = document.getElementById("filter-input");

    // Tambah To-Do
    todoForm.addEventListener("submit", function(e) {
        e.preventDefault();

        if (todoInput.value.trim() === "" || dateInput.value === "") {
            alert("Harap isi tugas dan tanggal!");
            return;
        }

        const li = document.createElement("li");
        li.innerHTML = `
            ${todoInput.value} - <small>${dateInput.value}</small>
            <button class="delete-btn">Hapus</button>
        `;

        todoList.appendChild(li);

        todoInput.value = "";
        dateInput.value = "";
    });

    // Hapus To-Do
    todoList.addEventListener("click", function(e) {
        if (e.target.classList.contains("delete-btn")) {
            e.target.parentElement.remove();
        }
    });

    // Filter To-Do
    filterInput.addEventListener("keyup", function(e) {
        const text = e.target.value.toLowerCase();
        document.querySelectorAll("#todo-list li").forEach(item => {
            const task = item.textContent.toLowerCase();
            item.style.display = task.includes(text) ? "flex" : "none";
        });
    });
});
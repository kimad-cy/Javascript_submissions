let contain = document.querySelector(".todos");  // Select the <ul> list
let input = document.querySelector(".add input"); // Select the input field
let searchInput = document.querySelector(".search input"); // Sélection du champ de recherche


input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {  // Check if the key pressed is "Enter"
        event.preventDefault();  // Prevent the default form submission behavior

        let new_todo = document.createElement("li");  // Create a new <li> element
        new_todo.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center","sub-todo"); // Add Bootstrap classes
        new_todo.innerHTML = `<span>${input.value}</span> <i class="far fa-trash-alt delete"></i>`;  // Set text and delete icon

        if (input.value.trim() !== "") {  // Check if input is not empty
            contain.appendChild(new_todo);  // Add the new item to the list
            input.value = "";  // Clear the input field after adding
        }
    }
});


searchInput.addEventListener("input", function () {
    let todoList = document.querySelectorAll(".sub-todo"); // Sélection de tous les <li>
    let filter = searchInput.value.toLowerCase().trim(); // Texte entré par l’utilisateur
  
    todoList.forEach(todo => {
        let spanText = todo.querySelector("span").textContent.toLowerCase();
        todo.classList.toggle("hidden", !spanText.includes(filter));
      });
});




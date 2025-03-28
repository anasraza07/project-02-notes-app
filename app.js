const addNoteForm = document.querySelector("#add-note-form")

const titleInput = document.querySelector("#add-note-form input");
const textInput = document.querySelector("#add-note-form textarea");

const plusNoteBtn = document.querySelector("#plus-note-btn");
const addNoteBtn = document.querySelector("#add-note-btn");
const saveNoteBtn = document.querySelector("#save-note-btn");

const notesContainerElem = document.querySelector("#notes-container");

plusNoteBtn.addEventListener("click", function () {
    notesContainerElem.style.display = "none";
    addNoteForm.style.display = "flex";
})

addNoteBtn.addEventListener("click", function () {
    const title = titleInput.value;
    const text = textInput.value;

    const newNote = document.createElement("div");
    newNote.classList.add("note");
    newNote.innerHTML = `
        <h3 class="note-title">${title}</h3>
        <p class="note-text">${text}</p>
        <div class="actions">
            <input type="color" name="" id="color-input" value="#eeeeee">
            <div class="note-btns">
                <button class="edit-note-btn">Edit</button>
                <button class="delete-note-btn">Delete</button>
            </div>
        </div>
    `;
    notesContainerElem.prepend(newNote);

    titleInput.value = "";
    textInput.value = "";

    // color functionality
    const colorInput = newNote.querySelector("input");
    colorInput.addEventListener("input", function () {
        newNote.style.backgroundColor = colorInput.value;
    })

    // edit functionality
    const editNoteBtn = newNote.querySelector(".edit-note-btn");
    editNoteBtn.addEventListener("click", function () {
        // 1. click krne pr form khul jaye
        notesContainerElem.style.display = "none";
        addNoteForm.style.display = "flex";
        // 2. form ke title main usi note ka title aur form ke text main usi note ka text ho
        titleInput.value = newNote.firstElementChild.innerHTML;
        textInput.value = newNote.firstElementChild.nextElementSibling.innerHTML;
        // 3. aur phr save krne pr wo new values save hojayen
        addNoteBtn.style.display = "none";
        saveNoteBtn.style.display = "inline-block"

        saveNoteBtn.addEventListener("click", function () {
            newNote.firstElementChild.innerHTML = titleInput.value;
            newNote.firstElementChild.nextElementSibling.innerHTML = textInput.value;

            titleInput.value = "";
            textInput.value = "";

            notesContainerElem.style.display = "block";
            addNoteForm.style.display = "none";

            addNoteBtn.style.display = "inline-block";
            saveNoteBtn.style.display = "none"
        })
    })

    // delete functionality
    const deleteNoteBtn = newNote.querySelector(".delete-note-btn");
    deleteNoteBtn.addEventListener("click", function(){
        newNote.remove();        
    })

    addNoteForm.style.display = "none";
    notesContainerElem.style.display = "block";
})

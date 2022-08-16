showBlog();

let addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addTxt.value = "";

    showBlog();

})

function showBlog() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += `
        <div class="card my-2 mx-2 max-width-1 m-auto" >
        <h5 class="card-title-top "> Blog</h5>
            <img src="img/v1.jpg" class="card-img-top max-width-1 m-auto" alt="...">
            
              <p class="card-text">${element}</p>
              <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary max-width-1 m-auto">Delete Blog</button>
              <div class="card-footer text-muted">
              Just now 0 sec
            </div>
          </div>

        `;
    });
    let notesElm = document.getElementById("notes");
    if (notes.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show ! Use "Add Blog" section above to add blog.`;
    }
}

function deleteNote(index) {
    console.log("I am deleting", index);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }

    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    showBlog();
}
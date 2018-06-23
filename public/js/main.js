$("#scrape").on("click", function(event) {
    $.get("/articles/scrape", data => location.reload());
})

$(".save, .unsave").on("click", function(event) {
    const articleId = $(this).data("article-id");
    $.ajax(`/articles/save/${articleId}`, {
        type: "PUT",
        data: {
            save: $(this).data("save")
        }
    }).then(data => location.reload());
})

$(".add-note").on("click", function(event) {
    event.preventDefault();
    const _id = $(this).data("_id");
    const note = $(`#${_id}-input`).val().trim();
    
    if (note) {
        $(`#${_id}-input`).val("");
        $.post("/notes/submit", { _id: _id, note: note }, data => location.reload())
    }
})

$(".delete-note").on("click", function(event) {
    const noteId = $(this).data("note-id");
    console.log(noteId);
    $.ajax(`/notes/delete/${noteId}`, {
        type: "DELETE"
    }).then(data => location.reload());
})
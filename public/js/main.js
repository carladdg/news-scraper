$("#scrape").on("click", function(event) {
    $.get("/scrape", data => location.reload());
})

$(".save, .unsave").on("click", function(event) {
    const _id = $(this).data("_id");
    $.ajax(`/save/${_id}`, {
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
        $.post("/submit", { _id: _id, note: note }, data => location.reload())
    }
})
$(function() {
    $(".activate").on("click", function(event) {
        event.preventDefault();
        console.log("activate CLICKED");
        var id = $(this).data("id");
        var activeState = {
            active: 1
        };
        $.ajax("/api/accounts/" + id, {
            type: "PUT",
            data: activeState
        }).then(function() {
            location.reload();
        });
    });
    $(".deactivate").on("click", function(event) {
        event.preventDefault();
        console.log("deactivate CLICKED");
        var id = $(this).data("id");
        var activeState = {
            active: 0
        };
        $.ajax("/api/accounts/" + id, {
            type: "PUT",
            data: activeState
        }).then(function() {
            location.reload();
        });
    });


    $(".edit").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        document.getElementById(id).className += ' is-active';
    });
    $(".modal-background, .close").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        $(".modal").removeClass("is-active");
    });


});
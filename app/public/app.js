$(".submit").on("click", function (event) {
    //be sure to capture it before it's erased
    event.preventDefault();
    alert("Thank you for submitting to the FriendFinder Survey");
    // Now grab the form elements
    var newFriend = {
        newName: $("#friendName").val().trim(),
        scores: [
            $("#question1").val(),
            $("#question2").val(),
            $("#question3").val(),
            $("#question4").val(),
            $("#question5").val(),
            $("#question6").val(),
            $("#question7").val(),
            $("#question8").val(),
            $("#question9").val(),
            $("#question10").val()
        ]
    };
    $.post("/api/friends", newFriend,
        function (data) {
            // If best friend match is found
            if (data) {
                $('#bestName').text(data.name);
                $('#bestImg').attr("src", data.img).addClass("img-fluid");
                //show modal with best friend match
                $('#executeModal').modal('toggle'); //Div appears, but Ahmed's info still doesn't display
            }
            else {
                alert("Sorry we are having problems, please try again");
            }
            // Clear the form when submitting
            $("#friendName").val("");
            $("#friendImg").val("");
            $("#question1").val("");
            $("#question2").val("");
            $("#question3").val("");
            $("#question4").val("");
            $("#question5").val("");
            $("#question6").val("");
            $("#question7").val("");
            $("#question8").val("");
            $("#question9").val("");
            $("#question10").val("");
        });
});	
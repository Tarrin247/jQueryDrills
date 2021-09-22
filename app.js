$(document).ready(function () {


    $('#btnSubmit').click(function () {

        var str = $('#myInput').val();
        alert(str);

        alert("WOW the button was clicked!");
    })

    $('#btnSubmit').prop('disabled', true);

    $('#myInput').keyup(function (e) {
        if ($('#myInput').val() !== "") {
            $('#btnSubmit').prop("disabled", false);
        }
        else if ($('#myInput').val() == "") {
            $('#btnSubmit').prop("disabled", true);
        }
    })
    $("body").append('<div></div>');
    

    $( "<div><h1>JQuery Core</h1></div>" ).appendTo( "body" );


})


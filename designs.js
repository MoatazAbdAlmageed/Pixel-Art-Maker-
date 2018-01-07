$(document).ready(function () {
    // Select color input
    var color = $('#colorPicker');

    // Select size input
    var width = $('#input_width');
    var height = $('#input_height');
    // on submit form
    $("#sizePicker").submit(function (event) {
        event.preventDefault();
        makeGrid();
    });

    // on click table td
    $("#pixel_canvas").on("click", "td", function (event) {
        $(this).css('background-color', color.val())
    });

    // When size is submitted by the user, call makeGrid()
    function makeGrid() {
        //reet  
        $('#pixel_canvas').html('');

        rows = Number(height.val());
        columns = Number(width.val());

        for (let row = 1; row <= rows; row++) {
            $('#pixel_canvas').append('<tr></tr>');

        }

        for (let col = 1; col <= columns; col++) {

            $('#pixel_canvas tr').append('<td></td>');

        }

    }


})
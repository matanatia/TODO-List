
//check off a specific todo when user click on her
//using the on method so this event will fire also when we add a new <li> to the <ul>
$("ul").on("click","li",function (event) {
    $(this).toggleClass("lineThrough");

    //if the todo was done - has a line throgh the todo, insert the todo to the end of the list
    if ($(this).hasClass("lineThrough")){
        $(this).fadeOut(500, function () {
            $("ul").append($(this));
            $(this).fadeIn(500);
        });
    }
    else {
        //we just remove the line - restor the todo to the top of the list 
        $(this).fadeOut(500, function () {
            $("ul").prepend($(this));
            $(this).fadeIn(500);
        });
    }

    //stop click event to go the parent element after its ends in this element
    event.stopPropagation();
});

//delete a todo when click on her delete button
//using the on method so this event will fire also when we add a new <li> with new <button> to the <ul>
$("ul").on("click","span",function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    //stop click event to go the parent element after its ends in this element
    event.stopPropagation();
});

//get the todo when the user write it in the input box end press enter and add to the list
$("input[type='text']").on("keypress", function (event) {
   //check if the Enter key was clicked
    if (event.which === 13 && $(this).val()!=""){
       //grab todo text from input box
       var todoText = $(this).val();
       //add the new todo to the top of the list
        $("ul").prepend("<li style='display: none;'><span><i class='fa fa-trash'></i></span>" 
        + todoText + "</li>");
        $("ul li").first().fadeIn(500);
       //clear the input box
       $(this).val("");
   }
});

//adding click event to open and close the input box when clicing the edit icon
$(".fa-edit").on("click",function () {
    $("input[type='text']").fadeToggle();
});
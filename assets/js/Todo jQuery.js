// Check off specific todos by clicking
$("ul").on("click", "li", function(){
    //use one line and connect css class
    $(this).toggleClass("completed");

});

// click on X to delete your to do's; use parent to delete the whole li where span is
//use event.stopPropagation to stop at li, else it will include ul, div, body and html
//which is called event bubbling up
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//add click listener to input; .val() captures the value at input
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //capture new todo list, and clear the input box for new entry
        var todoText = $(this).val();
        $(this).val("");
        //create new li then add to ul, insert font awesome, change to single quotes
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>")
    }
});

//add click listener to FAS pencil icon; you can also wrap inside the span class and select that class
$(".fa-pencil-alt").click(function(){
    $("input[type='text']").fadeToggle();
});

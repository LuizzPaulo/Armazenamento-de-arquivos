$(document).ready(function(){

    $('#btnInserir').click(function() {
        $('form').slideDown();
        })

    $('form').on('submit', function(e){

        e.preventDefault(); 

        if (($('#campoUrl').val())!=''){
            $(`<li>${$('#campoUrl').val()}</li>`).appendTo('ul'); 
            $('#campoUrl').val('');
        }
    })
    $('li').click(function () {
        $(this).toggleClass('line-through');
    });
})


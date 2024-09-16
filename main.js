$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();

        $('#btnCancelar').click(function(){
            $('form').slideUp();
        })
        $('id').click(function(){
            alert('deu certo');
        })
        $('#btnInserir').click(function() {
            $('form').slideDown();
        })
        let campo=$('#campoUrl').val();
        if (campo!=''){

            let item=$('<li style="display:none;"></li>');

            $(`<a id="id">${campo}</a>`).appendTo(item);

            $(item).appendTo('ul');

            $(item).fadeIn(1200);
        }
        $('#campoUrl').val('');
    })
})
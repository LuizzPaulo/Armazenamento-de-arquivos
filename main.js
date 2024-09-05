$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();

        $('#btnCancelar').click(function(){
            $('form').slideUp();
        })
        $('#btnInserir').click(function() {
            $('form').slideDown();
        })
        let campo=$('#campoUrl').val();
        if (campo!=''){

            let item=$('<li style="display:none;"></li>');

            $(`<img src="./imagens/arquivo.jpg"></img>`).appendTo(item);

            $(`<div>
                <a href="${$('#campoUrl').val()}"class="link-da-imagem" target="_blank" >${$('#campoUrl').val()}</a>
            </div>`).appendTo(item);

            $(item).appendTo('ul');

            $(item).fadeIn(1200);
        }
        $('#campoUrl').val('');
    })
})
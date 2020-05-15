//inicializar as tabs
$(document).ready(function(){
    $('ul.tabs').tabs();
    $('.modal').modal();
});

//inicializar o dropdown
$('.dropdown-trigger').dropdown();

//funcao para limpar
$('.acao-limpar').on('click', function(){
    $('#idAlcool').val('');
    $('#idGasolina').val('');
});




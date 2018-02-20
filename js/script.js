$(function () {

    $('#senha').bind('keyup', function () { //keyup: aperta a tecla e solta

        //pegar o texto digitado
        var txt = $(this).val();

        var forca = 0;

        //tem que ter letras, números,  caracteres especiais, mínimo de caracteres 7

        if (txt.length > 6) {
            forca += 25;
        }

        var reg = new RegExp(/[a-z]/i); //vai procurar por letras, independente de minúsculo e maiisculo
        if (reg.test(txt)) {
            forca += 25;
        }

        var reg = new RegExp(/[0-9]/i); //procurar por números
        if (reg.test(txt)) {
            forca += 25;
        }

        var reg = new RegExp(/[^a-z0-9]/i); //caracteres especiais
        if (reg.test(txt)) {
            forca += 25;
        }

        if(forca >= 75){
            var aceita = "ACEITA!";
        }
        else{
            var aceita = 'NÃO ACEITA!'
        }

        $('#forca').html('Forca: ' + forca + ' - (' + txt + ') = ' + aceita);
    });

});
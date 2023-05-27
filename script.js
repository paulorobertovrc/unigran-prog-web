$("#botao").click(function() {
    var nome = $("#nomeInput").val();
    var email = $("#emailInput").val();

    if (nome.length && email.length) {
        alert("Obrigado, " + nome + ", seu e-mail " + email + " foi cadastrado com sucesso!");
    } else {
        alert("Por favor, preencha os campos nome e e-mail!");
    }

});

$("#botao").mouseenter(function() {
    $(this).css("font-size", "24px");
    $(this).css("background-color", "orange");
    $(this).css("color", "white");
    $(this).css("border-radius", "100%");
});

$("#botao").mouseleave(function() {
    $(this).css("font-size", "16px");
    $(this).css("background-color", "white");
    $(this).css("color", "black");
    $(this).css("border-radius", "0%");
});

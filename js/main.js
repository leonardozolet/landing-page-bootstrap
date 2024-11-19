$('#telefone').mask('(00) 00000-0000', {
})

$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true
        },
        telefone: {
            required: true
        },
        mensagem: {
            required: true
        },
    },
    submitHandler: function (form) {
        alert("Obrigado pela sua mensagem! Logo mais retornaremos seu contato.");
        form.reset();
    },
    invalidHandler: function (form, validator) {
        alert("Por favor, preencha os campos para enviar!");
    }
})
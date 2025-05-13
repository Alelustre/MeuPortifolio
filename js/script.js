document.querySelector(".contact-form").addEventListener("submit", function() {
  alert("Mensagem enviada com sucesso!");

  if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefoult();

        const formData = new FormData(form);

        fetch(form.action, {
            method: "POST",
            body:formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                alert("mensagem enviada com sucesso");
                form.reset();
            } else {
                alert("Erro ao enviar. Teste novamente.");
            }
        }).catch(error => {
            alert("Erro ao enviar. Verifique sua conexão.");
        });
    });
  }

});


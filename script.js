document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    let campoA = parseFloat(document.getElementById("campoA").value);
    let campoB = parseFloat(document.getElementById("campoB").value);
    let mensagem = document.getElementById("mensagem");

    if (campoB > campoA) {
        mensagem.textContent = "Formulário válido! B é maior que A.";
        mensagem.style.color = "green";
    } else {
        mensagem.textContent = "Erro: O valor de B deve ser maior que A.";
        mensagem.style.color = "red";
    }
});
function somar() {
    const valor1 = parseFloat(document.getElementById('1').value);
    const valor2 = parseFloat(document.getElementById('2').value);
    const resultadoDiv = document.getElementById('resultado');
    const imagemDiv = document.getElementById('imagemTelaCheia');

    // Oculta a imagem se estiver visível
    imagemDiv.style.display = "none";

    if (isNaN(valor1) || isNaN(valor2)) {
        resultadoDiv.textContent = "Por favor, insira dois números válidos.";
        return;
    }

    const resultado = valor1 + valor2;
    resultadoDiv.textContent = "Resultado: " + resultado;

    // Exibe a imagem se o resultado for exatamente 6
    if (resultado === 6) {
        imagemDiv.style.display = "block";
    }
}

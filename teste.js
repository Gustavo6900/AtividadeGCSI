function somar() {
    const valor1 = parseFloat(document.getElementById('1').value);
    const valor2 = parseFloat(document.getElementById('2').value);
    const resultadoDiv = document.getElementById('resultado');

    const imagem6 = document.getElementById('imagem6');
    const imagem10 = document.getElementById('imagem10');

    // Esconde as duas imagens antes de verificar o resultado
    imagem6.style.display = "none";
    imagem10.style.display = "none";

    // Verifica se os valores são válidos
    if (isNaN(valor1) || isNaN(valor2)) {
        resultadoDiv.textContent = "Por favor, insira dois números válidos.";
        return;
    }

    const resultado = valor1 + valor2;
    resultadoDiv.textContent = "Resultado: " + resultado;

    // Exibe imagem conforme o valor do resultado
    if (resultado === 6) {
        imagem6.style.display = "block";
    } else if (resultado === 10) {
        imagem10.style.display = "block";
    }
}

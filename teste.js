function somar() {
    const valor1 = parseFloat(document.getElementById('1').value);
    const valor2 = parseFloat(document.getElementById('2').value);
    const resultadoDiv = document.getElementById('resultado');

    const imagem6 = document.getElementById('imagem6');
    const imagem10 = document.getElementById('imagem10');
    const imagemPadrao = document.getElementById('imagemPadrao');

    // Sempre esconde todas as imagens antes de mostrar alguma
    imagem6.style.display = "none";
    imagem10.style.display = "none";
    imagemPadrao.style.display = "none";

    // Verifica se os inputs são válidos
    if (isNaN(valor1) || isNaN(valor2)) {
        resultadoDiv.textContent = "Por favor, insira dois números válidos.";
        return;
    }

    const resultado = valor1 + valor2;
    resultadoDiv.textContent = "Resultado: " + resultado;

    // Exibe a imagem de acordo com o resultado
    if (resultado === 6) {
        imagem6.style.display = "block";
    } else if (resultado === 10) {
        imagem10.style.display = "block";
    } else {
        imagemPadrao.style.display = "block";
    }
}

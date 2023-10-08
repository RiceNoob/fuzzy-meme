<!DOCTYPE html>
<html>
<head>
<style>
  /* Estilize o botão */
  .rounded-button {
    background-color: #333; /* Cor de fundo cinza escuro */
    border: none; /* Sem borda */
    border-radius: 10px; /* Cantos arredondados */
    padding: 10px 20px; /* Espaçamento interno */
    cursor: pointer; /* Cursor de mão ao passar o mouse */
    color: white; /* Cor do texto */
  }
</style>
</head>
<body>

<!-- Botão com a classe "rounded-button" -->
<button class="rounded-button" onclick="copiarTexto()">Copiar Texto</button>

<!-- Texto que será copiado -->
<input type="text" value="Texto que será copiado" id="textoParaCopiar" style="display: none;">

<script>
function copiarTexto() {
  // Selecionar o elemento de texto
  var texto = document.getElementById("textoParaCopiar");

  // Selecionar o texto dentro do elemento
  texto.select();
  texto.setSelectionRange(0, 99999); /* Para dispositivos móveis */

  // Copiar o texto para a área de transferência
  document.execCommand("copy");

  // Exibir uma mensagem de sucesso (você pode personalizar esta mensagem)
  alert("Texto copiado: " + texto.value);
}
</script>

</body>
</html>

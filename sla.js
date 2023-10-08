<!DOCTYPE html>
<html>
<head>
</head>
<body>

<!-- Botão simples -->
<button id="copiarBotao">Copiar Texto</button>

<script>
document.getElementById("copiarBotao").addEventListener("click", function() {
  // Texto que será copiado
  var textoParaCopiar = "Texto que será copiado";

  // Cria um elemento de área de texto temporário
  var tempInput = document.createElement("textarea");
  tempInput.style.position = "absolute";
  tempInput.style.left = "-9999px";
  tempInput.value = textoParaCopiar;
  document.body.appendChild(tempInput);

  // Seleciona o texto dentro do elemento de área de texto
  tempInput.select();
  tempInput.setSelectionRange(0, 99999);

  // Copia o texto para a área de transferência
  document.execCommand("copy");

  // Remove o elemento de área de texto temporário
  document.body.removeChild(tempInput);

  // Exibe uma mensagem de sucesso (você pode personalizar esta mensagem)
  alert("Texto copiado: " + textoParaCopiar);
});
</script>

</body>
</html>

// Obtener elementos del DOM
const textInput = document.getElementById("textInput");
const reverseBtn = document.getElementById("reverseBtn");
const copyBtn = document.getElementById("copyBtn");
const resultLabel = document.getElementById("resultLabel");

// Función para invertir texto
function reverseString(text) {
  return text.split("").reverse().join("");
}

// Evento botón Reverse
reverseBtn.addEventListener("click", () => {
  const inputText = textInput.value.trim();

  if (inputText === "") {
    resultLabel.textContent = "Introduce un texto.";
    return;
  }

  const reversed = reverseString(inputText);
  resultLabel.textContent = reversed;
});

// Evento botón Copy
copyBtn.addEventListener("click", () => {
  const resultText = resultLabel.textContent;

  if (!resultText) return;

  navigator.clipboard
    .writeText(resultText)
    .then(() => {
      alert("Texto copiado al portapapeles");
    })
    .catch(() => {
      alert("No se pudo copiar el texto");
    });
});

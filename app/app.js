function validateInput() {
  const input = document.getElementById("binaryInput").value;

  if (/[^01]/.test(input)) {
    Toastify({
      text: "Ei, apenas binários (0 e/ou 1)!",
      duration: 2000,
      close: true,
      gravity: "top",
      position: "center",
      backgroundColor: "linear-gradient(to right, #000000, #808080)",
      stopOnFocus: true,
    }).showToast();
    return false;
  }

  return true;
}

function convertBinaryToDecimal() {
  if (!validateInput()) {
    return;
  }

  const binaryInput = document.getElementById("binaryInput").value;
  const decimalOutput = document.getElementById("decimalOutput");

  // conversão
  let decimalValue = 0;
  for (let i = 0; i < binaryInput.length; i++) {
    decimalValue += binaryInput[i] * Math.pow(2, binaryInput.length - 1 - i);
  }

  decimalOutput.value = decimalValue;
}

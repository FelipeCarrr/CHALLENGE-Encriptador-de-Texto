function encrypt(text) {
    let encryptedText = text.replace(/e/g, "enter");
    encryptedText = encryptedText.replace(/i/g, "imes");
    encryptedText = encryptedText.replace(/a/g, "ai");
    encryptedText = encryptedText.replace(/o/g, "ober");
    encryptedText = encryptedText.replace(/u/g, "ufat");
    return encryptedText;
  }
  
  function decrypt(encryptedText) {
    let decryptedText = encryptedText.replace(/enter/g, "e");
    decryptedText = decryptedText.replace(/imes/g, "i");
    decryptedText = decryptedText.replace(/ai/g, "a");
    decryptedText = decryptedText.replace(/ober/g, "o");
    decryptedText = decryptedText.replace(/ufat/g, "u");
    return decryptedText;
  }
  
  const input = document.getElementById("input");
  const result = document.getElementById("result");
  const encryptBtn = document.getElementById("encryptBtn");
  const decryptBtn = document.getElementById("decryptBtn");
  const copyBtn = document.getElementById("copyBtn");
  
  encryptBtn.addEventListener("click", () => {
    const text = input.value.toLowerCase();
    const encryptedText = encrypt(text);
    result.value = encryptedText;
  });
  
  decryptBtn.addEventListener("click", () => {
    const encryptedText = input.value.toLowerCase();
    const decryptedText = decrypt(encryptedText);
    result.value = decryptedText;
  });
  
  copyBtn.addEventListener("click", () => {
    result.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
  });
  
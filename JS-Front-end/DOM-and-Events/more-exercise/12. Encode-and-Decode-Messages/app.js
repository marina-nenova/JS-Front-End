function encodeAndDecodeMessages() {
  let [givenMessage, recievedMessage] = document.querySelectorAll("textarea");

  let [encodeButton, decodeButton] = document.querySelectorAll("button");

  encodeButton.addEventListener("click", () => {
    let givenText = givenMessage.value;
    let encodedMessage = "";
    for (let i = 0; i < givenText.length; i++) {
      let currentCharCode = givenText.charCodeAt(i);
      let newChar = String.fromCharCode(currentCharCode + 1);
      encodedMessage += newChar;
    }
    recievedMessage.value = encodedMessage;
    givenMessage.value = "";
  });

  decodeButton.addEventListener("click", () => {
    let receivedText = recievedMessage.value;
    let decodedMessage = "";
    for (let i = 0; i < receivedText.length; i++) {
      let currentCharCode = receivedText.charCodeAt(i);
      let newChar = String.fromCharCode(currentCharCode - 1);
      decodedMessage += newChar;
    }
    recievedMessage.value = decodedMessage;
  });
}

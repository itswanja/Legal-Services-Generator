function displayLegalHelp(response) {
  new Typewriter("#legal", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generateLegalHelp(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instructions");
  let apiKey = "o644f30b4cbteb80ba67a353f5909861";
  let prompt = `User instructions: Generate legal services about ${instructionInput.value}`;
  let context =
    "You are a legal expert and love to provide legal services. Your mission is to generate a legal help in basic HTML and separate each line with a <br/>. Make sure to follow the user instructions. Sign the legal help with 'SheCodes AI' inside a <strong> element at the end of the legal help and NOT at the beginning";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let legalElement = document.querySelector("#legal");
  legalElement.classList.remove("hidden");
  legalElement.innerHTML = `<div class="generating">⏳Generating Legal Help about ${instructionInput.value}</div>`;
  //make call to API
  axios.get(apiUrl).then(displayLegalHelp);
}
let legalFormElement = document.querySelector("#legal-generator-form");
legalFormElement.addEventListener("submit", generateLegalHelp);

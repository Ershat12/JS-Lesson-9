const textarea = document.querySelector("textarea");
const wordsCounter = document.querySelector("#word-count");
const charsCounter = document.querySelector("#char-count");

textarea.addEventListener("input", () => {
  const input = textarea.value;
  const charsNumber = input.length;
  const wordsNumber = input.split(" ");
  wordsCounter.textContent = "Слов: " + wordsNumber;
  charsCounter.textContent = "Символов: " + charsNumber;
});

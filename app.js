async function translateText() {
  const text = document.getElementById("inputText").value;
  const source = document.getElementById("sourceLang").value;
  const target = document.getElementById("targetLang").value;

  if(!text) {
    alert("Please enter some text to translate.");
    return;
  }

  try {
    const response = await fetch("https://libretranslate.de/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        q: text,
        source: source,
        target: target,
        format: "text"
      })
    });

    const data = await response.json();
    document.getElementById("outputText").value = data.translatedText;
  } catch (error) {
    console.error("Translation error:", error);
    alert("An error occurred while translating.");
  }
}
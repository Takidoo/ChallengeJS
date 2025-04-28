function ChangeImages() {
    var section = document.getElementById("image-section");
    if (section.classList.contains("row-reverse")) {
        section.classList.remove("row-reverse");
        return;
    }
    section.classList.add("row-reverse");
}

async function ChangeQuote() {
    while(true) {
        const reponse = await fetch("https://api.chucknorris.io/jokes/random");
        if (reponse.ok) {
            const data = await reponse.json();
            var quote = document.getElementById("quote");
            quote.textContent = data.value;
        }
        await new Promise(r => setTimeout(r, 5000));
    }
}
ChangeQuote();
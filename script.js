let bigImage = document.querySelector(".bigImage img");

let images = document.querySelectorAll(".smallImage img");

images.forEach((img) => {
    img.addEventListener("click", () => {
        bigImage.src = img.src;
        bigImage.parentElement.children[1].innerHTML = img.parentElement.children[1].innerHTML
        speakText(img.parentElement.children[1].innerHTML)
    })
})

function speakText(text) {
    window.speechSynthesis.cancel();
    var msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.lang = "en-US";
    window.speechSynthesis.speak(msg);
  }
  
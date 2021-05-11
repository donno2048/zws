copy = function() {
    var textArea = document.createElement("textarea");
    textArea.textContent = "\u200B";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
}
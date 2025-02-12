document.addEventListener("DOMContentLoaded", function() {
    const targetDiv = document.getElementById("mex");
    const text = targetDiv.innerHTML; 
    targetDiv.innerHTML = "";
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            if (text.substring(index, index + 4) === '<br>') {
                targetDiv.innerHTML += '<br>';
                index += 4;
                setTimeout(typeWriter, 1000); // Attesa tra una riga e l'altra
            } else {
                const char = text.charAt(index) === ' ' ? '\n' : text.charAt(index);
                targetDiv.innerHTML += char;
                index++;
                setTimeout(typeWriter, 75); // Velocità caratteri
            }
            
        }
    }

    setTimeout(typeWriter, 500); //Attesa prima di partire
});
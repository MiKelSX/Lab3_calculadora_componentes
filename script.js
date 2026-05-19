const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        console.log(boton.textContent);
        const valor = boton.textContent
        //pantalla.textContent = valor;

        if (boton.id === "c"){
            pantalla.textContent = "De nuevo";
            return;
        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!" || pantalla.textContent === "De nuevo" || pantalla.textContent === "ALGO") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        //if (boton.id === "btn_igual"){
            //pantalla.textContent = eval(pantalla.textContent);
            //return;}
        if (boton.id === "btn_igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "Error!";
            }
            return;
        }

        if (pantalla.textContent === "ALGO" || pantalla.textContent === "De nuevo"){
            pantalla.textContent = valor;
        } else {
            pantalla.textContent += valor;
        }

    })
})
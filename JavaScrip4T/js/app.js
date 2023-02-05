
function operarSuma() {
    /* Inputs-Id */
    const uno = document.getElementById("uno");
    const dos = document.getElementById("dos");
    
    const resultado = document.getElementById("result");

    let suma = 0;

    suma = parseInt(uno.value)  +  parseInt(dos.value);
    resultado.value = suma;

}
function operarResta() {
    //
    const uno = document.getElementById("uno");
    const dos = document.getElementById("dos");

    const resultado = document.getElementById("result");

    let resta = 0;

    resta = parseInt(uno.value) - parseInt(dos.value);
    resultado.value = resta;

}
function operarMultiplicar() {
    //
    const uno = document.getElementById("uno");
    const dos = document.getElementById("dos");

    const resultado = document.getElementById("result");

    let mult = 0;

    mult = parseInt(uno.value) * parseInt(dos.value);
    resultado.value = mult;
}
function operarDividir() {
    //
    const uno = document.getElementById("uno");
    const dos = document.getElementById("dos");

    const resultado = document.getElementById("result");

    let div = 0;

    div = parseInt(uno.value) / parseInt(dos.value);
    resultado.value = div;
}

function validar() { // Ejemplo - Alert's and Promt's [alartifyjs.com]
    const inputEdad = document.getElementById("edad");
    let edad = inputEdad.value;

    if (edad<18) {
        /*alert("Usted es menor de edad");*/
        alertify.error('Usted es menor de edad');
    } else {
        /*alert("Usted es mañor de edad");*/
        alertify.success('Usted es mayor de edad');
    }   
}




/*

function Saludar(name) {
    alert("Hola "+ name);
    //document.getElementById("vim").innerHTML =  "Hola "+ name;
    console.log(document.getElementById("p1").innerHTML = "Hola saray");
    }
function preguntarName(name) {
        const vim = document.getElementById("p1");
        var saray = prompt("Ingrese un nombre");
        vim.innerHTML = saray;
        console.log("Hola, ingresaste el nombre '" + vim.innerHTML + "'");
    }
function MathPlus() {
        // Num1 + Num2 = Rs;
        const num1 = document.getElementById("num1");
        const num2 = document.getElementById("num2");
        const Rs = document.getElementById("Rs");

        var n1 = parseInt(prompt("Ingrese un numero"));
        var n2 = parseInt(prompt("Ingrese un numero"));
        var rs = n1 + n2;

        num1.innerHTML = "Num Seleted: " + n1;
        num2.innerHTML = "Num Seleted: " + n2;
        Rs.innerHTML = "Resultado: " + rs;

            alert("El resultado de la suma es " + Rs.innerHTML);
        }

            //input1 + input2 = Rs;
            //input1 - input2 = Rs;
            //input1 * input2 = Rs; [descorcia4@misena.edu.co]
            //input1 / input2 = Rs;
        */
const obj = {
    nombre: "John",
    edad: "50",
    carros: {
        cars_one: "Ford",
        cars_two: "bmw",
        cars_three: "fiat"
    }
}
//Example
var row = "";
var filas = [];
function add() {
    const correo = document.getElementById('correo');
    const descripcion = document.getElementById('descripcion');

    row += `<tr>
              <th scope="row">${correo.value}</th>
              <td>${descripcion.value}</td>
            </tr>`;
    filas.push(row);
    //addr.innerHTML = row;
    /*
    row= `<tr class=${filas.length %2 == 0? "table-success": "table-danger"}>
                <th scope="row">${correo.value}</th>
                <td>${descripcion.value}</td>
                <td><a class="btn btn-primary">actualizar</a></td>
                <td><a class="btn btn-danger">Eliminar</a></td>
              </tr>`;
    filas.push(row);
    //addr.innerHTML = row;*/
}
function leerarray() {
    const add = document.getElementById('add');

    for (let index = 0; index < filas.length; index++) {
        add.innerHTML = filas[index];
        console.log(filas);
    }
}

function personas() {

    /*for(atributos in obj.carros) {
        alert(atributos);
    }*/

    for (let atributos in obj) {
        if (atributos == "carros") {
            for (let valor in obj.carros) {
                document.getElementById("div").innerHTML = obj[atributos][valor];
            }
        }
    }
    //document.getElementById("div").innerHTML = ciclos();
}
var tablasCars = '';
var carsList = [];

function Save() {

    const carsMarca = document.getElementById("carsMarca")
    const carsModelo = document.getElementById("carsModelo")

    tablasCars += `
    <li class="list-group-item">${carsMarca.value}</li>
    <li class="list-group-item">${carsModelo.value}</li>
    `;

    carsList.push(tablasCars);
}
function Log() {
    const arrayCarsFord = document.getElementById('arrayCarsFord');

    for (let i = 0; i < tablasCars.length; i++) {
        arrayCarsFord.innerHTML = tablasCars[i];
        console.log(tablasCars);
    }
}
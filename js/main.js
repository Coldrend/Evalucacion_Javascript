let alumnosTodos = [
    {
        "codigo": "001",
        "nombre": "Rodrigo",
        "nota": "19"
    },
    {
        "codigo": "002",
        "nombre": "Miguel",
        "nota": "11"
    },
    {
        "codigo": "003",
        "nombre": "Paul",
        "nota": "09"
    },
    {
        "codigo": "004",
        "nombre": "Maria",
        "nota": "09"
    },
    {
        "codigo": "005",
        "nombre": "Jose",
        "nota": "16"
    },
    {
        "codigo": "006",
        "nombre": "Paula",
        "nota": "15"
    },
    {
        "codigo": "007",
        "nombre": "Josephina",
        "nota": "06"
    },
    {
        "codigo": "008",
        "nombre": "Mauricio",
        "nota": "18"
    }, {
        "codigo": "009",
        "nombre": "Daniela",
        "nota": "07"
    }, {
        "codigo": "010",
        "nombre": "Pepe",
        "nota": "05"
    }
];

function alumnosLista() {
    document.getElementsByClassName("contenido")[0].innerHTML = `
            ${alumnosTodos.map(function (alumno) {
            return `
                <div class="alumnos">
                <div class="marco">
                    <img src="img/login/login-01.jpg">
                </div>
                <div class="alumno-info">
                    <h3>${alumno.nombre} <span>${alumno.codigo}</span></h3>
                    <h4>Nota: ${aprobado(alumno.nota)}</h4>
                </div>
                </div>
                `
        }
        ).join('')}
        `
}
function aprobado(nota) {
    if (parseInt(nota) > 10) {
        return `<span class="aprobado">${nota}</span>`
    }
    else {
        return `<span class="desaprobado">${nota}</span>`
    }
}

function mostrarTodo() {
    alert(`${alumnosTodos.map(function (alumnoDatos) {
        return alumnoDatos.nombre + " " +
            alumnoDatos.codigo + " " +
            alumnoDatos.nota + "\n" + "\n";
    }
    ).join('')}`);
}

function promedioAlumnos() {
    let promedio=0;
    let contador=0;   
    alumnosTodos.map(function (alumno) {
        promedio += (parseInt(alumno.nota));
        contador++;
    }
    );
    alert(`El promedio general es: ${promedio/contador}`);
}

function notaMayor(){
    let notas = [];
    alumnosTodos.map(function (alumno){
        notas.push(parseInt(alumno.nota));
    })
    alert(`La mayor nota es: ${Math.max.apply(null, notas)}`)
}

function notaMenor() {
    let notas = [];
    alumnosTodos.map(function (alumno) {
        notas.push(parseInt(alumno.nota));
    })
    alert(`La menor nota es: ${Math.min.apply(null, notas)}`)
}

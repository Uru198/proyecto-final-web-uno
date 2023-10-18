let correo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let usuario = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
let contrasena = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

let inputs = document.querySelectorAll('.campos')


//Validaciones

inputs.forEach(function (input) {
    input.addEventListener('keyup', validarCampos)
})

function validarCampos(e) {
    switch (e.target.name) {
        case 'usuario':
            if(usuario.test(e.target.value)){
                console.log("Cumple con la expresion")
                document.getElementById('usuario').classList.add('correcto')
                document.getElementById('usuario').classList.remove('incorrecto')
            }else {
                console.log("No cumple con la expresion")
                document.getElementById('usuario').classList.add('incorrecto')
                document.getElementById('usuario').classList.remove('correcto')
            }
            break;
        case 'correo':
            if(correo.test(e.target.value)){
                console.log("Cumple con la expresion")
                document.getElementById('correo').classList.add('correcto')
                document.getElementById('correo').classList.remove('incorrecto')
            }else {
                console.log("No cumple con la expresion")
                document.getElementById('correo').classList.add('incorrecto')
                document.getElementById('correo').classList.remove('correcto')
            }
            break;
        case 'contrasena':
            if(contrasena.test(e.target.value)){
                console.log("Cumple con la expresion")
                console.log(e)
                document.getElementById('contrasena').classList.add('correcto')
                document.getElementById('contrasena').classList.remove('incorrecto')
            }else {
                console.log("No cumple con la expresion")
                document.getElementById('contrasena').classList.add('incorrecto')
                document.getElementById('contrasena').classList.remove('correcto')
            }
            break;
        default:
            break;
    }
       
}

//registro

   document.getElementById("registroForm").addEventListener("submit", function (e) {
   e.preventDefault();
   var usuario = document.getElementById("usuario").value;
   var correo = document.getElementById("correo").value;
   var contrasena = document.getElementById("contrasena").value;
    
   usuarios.push(usuario);
   usuarios.push(correo);
   usuarios.push(contrasena);
  

   let mensaje = `Usuario  ${usuario} registrado correctamente`;
   const registros = document.getElementById("registros");
   const card = document.createElement("div");
        card.classList.add("card");
        card.textContent = mensaje;
        registros.appendChild(card);
        console.log(usuarios)
        console.log(e)
});

//Inicio sesion
var usuarios = [];
    document.getElementById("inicioSesionForm").addEventListener("submit", function (e) {
        e.preventDefault();
        var usuario1 = document.getElementById("usuario1").value;
        var contrasena1 = document.getElementById("contrasena1").value;
        
        if(usuarios[0] == usuario1 && usuarios[2] == contrasena1){
            let mensaje = `Inicio de seion correctamente`;
        const inicioSesion = document.getElementById("inicioSesion");
        const card = document.createElement("div");
             card.classList.add("inicioSesionCorrecto");
             card.textContent = mensaje;
             inicioSesion.appendChild(card);
             console.log(e) 
        }else {
            let mensaje = `Credenciales incorrectas`;
            const inicioSesion = document.getElementById("inicioSesion");
            const card = document.createElement("div");
                 card.classList.add("inicioSesionIncorrecto");
                 card.textContent = mensaje;
                 inicioSesion.appendChild(card);
                 console.log(e) 
                 console.log(contrasena1) 
        }
       
     });
    
 
//Operaciones

valortotal = [];
Depositos = {}
suma = 0;

    document.getElementById("operacionForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const operacion = document.getElementById("operacion").value;
        const monto = parseFloat(document.getElementById("monto").value);
        const registroOperaciones = document.getElementById("registroOperaciones");
     
        if (isNaN(monto)) {
            alert("Por favor, ingrese un monto válido.");
            return;
        }
     
        let mensaje = `Operación: ${operacion}, Monto: ${monto}`;
     
        const card = document.createElement("div");
        card.classList.add("card");
        card.textContent = mensaje;
        registroOperaciones.appendChild(card);


        //Deposito

        if(operacion == "Deposito"){
            valortotal.push(monto)
            suma = suma + monto;
            const card = document.createElement("p");
            card.classList.add("card");
            
            saldoActual.appendChild(card);
            
            
            let mensaje = `$ ${suma}`;
            document.getElementById("saldoActual").textContent = mensaje;
        }
        //Retiro
        if(operacion == "Retiro"){
            if(monto > suma){
                alert("El monto no puede ser mayor al saldo total");
            return;
            }
            valortotal.push(monto)
            suma = suma - monto;
            const card = document.createElement("p");
            card.classList.add("card");
            
            saldoActual.appendChild(card);
            
            
            let mensaje = `$ ${suma}`;
            document.getElementById("saldoActual").textContent = mensaje;
        }

         //transferencia
         if(operacion == "Transferencia"){
            valortotal.push(monto)
            suma = suma - monto;
            const card = document.createElement("p");
            card.classList.add("card");
            
            saldoActual.appendChild(card);
            
            
            let mensaje = `$ ${suma}`;
            document.getElementById("saldoActual").textContent = mensaje;
   
         }
        console.log(e)
     });

     
    
    


   


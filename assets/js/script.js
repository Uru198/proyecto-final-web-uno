let correo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let usuario = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
let contrasena = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

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
               
            }else {
                console.log("No cumple con la expresion")
                
                document.getElementById('contrasena').classList.add('correcto')
            }
            break;
        default:
            break;
    }
       
}

//animaciones registro/inicio de Sesion

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


//registro

document.getElementById("registroForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var usuario = document.getElementById("usuario").value;
    var correo = document.getElementById("correo").value;
    var contrasena = document.getElementById("contrasena").value;

    if(usuario && correo && contrasena) {
        usuarios.push(usuario);
        usuarios.push(correo);
        usuarios.push(contrasena);
       
        document.getElementById("bienvenideRegistro").style.display = "flex";
             console.log(usuarios)
             console.log(e)
            document.getElementById("usuario").value = "";
            document.getElementById("contrasena").value = "";
            document.getElementById("correo").value = "";

            document.getElementById('usuario').classList.add('borrar')
            document.getElementById('correo').classList.add('borrar')
            document.getElementById('contrasena').classList.add('borrar')
    }else {
        document.getElementById("bienvenideRegistroIncorrecto").style.display = "flex";
    }
     
   
 });
 

//Inicio sesion
var usuarios = [];
    document.getElementById("inicioSesionForm").addEventListener("submit", function (e) {
        e.preventDefault();
        var usuario1 = document.getElementById("usuario1").value;
        var contrasena1 = document.getElementById("contrasena1").value;
        
        if(usuarios[0] == usuario1 && usuarios[2] == contrasena1){
            document.getElementById("sectionHistorial").style.display = "none";
             
        }else {
            
                 console.log(e) 
                 console.log(contrasena1)
                 document.getElementById("bienvenideInicioSesionIncorrecto").style.display = "flex";
        }
        document.getElementById("usuario1").value = "";
        document.getElementById("contrasena1").value = "";
       
     }
     
     );

//Cerrar sesion
let cerrarSesion = document.getElementById("cerrarSesion");
cerrarSesion.addEventListener("click", cerrandoSesion);
function cerrandoSesion() {
  document.getElementById("container").style.display = "flex";
  document.getElementById("containerPrincipal").style.display = "none";
  document.getElementById("logoInicio").style.display = "flex";
  document.getElementById("container-Main-id").style.display = "flex";
  document.getElementById("sectionHistorial").style.display = "none";
  document.getElementById("sectionDepositar").style.display = "none";
  document.getElementById("sectionRetirar").style.display = "none";
  document.getElementById("sectionTransferir").style.display = "none";
}

//Cerrar vista factura
let cerrarFactura = document.getElementById("cerrarFactura");
cerrarFactura.addEventListener("click", CerrarFactura);
function CerrarFactura() {
  document.getElementById("factura").style.display = "none";
}

//Card transferencia
let transferir = document.getElementById("transferir");
transferir.addEventListener("click", Transferir);
function Transferir() {
    document.getElementById("sectionTransferir").style.display = "flex";
    document.getElementById("container-Main-id").style.display = "none";
}

//Card retirar
let retirar = document.getElementById("retirar");
retirar.addEventListener("click", Retirar);
function Retirar() {
    document.getElementById("sectionRetirar").style.display = "flex";
    document.getElementById("container-Main-id").style.display = "none";
}

//Card deposito
let depositar = document.getElementById("depositar");
depositar.addEventListener("click", Depositar);
function Depositar() {
    document.getElementById("sectionDepositar").style.display = "flex";
    document.getElementById("container-Main-id").style.display = "none";
}

//Card historial
let historial = document.getElementById("historial");
historial.addEventListener("click", Historial);
function Historial() {
    document.getElementById("sectionHistorial").style.display = "flex";
    document.getElementById("container-Main-id").style.display = "none";
}



//devolver menu principal hstorial
let cardPrincipal = document.getElementById("logoflecha");
cardPrincipal.addEventListener("click", cardPrincipalMain);
function cardPrincipalMain() {
    document.getElementById("sectionHistorial").style.display = "none";
    document.getElementById("container-Main-id").style.display = "flex";
}

//devolver menu principal depositar
let cardPrincipal2 = document.getElementById("logoflecha2");
cardPrincipal2.addEventListener("click", cardPrincipalMain2);
function cardPrincipalMain2() {
    document.getElementById("sectionDepositar").style.display = "none";
    document.getElementById("container-Main-id").style.display = "flex";
}

//devolver menu principal Retirar
let cardPrincipal3 = document.getElementById("logoflecha3");
cardPrincipal3.addEventListener("click", cardPrincipalMain3);
function cardPrincipalMain3() {
    document.getElementById("sectionRetirar").style.display = "none";
    document.getElementById("container-Main-id").style.display = "flex";
}

//devolver menu principal transferir
let cardPrincipal4 = document.getElementById("logoflecha4");
cardPrincipal4.addEventListener("click", cardPrincipalMain4);
function cardPrincipalMain4() {
    document.getElementById("sectionTransferir").style.display = "none";
    document.getElementById("container-Main-id").style.display = "flex";
}

// vista inicio sesion
let btnIniciar = document.querySelector("#btnIniciar");
btnIniciar.addEventListener("click", iniciarSesion);
function iniciarSesion() {
    var usuario1 = document.getElementById("usuario1").value;
        var contrasena1 = document.getElementById("contrasena1").value;
        
        if(usuarios[0] == usuario1 && usuarios[2] == contrasena1){
          
             
             document.getElementById("bienvenide").style.display = "flex";
    
    setTimeout(() => {
                     document.getElementById("container").style.display = "none";
                    document.getElementById("containerPrincipal").style.display = "flex";
                    document.getElementById("bienvenide").style.display = "none";
                    document.getElementById("logoInicio").style.display = "none";
                    document.getElementById("sectionDepositar").style.display = "none";
                    document.getElementById("sectionHistorial").style.display = "none";
                    document.getElementById("sectionRetirar").style.display = "none";
                    document.getElementById("sectionTransferir").style.display = "none";
    }, 3000);
        }else {
           
                 console.log(e) 
                 console.log(contrasena1)
                 document.getElementById("bienvenideInicioSesionIncorrecto").style.display = "flex"; 
        }

    // if (usuario1 == "Andres") {
    //     // setTimeout(function(){
    //     document.getElementById("bienvenide").style.display = "flex";
    //     // },1000)
    //     setTimeout(() => {
    //       document.getElementById("container").style.display = "none";
    //       document.getElementById("containerPrincipal").style.display = "flex";
    //       document.getElementById("bienvenide").style.display = "none";
    //       document.getElementById("logoInicio").style.display = "none";
    //       document.getElementById("sectionDepositar").style.display = "none";
    //       document.getElementById("sectionHistorial").style.display = "none";
    //       document.getElementById("sectionRetirar").style.display = "none";
    //       document.getElementById("sectionTransferir").style.display = "none";
    //     }, 1000);
    //   } else {
    //     document.getElementById("bienvenideInicioSesionIncorrecto").style.display = "flex";
    //   }
      
}
 
//-----------------------Operaciones--------------//

valortotal = [];
Depositos = {}
suma = 0;



//Deposito
    document.getElementById("operacionForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const operacion = document.getElementById("operacion").value;
        const monto = parseFloat(document.getElementById("monto").value);
        // const numeroTransferencia = + document.getElementById("numeroTransferencia").value;
        const registroOperaciones = document.getElementById("registroOperaciones");
     
        if (isNaN(monto)) {
            alert("Por favor, ingrese un monto válido.");
            return;
        }
     
        // let mensaje = `Operación: ${operacion} <br/> numero de tranferencia: ${numeroTransferencia}<br/> Monto: ${monto}`;
        let mensaje = `Operación: ${operacion} <br/> Monto: $ ${monto}`;
     
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = mensaje;
        registroOperaciones.appendChild(card);

        if(operacion == "Deposito"){
            valortotal.push(monto)
            suma = suma + monto;
            const card = document.createElement("p");
            card.classList.add("card");
            
            saldoActual.appendChild(card);
            
            
            let mensaje = `$ ${suma}`;
            document.getElementById("saldoActual").textContent = mensaje;
            document.getElementById("name").value = "";
            document.getElementById("cedula").value = "";
            document.getElementById("monto").value = "";
            
}});

//Retirar
    document.getElementById("operacionRetirar").addEventListener("submit", function (e) {
            e.preventDefault();
            const operacion2 = document.getElementById("operacion2").value;
            const monto2 = parseFloat(document.getElementById("monto2").value);
            // const numeroTransferencia = + document.getElementById("numeroTransferencia").value;
            const registroOperaciones = document.getElementById("registroOperaciones");
         
            if (isNaN(monto2)) {
                alert("Por favor, ingrese un monto válido.");
                return;
            }
         
            // let mensaje = `Operación: ${operacion} <br/> numero de tranferencia: ${numeroTransferencia}<br/> Monto: ${monto}`;
            let mensaje = `Operación: ${operacion2} <br/> Monto: $ ${monto2}`;
         
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = mensaje;
            registroOperaciones.appendChild(card);  
            if(operacion2 == "Retirar"){
                if(monto2 > suma){
                    alert("El monto no puede ser mayor al saldo total");
                return;
                }
                valortotal.push(monto2)
                suma = suma - monto2;
                const card = document.createElement("p");
                card.classList.add("card");
                
                saldoActual.appendChild(card);

                let mensaje = `$ ${suma}`;
                document.getElementById("saldoActual").textContent = mensaje;
                document.getElementById("name2").value = "";
                document.getElementById("cedula2").value = "";
                document.getElementById("monto2").value = "";
}});

//transferencia
document.getElementById("operacionTransferir").addEventListener("submit", function (e) {
    e.preventDefault();
    const operacion3 = document.getElementById("operacion3").value;
    const monto3 = parseFloat(document.getElementById("monto3").value);
    const numeroTransferencia = + document.getElementById("numeroTransferencia").value;
    const registroOperaciones = document.getElementById("registroOperaciones");
 
    if (isNaN(monto3)) {
        alert("Por favor, ingrese un monto válido.");
        return;
    }
 
    let mensaje = `Operación: ${operacion3} <br/> numero de tranferencia: ${numeroTransferencia}<br/> Monto: $ ${monto3}`;
   
 
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = mensaje;
    registroOperaciones.appendChild(card);  
    //transferencia
    if(operacion3 == "Transferencia"){
        if(monto3 > suma){
            alert("El monto no puede ser mayor al saldo total");
        return;
        }
        valortotal.push(monto3)
        suma = suma - monto3;
        const card = document.createElement("p");
        card.classList.add("card");
        
        saldoActual.appendChild(card);
        
        
        let mensaje = `$ ${suma}`;
        document.getElementById("saldoActual").textContent = mensaje;

        
        document.getElementById("name3").value = "";
        document.getElementById("cedula3").value = "";
        document.getElementById("monto3").value = "";
        document.getElementById("banco").value = "";
        document.getElementById("tipocuenta3").value = "";
        document.getElementById("numeroTransferencia").value = "";
        
        document.getElementById("factura").style.display = "flex";
     }
    console.log(e)
  });
     
     

//Agregar informacion al inicio
function AgregarInformacion() {
        let usuario1 = document.getElementById('usuario1')
        let informacion = document.getElementById('informacion')
        informacion.textContent = usuario1.value  
    }

//Agregar informacion a la factura
function AgregarInformacionfactura() {
    let name3 = document.getElementById('name3')
    let cedula3 = document.getElementById('cedula3')
    let monto3 = document.getElementById('monto3')
    let numeroTransferencia = document.getElementById('numeroTransferencia')
    let banco = document.getElementById('banco')
    let tipocuenta3 = document.getElementById('tipocuenta3')


    let informacionname3 = document.getElementById('informacionname3')
    let informacioncedula3 = document.getElementById('informacioncedula3')
    let informacionmonto3 = document.getElementById('informacionmonto3')
    let informacionnumeroTransferencia = document.getElementById('informacionnumeroTransferencia')
    let informacionbanco = document.getElementById('informacionbanco')
    let informaciontipocuenta3 = document.getElementById('informaciontipocuenta3')

    informacionname3.textContent = name3.value  
    informacioncedula3.textContent = cedula3.value  
    informacionmonto3.textContent = "$ " + monto3.value  
    informacionnumeroTransferencia.textContent = numeroTransferencia.value  
    informacionbanco.textContent = banco.value  
    informaciontipocuenta3.textContent = tipocuenta3.value  
}






     
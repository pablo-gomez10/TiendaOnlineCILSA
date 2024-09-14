// Declaracion de variables

const usuario = document.getElementById("usuario");
const contra = document.getElementById("contra");
const recontra = document.getElementById("recontra");
const mail = document.getElementById("mail");
const form = document.getElementById("form");
const check = document.getElementById("check");

form.addEventListener("submit", e=>{
    // Evitar que valide los valores por Default
    e.preventDefault();
    // Expresion regular para verificar mails
    let verificarMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // Array de condiciones
    var CondicionTexto = document.getElementsByClassName("Condicion");
    
    
    // VERIFICAR USUARIO CON MUCHOS IFS
    /*
    {
        // Contador para ver si se cumplen las 4 condiciones (VER DE MEJORARLO)
        let Ingreso_Exitoso = 0;
                
        // Verifica USUARIO
        if(usuario.value.length < 6){
            Mensaje_Errores += "- USUARIO INCORRECTO: Minimo 6 caracteres\n";
            // alert("El nombre debe tener al menos 6 caracteres");
        }else{
            Ingreso_Exitoso++;
        }

        // Verifica CONTRASEÑA
        if(contra.value.length < 8){
            Mensaje_Errores += "- CONTRASEÑA INCORRECTA: Minimo 8 caracteres\n";
            // alert("La contraseña debe tener al menos 8 caracteres");
        }else{
            Ingreso_Exitoso++;
        }

        // Verifica RECONTRASEÑA
        if(recontra.value != contra.value){
            Mensaje_Errores += "- RECONTRASEÑA INCORRECTA: Deben coincidir las contraseñas\n";
            // alert("Las contraseñas no coinciden");
        }else{
            Ingreso_Exitoso++;
        }

        // Verifica MAIL
        if(!verificarMail.test(mail.value)){
            Mensaje_Errores += "- MAIL INCORRECTO: Mail invalido\n";
            // alert("El mail no es valido");
        }else{
            Ingreso_Exitoso++;
        }

        // Verifica que se cumplan los 4 requisitos
        if(Ingreso_Exitoso >= 4 && check.checked){
            alert("CUENTA CREADA CON EXITO");
            location.reload();
        }else{
            alert(Mensaje_Errores);
            location.reload();
        }

    }
    */

    // VERIFICAR USUARIO MODO ARRAY DE BOOLEANOS
    {
        let Ingreso_Exitoso =  [usuario.value.length >= 6,  // Verificar Usuario
                                contra.value.length >= 8,   // Verificar Contra
                                recontra.value === contra.value && recontra.value != "", // Verificar Recontra
                                verificarMail.test(mail.value), // Verificar Mail
                                ]

        if(Ingreso_Exitoso.every(condicion => condicion)){
            alert("GRACIAS POR REGISTRARTE " + usuario.value);
            location.reload();
        }else{
            if(!Ingreso_Exitoso[0]){ CondicionTexto[0].style.color="red";}
                               else{ CondicionTexto[0].style.color="green";}
            if(!Ingreso_Exitoso[1]){ CondicionTexto[1].style.color="red";}
                               else{ CondicionTexto[1].style.color="green";}
            if(!Ingreso_Exitoso[2]){ CondicionTexto[2].style.color="red";}
                               else{ CondicionTexto[2].style.color="green";}
            if(!Ingreso_Exitoso[3]){ CondicionTexto[3].style.color="red";}
                               else{ CondicionTexto[3].style.color="green";}
        }
    }    
})



/*
2- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura,
año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué
generación pertenece la persona creada y cual es el rasgo característico de esta
generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la
persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
Luego crea la interfaz necesaria para que el usuario pueda crear un objeto
persona, permitiendo ingresar las propiedades mediante un formulario, también
agregar los botones “mostrar generación”, es “mayor de edad” e indicar en un alert
el resultado de la función correspondiente.


*/


let yearPresente = new Date().getFullYear()
class Persona{ 

    constructor(nombre, edad, sexo, peso, estatura, anioNacimiento, dni){
        this.nombre = nombre;  
        this.edad = edad; 
        this.sexo = sexo; 
        this.peso = peso; 
        this.estatura = estatura;
        this.anioNacimiento = anioNacimiento;
         }
      
        mostrarDatos(){
            alert(`<h5>La persona tiene las siguientes características: <h5>
            <ol>
            <li>Nombre: ${this.nombre}</li> 
            <li>Edad: ${this.edad}</li>
            <li>Sexo: ${this.sexo}</li>
            <li>Peso: ${this.peso}</li>
            <li>Estatura: ${this.estatura}</li>
            <li>anioNacimiento: ${this.anioNacimiento}</li>
            </ol>
            `)
           
          }

          

          
        set modificarNombre(nuevoNombre){
            this.nombre = nuevoNombre
        }
        set modificarEdad(nuevoEdad){
            this.edad = nuevoEdad
        }
        set modificarSexo(nuevoSexo){
            this.sexo = nuevoSexo
        }
        set modificarPeso(nuevoPeso){
            this.peso = nuevoPeso
        }
        set modificarEstatura(nuevoEstatura){
            this.estatura = nuevoEstatura
        }
        set modificaranioNacimiento(nuevoanioNacimiento){
            this.anioNacimiento = nuevoanioNacimiento
        }
        set modificardni(nuevodni){
            this.dni = nuevodni
        }
       
        mostrarGeneracion(){
            if(this.anioNacimiento>=1994 && this.anioNacimiento<=2010){
                alert('<p> Tu generacion es la Z y tu rasgo característico es la Irreverencia </p>')
                }else if(this.anioNacimiento>=1981 && this.anioNacimiento<=1993){
                    alert("<p> Tu generacion es la Y y tu rasgo característico es la Frustración </p>")
                }else if(this.anioNacimiento>=1969 && this.anioNacimiento<=1980){
                    alert("<p> Tu generacion es la X y tu rasgo característico es la Obsesión por el éxito </p>")
                }else if(this.anioNacimiento>=1949 && this.anioNacimiento<=1968){
                    alert("<p> Tu generacion es la Baby Boom y tu rasgo característico es la Ambición </p>")
                }else if(this.anioNacimiento>=1930 && this.anioNacimiento<=1948){
                    alert("<p> Tu generación se llama Silent Generation o Niños de la posguerra y tu rasgo característico es la Austeridad </p>")
                }else{
                    alert("<p>Ingresaste un año de nacimiento sin generación determinada </p>");
                }
            }

            validarEdad(){
                if(yearPresente-this.anioNacimiento-this.edad==0 ||yearPresente-this.anioNacimiento-this.edad==1  ){
                    alert('El año de nacimiento y la edad coinciden')
                }else{
                    alert('La edad ingresada no es la correcta para el año de nacimiento ingresado')
                }
            }

            esMayorDeEdad(){
                if(yearPresente - this.anioNacimiento >=18 ){
                    alert(this.nombre+" es mayor de edad.<br>")
                }
                else{
                    alert(this.nombre+" es menor de edad.<br>")
                }
}
}

function newPersona (){
   let persona1 = new Persona ('xxx', 00, 'xxx', 00, 00, 00)
  persona1.modificarNombre = document.getElementsByClassName('inputNombre')[0].value;
  persona1.modificarEdad = document.getElementsByClassName('inputEdad')[0].value;
  persona1.modificarSexo = document.getElementsByClassName('inputSexo')[0].value;
  persona1.modificarPeso = document.getElementsByClassName('inputPeso')[0].value;
  persona1.modificarEstatura = document.getElementsByClassName('inputEstatura')[0].value;
  persona1.modificaranioNacimiento = document.getElementsByClassName('inputanioNacimiento')[0].value;
    persona1.mostrarDatos()
    persona1.mostrarGeneracion()
    persona1.validarEdad()
  }


  function newPersona (){
    let persona1 = new Persona ('xxx', 00, 'xxx', 00, 00, 00, 00)
   persona1.modificarNombre = document.getElementsByClassName('inputNombre')[0].value;
   persona1.modificarEdad = document.getElementsByClassName('inputEdad')[0].value;
   persona1.modificarSexo = document.getElementsByClassName('inputSexo')[0].value;
   persona1.modificarPeso = document.getElementsByClassName('inputPeso')[0].value;
   persona1.modificarEstatura = document.getElementsByClassName('inputEstatura')[0].value;
   persona1.modificaranioNacimiento = document.getElementsByClassName('inputanioNacimiento')[0].value;
     persona1.mostrarDatos()
     persona1.validarEdad()
   }




  function generarDNI(){
           this.dni = Math.round(Math.random() * (99999999 - 1000000) + 1000000);
          alert('<h3> Tu número de DNI asignado es: ' + this.dni)
      }
  


  function verGeneracion (){
        let persona2 = new Persona ('xxx', 00, 'xxx', 00, 00, 00, 00)
        persona2.modificaranioNacimiento = document.getElementsByClassName('inputanioNacimiento')[0].value;
        persona2.mostrarGeneracion()
        
       }

function MayoriaDeEdad (){

    let persona3 = new Persona ('xxx', 00, 'xxx', 00, 00, 00, 00)
        persona3.modificarNombre = document.getElementsByClassName('inputNombre')[0].value;
        persona3.modificaranioNacimiento = document.getElementsByClassName('inputanioNacimiento')[0].value;
        persona3.esMayorDeEdad()

}



 


 

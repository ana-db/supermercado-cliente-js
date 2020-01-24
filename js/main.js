console.log('Empieza script');

//seleccionar elementos por id:
let inputEL = document.getElementById('idProducto');
let botonEL = document.getElementById('boton');
let resultadoEL = document.getElementById('resultado');

//registrar evento click para el boton:
botonEL.addEventListener("click", ()=>{

    console.debug('Click boton');
    if(inputEL.value == ""){
        resultadoEL.innerHTML = 'Escribe algo por favor';
    }else{

        //hacemos la petición (es la request asincrona, la llamada a Ajax)
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {

            /*
            console.debug("state: " + xhr.readyState);
            console.debug("status: " + xhr.status);
            console.debug("responseText: " + xhr.responseText);
            */

            if(xhr.responseState === 4){ // esperamos a completar la peticion

                //convetimos de texto a json:
                let producto = JSON.parse(xhr.responseText);

                if(xhr.status === 200){

                    //pintamos en texarea
                    //resultadoEL.innerHTML = "id= " + producto.id + " nombre=" + producto.nombre;
                    resultadoEL.innerHTML = `id= ${producto.id} nombre=${producto.nombre}`;

                }

                if (xhr.status === 404 ){ 
                    resultadoEL.innerHTML = `No encontrado`;
                }   
 
            }

          }
           
          //xhr.open('Get', `http://localhost:3000/productos/${inputEL.value}`); //metodo a la uri indicada
          xhr.open('Get', `http://localhost:8080/supermercado-rest/producto/${inputEL.value}`);
          xhr.send(); //cuidado es ASINCRONO !!

        resultadoEL.innerHTML = inputEL.value;
    }


});


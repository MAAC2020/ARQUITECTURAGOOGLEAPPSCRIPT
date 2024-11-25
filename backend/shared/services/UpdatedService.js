/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
//funcion para actualizar un registro
//@param {Object Stringify} formData: es el objeto en stringify de los valores a modificar
//@param {String} nombreTabla: es el nombre de la tabla a consultar
//@param {String} idBaseDeDatos: es el id de la base de datos
//@param {String} campoRecibido: es el nombre del campo columna a que se va a tomar como referencia de llave primaria
//@param {String} valorRecibido: es el valor donde va a hacer coincidencia con el campo recibido
function UpdatedService(argumentos) {
  console.log("ARGUMENTOS UpdatedService");
  console.log(argumentos);

  try {
    let [data, nombreTabla, idBaseDeDatos, campo, valor] = argumentos;

    //si no se pasa el valor en el parametro entonces se asigna un valor de undefined
    valor = valor == undefined ? "undefined" : valor;

    if (valor == "undefined") {
      throw new Error("No se esta pasando el parametro del valor a actualizar");
    }

    //crear error en caso de que el valor sea un valor a actualizar como primary key sea un valor vacio
    if (valor.toString().trim() == "") {
      throw new Error("El valor a actualizar, es un valor vacio");
    }

    //si todo sale bien
    //obtener la hoja de calculo y asignar el nombre de la hoja de calculo
    const [sheetHoja] = asignarNombreHojaDeCalculo(nombreTabla, idBaseDeDatos);
    //data convertida
    // let data = JSON.parse(formData);

    //arreglo de rango de datos
    const dataSheetHoja = sheetHoja.getDataRange().getValues();

    //obtener la primera fila de la tabla
    //[columna1,columna2,columna3]
    let [arregloPrimeraFilaBaseDeDatos] = obtenerPrimeraRegistroCalculo(
      nombreTabla,
      idBaseDeDatos
    );

    let posicionIdentificador;
    //recorrer la primera fila de la base de datos
    arregloPrimeraFilaBaseDeDatos.map((el, index) => {
      //si la columna es igual a id entonces
      if (el == campo) {
        //posicion del id en la base de datos
        posicionIdentificador = index;
      }
    });

    //si el campo se encuentra en la base entonces es diferente de undefined
    if (posicionIdentificador != undefined) {
      //va a buscar en la hoja el campo y el valor donde haya una coincidencia
      let indiceRegistroEncontrado = dataSheetHoja.findIndex(
        (el) => el[posicionIdentificador] == valor
      );

      console.log(indiceRegistroEncontrado + "INDICE DEL REGISTRO ENCONTRADO");
      //si encuentra el registro va a encontrar el indice
      if (indiceRegistroEncontrado != -1) {
        let arregloDeObjetoRecibido = Object.keys(data);
        //fila del registro encontrado
        let fila = indiceRegistroEncontrado + 1;

        //se recorre la primera fila de la base de datos
        arregloPrimeraFilaBaseDeDatos.map((columna, indice) => {
          //se busca la fila recibida con la propiedad recibida
          let busqueda = arregloDeObjetoRecibido.find(
            (propiedad) => propiedad == columna
          );
          //si encuentra el valor de la columna en la propiedad recibida entonces
          if (busqueda) {
            //si encuentra la busqueda entonces
            let columna = indice + 1;
            let datoUpdate = data[arregloPrimeraFilaBaseDeDatos[indice]];
            //@param {Int} fila: posicion fila
            //@param {Int} columna: posicion columna
            //@param {String} datoUpdate: es el dato actualizar en la base de datos
            let rango = sheetHoja
              .getRange(fila, columna)
              .setValue(datoUpdate.toString());
            //si encuentra el rango a actualizar
            console.log("SI LO ENCONTRE ESTOY DENTRO DE BUSQUEDA");
          }
        });

        return JSON.stringify({
          status: "success",
          message: "Registro Actualizado",
        });
      } else {
        console.warn("No se encuentra el registro");

        return JSON.stringify({
          status: "warning",
          message:
            "No se encuentra el registro para actualizarlo con el valor->" +
            valor,
        }); // Retornar error en caso de fallo
      }
    } else {
      //provocar error en caso de que el campo recibido a actualizar como llave primaria no exista
      //si ocurre algun error retorna error
      throw new Error(
        "El campo que se esta introducciendo como campo recibido no existe en la base de datos" +
          campo
      );
    }
  } catch (error) {
    console.error(error);
    //si ocurre algun error retorna error
    //@return {"String"} error: es la alerta de que el campo que se esta introduciendo a buscar no existe en la
    return JSON.stringify({
      status: "error",
      message: "UpdatedService hubo un error",
      error: error.toString(), // Devuelve el mensaje de error para depuración
    }); // Retornar error en caso de fallo
  }
}

function probar() {
  //data, nombreTabla, idBaseDeDatos, campo, valor

  const data = {
    nombre: "Shelly",
    numero_de_contrato: "1213112311111111",
  };

  const nombreTabla = "Contrato";

  const idBaseDeDatos = "17zUGH7Tw0_fM7lrW38WC85MuirZv2CJUF4THqkSmODo";

  const campo = "cedula";

  const valor = "2342342344";

  const post = UpdatedService([data, nombreTabla, idBaseDeDatos, campo, valor]);

  console.log("<<<<<<POST>>>>>>>");
  console.log(post);
}

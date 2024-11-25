/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
//funcion para obtener coincidencia del registro de un campo recibido con su valor correspondiente
//si se pasa el "id" o una "cedula" como campo recibido va a ser una busqueda en la base de datos respecto a ello.
//@param {Array} argumentos: son los argumentos que se le pasan a la funcion
//@param {String} nombreTabla: es el nombre de la tabla a consultar
//@param {String} idBaseDeDatos: es el id de la base de datos
//@param {String} campo: es el nombre del campo columna a que se va a tomar como referencia de llave primaria
//@param {String} valor: es el valor donde va a hacer coincidencia con el campo recibido
function FindByFielService(argumentos) {
  try {
    const [nombreTabla, idBaseDeDatos, campo, valor] = argumentos;

    //si el valor es vacio

    if (valor.toString().trim() == "") {
      throw new Error(
        "El valor a buscar es vacio, porfavor introduce un valor correcto"
      );
    }

    //si todo sale bien
    //obtener la hoja de calculo y asignar el nombre de la hoja de calculo
    const [sheetHoja] = asignarNombreHojaDeCalculo(nombreTabla, idBaseDeDatos);

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
      let busquedaRegistro = dataSheetHoja.find(
        (el) => el[posicionIdentificador] == valor
      );

      //si encuentra el registro
      if (busquedaRegistro) {
        //objeto donde se almacenara el objeto para retornar del registro encontraro como propiedad : valor
        let objectoRegistroEncontrado = {};

        //recorrer la primera fila para retornar esos valores en un objeto
        arregloPrimeraFilaBaseDeDatos.map((columna, index) => {
          if (columna != "") {
            let valor = busquedaRegistro[index];
            //añadir al objeto la propiedad valor
            objectoRegistroEncontrado[columna] = valor;
          }
        });

        //@return {Object} objectoRegistroEncontrado: es el registro en formato de objeto con las propiedades y valores
        // return JSON.stringify(objectoRegistroEncontrado);

        return JSON.stringify({
          status: "success",
          message: "Registro encontrado",
          data: objectoRegistroEncontrado,
        });
      } else {
        console.warn("No se encuentra el registro");

        //@return {"String"} warning: es la alerta de que el registro no se encontro
        return JSON.stringify({
          status: "warning",
          message: "El registro a buscar no se encontro en la base de datos",
          //   error: error.toString(), // Devuelve el mensaje de error para depuración
        }); // Retornar error en caso de fallo
      }
    } else {
      console.error(
        "el campo que se esta introduciendo no existe en la primera fila de la base de datos"
      );

      //@return {"String"} error: es la alerta de que el campo que se esta introduciendo a buscar no existe en la
      //primera fila de la base de datos

      return JSON.stringify({
        status: "error",
        message:
          "El campo que se esta introduciendo a buscar no existe en la primera fila de la base de datos",
      }); // Retornar error en caso de fallo

      // Lanzar un error si el campo no se encuentra en la primera fila por lo tanto se iria en el catch
      //   throw new Error(
      //     "El campo que se está introduciendo no existe en la primera fila de la base de datos"
      //   );
    }
    //}
  } catch (error) {
    console.error(error);
    //si ocurre algun error retorna error
    //@return {"String"} error: es la alerta de que el campo que se esta introduciendo a buscar no existe en la
    return JSON.stringify({
      status: "error",
      message: "FindByFieldService hubo un error",
      error: error.toString(), // Devuelve el mensaje de error para depuración
    }); // Retornar error en caso de fallo
  }
}



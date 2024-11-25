/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// InsertService.gs
/* 
En este archivo manejaríamos las funciones específicas para insertar datos en la base de datos, utilizando las funciones auxiliares que hemos creado en otros archivos.
*/
// Insertar datos en la hoja de cálculo
function InsertService(argumentos) {
  try {
    const [formData, nombreSheet, idBaseDeDatos] = argumentos;
    //si todo sale bien
    //obtener la hoja de calculo y asignar el nombre de la hoja de calculo
    const [sheetHoja] = asignarNombreHojaDeCalculo(nombreSheet, idBaseDeDatos);

    //data convertida
    let data = formData;

    //obtener la primera fila de la tabla
    //[columna1,columna2,columna3]
    let [arregloPrimeraFilaBaseDeDatos] = obtenerPrimeraRegistroCalculo(
      nombreSheet,
      idBaseDeDatos
    );

    //agregar lastModified al formulario (agregar la fecha de modificacion)

    //@param {Array} arregloPrimeraFilaBaseDeDatos: es el arreglo de la primera fila de las columnas de la base de datos
    //@param {Object} data: son los datos del formulario en objeto
    let get = ordenarObjeto(arregloPrimeraFilaBaseDeDatos, data);

    console.log("<<<<<<get>>>>>>>>");
    console.log(get);

    //si el status es success
    if (get.status == "success") {
      //obtener la primera fila
      const objetoOrdenado = get.data;
      //acceder a los valores del objeto para insertar
      let arregloDatos = Object.values(objetoOrdenado);

      console.log("ARREGLO DATOS", arregloDatos);

      //@param [Array] arregloDatos: es el arreglo de datos a insertar
      let post = sheetHoja.appendRow(arregloDatos);

      console.log("POST", post);
    } else {
      throw new Error(
        "Error al ordenar el objeto, por lo tanto no ha sido posible insertar"
      );
    }

    return JSON.stringify({
      status: "success",
      message: "Insert Service Datos insertados correctamente",
    }); // Retornar éxito si la inserción es correcta
  } catch (error) {
    console.error(error); // Log de error en caso de fallo
    return JSON.stringify({
      status: "error",
      message: "Insert Service Hubo un problema al insertar los datos",
      error: error.toString(), // Devuelve el mensaje de error para depuración
    }); // Retornar error en caso de fallo
  }
}

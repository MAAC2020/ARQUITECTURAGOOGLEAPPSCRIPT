/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// DataUtils.gs

//funcion para obtener la primera fila de cada tabla
function obtenerPrimeraRegistroCalculo(nombreSheet, idBaseDeDatos) {
  console.log("nombreSheet");
  console.log(nombreSheet);

  console.log("idBaseDeDatos");
  console.log(idBaseDeDatos);
  //obtener la hoja de calculo
  const [sheetHoja] = asignarNombreHojaDeCalculo(nombreSheet, idBaseDeDatos);

  //arreglo de rango de datos
  const dataSheetHoja = sheetHoja.getDataRange().getValues();

  const dataSheetHojaFirstData = dataSheetHoja.shift();

  //@return [Array] dataSheetHojaFirstData: es el arreglo de la primera fila nombres de las columnas
  return [dataSheetHojaFirstData];
}

//ACTUALIZADA 2023

// Ordenar un objeto según los nombres de las columnas de la base de datos
//funcion para ordenar el objeto
//funcion para ordenar el objeto
//@param {Array} arregloPrimeraFilaBaseDeDatos: es el arreglo de la primera fila de las columnas de la base de datos
//@param {Object} formData: son los datos del formulario en objeto
function ordenarObjeto(arregloPrimeraFilaBaseDeDatos, formData) {
  try {
    let arregloPropiedadesRecibidas = [];

    for (let key in formData) {
      arregloPropiedadesRecibidas.push(key);
    }

    //arreglo de los datos ordenados
    let arregloDatosOrdenados = [];
    arregloPrimeraFilaBaseDeDatos.map((columna) => {
      //buscar la columna en la propiedad del objeto recibido
      let busqueda = arregloPropiedadesRecibidas.find(
        (propiedad) => propiedad.trim() == columna.trim()
      );
      //si la columna se encuentra en la propiedad entonces añadirl los datos al arreglo ordenado
      if (busqueda) {
        arregloDatosOrdenados.push(formData[columna]);
      } else {
        //añadir un espacio vacio
        arregloDatosOrdenados.push("");
      }
    });
    //@return {Array} arregloDatosOrdenados: son los valoreses el objeto del formulario ordenado

    return {
      status: "success",
      message: "Datos insertados correctamente",
      data: arregloDatosOrdenados, // Aquí puedes incluir los datos resultantes si es necesario
    };
    // return [arregloDatosOrdenados];
  } catch (error) {
    {
      console.error(error);
      return JSON.stringify({
        status: "error",
        message: "Hubo un problema al insertar los datos",
        error: error.toString(), // Devuelve el mensaje de error para depuración
      });
    }
  }
}

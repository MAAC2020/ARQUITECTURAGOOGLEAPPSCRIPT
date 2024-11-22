/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// DBManager.gs
/* 
Funciones de conexión a la base de datos y obtención de hojas de cálculo. Esto las hace reutilizables en cualquier parte del código que necesite interactuar con Google Sheets.
*/
//conexion a la base de datos
function conexionBaseDeDatos(idBaseDeDatos) {
  //const { idBaseDeDatos } = parametrosGlobales();
  //se abre la conexion de la base de datos
  const BD = SpreadsheetApp.openById(idBaseDeDatos);
  //@return {object} BD: se retorna la base de datos
  return { BD };
}

//asignar nombre
//@param {String} nombreSheet: es el nombre de la hoja de calculo
function asignarNombreHojaDeCalculo(nombreSheet = "", idBaseDeDatos = "") {
  //se obtiene la base de datos
  const { BD } = conexionBaseDeDatos(idBaseDeDatos);
  //se obtiene el nombre de la base de datos
  const sheetHoja = BD.getSheetByName(nombreSheet);
  //@return {Array} sheetHoja: hoja de la base de datos
  return [sheetHoja];
}
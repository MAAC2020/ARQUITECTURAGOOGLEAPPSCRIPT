/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function obtenerContratosService() {
  //desestructurar parametros globales
  const { idDataBase, nameTables } = parametrosGlobales();

  const { idBaseDeDatos } = idDataBase;
  const { tablaContrato } = nameTables;
  //@param {String} nombreTabla: es el nombre de la tabla a consultar
  //@param {String} idBaseDeDatos: es el identificador de la base de datos
  const get = ReadAllService([tablaContrato, idBaseDeDatos]);

  console.log(get);

  //@return {Object stringify} get: son los datos de la tabla contrato
  return get;
}

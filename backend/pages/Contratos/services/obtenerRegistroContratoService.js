/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
function obtenerRegistroContratoService(argumentos) {
  console.log("ARGUMENTOS");
  console.log(argumentos);

  console.log("------------");
  const {campoSearch, valorCampo} = argumentos;
  //desestructurar parametros globales
  const { idDataBase, nameTables } = parametrosGlobales();

  const { idBaseDeDatos } = idDataBase;
  const { tablaContrato } = nameTables;
  //@param {String} nombreTabla: es el nombre de la tabla a consultar
  //@param {String} idBaseDeDatos: es el id de la base de datos
  //@param {String} campo: es el nombre del campo columna a que se va a tomar como referencia de llave primaria
  //@param {String} valor: es el valor donde va a hacer coincidencia con el campo recibido
  const post = FindByFielService([
    tablaContrato,
    idBaseDeDatos,
    campoSearch,
    valorCampo,
  ]);

  //@return {Stringify}: se retorna la respuesta de la busqueda
  return post;
}

/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
//funcion para actualizar el registro contrato
function actualizarRegistroContratoService(argumentos) {
  console.log("EJECUTAR FUNCION ContratoService");

  const { data, campoSearch, valorCampo } = argumentos;

  //desestructurar parametros globales
  const { idDataBase, nameTables } = parametrosGlobales();

  const { idBaseDeDatos } = idDataBase;
  const { tablaContrato } = nameTables;

  const put = UpdatedService([
    data,
    tablaContrato,
    idBaseDeDatos,
    campoSearch,
    valorCampo,
  ]);

  //@return {Stringify} put: es la respuesta de la actualizacion
  return put;
}

function probaraaarrrr(argumentos) {
  console.log("EJECUTANDO BACKEND");
  console.log(argumentos);
  return JSON.stringify("Probando");
}

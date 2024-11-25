/* eslint-disable no-unused-vars */
// Views/pages/Inicio/controllers/RegistroController.js
import api from "../../../../api/api";

//funcion para obtener la lista de los contratos
export const obtenerContratosController = async () => {
  try {
    //en caso de que se pase mas de un argumento desde el front, se pasa separado por comas
    return await api("obtenerContratosService");
  } catch (error) {
    console.error(
      "Error al obtener el registro del contrato: funcion obtenerContratosController",
      error
    );
    throw error;
  }
};

//funcion para obtener obtener el registro del contrato
export const obtenerRegistroContratoController = async (datos) => {
  try {
    // const { campoSearch, valorCampo } = datos;
    //en caso de que se pase mas de un argumento desde el front, se pasa separado por comas
    return await api("obtenerRegistroContratoService", datos);
  } catch (error) {
    console.error(
      "Error al obtener el registro del contrato: funcion obtenerRegistroContratoController",
      error
    );
    throw error;
  }
};

//funcion para obtener obtener el registro del contrato
export const actualizarRegistroContratoController = async (datos) => {
  try {
    // const { dataUpdate, campoSearch, valorCampo } = datos;

    // console.log("<<<DATOS>>>");
    // console.log(datos);

    //en caso de que se pase mas de un argumento desde el front, se pasa separado por comas
    return await api("actualizarRegistroContratoService", datos);
  } catch (error) {
    console.error(
      "Error al obtener el registro del contrato: funcion actualizarRegistroContratoController",
      error
    );
    throw error;
  }
};

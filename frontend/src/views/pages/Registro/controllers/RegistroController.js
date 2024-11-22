// Views/pages/Inicio/controllers/RegistroController.js
import api from "../../../../api/api";
export const insertarRegistroContratoController = async (datos) => {
  try {
    //en caso de que se pase mas de un argumento desde el front, se pasa separado por comas
    return await api("insertarRegistroContratoService", datos);
  } catch (error) {
    console.error("Error al insertar el registro del contrato: funcion insertarRegistroContrato", error);
    throw error;
  }
};

// Views/pages/Inicio/controllers/RegistroController.js
import api from "../../../../api/api";

export const obtenerContratosController = async () => {
    try {
      //en caso de que se pase mas de un argumento desde el front, se pasa separado por comas
      return await api("obtenerContratosService");
    } catch (error) {
      console.error("Error al obtener el registro del contrato: funcion obtenerContratosController", error);
      throw error;
    }
  };
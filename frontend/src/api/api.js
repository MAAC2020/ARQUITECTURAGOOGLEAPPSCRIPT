/* 
componente api.js en una capa de "servicio" para realizar las llamadas al backend, 
lo cual puede integrarse con los controladores para manejar la lógica de datos y actualizaciones.
*/

/* eslint-disable no-undef */
//@param {String} funcion: es el nombre de la funcion a llamar del backend
//@param {Object} argumentos: se pasa un objeto que se envia al backend, recibe de 1 a muchos parametros
//es importante que sea un objecto
const api = async (funcion, argumentos) => {
  let promesa = new Promise((resolve, reject) => {
    google.script.run
      .withSuccessHandler((el) => {
        //se parse la respuesta y se retorna
        //@return success: todo correcto
        //se retorna resolve si todo esta correcto
        resolve(JSON.parse(el));
      })
      .withFailureHandler((err) => {
        //se parse la respuesta y se retorna
        //@return error: hubo algun error
        //se retorna reject si hay algun error en la promesa
        reject(JSON.parse(err));
      })
      // eslint-disable-next-line no-unexpected-multiline
      [funcion](argumentos);
  });

  let respuesta = await promesa;
  //@return respuesta
  return respuesta;
};

export default api;

/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
//importante cuando se utilize una funcion en el backend que tenga interaccion con el front end, se
//debe de identificar como Servicio, y es importante colocar la palabra Service al final
function insertarRegistroContratoService(argumentos) {
  try {
    //desestructurar parametros globales
    const { idDataBase, nameTables } = parametrosGlobales();

    const { idBaseDeDatos } = idDataBase;
    const { tablaContrato } = nameTables;

    console.log("<<<ARGUMENTOS>>");
    console.log(argumentos);

    let { formData } = argumentos;

    // formData = JSON.stringify(formData);
    console.log("Datos a insertar");
    console.log(formData);

    //@param {Object stringify} formData: son los datos el formulario en formato Json, en un objeto
    //@param {String} tablaContrato: es el nombre de la tabla a la cual se va a insertar
    //@param {idBaseDeDatos} es el id de la base de datos
    let post = InsertService([formData, tablaContrato, idBaseDeDatos]);

    post = JSON.parse(post);

    console.log("<<<<POOOSSSTT>>>>>>");
    console.log(post);

    //si hay un error al insertar
    if (post.status == "error") {
      //provocar error al backend
      throw new Error(post.message);
    } else {
      //@return {Stringify} post: es la respuesta de la inserccion
      return JSON.stringify({
        status: "success",
        message: "Datos insertados correctamente",
        //   data: post, // Aquí puedes incluir los datos resultantes si es necesario
      });
    }
  } catch (error) {
    console.error(error);
    return JSON.stringify({
      status: "error",
      message: "Hubo un problema al insertar los datos",
      error: error.toString(), // Devuelve el mensaje de error para depuración
    });
  }
}

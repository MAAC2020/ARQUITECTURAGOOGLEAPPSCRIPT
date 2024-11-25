/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
// import { insertarRegistroContratoController } from "../controllers/RegistroController";
import { useEffect } from "react";
//importacion sweet alert
import Swal from "sweetalert2";
import { actualizarRegistroContratoController } from "../../controllers/ContratosController";

const FormEditarContrato = ({ initialValues }) => {
  // Configuración de React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // Para limpiar el formulario
  } = useForm({
    defaultValues: initialValues, // Usar valores iniciales recibidos por props
  });

  // Efecto para reinicializar el formulario si los valores iniciales cambian
  useEffect(() => {
    reset(initialValues);
  }, [initialValues, reset]);

  // Función para manejar el envío del formulario
  const onSubmit = async (dataParams) => {
    console.log("datos actualizar");
    console.log(dataParams);

    const datos = {
      data: dataParams,
      campoSearch: "id",
      valorCampo: dataParams.id,
    };
    // const post = await probando(datos);

    const post = await actualizarRegistroContratoController(datos);

    console.log("POST");

    console.log(post);
    // const confirmacion = await Swal.fire({
    //   title: "Estas seguro que deseas Actualizar?",
    //   showDenyButton: true,
    //   showCancelButton: false,
    //   confirmButtonText: "Guardar",
    //   denyButtonText: `Cancelar`,
    // }).then((result) => {
    //   return result;
    // });

    // //si se apreto el boton de confirmacion
    // if (confirmacion.isConfirmed == true) {
    //   try {
    //     const post = await actualizarRegistroContratoController(datos);
    //     console.log("<<<<POST>>>");
    //     console.log(post);
    //     if (post.status == "success") {
    //       Swal.fire({
    //         title: "Actualizado",
    //         text: "Se ha actualizado la información",
    //         icon: "success",
    //       });
    //       reset(); // Limpia el formulario tras un envío exitoso

    //       //redireccionar a la vista home
    //     } else {
    //       Swal.fire({
    //         title: "Hubo un error al actualizar!",
    //         text: "Lo sentimos no se pudo actualizar!",
    //         icon: "error",
    //       });
    //     }
    //   } catch (error) {
    //     Swal.fire({
    //       title: "Hubo un error al actualizar!",
    //       text: "Lo sentimos no se pudo actualizar!",
    //       icon: "error",
    //     });
    //   }
    // }
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <form
            className="rounded border p-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="display-2 mb-5">Editar Contrato</h1>

            <Row>
              {/* NÚMERO DE CONTRATO */}
              <div className="col-12 col-md-4 mb-4 fw-bold">
                <label className="form-label">NÚMERO DE CONTRATO</label>
                <input
                  type="text"
                  className={`form-control ${
                    errors.numero_de_contrato ? "is-invalid" : ""
                  }`}
                  placeholder="NÚMERO DE CONTRATO:"
                  {...register("numero_de_contrato", {
                    required: "El número de contrato es obligatorio",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Solo se permiten números",
                    },
                  })}
                />
                {errors.numero_de_contrato && (
                  <div className="invalid-feedback">
                    {errors.numero_de_contrato.message}
                  </div>
                )}
              </div>

              {/* NOMBRE */}
              <div className="col-12 col-md-4 mb-4 fw-bold">
                <label className="form-label">NOMBRE</label>
                <input
                  type="text"
                  className={`form-control ${
                    errors.nombre ? "is-invalid" : ""
                  }`}
                  placeholder="NOMBRE:"
                  {...register("nombre", {
                    required: "El nombre es obligatorio",
                    pattern: {
                      value: /^[a-zA-Z\s]+$/,
                      message: "Solo se permiten letras y espacios",
                    },
                  })}
                />
                {errors.nombre && (
                  <div className="invalid-feedback">
                    {errors.nombre.message}
                  </div>
                )}
              </div>

              {/* CÉDULA */}
              <div className="col-12 col-md-4 mb-4 fw-bold">
                <label className="form-label">CÉDULA</label>
                <input
                  type="text"
                  className={`form-control ${
                    errors.cedula ? "is-invalid" : ""
                  }`}
                  placeholder="CÉDULA:"
                  {...register("cedula", {
                    required: "La cédula es obligatoria",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Debe tener exactamente 10 dígitos",
                    },
                  })}
                />
                {errors.cedula && (
                  <div className="invalid-feedback">
                    {errors.cedula.message}
                  </div>
                )}
              </div>

              {/* CIUDAD DE EXPEDICIÓN */}
              <div className="col-12 col-md-4 mb-4 fw-bold">
                <label className="form-label">CIUDAD DE EXPEDICIÓN</label>
                <input
                  type="text"
                  className={`form-control ${
                    errors.ciudad_de_expedicion ? "is-invalid" : ""
                  }`}
                  placeholder="CIUDAD DE EXPEDICIÓN:"
                  {...register("ciudad_de_expedicion", {
                    required: "La ciudad es obligatoria",
                  })}
                />
                {errors.ciudad_de_expedicion && (
                  <div className="invalid-feedback">
                    {errors.ciudad_de_expedicion.message}
                  </div>
                )}
              </div>

              {/* BOTÓN DE ENVÍO */}
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-success">
                  Guardar
                </button>
              </div>
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default FormEditarContrato;

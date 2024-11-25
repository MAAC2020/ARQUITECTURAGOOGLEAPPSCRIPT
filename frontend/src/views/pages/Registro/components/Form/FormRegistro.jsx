/* eslint-disable no-unused-vars */
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
// Importación del controlador
import { insertarRegistroContratoController } from "../../controllers/RegistroController";
//importacion de generacion de id
import { v4 as uuidv4 } from "uuid";
//importacion de alerta
import Swal from "sweetalert2";

const FormRegistro = () => {
  // Configuración de React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // Para limpiar el formulario
  } = useForm();

  // Función para manejar el envío del formulario
  const onSubmit = async (data) => {
    try {
      const datos = { formData: { id: uuidv4(), ...data } };
      const post = await insertarRegistroContratoController(datos);

      if (post.status === "success") {
        Swal.fire({
          title: "Guardado",
          text: "Se ha guardado la información",
          icon: "success",
        });

        // alert("Guardado correctamente");
        reset(); // Limpia el formulario tras un envío exitoso
      } else {
        Swal.fire({
          title: "Lo Sentimos!",
          text: "Hubo un error al insertar!",
          icon: "warning",
        });
      }
    } catch (error) {
      console.error("Error al registrar el contrato:", error);
      // alert("Hubo un error al insertar correctamente");

      Swal.fire({
        title: "Hubo un error al insertar!",
        text: "Lo sentimos no se pudo insertar!",
        icon: "error",
      });
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <form
            className="rounded border p-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="display-2 mb-5">Registrar Contrato</h1>

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

              {/* Otros campos como CARGO, DEPENDENCIA, etc. */}
              {/* Repetir estructura para cada campo */}

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

export default FormRegistro;

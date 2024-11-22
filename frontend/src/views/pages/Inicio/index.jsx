import { Link } from "react-router-dom";

const Inicio = () => {
  //funcion para llamar al backend para registrar los contratos
  // const registrarContrato = () => {};

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3 mt-5">
            <div className="card">
              <img
                src="https://media.istockphoto.com/id/2022650788/es/foto/business-performance-monitoring-and-evaluation-concept-take-an-assessment-business-man-using.jpg?s=2048x2048&w=is&k=20&c=7Y8A7xk4-UjUEHXwfUp9xYOuBP20GP_j56mE8YoogBg="
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <Link to="/registrocontrato" className="btn btn-primary">
                  Registro Contrato
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-3 mt-5">
            <div className="card">
              <img
                src="https://cdn.pixabay.com/photo/2017/06/13/12/28/pen-2398693_1280.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <Link to="/contratos" className="btn btn-primary">
                  Ver Contratos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inicio;

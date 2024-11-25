/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { obtenerContratosController } from "../../controllers/ContratosController";
import { Col, Container, Row } from "react-bootstrap";

import { useNavigate } from "react-router-dom"; // Importar el hook de navegación
import DataTable from "react-data-table-component";

const TablaContratos = () => {
  const navigate = useNavigate(); // Inicializa el hook para navegar

  useEffect(() => {
    //cuando se carga la vista se llama la data de la vista
    getDataTable();
  }, []);

  //columnas a utilizar de la tabla
  // const columns = [
  //   {
  //     name: "Numero de Contrato",
  //     selector: (row) => row.title,
  //   },
  //   {
  //     name: "Nombres",
  //     selector: (row) => row.year,
  //   },
  //   {
  //     name: "Cedula",
  //     selector: (row) => row.year,
  //   },
  //   {
  //     name: "Ciudad De Expedición",
  //     selector: (row) => row.year,
  //   },
  // ];

  // const data = [
  //   {
  //     id: 1,
  //     title: "Beetlejuice",
  //     year: "1988",
  //   },
  //   {
  //     id: 2,
  //     title: "Ghostbusters",
  //     year: "1984",
  //   },
  // ];
  const [data, setData] = useState([
    // {
    //   id: 1,
    //   numero_de_contrato: 123456,
    //   nombre: "juan1",
    //   cedula: 1212124121,
    //   ciudad_de_expedicion: "ciudad111",
    //   cargo: "",
    //   dependencia: "",
    // },
    // {
    //   id: 2,
    //   numero_de_contrato: 123457,
    //   nombre: "juan2",
    //   cedula: 1212124122,
    //   ciudad_de_expedicion: "ciudad112",
    //   cargo: "",
    //   dependencia: "",
    // },
    // {
    //   id: 3,
    //   numero_de_contrato: 123458,
    //   nombre: "juan3",
    //   cedula: 1212124123,
    //   ciudad_de_expedicion: "ciudad113",
    //   cargo: "",
    //   dependencia: "",
    // },
    // {
    //   id: 4,
    //   numero_de_contrato: 123459,
    //   nombre: "juan4",
    //   cedula: 1212124124,
    //   ciudad_de_expedicion: "ciudad114",
    //   cargo: "",
    //   dependencia: "",
    // },
    // {
    //   id: 5,
    //   numero_de_contrato: 123460,
    //   nombre: "juan5",
    //   cedula: 1212124125,
    //   ciudad_de_expedicion: "ciudad115",
    //   cargo: "",
    //   dependencia: "",
    // },
    // {
    //   id: 6,
    //   numero_de_contrato: 123461,
    //   nombre: "juan6",
    //   cedula: 1212124126,
    //   ciudad_de_expedicion: "ciudad116",
    //   cargo: "",
    //   dependencia: "",
    // },
    // {
    //   id: 7,
    //   numero_de_contrato: 123462,
    //   nombre: "juan7",
    //   cedula: 1212124127,
    //   ciudad_de_expedicion: "ciudad117",
    //   cargo: "",
    //   dependencia: "",
    // },
    // {
    //   id: 8,
    //   numero_de_contrato: 123463,
    //   nombre: "juan8",
    //   cedula: 1212124128,
    //   ciudad_de_expedicion: "ciudad118",
    //   cargo: "",
    //   dependencia: "",
    // },
    // {
    //   id: 9,
    //   numero_de_contrato: 1,
    //   nombre: "jose armando araujo castano",
    //   cedula: 1094945571,
    //   ciudad_de_expedicion: "2024-01-12T05:00:00.000Z",
    //   cargo: "",
    //   dependencia: "",
    // },
    // {
    //   id: 10,
    //   numero_de_contrato: 1,
    //   nombre: "jose armando araujo castano",
    //   cedula: 1094945571,
    //   ciudad_de_expedicion: "2024-01-12T05:00:00.000Z",
    //   cargo: "",
    //   dependencia: "",
    // },
    // {
    //   id: 11,
    //   numero_de_contrato: 1,
    //   nombre: "a",
    //   cedula: 3103103100,
    //   ciudad_de_expedicion: "armenia",
    //   cargo: "",
    //   dependencia: "",
    // },
  ]);
  //funcion para obtener los datos de la tabla
  const getDataTable = async () => {
    try {
      const post = await obtenerContratosController();
      console.log("POST");
      console.log(post);
      if (post.status == "success") {
        setData(post.data);
      } else {
        //se puede mostrar algun error o inicializar la tabla vacia
      }

      console.log("<PPOST>");
      console.log(post);
      //asignar los datos a la tabla

      console.log(post);
    } catch (error) {
      console.error("Error al obtener el contrato:", error);
      //   alert("Hubo un error al obtener correctamente");
    }
  };

  //editar contrato
  const handleEdit = (id) => {
    // Redirigir a la ruta de edición con el parámetro ID
    navigate(`/contratos/editar/${id}`);
  };

  return (
    <Container fluid>
      <Row className="mt-5">
        <Col>
          <div className="table-responsive p-2 rounded shadow-none p-3 mb-5 bg-body-tertiary rounded">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">numero_de_contrato</th>
                  <th scope="col">nombre</th>
                  <th scope="col">cedula</th>
                  <th scope="col">ciudad_de_expedicion</th>
                  <th scope="col">Editar</th>
                </tr>
              </thead>
              <tbody>
                {data.length > 0 &&
                  data.map((el, index) => (
                    <>
                      <tr>
                        <td>{el.numero_de_contrato}</td>
                        <td>{el.nombre}</td>
                        <td>{el.cedula}</td>
                        <td>{el.ciudad_de_expedicion}</td>
                        <td>
                          <button
                            className="btn btn-primary"
                            //se para el parametro del id a buscar
                            onClick={() => handleEdit(el.id)}
                          >
                            Editar
                          </button>
                        </td>
                      </tr>
                    </>
                  ))}
              </tbody>
            </table>
          </div>

          {/* <h1>Tabla Contratos</h1>

          {data.length > 0 && <DataTable columns={columns} data={data} />} */}
        </Col>
      </Row>
    </Container>
  );
};

export default TablaContratos;

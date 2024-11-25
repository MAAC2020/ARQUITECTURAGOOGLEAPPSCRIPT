// Frontend/Views/pages/Contrato/EditarContrato.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { obtenerRegistroContratoController } from "./controllers/ContratosController";
import FormEditarContrato from "./components/Form/FormEditarContrato";

const EditarContrato = () => {
  // Recibir parámetro
  const { id } = useParams();

  // Estado para los datos del formulario
  const [dataForm, setDataForm] = useState(null);

  useEffect(() => {
    obtenerInformacionContratoPorId();
  }, []);

  // Función para obtener la información del contrato por ID
  const obtenerInformacionContratoPorId = async () => {
    const datos = {
      campoSearch: "id",
      valorCampo: id,
    };
    const get = await obtenerRegistroContratoController(datos);

    if (get.status == "success") {
      console.log("DATA");
      console.log(get.data);
      setDataForm(get.data); // Asignar el valor al estado
    }

    console.log("<<<OBTENER REGISTRO>>>");
    console.log(get);
  };

  console.log("<<ID RECIBIDO>>", id);

  return (
    <>
      {/* Solo renderiza el formulario cuando dataForm tiene datos */}
      {dataForm && <FormEditarContrato initialValues={dataForm} />}
    </>
  );
};

export default EditarContrato;

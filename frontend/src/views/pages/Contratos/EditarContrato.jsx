// Frontend/Views/pages/Contrato/EditarContrato.jsx
import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

const EditarContrato = () => {
  //recibir parametro
  const { id } = useParams();

  console.log(id);

  return <div>EditarContrato</div>;
};

export default EditarContrato;

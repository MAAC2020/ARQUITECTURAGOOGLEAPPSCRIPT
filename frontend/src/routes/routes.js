// routes/routes.js
// import Inicio from '../views/pages/Inicio';

import Inicio from "../views/pages/Inicio";
import Registro from "../views/pages/Registro";
import Contratos from "../views/pages/Contratos";
import EditarContrato from "../views/pages/Contratos/EditarContrato";
import NotFound from "../views/pages/NotFound";
// import Autentificacion from "../views/pages/Autentificacion";

const routes = [
  { path: "/", component: Inicio }, //dejarla igual que userCodeAppPanel, esto es para trabajarlo en el localhost
  { path: "/userCodeAppPanel", component: Inicio }, //ruta de google appscript que se detecta como principal /
  { path: "/registrocontrato", component: Registro },
  { path: "/contratos", component: Contratos },
  { path: "/contratos/editar/:id", component: EditarContrato }, // Subruta de edición de contratos con parámetro ID
  { path: "*", component: NotFound }, //cuando se accede a una ruta que no existe automaticamente se redirecciona a 404 not found
];

export default routes;

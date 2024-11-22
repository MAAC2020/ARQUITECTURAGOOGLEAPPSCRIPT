// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// import { Menu } from "antd";
// import "./App.css";

// import Rooter from "./views/layouts/Rooter";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import appRoutes from "./routes/routes"; // Importa las rutas
import Navbar from "./views/layouts/Navbar";
// import Footer from "./views/layouts/Footer";
function App() {
  // const pathname = window.location.pathname;
  // console.log("Ruta Actual:", pathname);
  return (
    <Router>
      <Navbar />
      <Routes>
        {appRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;

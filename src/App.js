
// import logo from "./logo.svg";
// import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Diong from "./Component/Navbar"
// import Hom from "./Component/Home";
// import Blog from "./Component/Blogs";
// import Contat from "./Component/Contact";
import Connect from "./Component/Connection";
import Deconnex from "./Component/Deconnexion";
import Inscrip from "./Component/inscription";
import Mot from "./Component/Motpasse";
function App() {
  return (
    <div className=''>
      <Diong />
      <BrowserRouter>
        <Routes>
          <Route index element={<Connect />} />
          <Route path='Inscrip' element={<Inscrip />} />
          <Route path='Deconnex' element={<Deconnex />} />
          <Route path='Mot' element={<Mot />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;

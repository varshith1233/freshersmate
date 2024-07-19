import Home from "./pages/Home";
import Createblog from "./pages/Createblog";
import Material from "./pages/Material";
import Singlepost from "./components/Singlepost";
import Sem from "./pages/Sem";
import UporDown from "./pages/UporDown";
import Signin from "./pages/Signin";
import Signup from './pages/Signup'
import Footer from './components/Footer'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Uploaddata from "./pages/Uploaddata";
import Uploadpapers from "./pages/Uploadpapers";
import Questionpapermain from "./pages/Questionpapermain";
import Singlepdfdata from "./components/Singlepdfdata";

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
       <Routes> 
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/uploadpapers" element={<Uploadpapers/>}></Route>
        <Route path="/blog" element={<Createblog/>}></Route>
        <Route path="/material" element={<Material/>}></Route>
        <Route path='/singlepost/:id' element={<Singlepost/>}></Route>
        <Route path="/semester" element={<Sem/>}></Route>
        <Route path="/downorup" element={<UporDown/>}></Route>
        <Route exact path="/" element={<Signin/>}></Route>
        <Route path="/register" element={<Signup/>}></Route>
        <Route path="/upload" element={<Uploaddata/>}></Route>
        <Route path="/homepapers" element={<Questionpapermain/>}></Route>
        <Route path="/singlepdfdata/:id" element={<Singlepdfdata/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter> 
    </div>
  );
}

export default App;

import * as React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import NavBar from "./Component/Navbar";
import NotFound from "./Component/NotFound";
import Cart from "./Component/Cart";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <ToastContainer />
      <NavBar />
      <div className="content-container">
        <Routes>
        <Route path="/OnlineShopping" element={<Home/>} /> 
          <Route path="/cart" element={<Cart/>} />
          <Route path="/not-found" element={<NotFound/>} />
          <Route path="/home" exact element={<Home/>} />
          <Route path="/" exact element={<Home/>} />
          <Route path="*" exact element={<NotFound/>} />
        </Routes>
      </div>
    </BrowserRouter>
  </div>

  );
}

export default App;
//     <div className="App">
//   <Button variant="text">Text</Button>
// <Button variant="contained">Contained</Button>
//     </div>
{/* <>
<Button variant="outlined">Outlined</Button>
<Product></Product>
<Counter></Counter>
</> */}
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";

import AddDog from "./pages/AddDog";
import DogDetails from "./pages/DogDetails";
import Dogs from "./pages/Dogs";
import EditDog from "./pages/EditDog";
import Home from "./pages/home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

function Adopt() {
  return(

    <BrowserRouter>
    <Navbar></Navbar>
    
    <Routes>
      <Route path="/dogs/add" element={<AddDog />}></Route>
      <Route path="/dogs/:id" element={<DogDetails />}></Route>
      <Route path="/dogs" element={<Dogs />}></Route>
      <Route path="/dogs/:id/edit" element={<EditDog />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="*" element={<NotFound />}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/register" element={<Register/>}></Route>

    </Routes>
    
    </BrowserRouter>

  );
  
  
}

export default Adopt;
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./features/Auth/context/ProtectedRoute";

import Navbar from "./components/Navbar";

import AddDog from "./pages/AddDog";
import DogDetails from "./pages/DogDetails";
import Dogs from "./pages/Dogs";
import EditDog from "./pages/EditDog";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";


import { Login } from "./features/Auth/Login";
import { Register } from "./features/Auth/Register";

function Adopt() {
  return(

    <BrowserRouter>
    <Navbar></Navbar>
    
    <Routes>
      <Route path="/dogs/add" element={<ProtectedRoute>
        <AddDog />
        </ProtectedRoute>}>
      </Route>
      <Route path="/dogs/:id" element={<ProtectedRoute>
        <EditDog />
        </ProtectedRoute>}>
      </Route>
      <Route path="/dogs" element={<Dogs />}></Route>
      <Route path="/dogs/:id/edit" element={<EditDog />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="*" element={<NotFound />}></Route>
      <Route path="/profile" element={<ProtectedRoute>
        <Profile />
        </ProtectedRoute>}>
      </Route>
      <Route path="/register" element={<Register/>}></Route>

    </Routes>
    
    </BrowserRouter>

  );
  
  
}

export default Adopt;
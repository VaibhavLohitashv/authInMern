import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "../context/userContext";
<<<<<<< HEAD
=======
import Dashboard from "./pages/Dashboard";
>>>>>>> f535f35 (This is the first commit of this project in main branch. The repo consists of client and server folders.)

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Navbar />
      <Toaster position="bottom" toastOptions={{ duration: 2000 }}></Toaster>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
<<<<<<< HEAD
=======
        <Route path="/dashboard" element={<Dashboard />} />
>>>>>>> f535f35 (This is the first commit of this project in main branch. The repo consists of client and server folders.)
      </Routes>
    </UserContextProvider>
  );
}

export default App;

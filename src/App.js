import React from "react";
import RoutesApp from "./routes";
import { AuthProvider } from "./contexts/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <AuthProvider>
      <RoutesApp />
      <ToastContainer />
    </AuthProvider>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import AddUserPage from "./pages/AddUserPage";
import EditUserPage from "./pages/EditUserPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UsersPage />} />
          <Route path="/add-user" element={<AddUserPage />} />
          <Route path="/edit-user/:id" element={<EditUserPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

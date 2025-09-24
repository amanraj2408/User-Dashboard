import React from "react";
import { useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";
import { addUser } from "../services/api";

export default function AddUserPage() {
  const navigate = useNavigate();

  const handleSubmit = newUser => {
    addUser(newUser).then(() => {
      navigate("/");
    });
  };

  return (
    <UserForm
      open={true}
      onOpenChange={() => navigate("/")}
      initialData={{ firstName: "", lastName: "", email: "", department: "" }}
      onSubmit={handleSubmit}
    />
  );
}

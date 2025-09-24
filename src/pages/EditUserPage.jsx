import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";
import { fetchUsers, updateUser } from "../services/api";

export default function EditUserPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUsers().then(res => {
      const foundUser = res.data.find(u => u.id === parseInt(id));
      if (foundUser) {
        setUser({
          firstName: foundUser.name.split(" ")[0],
          lastName: foundUser.name.split(" ")[1] || "",
          email: foundUser.email,
          department: foundUser.company?.name || ""
        });
      }
    });
  }, [id]);

  const handleSubmit = updatedUser => {
    updateUser(id, updatedUser).then(() => {
      navigate("/");
    });
  };

  if (!user) return <div>Loading...</div>;

  return (
    <UserForm
      open={true}
      onOpenChange={() => navigate("/")}
      initialData={user}
      onSubmit={handleSubmit}
    />
  );
}

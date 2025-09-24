import React, { useEffect, useState } from "react";
import { fetchUsers, addUser, updateUser, deleteUser } from "../services/api";
import UserTable from "../components/UserTable";
import UserDialog from "../components/UserDialog";
import FilterDialog from "../components/FilterDialog";
import Pagination from "../components/Pagination";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogMode, setDialogMode] = useState("add");
  const [editingUser, setEditingUser] = useState(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({ firstName:"", lastName:"", email:"", department:"" });
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  useEffect(() => {
    fetchUsers().then(res => {
      // Transform mock data into expected shape
      setUsers(res.data.map(u => ({
        id: u.id,
        firstName: u.name.split(" ")[0],
        lastName: u.name.split(" ")[1] || "",
        email: u.email,
        department: u.company?.name || "",
      })));
    });
  }, []);

  // Filtering logic
  const filteredUsers = users.filter(u =>
    (!filters.firstName || u.firstName.toLowerCase().includes(filters.firstName.toLowerCase())) &&
    (!filters.lastName || u.lastName.toLowerCase().includes(filters.lastName.toLowerCase())) &&
    (!filters.email || u.email.toLowerCase().includes(filters.email.toLowerCase())) &&
    (!filters.department || u.department.toLowerCase().includes(filters.department.toLowerCase())) &&
    (!search ||
      u.firstName.toLowerCase().includes(search.toLowerCase()) ||
      u.lastName.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.department.toLowerCase().includes(search.toLowerCase()))
  );
  const totalPages = Math.ceil(filteredUsers.length / perPage);
  const showUsers = filteredUsers.slice((page-1)*perPage, page*perPage);

  const openEditUser = user => {
    setEditingUser(user);
    setDialogMode("edit");
    setOpenDialog(true);
  };
  const openAddUser = () => {
    setEditingUser({ firstName:"", lastName:"", email:"", department:"" });
    setDialogMode("add");
    setOpenDialog(true);
  };
  const handleDelete = id => {
    deleteUser(id).then(() => {
      setUsers(users.filter(u=>u.id!==id));
    });
  };
 const handleSave = user => {
  if (dialogMode === "add") {
    addUser(user).then(() => {
      setUsers([...users, { ...user, id: users.length + 1 }]);
    });
  } else {
    updateUser(editingUser.id, user).then(() => {
      setUsers(users.map(u => u.id === editingUser.id ? { ...u, ...user } : u));
    });
  }
};

  const handleApplyFilter = () => setFilterOpen(false);

  return (
    <div className="p-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">User Management Dashboard</h2>
        <div className="flex gap-3">
          <Button onClick={openAddUser}>+ Add User</Button>
          <Button variant="outline" onClick={() => setFilterOpen(true)}>Filters</Button>
        </div>
      </div>
      <div className="mb-6 w-full md:w-1/3">
        <Input placeholder="Search users..." value={search} onChange={e=>setSearch(e.target.value)} />
      </div>
      <UserTable users={showUsers} onEdit={openEditUser} onDelete={handleDelete} />
      <Pagination page={page} setPage={setPage} totalPages={totalPages} perPage={perPage} setPerPage={setPerPage} />
      <UserDialog
        open={openDialog}
        onOpenChange={setOpenDialog}
        initial={editingUser}
        onSubmit={handleSave}
        mode={dialogMode}
      />
      <FilterDialog
        open={filterOpen}
        onOpenChange={setFilterOpen}
        filters={filters}
        setFilters={setFilters}
        onApply={handleApplyFilter}
      />
    </div>
  );
}

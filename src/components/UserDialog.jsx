import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import React from "react";

// Defensive default with nullish coalescing
const fallback = {
  firstName: "",
  lastName: "",
  email: "",
  department: ""
};

export default function UserDialog({
  open,
  onOpenChange,
  initial,
  onSubmit,
  mode
}) {
  // Defensive fallback if null or undefined
  const safeInitial = initial ?? fallback;
  const [form, setForm] = React.useState({
    firstName: safeInitial.firstName || "",
    lastName: safeInitial.lastName || "",
    email: safeInitial.email || "",
    department: safeInitial.department || ""
  });

  React.useEffect(() => {
    const safe = initial ?? fallback;
    setForm({
      firstName: safe.firstName || "",
      lastName: safe.lastName || "",
      email: safe.email || "",
      department: safe.department || ""
    });
  }, [initial]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSave = (e) => {
    e.preventDefault();
    onSubmit(form);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md rounded-xl bg-white">
        <DialogHeader>
          <DialogTitle>{mode === "edit" ? "Edit User" : "Add User"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <Label>First Name</Label>
            <Input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label>Last Name</Label>
            <Input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label>Email</Label>
            <Input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label>Department</Label>
            <Input
              name="department"
              value={form.department}
              onChange={handleChange}
              required
            />
          </div>
          <DialogFooter className="flex gap-2 pt-4">
            <Button
              variant="outline"
              type="button"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit">
              {mode === "edit" ? "Update" : "Create"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

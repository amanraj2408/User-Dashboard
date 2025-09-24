import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function FilterPopup({ open, onOpenChange, onApply, initialFilters }) {
  const [filters, setFilters] = useState(initialFilters || {
    firstName: "",
    lastName: "",
    email: "",
    department: ""
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const applyFilters = () => {
    onApply(filters);
    onOpenChange(false);
  };

  const resetFilters = () => {
    setFilters({ firstName: "", lastName: "", email: "", department: "" });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md rounded-lg">
        <DialogHeader>
          <DialogTitle>Filter Users</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input name="firstName" placeholder="First Name" value={filters.firstName} onChange={handleChange} />
          <Input name="lastName" placeholder="Last Name" value={filters.lastName} onChange={handleChange} />
          <Input name="email" placeholder="Email" value={filters.email} onChange={handleChange} />
          <Input name="department" placeholder="Department" value={filters.department} onChange={handleChange} />
        </div>
        <DialogFooter className="flex justify-end space-x-2 pt-4">
          <Button variant="outline" onClick={resetFilters}>Reset</Button>
          <Button onClick={applyFilters}>Apply</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

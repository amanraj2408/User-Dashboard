import React from "react";
import { Input } from "./ui/input";

export default function SearchBar({ value, onChange }) {
  return (
    <Input
      type="search"
      placeholder="Search users..."
      value={value}
      onChange={e => onChange(e.target.value)}
      className="mb-4"
    />
  );
}

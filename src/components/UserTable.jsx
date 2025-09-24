import { useState } from "react";
import { 
  Table, TableHeader, TableRow, TableHead, TableBody, TableCell 
} from "./ui/table";
import { Button } from "./ui/button";

export default function UserTable({ users, onEdit, onDelete }) {
  const [sortAlpha, setSortAlpha] = useState(null); // null | "asc" | "desc"

  // 🔹 Sorting logic (works only on firstName)
  const sortedUsers = [...users].sort((a, b) => {
    if (!sortAlpha) return 0;
    if (sortAlpha === "asc") return a.firstName.localeCompare(b.firstName);
    if (sortAlpha === "desc") return b.firstName.localeCompare(a.firstName);
    return 0;
  });

  return (
    <div>
      {/* 🔹 Sort Toggle Button */}
      <div className="flex justify-end mb-3">
        <Button
          variant="outline"
          onClick={() =>
            setSortAlpha(
              sortAlpha === "asc" ? "desc" : sortAlpha === "desc" ? null : "asc"
            )
          }
        >
          {sortAlpha === "asc"
            ? "Sorted A → Z"
            : sortAlpha === "desc"
            ? "Sorted Z → A"
            : "No Sort"}
        </Button>
      </div>

      {/* 🔹 Your Table Code (unchanged) */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>First Name</TableHead>
            <TableHead>Last Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedUsers.map((u) => (
            <TableRow key={u.id}>
              <TableCell>{u.id}</TableCell>
              <TableCell>{u.firstName}</TableCell>
              <TableCell>{u.lastName}</TableCell>
              <TableCell>{u.email}</TableCell>
              <TableCell>{u.department}</TableCell>
              <TableCell>
                <Button
                  size="sm"
                  variant="outline"
                  className="mr-2"
                  onClick={() => onEdit(u)}
                >
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => onDelete(u.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

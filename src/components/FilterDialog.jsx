import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function FilterDialog({ open, onOpenChange, filters, setFilters, onApply }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md rounded-xl bg-white">
        <DialogHeader>
          <DialogTitle>Filters</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          <Input
            placeholder="First Name"
            value={filters.firstName}
            onChange={e => setFilters({ ...filters, firstName: e.target.value })}
          />
          <Input
            placeholder="Last Name"
            value={filters.lastName}
            onChange={e => setFilters({ ...filters, lastName: e.target.value })}
          />
          <Input
            placeholder="Email"
            value={filters.email}
            onChange={e => setFilters({ ...filters, email: e.target.value })}
          />
          <Input
            placeholder="Department"
            value={filters.department}
            onChange={e => setFilters({ ...filters, department: e.target.value })}
          />
        </div>
        <DialogFooter className="flex gap-2 pt-4">
          <Button variant="outline" type="button" onClick={() => setFilters({ firstName:"", lastName:"", email:"", department:"" })}>Reset</Button>
          <Button type="button" onClick={onApply}>Apply</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

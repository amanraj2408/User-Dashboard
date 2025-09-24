import { Button } from "./ui/button";

export default function Pagination({ page, setPage, totalPages, perPage, setPerPage }) {
  return (
    <div className="flex items-center gap-3 pt-4">
      <Button size="sm" variant="outline" onClick={() => setPage(page-1)} disabled={page === 1}>Prev</Button>
      <span>Page {page} of {totalPages}</span>
      <Button size="sm" variant="outline" onClick={() => setPage(page+1)} disabled={page === totalPages}>Next</Button>
      <select className="ml-4 border rounded px-2 py-1" value={perPage} onChange={e=>setPerPage(Number(e.target.value))}>
        {[10,25,50,100].map(n => <option key={n} value={n}>{n}</option>)}
      </select>
    </div>
  );
}

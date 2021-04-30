import React from "react";

function Pokegination({ page, maxPage, setPage }) {
  return (
    <div>
      <button onClick={() => setPage(0)}>first</button>

      <button onClick={() => setPage(page - 1)} disabled={page < 1}>
        prev
      </button>

      <button onClick={() => setPage(page + 1)} disabled={page >= maxPage}>
        next
      </button>

      <button onClick={() => setPage(maxPage)}>last</button>
    </div>
  );
}

export default Pokegination;

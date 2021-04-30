import React, { useState, useEffect } from "react";
import useSWR from "swr";
import Pokemon from "./Pokemon.js";
import Pokegination from "./Pokegination.js";

function Pokegrid() {
  const [page, setPage] = useState(localStorage.getItem("page"));
  const { data, error } = useSWR(
    `https://pokeapi.co/api/v2/pokemon-species?offset=${page * 30}&limit=30`
  );

  useEffect(() => {
    localStorage.setItem("page", page);
  }, [page]);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <>
      <div className="grid">
        {data.results.map((el) => (
          <Pokemon name={el.name} />
        ))}
      </div>
      <Pokegination
        page={page}
        maxPage={Math.floor(data.count / 30)}
        setPage={setPage}
      />
    </>
  );
}

export default Pokegrid;

import React from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";

function Pokemon({ name }) {
  const { data, error } = useSWR(`https://pokeapi.co/api/v2/pokemon/${name}`);

  const capitalize = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  if (error) return <div>Failed to load</div>;
  if (!data)
    return (
      <div>
        <Link to={`/${name}`}>
          <img height="96px" width="96px" />
          <h2>{capitalize(name)}</h2>
        </Link>
      </div>
    );
  return (
    <div>
      <Link to={`/${name}`}>
        <img src={data.sprites.front_default} />
        <h2>{capitalize(name)}</h2>
      </Link>
    </div>
  );
}

export default Pokemon;

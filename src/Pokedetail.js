import React from "react";
import useSWR from "swr";
import { useParams, Link } from "react-router-dom";

function Pokedetail() {
  const params = useParams();
  const { data, error } = useSWR(
    `https://pokeapi.co/api/v2/pokemon/${params.pokemon}`
  );

  const capitalize = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      <h2>{capitalize(data.name)}</h2>
      <img src={data.sprites.other["official-artwork"].front_default} />
      <table>
        {data.stats.map((el) => (
          <tr>
            <td>{el.stat.name}</td>
            <td>{el.base_stat}</td>
          </tr>
        ))}
      </table>
      <Link to="/">
        <button>Return to pokedex</button>
      </Link>
    </div>
  );
}

export default Pokedetail;

import "./soved.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../../hook/useAuth";
import { Card } from "../../Card";

export const Soved = () => {
  const [data, setData] = useState([]);

  const { token } = useAuth();
  useEffect(() => {
    axios
      .get("https://book-service-layer.herokuapp.com/author/genreId/3", {
        headers: {
          Authorization: token,
        },
      })
      .then((data) => setData(data.data))
      .catch((er) => console.log(er));
  }, []);

  return (
    <>
      <div className="container">
        <h1>soved</h1>
        {data.length && (
          <ul>
            {data.map((e) => (
              <Card e={e} key={e.id} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

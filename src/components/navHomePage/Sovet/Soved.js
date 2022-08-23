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
  }, [token]);

  return (
    <>
      <div className="container">
        <h1>soved</h1>
        {data.length && (
          <ul className="d-flex justify-content-between flex-wrap  list-unstyled m-0 p-0">
            {data.map((e) => (
              <Card e={e} key={e.id} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

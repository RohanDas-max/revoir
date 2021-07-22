import {  useEffect, useState } from "react";
import { Link, } from "react-router-dom";
import axios from "axios";
import { FiMail } from "react-icons/fi";
import "bulma/css/bulma.css";

export default function Users() {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = async () => {
    const res = await axios
      .get(`https://gorest.co.in/public/v1/users`)
      .then((res) => setUsers(res.data.data))
      .catch((error) => console.log(error));
  };

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-mobile is-multiline is-centered">
          {users.map((data) => (
            <div className="column is-narrow" key={data.id}>
             
                <p>{data.name}</p>
                <a href={"mailto" + data.email}>
                  <FiMail />
                </a>
                <Link to={`/users/${data.id}`} className="button">View Profile </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

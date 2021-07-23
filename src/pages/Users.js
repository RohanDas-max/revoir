import { useEffect, useState } from "react";
import axios from "axios";
import { FiMail } from "react-icons/fi";
import "./user.css";
import { useHistory } from "react-router-dom";
import "mailgo/dist/mailgo.min.js";

export default function Users() {
  const [users, setUsers] = useState([]);
  let history = useHistory();

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = async () => {
    await axios
      .get(`https://gorest.co.in/public/v1/users`)
      .then((res) => setUsers(res.data.data))
      .catch((error) => console.log(error));
  };

  return (
    <div style={{ height: "auto" }}>
      <h1
        style={{
          color: "white",
          textAlign: "center",
          fontSize: "30px",
          marginBottom: "10px",
        }}
      >
        User List
      </h1>

      <div className="container">
        {users.map((data) => {
          if (data.status === "active") {
            return (
              <div className="card" key={data.id}>
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-48x48">
                        <img src="https://picsum.photos/48" alt="piscum" />
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-6">{data.name}</p>

                      <a href={"mailto:" + data.email}>
                        <p style={{ fontSize: "20px" }}>
                          <FiMail />
                        </p>
                      </a>
                      <button
                        className="button is-success"
                        onClick={() => history.push(`/users/${data.id}`)}
                      >
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          } else if (data.status === "inactive") {
            return (
              <div
                key={data.id}
                className="card"
                style={{
                  background: "grey",
                }}
              >
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-48x48">
                        <img src="https://picsum.photos/48" alt="piscum" />
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-6">{data.name}</p>
                      <p className="subtitle is-7">{data.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import axios from "axios";
import { FiMail } from "react-icons/fi";
import "./user.css";
import { Link } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);
  console.log(users);
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
    <div>
      <h1 style={{
        color: "white",
        textAlign: "center",
        fontSize: "30px",
        marginBottom: "10px"
      }}>User List</h1>

      <div className="container">
        {users.map((data) => (
          <div className="card">
            <div>
              <p>{data.name}</p>
              <button
                onPress={(Linking) =>
                  Linking.openURL(
                    "mailto:{title}?subject=SendMail&body=Description"
                  )
                }
                title={data.email}
              >
                <FiMail />
              </button>
              {data.status == "active" ? (
                <p>
                  {" "}
                  <Link to={`/users/${data.id}`}>view profile</Link>
                </p>
              ) : (
                <p className="is-warning">Offline</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

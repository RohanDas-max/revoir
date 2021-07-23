import React, { useState, useEffect } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Profile() {
  const [detail, setDetail] = useState([]);
  const [posts, setPosts] = useState([]);
  const { userid } = useParams();

  useEffect(() => fetchDetails());
  useEffect(() => GetPost());

  const fetchDetails = async () => {
    axios
      .get(`https://gorest.co.in/public/v1/users/${userid}`)
      .then((data) => setDetail(data.data.data))
      .catch((error) => console.log(error));
  };

  const GetPost = async () => {
    await axios
      .get(`https://gorest.co.in/public/v1/users/${userid}/posts`)
      .then((data) => setPosts(data.data.data[0]))
      .catch((error) => console.error(error));
  };

  return (
    <div style={{
      display: "flex",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    }}>
      <article className="message is-notification is-medium is-center">
        <div className="message-header">
          <p>{detail.name}</p>
          <button
            style={{
              border: "none",
              background: "none",
              fontSize: "30px",
              color: "white",
            }}
          >
            <Link to={`/${userid}/posts`}>
              <IoMdAddCircle />
            </Link>
          </button>
        </div>
        <div className="message-body">
          <p>email:{" "} {detail.email}</p>
          <p>Gender:{" "}{detail.gender}</p>
          <p>Status:{" "}{detail.status}</p>
        </div>
      </article>

      {posts ? (
        
        <article className="message is-success is-mobile is-center">
           <div className="message-header">
            <p><p style={{color: "WindowText"}}>Posted by:</p> {" "}{detail.name}</p>
          </div>
          <div className="message-header">
            <p><p style={{color: "WindowText"}}>Title:</p> {" "}{posts.title}</p>
          </div>
          <div className="message-body">
            <p><p style={{color: "WindowText"}}>Post: </p>{" "}{posts.body}</p>
          </div>
        </article>
      ) : (
        <article className="message is-warning is-mobile is-center">
          <div className="message-header">
            <p>No Post Found</p>
          </div>
          <div className="message-body">
            <p>No post Found</p>
          </div>
        </article>
      )}
    </div>
  );
}

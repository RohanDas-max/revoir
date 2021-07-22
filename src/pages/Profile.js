import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom'
import axios from "axios";

export default function UsersId() {
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
    <div>
      <h1 className="button">{detail.name}</h1>
      <h1 className="button">{detail.email}</h1>
      <h1 className="button">{detail.gender}</h1>
      <h1 className="button">{detail.status}</h1>
        <Link to={`/${userid}/posts`}> add post to this user</Link>
    {posts ? (
        <div>
        <p>{posts.title}</p>
        <br />
  
        <p>{posts.body}</p>
        </div>
    ) :
    
    (<h1>No Post Found</h1>)}
    </div>
  );
}

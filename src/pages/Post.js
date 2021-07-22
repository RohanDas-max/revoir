import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

export default function Post() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  let history = useHistory();
  const { userid } = useParams();

  const Post = async () => {
    var data = JSON.stringify({ body: body, title: title });
    await axios({
      method: "POST",
      url: `https://gorest.co.in/public/v1/users/${userid}/posts`,
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        "Content-Type": "application/json",
      },
      data: data,
    })
      .then(() => console.log("success"), history.push(`/users/${userid}`))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form onSubmit={Post}>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button>Post</button>
      </form>
    </div>
  );
}

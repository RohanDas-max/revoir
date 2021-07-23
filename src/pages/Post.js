import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import "bulma/css/bulma.css";

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
   
    <div
      style={{
        display: "flex",
        height:'100vh',
        justifyContent: "center",
        alignItems: "center",
        justifyItems: 'center'
      }}
    >
      <form className="box notification is-primary" style={{width:"50%"}} onSubmit={Post}>
      <h1 style={{ 
        fontSize: "30px",
        color: "HighlightText"
      }}>What's On your Mind!</h1>
        <div className="field">
          <label className="label">Post Title</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Post Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Post</label>
          <div className="control">
            <textarea
              style={{
                height: "200px",
              }}
              rows="50"
              className="input"
              type="body"
              placeholder="Post"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
        </div>

        <button className="button is-warning">DONE</button>
      </form>
    </div>
  
  );
}

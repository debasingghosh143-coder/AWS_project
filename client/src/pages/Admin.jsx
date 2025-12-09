import React, { useContext, useState } from "react";
import AppContext from "../context/appContext.mjs";
import Loading from "../components/Loading";
import { toast } from "react-toastify";
import axios from "axios";
import { SERVER_URL } from "../utils/helper.mjs";
import { Link, useLocation } from "react-router-dom";

const Admin = () => {
  // @ts-ignore
  const { notices, isLoading } = useContext(AppContext);
  const location = useLocation();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  // @ts-ignore
  const handleFormsSubmit = async (e) => {
    e.preventDefault();

    console.log("btn clicked");
    let flag = 0;
    if (title.length < 5) {
      toast("Enter a valid title!");
      flag++;
    }
    if (text.length < 10) {
      toast("Write valid notice!");
      flag++;
    }
    if (flag > 0) return;

    try {
      const { data } = await axios.post(`${SERVER_URL}/create`, {
        title,
        text,
        author,
      });

      if (data.success) {
        toast(data.message);
      }
    } catch (error) {
      // @ts-ignore
      console.log(error.message);
      toast("Unable to publish!");
    }

    setTitle("");
    setText("");
    setAuthor("");
  };

  // @ts-ignore
  const deleteNotice = async (id) => {
    try {
      const { data } = await axios.delete(`${SERVER_URL}/delete/${id}`);

      if (data.success) {
        toast(data.message);
      }
    } catch (error) {
      // @ts-ignore
      console.log(error.message);
      toast("Unable to delete the notice!");
    }
  };

  return (
    <div>
      <h1>Admin page</h1>

      <form onSubmit={handleFormsSubmit}>
        <h2>Notice form</h2>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          minLength={5}
          maxLength={100}
          required
          placeholder="Enter title"
        />

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          minLength={10}
          maxLength={3000}
          required
          placeholder="Write notice"
        />

        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          type="text"
          maxLength={100}
          placeholder="Author name"
        />

        <button type="submit">Publish</button>
        <button
          type="reset"
          onClick={() => {
            setTitle("");
            setText("");
            setAuthor("");
          }}
        >
          Reset
        </button>
      </form>

      <div>
        <h2>All notices</h2>
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            {
              // @ts-ignore
              notices.map((value, index) => (
                <div key={index}>
                  <p>{value.title}</p>
                  <p>10/12/2025</p>
                  <p>10:10 AM</p>
                  <Link to={`/notice/${value.noticeId}`}>read</Link>
                  {location.pathname === "/admin" && (
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={() => deleteNotice(value.noticeId)}
                    >
                      delete
                    </p>
                  )}
                </div>
              ))
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;

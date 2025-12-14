import React, { useContext, useState } from "react";
import AppContext from "../context/appContext.mjs";
import Loading from "../components/Loading";
import { toast } from "react-toastify";
import axios from "axios";
import { fetchNotices, SERVER_URL, ADMINS } from "../utils/helper.mjs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
// @ts-ignore
import "../styles/admin.css";
const Admin = () => {
  // @ts-ignore
  const { notices, isLoading, setNotices, setIsLoading } =
    useContext(AppContext);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isLoaded } = useUser(); 

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  if (!isLoaded) <Loading/>;

  
const isAdmin = ADMINS.includes(user.id);

if (!isAdmin) {
  toast("Only admins can access this page!");
  navigate('/');
}

  // @ts-ignore
  const handleFormsSubmit = async (e) => {
    e.preventDefault();

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

      setIsLoading(true);
      const result = await fetchNotices();

      if (result.length !== 0) {
        setNotices(result);
      }
    } catch (error) {
      // @ts-ignore
      console.log(error.message);
      toast("Unable to publish!");
    } finally {
      setIsLoading(false);
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
        // @ts-ignore
        setNotices((prev) => prev.filter((notice) => notice.noticeId !== id));
      }
    } catch (error) {
      // @ts-ignore
      console.log(error.message);
      toast("Unable to delete the notice!");
    }
  };

  return (
    <div className="topAdmin">
      <div className="middleAdmin">
        <div className="mainAdmin">
          <h1>Admin page</h1>

          <form
            className="formAdmin"
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            onSubmit={handleFormsSubmit}
          >
            <h2>Notice form</h2>
            <div className="titleDiv">
              <label htmlFor="titleBox">Title : </label>
              <input
                id="titleBox"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                minLength={5}
                maxLength={100}
                required
                placeholder="Enter title (*max 100 characters)"
              />
            </div>
            <div className="textDiv">
              <label htmlFor="textBox">Description : </label>
              <textarea
                id="textBox"
                value={text}
                onChange={(e) => setText(e.target.value)}
                minLength={10}
                maxLength={3000}
                required
                placeholder="Write notice (*max 3000 characters)"
              />
            </div>
            <div className="authorDiv">
              <label htmlFor="authorBox">Author Name : </label>
              <input
                id="authorBox"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                type="text"
                maxLength={100}
                placeholder="Author name (*max 100 characters)"
              />
            </div>
            <div className="btns">
              <button style={{ cursor: "pointer" }} type="submit" id="submit">
                Publish
              </button>
              <button
                style={{ cursor: "pointer" }}
                type="reset"
                id="reset"
                onClick={() => {
                  setTitle("");
                  setText("");
                  setAuthor("");
                }}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="main_class">
        <h1>All notices</h1>
        {isLoading ? (
          <Loading />
        ) : notices.length === 0 ? (
          <div
            style={{ marginTop: "5rem", fontSize: "xx-large", padding: "3rem" }}
          >
            Notice not published yet!
          </div>
        ) : (
          <div id="notice_section">
            {
              // @ts-ignore
              notices.map((value, index) => (
                <div className="notice_no" key={index}>
                  <div className="notice_details">
                    <p id="title">{value.title}</p>
                    <p id="date">{value.date}</p>
                    <p id="time">{value.time}</p>
                  </div>
                  <Link className="read_btn" to={`/notice/${value.noticeId}`}>
                    Read
                  </Link>
                  <br />
                  {location.pathname === "/admin" && (
                    <p
                      className="del_btn"
                      style={{ cursor: "pointer" }}
                      onClick={() => deleteNotice(value.noticeId)}
                    >
                      Delete
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

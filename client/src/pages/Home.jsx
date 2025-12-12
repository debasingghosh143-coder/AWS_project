import React, { useContext } from "react";
import AppContext from "../context/appContext.mjs";
import Loading from "../components/Loading.jsx";
import { Link } from "react-router-dom";
// @ts-ignore
import "../styles/home.css";
const Home = () => {
  // @ts-ignore
  const { notices, isLoading } = useContext(AppContext);

  if (isLoading) <Loading />;

  return notices.length  === 0? (
    <div style={{marginTop : "5rem", fontSize : "xx-large" , padding : "3rem"}}>Notice not published yet!</div>
  ) : (
    <div className="main_class">
      <h1>All Notices</h1>
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
              <Link to={`/notice/${value.noticeId}`} id="read_btn">Read</Link>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Home;
import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import AppContext from "../context/appContext.mjs";
import Loading from "../components/Loading.jsx";
import PageNotFound from "./PageNotFound.jsx";
import "../styles/notice.css"
const Notice = () => {
  // @ts-ignore
  const { notices, isLoading } = useContext(AppContext);
  const { id } = useParams();

  // @ts-ignore
  const noticeObj = notices?.find((obj) => String(obj.noticeId) === String(id));

  if (isLoading) return <Loading />;
  if (!noticeObj) return <PageNotFound />;

  return (
    <div className="noticeMain">
      <div className="noticeView">
        <h1 style={{paddingLeft : "1rem"}}>{noticeObj.title}</h1>
        <p id="N_date">{noticeObj.date}</p>
        <p id="N_time">{noticeObj.time}</p>
        <div className="noticeElements">
          <p id="N_text">{noticeObj.text}</p>
          <p id="N_author">Author - {noticeObj.author}</p>
        </div>
        <div className="backtoHome">
          <Link id="back" to={"/"}>Back to home</Link>
        </div>
      </div>
    </div>
  );
};

export default Notice;

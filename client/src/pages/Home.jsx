import React, { useContext } from "react";
import AppContext from "../context/appContext.mjs";
import Loading from "../components/Loading.jsx";
import { Link } from "react-router-dom";
const Home = () => {
  // @ts-ignore
  const { notices, isLoading } = useContext(AppContext);

  if (isLoading) <Loading />;

  return notices.length < 1 ? (
    <div>Notice not published yet!</div>
  ) : (
    <div>
      <h1>All Notices</h1>
      <div>
        {
          // @ts-ignore
          notices.map((value, index) => (
            <div key={index}>
              <p>{value.title}</p>
              <Link to={`/notice/${value.noticeId}`}>read</Link>
              <p>{value.date}</p>
              <p>{value.time}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Home;

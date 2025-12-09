import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import AppContext from "../context/appContext.mjs";
import Loading from "../components/Loading";

const Notice = () => {
  // @ts-ignore
  const { notices, isLoading } = useContext(AppContext);
  const { id } = useParams();

  // @ts-ignore
  const noticeObj = notices?.find((obj) => String(obj.noticeId) === String(id));

  if (isLoading) return <Loading />;
  if (!noticeObj) return <div>No notice found.</div>;

  return (
    <div>
      <Link to={"/"}>Back to home</Link>
      <h2>{noticeObj.title}</h2>
      <p>{noticeObj.text}</p>
      <p>{noticeObj.atuhor}</p>
    </div>
  );
};

export default Notice;

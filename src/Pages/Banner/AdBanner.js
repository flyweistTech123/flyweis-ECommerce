/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../Layout/HOC";
import TableLayout from "../../Component/TableLayout";
import { getApi, removeApi } from "../../Repository/Repository";
import { CreateBanner } from "../../Component/Modals/Modals";

const thead = ["Sno.", "Image", "Type", "Description", "Action"];

const AdBanner = () => {
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [response, setResponse] = useState({ data: [] });
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");
  const [selected, setSelected] = useState(null);


  const fetchHandler = () => {
    getApi({
      url: "api/v1/Banner/getBanner",
      setResponse,
      setLoading,
    });
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const deleteHandler = (id) => {
    const additionalFunctions = [fetchHandler];
    removeApi({
      url: `api/v1/Banner/${id}`,
      successMsg: "Removed!",
      additionalFunctions,
    });
  };


  const tbody = response?.data?.map((i, index) => [
    `#${index + 1}`,
    <img src={i.image} alt="" className="adBannerImg" />,
    i.type,
    i.desc,
    <span className="flexCont">
      <i
        className="fa-solid fa-pen-to-square"
        onClick={() => {
          setId(i._id);
          setEdit(true);
          handleEditClick(i)
        }}
      />
      <i className="fa-sharp fa-solid fa-trash" onClick={() => deleteHandler(i._id)}></i>
    </span>,
  ]);

  const handleEditClick = (data) => {
    setSelected(data);
    setShow(true);
  };

  return (
    <>
      <CreateBanner
        show={show}
        handleClose={() => setShow(false)}
        edit={edit}
        id={id}
        fetchApi={fetchHandler}
        data={selected}
      />
      <section className="sectionCont">
        <div className="pb-4  w-full flex justify-between items-center">
          <span
            className="tracking-widest text-slate-900 font-semibold "
            style={{ fontSize: "1.5rem" }}
          >
            All Banners({response?.data?.length || 0})
          </span>

          <button
            className="submitBtn"
            onClick={() => {
              setEdit(false);
              setShow(true);
            }}
          >
            Create New
          </button>
        </div>

        <TableLayout thead={thead} tbody={tbody} loading={loading}/>
      </section>
    </>
  );
};

export default HOC(AdBanner);

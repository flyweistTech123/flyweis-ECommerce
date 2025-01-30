/** @format */

import React, { useCallback, useEffect, useState } from "react";
import { CreateSubCategory } from "../Component/Modals/Modals";
import TableLayout from "../Component/TableLayout";
import HOC from "../Layout/HOC";
import { getApi, removeApi } from "../Repository/Repository";
import Pagination from "../Component/Pagination";
import { debouncedSetQuery } from "../utils/utils";

const SubCategory = () => {
  const [modalShow, setModalShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");
  const [id, setId] = useState("");
  const [selected, setSelected] = useState(null);

  const fetchHandler = useCallback(() => {
    getApi({
      url: `api/v1/SubCategory/paginate/SubCategoriesSearch?fromDate=null&page=${page}&limit=${limit}&search=${search}&toDate=null`,
      setLoading,
      setResponse,
    });
  }, [limit, search, page]);


  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);

  const deleteHandler = (id) => {
    const additionalFunctions = [fetchHandler];
    removeApi({
      url: `api/v1/SubCategory/deleteSubcategory/${id}`,
      successMsg: "Removed!",
      additionalFunctions,
    });
  };

  const thead = ["Sno.", "Images", "Title", "Category", "Sub Category Type", "Status", "Action"];


  const tbody = response?.data?.docs?.map((i, index) => [
    `#${index + 1}`,
    <img src={i.image} alt="" style={{ maxWidth: "80px" }} />,
    i?.name,
    i?.categoryId?.name,
    i?.type,
    i?.status,
    <span className="flexCont">
      <i
        className="fa-solid fa-pen-to-square"
        onClick={() => {
          setId(i._id);
          setEdit(true);
          handleEditClick(i)
        }}
      ></i>
      <i className="fa-sharp fa-solid fa-trash" onClick={() => deleteHandler(i?._id)} />
    </span>,
  ]);

  const handleEditClick = (data) => {
    setSelected(data);
    setModalShow(true);
  };


  return (
    <>
      <CreateSubCategory
        show={modalShow}
        handleClose={() => setModalShow(false)}
        edit={edit}
        id={id}
        fetchApi={fetchHandler}
        data={selected}
      />
      <section className="sectionCont">
        <div className="pb-4  w-full flex justify-between items-center">
          <span
            className="tracking-widest text-slate-900 font-semibold"
            style={{ fontSize: "1.5rem" }}
          >
            All Sub Categories ({response?.data?.totalDocs})
          </span>

          <button
            onClick={() => {
              setEdit(false);
              setModalShow(true);
            }}
            className="submitBtn"
          >
            Create New
          </button>
        </div>

        <div className="filterBox">
          <img
            src="https://t4.ftcdn.net/jpg/01/41/97/61/360_F_141976137_kQrdYIvfn3e0RT1EWbZOmQciOKLMgCwG.jpg"
            alt=""
          />
          <input
            type="search"
            placeholder="Search..."
            onChange={(e) =>
              debouncedSetQuery({ term: e.target.value, setSearch })
            }
          />
        </div>

        <TableLayout thead={thead} tbody={tbody} loading={loading} />
        {(!response || response !== null) && (
          <Pagination
            hasNextPage={response?.data?.hasNextPage}
            limit={limit}
            setLimit={setLimit}
            page={page}
            setPage={setPage}
            totalPages={response?.data?.totalPages}
          />
        )}
      </section>
    </>
  );
};

export default HOC(SubCategory);

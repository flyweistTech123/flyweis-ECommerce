import React, { useState, useMemo } from "react";

import ReactPaginate from 'react-paginate';
import { useTable, usePagination } from 'react-table';
import './Site.css'; // Assuming you have the styles here

import { MdDownload } from "react-icons/md";
import { MdQrCodeScanner } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import { RiEdit2Fill } from "react-icons/ri";
import { IoFilterSharp } from "react-icons/io5";
import { MdToggleOn, MdToggleOff } from 'react-icons/md';


import img from '../../Images/img7.png'
import { useNavigate } from "react-router-dom";

const Site = () => {
  const [toggleState, setToggleState] = useState({});


  const columns = useMemo(() => [
    {
      Header: "Index",
      accessor: (row, index) => index + 1, // Display index
      id: "index",
    },
    {
      Header: "Map",
      accessor: "map",
      Cell: ({ row }) => (
        <img
          src={row.original.map} // Assuming map column has the image URL
          alt="Site Map"
          style={{ borderWidth: "1px", borderColor: "#F02946", borderStyle: "solid", width: "121px", height: "64px", borderRadius: "10px" }}
          className="rounded"
        />
      ),
    },
    { Header: "Site", accessor: "siteName" },
    { Header: "State", accessor: "state" },
    { Header: "Site ID", accessor: "siteID" },
    { Header: "Site Edit by", accessor: "siteeditby" },
    {
      Header: "Delete Site",
      accessor: "deleteSite",
      Cell: () => (
        <div className="cursor-pointer1" >
          <FaTrash size={22} className="cursor-pointer" />
        </div>
      )
    },
    {
      Header: "Edit Site",
      accessor: "editsite",
      className: 'cursor-pointer1',
      Cell: () => <RiEdit2Fill color="#000000" size={22} onClick={() => navigate('/editsite')} className="cursor-pointer" />,
    },
    {
      Header: "Download",
      Cell: ({ row }) => (
        <button
          onClick={() => handleDownloadClick(row)}
          className="p-2 bg-transparent"
          style={{ width: "100%", textAlign: 'center', display: "flex", alignItems: 'center', justifyContent: "center" }}
        >
          <img src="../Vector (66).png" alt="Download" className="h-6 w-6" />
        </button>
      ),
    },

    {
      Header: "QR Code",
      accessor: "QRCode",
      Cell: ({ row }) => (
        <div className="flex items-center space-x-2">
          {toggleState[row.index] ? (
            <>
              <MdQrCodeScanner color="#000000" size={22} className="cursor-pointer" />
              <MdDownload color="#000000" size={22} className="cursor-pointer" />
            </>
          ) : (
            ""
          )}
        </div>
      ),
    },

    {
      Header: "Action",
      accessor: "action",
      Cell: ({ row }) => (
        <button
          onClick={() =>
            setToggleState((prevState) => ({
              ...prevState,
              [row.index]: !prevState[row.index],
            }))
          }
        >
          {toggleState[row.index] ? (
            <MdToggleOn className="text-600" size={45} color="#F02946" />
          ) : (
            <MdToggleOff className="text-gray-500" size={45} />
          )}
        </button>
      ),
    },
  ], [toggleState]);

  const data = useMemo(() => [
    {
      map: img, // Replace with the image URL
      siteName: "Location Name",
      state: "Location Name",
      siteID: "#125478",
      siteeditby: "Lorem Ipsum",
      siteID: "#125486",
    },
    // Repeat this as needed for other rows
  ], []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [downloadData, setDownloadData] = useState(null);

  const handleDownloadClick = (row) => {
    setDownloadData(row.original); // Save the row data to use in the modal
    setIsModalOpen(true);

    setTimeout(() => {
      closeModal(); // Close the modal after 2 seconds
    }, 2000);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setDownloadData(null);
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    gotoPage,
    pageCount,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );


  const navigate = useNavigate()

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="px-4 dashboard1">
          <p className="font-bold text-[40px]">Site</p>
        </div>
        <div className="site1">
          <button onClick={() => navigate('/addsite')}><FaPlus />Add Sites</button>
          <div className="site2">
            <IoFilterSharp color="#52525B" size={20} />
            <p>Sort By</p>
          </div>
        </div>
      </div>

      <div className="p-4">
        <table {...getTableProps()} className="min-w-full bg-white border border-gray-300">
          <thead className="bg-[#F02946]">
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                {headerGroup.headers.map(column => (
                  <th
                    {...column.getHeaderProps()}
                    className="px-4 py-2 text-left text-[16px] font-medium text-[#FFFFFF]"
                    key={column.id}
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={row.id} className="border border-[#A8A8A84D]">
                  {row.cells.map(cell => (
                    <td
                      {...cell.getCellProps()}
                      className="px-4 py-3 text-sm text-gray-600 border border-[#A8A8A84D]"
                      key={cell.column.id}
                    >
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="flex justify-end mt-4 mr-4">
          <ReactPaginate
            previousLabel={<span className="flex items-center">‹ Previous</span>}
            nextLabel={<span className="flex items-center">Next ›</span>}
            breakLabel="..."
            pageCount={pageCount}
            onPageChange={(page) => gotoPage(page.selected)}
            containerClassName="flex items-center space-x-2"
            pageClassName="w-8 h-8 flex items-center justify-center rounded-[10px] text-[#FFFFFF] bg-pink-200 hover:bg-pink-300 transition"
            previousClassName="text-black font-semibold hover:text-red-500 transition"
            nextClassName="text-red-500 font-semibold hover:text-red-700 transition"
            breakClassName="w-8 h-8 flex items-center justify-center rounded-[10px] text-gray-500 bg-pink-200"
            activeClassName="bg-red-500 text-white font-bold"
          />
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 py-[60px] rounded shadow-lg w-1/3">
              <div className='flex flex-col items-center gap-[20px]'>
                <img src="../Frame 48095930.png" alt="Success" />
                <p className='font-bold text-[#121212]'>Successfully Downloaded</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Site;

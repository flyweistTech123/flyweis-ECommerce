import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const data = [
    {
      location: 'Site 1',
      supervisor: 'Jaydon Vetrov',
      guards: ['Ashlynn Curtis'],
    },
    {
      location: '',
      supervisor: 'Anika Bator',
      guards: ['Rayna Torff'],
    },
    {
      location: '',
      supervisor: '',
      guards: ['Aspen Lubin'],
    },
    {
      location: '',
      supervisor: '',
      guards: ['Emery Carder', ],
    },
    {
      location: '',
      supervisor: '',
      guards: ['Giana Baptista'],
    },
    {
      location: '',
      supervisor: '',
      guards: ['Ruben Lipshutz'],
    },
    {
      location: '',
      supervisor: '',
      guards: ['Jonas Parker'],
    },
    {
      location: '',
      supervisor: '',
      guards: ['Jonas Parker'],
    },
    {
      location: '',
      supervisor: '',
      guards: ['Jonas Parker'],
    },
    {
      location: '',
      supervisor: '',
      guards: ['Jonas Parker'],
    },
    {
      location: '',
      supervisor: '',
      guards: ['Jonas Parker'],
    },
    // Add more data as needed
  ];
  

const TotalDeploymentViewTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate()
  const rowsPerPage = 10;

  // Calculate pagination data
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
  <div className="flex items-center gap-[50px]">
        <img src="../Vector (68).png" alt="" className="w-[34px] h-fit cursor-pointer" onClick={()=>navigate('/daily-deploy/total-deploy')}/>
        <div className="flex items-center gap-[20px]">
          <p className="font-bold text-[40px]">Total Deployment</p>
          <p className="font-bold text-[24px] pt-4">10k</p>
        </div>
      </div>
    <div className="p-4">
    <table className="min-w-full border border-blue-500 rounded-lg">
      <thead className="bg-red-500 text-white">
        <tr>
          <th className="px-4 py-2 border">Locations</th>
          <th className="px-4 py-2 border">Supervisor</th>
          <th className="px-4 py-2 border">Total Guards</th>
        </tr>
      </thead>
      <tbody>
        {currentData.map((row, rowIndex) => (
          <tr key={rowIndex} className="border-b text-[#737373]">
            <td className="px-4 py-2 border ">{row.location}</td>
            <td className="px-4 py-2 border">   
                <div  className="flex justify-between items-center mb-2">
                  <span>{row.supervisor}</span>
                  {row.supervisor !== '' &&
                  <button
                    className="ml-2 bg-[#F02946] text-white rounded-lg w-8 h-8 flex items-center justify-center"
                    onClick={() => {}}
                  >
                    <img src="../Vector 36.png" alt="" />
                  </button>
}
                </div></td>
            <td className="px-4 py-2 border">
              {row.guards.map((guard, guardIndex) => (
                <div key={guardIndex} className="flex justify-between items-center mb-2">
                  <span>{guard}</span>
                  <button
                    className="ml-2 bg-[#F02946] text-white rounded-lg w-8 h-8 flex items-center justify-center"
                    onClick={() => alert(`Action for ${guard}`)}
                  >
                    <img src="../Vector 36.png" alt="" />
                  </button>
                </div>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    {/* Pagination Controls */}
    <div className="flex justify-end items-center mt-4 space-x-2">
      <button
        className="px-4 py-2 rounded-lg text-black cursor-pointer"
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
         <span className="flex items-center">
              <span className="mr-2 ">‹</span> Previous
            </span>
      </button>

      {/* Display page numbers */}
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={`px-4 py-2 rounded-lg ${
            currentPage === index + 1
              ? 'bg-[#F02946] text-white'
              : 'bg-[#FFAFBB] text-[#A0A0A0]'
          }`}
          onClick={() => handlePageClick(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      <button
        className="px-4 py-2 rounded-lg text-black cursor-pointer"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        <span className="flex items-center">
              Next <span className="ml-2">›</span>
            </span>
      </button>
    </div>
  </div>
    </div>
  )
}

export default TotalDeploymentViewTable
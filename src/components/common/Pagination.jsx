// Pagination.js
import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="flex justify-end mt-4 mr-4">
            <ReactPaginate
                previousLabel={
                    <span className="flex items-center">
                        <span className="mr-2">‹</span> Previous
                    </span>
                }
                nextLabel={
                    <span className="flex items-center">
                        Next <span className="ml-2">›</span>
                    </span>
                }
                breakLabel="..."
                pageCount={totalPages}
                onPageChange={onPageChange}
                containerClassName="flex items-center space-x-2"
                pageClassName="w-8 h-8 flex items-center justify-center rounded-[10px] text-[#A0A0A0] bg-pink-200 hover:bg-red-400 transition"
                previousClassName="text-black font-semibold hover:text-red-500 transition"
                nextClassName="text-red-500 font-semibold hover:text-red-700 transition"
                breakClassName="w-8 h-8 flex items-center justify-center rounded-[10px] text-gray-500 bg-pink-200"
                activeClassName="bg-red-500 text-white font-bold"
                forcePage={currentPage - 1} // Setting the current page in ReactPaginate (zero-based index)
            />
        </div>
    );
};

export default Pagination;

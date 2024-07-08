// import React, { useState } from "react";
// const Pagination = ({ items, itemsPerPage }) => {
//   const [currentPage, setCurrentPage] = useState(1);

//   const totalPages = Math.ceil(items.length / itemsPerPage);

//   const currentItems = items.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );
//   return (
//     <div>
//       {/* Display the current items */}
//       {currentItems.map((item, index) => (
//         <div key={index}>{item}</div>
//       ))}
//       {/* Pagination controls */}
//       <div>
//         {/* Previous Page Button */}
//         {currentPage > 1 && (
//           <button onClick={() => setCurrentPage(currentPage - 1)}>
//             Previous
//           </button>
//         )}
//         {/* Next Page Button */}
//         {currentPage < totalPages && (
//           <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
//         )}
//       </div>
//     </div>
//   );
// };
// export default Pagination;

import React, { useState, useEffect } from "react";
import axios from "axios";

const Pagination = ({ fetchData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const loadItems = async () => {
      const response = await fetchData(currentPage);
      setCurrentItems(response.items);
      setTotalPages(Math.ceil(response.totalCount / response.itemsPerPage));
    };

    loadItems();
  }, [fetchData, currentPage]);

  return (
    <div>
      {/* Display the current items */}
      {currentItems.map((item, index) => (
        <div key={index}>
          {item.content} {/* Adjust according to your data structure */}
        </div>
      ))}
      {/* Pagination controls */}
      <div>
        {/* Previous Page Button */}
        {currentPage > 1 && (
          <button onClick={() => setCurrentPage(currentPage - 1)}>
            Previous
          </button>
        )}
        {/* Next Page Button */}
        {currentPage < totalPages && (
          <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
        )}
      </div>
    </div>
  );
};

export default Pagination;

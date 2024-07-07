// import "./ManageCategories.css"; // Make sure this file is created

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { LiaEditSolid } from "react-icons/lia";
// import { MdDeleteOutline } from "react-icons/md";

// const ManageCategoriesTable = () => {
//   const [categories, setCategories] = useState([]);
//   const [newCategoryName, setNewCategoryName] = useState("");
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     retrieveCategories();
//   }, []);

//   const retrieveCategories = () => {
//     axios
//       .get("http://aqay.runasp.net/api/Categories?page=1")
//       .then((response) => {
//         if (response.data && response.data.$values) {
//           setCategories(response.data.$values);
//         } else {
//           setCategories([]);
//           console.error("Unexpected API response structure:", response.data);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching categories:", error);

//         setCategories([]);
//       });
//   };

//   const handleAddCategory = () => {
//     if (newCategoryName.trim() === "") return;
//     axios
//       .post(`http://aqay.runasp.net/api/Categories?name=${newCategoryName}`)
//       .then((response) => {
//         retrieveCategories();
//         setNewCategoryName("");
//       })
//       .catch((error) => {
//         console.error("Error adding category:", error);
//       });
//   };

//   const handleSearch = () => {
//     if (searchQuery.trim() === "") return;
//     axios
//       .get(`http://aqay.runasp.net/api/Categories/name?name=${searchQuery}`)
//       .then((response) => {
//         setCategories([response.data]);
//       })
//       .catch((error) => {
//         console.error("Error searching category:", error);
//       });
//   };

//   const handleEditCategory = (oldName, newName) => {
//     axios
//       .put(
//         `http://aqay.runasp.net/api/Categories?oldName=${oldName}&newName=${newName}`
//       )
//       .then((response) => {
//         retrieveCategories();
//       })
//       .catch((error) => {
//         console.error("Error editing category:", error);
//       });
//   };

//   const handleDeleteCategory = (name) => {
//     axios
//       .delete(`http://aqay.runasp.net/api/Categories?name=${name}`)
//       .then((response) => {
//         retrieveCategories();
//       })
//       .catch((error) => {
//         console.error("Error deleting category:", error);
//       });
//   };

//   return (
//     <section className="content-area-table">
//       <div className="data-table-info">
//         <input
//           type="text"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           placeholder="Searchby Name"
//           className="filter-dropdown "
//         />
//         <button onClick={handleSearch} className="search-btn">
//           <i className="fa fa-search"></i> Search
//         </button>
//         <button onClick={retrieveCategories} className="retrieve-btn">
//           Retrieve All
//         </button>
//         <input
//           type="text"
//           value={newCategoryName}
//           onChange={(e) => setNewCategoryName(e.target.value)}
//           placeholder="New category name"
//           className="filter-dropdown"
//         />
//         <button onClick={handleAddCategory} className="add-category-btn">
//           Add Category
//         </button>
//       </div>
//       <div className="data-table-diagram">
//         <table>
//           <thead>
//             <tr>
//               <th>Category Name</th>
//               <th>Edit</th>
//               <th>Delete</th>
//             </tr>
//           </thead>
//           <tbody>
//             {categories.map((category) => (
//               <tr key={category.id}>
//                 <td>{category.name}</td>
//                 <td>
//                   <div className="icon-container">
//                     <LiaEditSolid
//                       size={24}
//                       onClick={() =>
//                         handleEditCategory(
//                           category.name,
//                           prompt("Enter new name", category.name)
//                         )
//                       }
//                     />
//                   </div>
//                 </td>
//                 <td>
//                   <div className="icon-container">
//                     <MdDeleteOutline
//                       size={24}
//                       onClick={() => handleDeleteCategory(category.name)}
//                     />
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// };

// export default ManageCategoriesTable;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ManageCategories.css";
import { MdEdit, MdDelete } from "react-icons/md";

const ManageCategoriesTable = () => {
  const [categories, setCategories] = useState([]);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    retrieveCategories();
  }, []);

  const retrieveCategories = async () => {
    try {
      const response = await axios.get("http://aqay.runasp.net/api/Categories");
      setCategories(response.data.$values);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleAddCategory = async () => {
    if (!newCategoryName.trim()) return;
    try {
      await axios.post(
        `http://aqay.runasp.net/api/Categories?name=${newCategoryName}`
      );
      setNewCategoryName("");
      retrieveCategories();
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    try {
      const response = await axios.get(
        `http://aqay.runasp.net/api/Categories/name?name=${searchQuery}`
      );
      setCategories([response.data]); // Assuming response data is directly the category object
    } catch (error) {
      console.error("Error searching category:", error);
    }
  };

  const handleEditCategory = async (oldName) => {
    const newName = prompt("Enter new name", oldName);
    if (!newName || newName === oldName) return;
    try {
      await axios.put(
        `http://aqay.runasp.net/api/Categories?oldName=${oldName}&newName=${newName}`
      );
      retrieveCategories();
    } catch (error) {
      console.error("Error editing category:", error);
    }
  };

  const handleDeleteCategory = async (name) => {
    try {
      await axios.delete(`http://aqay.runasp.net/api/Categories?name=${name}`);
      retrieveCategories();
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by Name"
          className="filter-dropdown"
        />
        <button onClick={handleSearch} className="search-btn">
          <i className="fa fa-search"></i> Search
        </button>
        <input
          type="text"
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
          placeholder="New category name"
          className="filter-dropdown"
        />
        <button onClick={handleAddCategory} className="add-category-btn">
          Add Category
        </button>
      </div>
      <div className="data-table-diagram">
        <table>
          <thead>
            <tr>
              <th>Category Name</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id}>
                <td>{category.name}</td>
                <td>
                  <button onClick={() => handleEditCategory(category.name)}>
                    <MdEdit size={24} />
                  </button>
                </td>
                <td>
                  <button onClick={() => handleDeleteCategory(category.name)}>
                    <MdDelete size={24} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ManageCategoriesTable;

import React, { useState, useEffect } from "react";
import blogheader from "../../assets/homeimage.jpg";
import BlogCard from "../../components/BlogCard";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { jwtDecode } from "jwt-decode";


const Blog = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [sortingOption, setSortingOption] = useState("");
  const [totalBlogs, setTotalBlogs] = useState(0);
  const token = localStorage.getItem("token");

  const decodedToken = jwtDecode(token);


  const [blogs, setBlogs] = useState([]);


  const handleVote = async (voteType, blogId) => {
    try {
      // Find the blog based on ID
      const blog = blogs.find((blog) => blog.id === blogId);
      if (!blog) {
        console.log("Blog not found");
        return;
      }

      // Find the user's existing reaction, if any
      const existingReaction = blog.reactions.find(
        (reaction) => reaction.userId === decodedToken.userId
      );

      // If there is an existing reaction
      if (existingReaction) {
        // If the existing reaction is of the same type as the voteType, delete the reaction
        console.log("Existing Reaction", existingReaction);
        console.log("Vote Type", voteType);
        if (existingReaction.type === voteType) {
          console.log(
            `Deleting: http://localhost:5079/api/blogs/${blogId}/reactions/${existingReaction.id}`
          );
          await axios.delete(
            `http://localhost:5079/api/blogs/${blogId}/reactions/${existingReaction.id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
        } else {
          // Otherwise, update the existing reaction type
          await axios.patch(
            `http://localhost:5079/api/blogs/${blogId}/reactions/${existingReaction.id}`,
            { type: voteType }
          );
        }
      } else {
        // If there is no existing reaction, add a new reaction
        await axios.post(
          `http://localhost:5079/api/blogs/${blogId}/reactions`,
          { type: voteType, userId: "b25acafe-aadb-4ce1-9a97-40f41e944f3e" },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }

      // Refetch blogs data after reaction update
      const response = await axios.get("http://localhost:5079/api/blogs");
      setBlogs(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5079/api/blogs/paginate",
          {
            params: {
              pageNumber: pageNumber + 1,
              pageSize: itemsPerPage,
              sortingOption: sortingOption,
            },
          }
        );
        setBlogs(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBlogs();
  }, [pageNumber, itemsPerPage, sortingOption]);

  useEffect(() => {
    const fetchTotalBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5079/api/blogs");
        setTotalBlogs(response.data.length);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTotalBlogs();
  }, []);

  const handlePageChange = (selectedPage) => {
    setPageNumber(selectedPage.selected);
  };

  const handleSortingChange = (option) => {
    setSortingOption(option);
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setPageNumber(0); // Reset page number when changing items per page
  };

  const maxItemsPerPage = Math.ceil(totalBlogs / 5) * 5; // Round up to nearest multiple of 5
  const itemsPerPageOptions = [];
  for (let i = 5; i <= maxItemsPerPage; i += 5) {
    itemsPerPageOptions.push(i);
  }

  return (
    <div className="flex flex-col min-h-screen pb-16">
      {/* Header */}
      <div
        className="h-96 bg-cover bg-center flex items-center justify-center text-white relative"
        style={{ backgroundImage: `url(${blogheader})` }}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">THE BLOGGERS</h1>
          <p className="text-lg mb-4">
            Discover amazing bloggers and their stories.
          </p>
          <div className="flex items-center justify-center">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500 text-black"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Sorting */}
      <div className="flex justify-center mt-4 space-x-4">
        <button
          className={`px-4 py-2 rounded-md border border-gray-300 ${
            sortingOption === "random"
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-700"
          } hover:bg-blue-500 hover:text-white transition duration-300`}
          onClick={() => handleSortingChange("random")}
        >
          Random
        </button>
        <button
          className={`px-4 py-2 rounded-md border border-gray-300 ${
            sortingOption === "popularity"
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-700"
          } hover:bg-blue-500 hover:text-white transition duration-300`}
          onClick={() => handleSortingChange("popularity")}
        >
          Popularity
        </button>
        <button
          className={`px-4 py-2 rounded-md border border-gray-300 ${
            sortingOption === "recency"
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-700"
          } hover:bg-blue-500 hover:text-white transition duration-300`}
          onClick={() => handleSortingChange("recency")}
        >
          Recency
        </button>
      </div>

      {/* Blogger Cards */}
      <div
        style={{
          isplay: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBlock: "2rem",
          gap: "2rem",
        }}
      >
        <BlogCard blogs={blogs} handleVote={handleVote} />
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <ReactPaginate
          pageCount={Math.ceil(totalBlogs / itemsPerPage)} // Calculate total pages based on total blogs and items per page
          pageRangeDisplayed={5} // Number of page links to display
          marginPagesDisplayed={2} // Number of margin pages to display
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          activeClassName={"active"}
          breakLabel="..."
          breakClassName="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 rounded-md"
          previousClassName={`relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 rounded-md mr-2 ${
            pageNumber === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-blue-500 hover:text-white transition duration-300"
          }`}
          nextClassName={`relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 rounded-md ml-2 ${
            pageNumber === Math.ceil(totalBlogs / itemsPerPage) - 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-blue-500 hover:text-white hover:bg-[#3b82f6] transition duration-300"
          }`}
          pageClassName="relative inline-flex items-center  border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
          activeLinkClassName="bg-blue-500 text-white px-4 py-2 mx-1 rounded-md hover:bg-blue-600 transition duration-300"
          pageLinkClassName="px-3 py-2"
        />
      </div>

      {/* Items Per Page Dropdown */}
      <div className="flex justify-center mt-4">
        <label htmlFor="itemsPerPage" className="mr-2">
          Items per page:
        </label>
        <select
          id="itemsPerPage"
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
          className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:border-blue-500"
        >
          {itemsPerPageOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Blog;

import React, { useState, useEffect } from "react";
import blogheader from "../../assets/homeimage.jpg";
import ReactPaginate from "react-paginate";
import BlogCard from "../../components/BlogCard";
import axios from "axios";

const Blog = () => {
  const [activePage, setActivePage] = useState(0);
  const [sortingOption, setSortingOption] = useState("");
  const [blogs, setBlogs] = useState([]);

  const itemsPerPage = 8;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5079/api/blogs");
        setBlogs(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBlogs();
  }, []);

  const handlePageChange = (selectedPage) => {
    setActivePage(selectedPage.selected);
  };

  const handleSortingChange = (option) => {
    setSortingOption(option);
  };

  const startIndex = activePage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  // const currentBloggers = bloggers.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col min-h-screen">
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
        <BlogCard cards={blogs} />
      </div>

      {/* Pagination */}
      {/* <div className="flex justify-center mt-8">
        <ReactPaginate
          pageCount={Math.ceil(bloggers.length / itemsPerPage)}
          pageRangeDisplayed={2}
          marginPagesDisplayed={0}
          previousLabel="Previous"
          nextLabel="Next"
          breakLabel="..."
          breakClassName="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 rounded-md"
          previousClassName={`relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 rounded-md mr-2 ${
            activePage === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-blue-500 hover:text-white transition duration-300"
          }`}
          nextClassName={`relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 rounded-md ml-2 ${
            activePage === Math.ceil(bloggers.length / itemsPerPage) - 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-blue-500 hover:text-white hover:bg-[#3b82f6] transition duration-300"
          }`}
          pageClassName="relative inline-flex items-center  border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
          activeLinkClassName="bg-blue-500 text-white px-4 py-2 mx-1 rounded-md hover:bg-blue-600 transition duration-300"
          pageLinkClassName="px-3 py-2"
          onPageChange={handlePageChange}
        />
      </div> */}
    </div>
  );
};

export default Blog;

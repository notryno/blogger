import React, { useState, useEffect } from "react";
import homeimageprofile from "../../assets/homeimage2.jpg";
import { FaArrowUp, FaArrowDown, FaComment } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { GoReply } from "react-icons/go";
import axios from "axios";

const UserBlogs = () => {
  const [blogData, setBlogData] = useState(null);
  const [comments, setComments] = useState([]);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [image, setImage] = useState("");
  const [upvote, setUpvote] = useState(0);
  const [downvote, setDownvote] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [createdOn, setCreatedOn] = useState("");
  const [showCommentModal, setShowCommentModal] = useState(false);

  const [id, setId] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    setId(id);
    fetchBlogData(id);
  }, []);

  const fetchBlogData = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5079/api/blog/${id}`); // Replace '/api/blogs/${id}' with your actual API endpoint
      setBlogData(response.data);
      setComments(response.data.comments); // Assuming the blog data includes a 'comments' property
      setTitle(response.data.title);
      setSummary(response.data.summary);
      setContent(response.data.content);
      setTags(response.data.tags);
      setImage(response.data.image);
      setUpvote(response.data.upvote);
      setDownvote(response.data.downvote);
      fetchUserData(response.data.author);
    } catch (error) {
      console.log(error);
      // Handle error, show a message, or redirect to an error page
    }
  };

  const fetchUserData = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:5079/api/user/public/${id}`
      );
      setFirstName(response.data.firstName);
      setLastName(response.data.lastName);
      setCountry(response.data.country);
      setGender(response.data.gender);
      setProfileImage(response.data.profilePicture);
      setCreatedOn(response.data.createdOn);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCommentButtonClick = () => {
    setShowCommentModal(true);
  };

  const handleCloseModal = () => {
    setShowCommentModal(false);
  };

  const handleVote = (id, delta) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === id) {
        return { ...comment, likevotes: comment.likevotes + delta };
      }
      return comment;
    });
    setComments(updatedComments);
  };
  return (
    <div className="mt-[9rem]">
      <div className="relative w-[80rem] h-[45rem] m-auto mt-[5rem]">
        <img src={image} alt="" className="object-cover w-full h-full" />
        <div className="absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 text-6xl font-serif w-full">
          {title}
        </div>
      </div>
      <div className="text-center mt-4">
        <div>
          Photos by the <span className="text-green-600">{firstName}</span>,
          rights of Bloggit.
        </div>
      </div>
      <div className="  w-[40rem] m-auto pt-20 ">
        <div className="text-left font-bold text-6xl ">{title}</div>
        <div className="bg-[#cfeccf] hover:bg-[#a3d0a2] text-[#6b6b6b] font-semibold text-2xl mt-8">
          {summary}
        </div>
        <div>
          <div className="mt-4 py-8">
            <div className="flex justify-start items-start">
              <img
                src={profileImage}
                alt="userprofile"
                className="w-14 h-14 rounded-full mt-6 "
              />
              <div className=" mt-4 pl-4">
                <div className="text-2xl font-thin ">
                  <b>
                    {" "}
                    {firstName} {lastName}
                  </b>
                </div>
                <div className="text-xl font-thin">
                  <b className="text-[#b2b2b2]">January 20, 2024</b>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-around  border-gray-200 border-y-2 p-3">
            <div className="flex  items-center">
              <FaArrowUp />
              <span className="px-2">25k</span>
            </div>
            <div className="flex  items-center">
              <FaArrowDown />
              <span className="px-2">25k</span>
            </div>
            <div className="flex  items-center">
              <FaComment
                onClick={handleCommentButtonClick}
                className="cursor-pointer"
              />
              <span className="px-2">25k</span>
            </div>
          </div>
          <div className="py-10">
            <div
              dangerouslySetInnerHTML={{ __html: content }}
              className="text-xl font-serif text-justify"
            />
          </div>
          <div className="flex justify-around  border-gray-200 border-y-2 p-3 ">
            <div className="flex  items-center">
              <FaArrowUp />
              <span className="px-2">25k</span>
            </div>
            <div className="flex  items-center">
              <FaArrowDown />
              <span className="px-2">25k</span>
            </div>
            <div className="flex  items-center">
              <FaComment onClick={handleCommentButtonClick} />
              <span className="px-2">25k</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 mt-40 pb-8">
        <div className="w-[50rem] m-auto pt-14 flex justify-around">
          <div>
            <img
              src={profileImage}
              alt="userprofile"
              className="w-24 h-24 rounded-full  "
            />
            <div className="text-3xl mt-4 font-bold">
              Written By {firstName} {lastName}
            </div>
          </div>
          <div>
            <div className="flex flex-col mt-8">
              <div className="text-xl font-bold">Editor of the blog</div>
              <div className="text-gray-600 font-bold">
                This is the glorious place of the world
              </div>
            </div>
          </div>
        </div>
      </div>
      {showCommentModal && (
        <div className="fixed inset-0 top-0 right-0 bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 w-full md:w-[40rem] left-0 h-screen shadow-lg">
            <div className="flex justify-end">
              <button className="" onClick={handleCloseModal}>
                <FaTimes />
              </button>
            </div>
            <h2 className="text-3xl font-bold mb-4 ">Comments</h2>
            <textarea
              placeholder="Write your response..."
              className="border-2 border-gray-500 outline-none p-2 mb-4 w-full h-32 resize-none shadow-xl shadow-gray-500 rounded-2xl "
            ></textarea>
            {/* Sorting Dropdown */}
            <select className="border-2 border-gray-500 focus:outline-none p-2 mb-4 w-full">
              <option value="relevant">Most Relevant</option>
              <option value="recent">Most Recent</option>
            </select>
            <div className="max-h-[30rem] overflow-y-auto">
              {comments.map((comment) => (
                <div
                  key={comment.id}
                  className="border-b border-gray-300 py-2 flex items-start space-x-2"
                >
                  {/* User image */}
                  <img
                    src={comment.userimage}
                    alt="userprofile"
                    className="w-12 h-12 rounded-full"
                  />
                  {/* Username and comment text */}
                  <div>
                    <p className="mb-2">
                      <span className="font-semibold">
                        {comment.username}:{" "}
                      </span>
                      {comment.text}
                    </p>
                    {/* Like, dislike, and reply buttons */}
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-2">
                        <FaArrowUp onClick={() => handleVote(comment.id, 1)} />
                        <span>{comment.likevotes}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FaArrowDown
                          onClick={() => handleVote(comment.id, -1)}
                        />
                        <span>{comment.unlikevotes}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FaComment />
                        <span>1 Reply</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserBlogs;

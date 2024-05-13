import React, { useState, useEffect } from "react";
import homeimageprofile from "../../assets/homeimage2.jpg";
import { FaArrowUp, FaArrowDown, FaComment } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
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
  const [upvoteCount, setUpvoteCount] = useState(0);
  const [downvoteCount, setDownvoteCount] = useState(0);
  const [blogs, setBlogs] = useState([]);
  const [comment, setComment] = useState("");
  const [parentId, setParentId] = useState(null);
  const [showReplyInputs, setShowReplyInputs] = useState({});
  const [commentInput, setCommentInput] = useState("");
  const [commentReactions, setCommentReactions] = useState([]);

  const [id, setId] = useState(null);
  const [blogId, setBlogId] = useState(null);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiU3VqdSIsImp0aSI6IjExMWQxMWJmLTAzNTctNDU2Mi1iM2YwLTYxMTVhZGYyYjg5NSIsInVzZXJJZCI6ImIyNWFjYWZlLWFhZGItNGNlMS05YTk3LTQwZjQxZTk0NGYzZSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlVzZXIiLCJleHAiOjE3MTU2OTQ1NTksImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjUwNzkiLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo1MDc5In0.M80Sta3pFWDtXNqFTW9q9JM9wbijPEmcg4LfQ36Cpyg";
  const userId = "b25acafe-aadb-4ce1-9a97-40f41e944f3e";

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    setId(id);
    setBlogId(id);
    fetchBlogData(id);
    fetchCount(id);
  }, []);

  const fetchBlogData = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5079/api/blog/${id}`); // Replace '/api/blogs/${id}' with your actual API endpoint
      setBlogData(response.data);
      setTitle(response.data.title);
      setSummary(response.data.summary);
      setContent(response.data.content);
      setTags(response.data.tags);
      setImage(response.data.image);
      setUpvote(response.data.upvote);
      setDownvote(response.data.downvote);
      setCreatedOn(response.data.createdOn);

      fetchUserData(response.data.author);
      setComments(response.data.comments);
      fetchCommentUserData(response.data.comments);
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
      //   setCreatedOn(response.data.createdOn);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCount = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:5079/api/blogs/${id}/reactions/count`
      );
      setUpvoteCount(response.data.upvoteCount);
      setDownvoteCount(response.data.downvoteCount);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCommentUserData = async (comments) => {
    try {
      const promises = comments.map(async (comment) => {
        const userData = await axios.get(
          `http://localhost:5079/api/user/public/${comment.userId}`
        );
        return { ...comment, userData: userData.data };
      });
      const commentsWithUserData = await Promise.all(promises);
      setComments(commentsWithUserData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCommentButtonClick = () => {
    fetchCommentReactions();
    setShowCommentModal(true);
  };

  const handleCloseModal = () => {
    setShowCommentModal(false);
  };

  const fetchCommentReactions = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5079/api/reactions/user/${userId}`
      );
      setCommentReactions(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const isUserReaction = (reaction) =>
    reaction?.userId === "b25acafe-aadb-4ce1-9a97-40f41e944f3e";
  const userReaction = blogData?.reactions.find(isUserReaction);

  const handleVote = async (voteType, blogId) => {
    try {
      // Find the blog based on ID
      console.log("Blog ID", blogId);

      // Find the user's existing reaction, if any
      const existingReaction = blogData.reactions.find(
        (reaction) => reaction.userId === "b25acafe-aadb-4ce1-9a97-40f41e944f3e"
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
      fetchBlogData(id);
      fetchCount(id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCommentVote = async (voteType, commentId) => {
    try {
      // Find the blog based on ID
      console.log("cooment ID", commentReactions);

      // Find the user's existing reaction, if any
      const existingReaction = commentReactions.find(
        (reaction) =>
          reaction.userId === "b25acafe-aadb-4ce1-9a97-40f41e944f3e" &&
          reaction.commentId === commentId
      );

      // If there is an existing reaction
      if (existingReaction) {
        // If the existing reaction is of the same type as the voteType, delete the reaction
        console.log("Existing Reaction", existingReaction);
        console.log("Vote Type", voteType);
        if (existingReaction.type === voteType) {
          console.log(
            `Deleting: http://localhost:5079/api/blogs/${id}/reactions/${existingReaction.id}`
          );
          await axios.delete(
            `http://localhost:5079/api/blogs/${commentId}/reactions/${existingReaction.id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
        } else {
          // Otherwise, update the existing reaction type
          await axios.patch(
            `http://localhost:5079/api/blogs/${id}/reactions/${existingReaction.id}`,
            { type: voteType }
          );
        }
      } else {
        // If there is no existing reaction, add a new reaction
        await axios.post(
          `http://localhost:5079/api/blogs/${id}/reactions`,
          {
            type: voteType,
            userId: "b25acafe-aadb-4ce1-9a97-40f41e944f3e",
            commentId,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }

      // Refetch blogs data after reaction update
      fetchBlogData(id);
      fetchCommentReactions();
      fetchCount(id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (parentId) => {
    try {
      if (parentId === 0) {
        parentId = null;
        var commentContent = comment;
      } else {
        var commentContent = commentInput;
      }
      const response = await axios.post(
        `http://localhost:5079/api/comments`,
        {
          content: commentContent,
          blogId: id,
          userId: "b25acafe-aadb-4ce1-9a97-40f41e944f3e",
          replyId: parentId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchBlogData(id);
      fetchCount(id);

      setComment("");
      setParentId(null);
      setShowReplyInputs({});
    } catch (error) {
      console.log(error);
    }
  };

  const toggleReplyInput = (commentId) => {
    setShowReplyInputs((prevState) => ({
      ...prevState,
      [commentId]: !prevState[commentId],
    }));
  };

  const renderComments = (commentsList) =>
    commentsList.map((comment) => (
      <div key={comment.id} className="mb-4">
        <div className="border rounded-lg p-3">
          <div>{comment.content}</div>
          <div className="flex items-center mt-2">
            <button
              onClick={() => toggleReplyInput(comment.id)}
              className="text-blue-500 hover:underline mr-2"
            >
              Reply
            </button>
            <div className="flex items-center space-x-2">
              <FaArrowUp
                onClick={() => handleCommentVote("Upvote", comment.id)}
                className={`cursor-pointer ${
                  comment.userData &&
                  commentReactions.some(
                    (reaction) =>
                      reaction.userId === userId &&
                      reaction.commentId === comment.id &&
                      reaction.type === "Upvote"
                  )
                    ? "text-orange-500"
                    : ""
                }`}
              />
              <span>{comment.upvotes}</span>
              <FaArrowDown
                onClick={() => handleCommentVote("Downvote", comment.id)}
                className={`cursor-pointer ${
                  comment.userData &&
                  commentReactions.some(
                    (reaction) =>
                      reaction.userId === userId &&
                      reaction.commentId === comment.id &&
                      reaction.type === "Downvote"
                  )
                    ? "text-orange-500"
                    : ""
                }`}
              />
              <span>{comment.downvotes}</span>
            </div>
          </div>
          {showReplyInputs[comment.id] && (
            <div className="mt-2">
              <textarea
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
                placeholder="Write your reply..."
                className="border rounded-lg p-2 w-full"
              />
              <button
                onClick={() => {
                  handleSubmit(comment.id);
                }}
                className="mt-2 bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
              >
                Post Reply
              </button>
            </div>
          )}
          {/* Check for replies that match the current comment's ID as their replyId */}
          {commentsList
            .filter((c) => c.replyId === comment.id)
            .map((reply) => (
              <div key={reply.id} className="ml-6 mt-2">
                <div className="border rounded-lg p-3">
                  <div>{reply.content}</div>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => toggleReplyInput(comment.id)}
                      className="text-blue-500 hover:underline mr-2"
                    >
                      Reply
                    </button>
                    <div className="flex items-center space-x-2">
                      <FaArrowUp
                        onClick={() => handleCommentVote("Upvote", reply.id)}
                        className={`cursor-pointer ${
                          comment.userData &&
                          commentReactions.some(
                            (reaction) =>
                              reaction.userId === userId &&
                              reaction.commentId === reply.id &&
                              reaction.type === "Upvote"
                          )
                            ? "text-orange-500"
                            : ""
                        }`}
                      />
                      <span>{reply.upvotes}</span>
                      <FaArrowDown
                        onClick={() => handleCommentVote("Downvote", reply.id)}
                        className={`cursor-pointer ${
                          comment.userData &&
                          commentReactions.some(
                            (reaction) =>
                              reaction.userId === userId &&
                              reaction.commentId === reply.id &&
                              reaction.type === "Downvote"
                          )
                            ? "text-orange-500"
                            : ""
                        }`}
                      />
                      <span>{reply.downvotes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    ));

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
                className="w-14 h-14 rounded-full mt-6 object-cover object-center"
              />
              <div className=" mt-4 pl-4">
                <div className="text-2xl font-thin ">
                  <b>
                    {" "}
                    {firstName} {lastName}
                  </b>
                </div>
                <div className="text-xl font-thin">
                  <b className="text-gray-400" style={{ fontSize: "1rem" }}></b>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-around  border-gray-200 border-y-2 p-3">
            <div
              className="flex  items-center cursor-pointer"
              onClick={() => handleVote("Upvote", id)}
            >
              <div
                className={`cursor-pointer ${
                  isUserReaction(userReaction) && userReaction.type === "Upvote"
                    ? "text-orange-500"
                    : ""
                }`}
              >
                <FaArrowUp />
              </div>
              <span className="px-2">{upvoteCount}</span>
            </div>
            <div
              className="flex  items-center cursor-pointer"
              onClick={() => handleVote("Downvote", id)}
            >
              <div
                className={`cursor-pointer ${
                  isUserReaction(userReaction) &&
                  userReaction.type === "Downvote"
                    ? "text-orange-500"
                    : ""
                }`}
              >
                <FaArrowDown />
              </div>
              <span className="px-2">{downvoteCount}</span>
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
            <div
              className="flex  items-center cursor-pointer"
              onClick={() => handleVote("Upvote", id)}
            >
              <div
                className={`cursor-pointer ${
                  isUserReaction(userReaction) && userReaction.type === "Upvote"
                    ? "text-orange-500"
                    : ""
                }`}
              >
                <FaArrowUp />
              </div>
              <span className="px-2">{upvoteCount}</span>
            </div>
            <div
              className="flex  items-center cursor-pointer"
              onClick={() => handleVote("Downvote", id)}
            >
              <div
                className={`cursor-pointer ${
                  isUserReaction(userReaction) &&
                  userReaction.type === "Downvote"
                    ? "text-orange-500"
                    : ""
                }`}
              >
                <FaArrowDown />
              </div>
              <span className="px-2">{downvoteCount}</span>
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
              className="w-24 h-24 rounded-full  object-cover object-center"
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
            <div className="flex mb-8" style={{ alignItems: "center" }}>
              <textarea
                value={comment}
                placeholder="Write your response..."
                onChange={(e) => setComment(e.target.value)}
                className="border-2 border-gray-500 outline-none p-2 w-[90%] h-20 resize-none shadow-gray-500 rounded"
              ></textarea>
              <div
                className="flex items-center justify-center w-[10%]"
                onClick={() => {
                  handleSubmit(0);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 cursor-pointer text-gray-500 hover:text-gray-700 transition-colors duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
            {comments.length > 0 ? (
              renderComments(comments)
            ) : (
              <p>No comments available.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserBlogs;

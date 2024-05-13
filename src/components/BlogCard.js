import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

function BlogCard({ blogs, handleVote }) {
  function Card({
    imageUrl,
    title,
    summary,
    content,
    tags,
    author,
    createdOn,
    reactionCount,
    reactions,
    handleVote,
    id,
  }) {
    const isUserReaction = (reaction) =>
      reaction?.userId === "b25acafe-aadb-4ce1-9a97-40f41e944f3e";
    const userReaction = reactions.find(isUserReaction);

    function navigateToBlog(id) {
      window.location.href = `/blog?id=${id}`;
    }

    return (
      <div
        className="card bg-gradient-to-br from-white to-ECE9E6 shadow-lg rounded-lg overflow-hidden cursor-pointer"
        style={{ width: "300px" }}
        onClick={() => navigateToBlog(id)}
      >
        <div className="card__header">
          <img src={imageUrl} alt="card__image" className="card__image" />
        </div>
        <div className="card__body p-4">
          <h4 className="text-xl font-semibold">{title}</h4>
          <p className="text-gray-500">{summary}</p>
          {/* Rendering tags */}
          <div className="tags mt-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="tag bg-blue-500 text-white px-3 py-1 rounded-full text-xs mr-2"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div
          className="card__footer p-4 mt-auto flex justify-between"
          style={{ alignItems: "center" }}
        >
          <div className="user flex items-center gap-2 w-75">
            <img
              src={author.image}
              alt="user__image"
              className="user__image h-8 w-8 rounded-full"
            />
            <div className="user__info">
              <h5 className="font-semibold">{author.name}</h5>
              <small className="text-gray-600">
                {new Intl.DateTimeFormat("en-US", {
                  month: "short",
                  day: "2-digit",
                }).format(new Date(createdOn))}
              </small>
            </div>
          </div>
          <div className="w-25">
            <div className="flex items-center justify-between rounded-full px-2 py-1 bg-gray-100">
              <div className="flex items-center justify-center">
                <div
                  onClick={() => handleVote("Upvote")}
                  className={`cursor-pointer ${
                    isUserReaction(userReaction) &&
                    userReaction.type === "Upvote"
                      ? "text-orange-500"
                      : ""
                  }`}
                >
                  <FaArrowUp className="ml-1" />
                </div>
                <div className="vertical-line mx-2 h-3 border-l border-gray-400"></div>
                <span className="text-center">{reactionCount}</span>
                <div className="vertical-line mx-2 h-3 border-l border-gray-400"></div>
                <div
                  onClick={() => handleVote("Downvote")}
                  className={`cursor-pointer ${
                    isUserReaction(userReaction) &&
                    userReaction.type === "Downvote"
                      ? "text-orange-500"
                      : ""
                  }`}
                >
                  <FaArrowDown className="mr-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container mx-auto flex flex-wrap justify-center gap-8">
      {blogs ? (
        blogs.map((blog) => (
          <Card
            key={blog.id}
            imageUrl={blog.image}
            title={blog.title}
            summary={blog.summary}
            content={blog.content}
            tags={blog.tags}
            author={{
              name: blog.authorFirstName + " " + blog.authorLastName,
              image:
                "https://res.cloudinary.com/dqxfn5mdd/image/upload/v1715594596/bloggit/fxcsydvjbdic06hzk4jc.jpg",
            }}
            createdOn={blog.createdOn}
            reactionCount={blog.reactionCount}
            reactions={blog.reactions}
            handleVote={(voteType) => handleVote(voteType, blog.id)}
            id={blog.id}
          />
        ))
      ) : (
        <p>No blogs to display</p>
      )}
    </div>
  );
}

export default BlogCard;

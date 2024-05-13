import React from "react";

function Card({
  imageUrl,
  tag,
  title,
  content,
  userImage,
  userName,
  postTime,
}) {
  return (
    <div
      className="card bg-gradient-to-br from-white to-ECE9E6 shadow-lg rounded-lg overflow-hidden"
      style={{ width: "300px" }}
    >
      <div className="card__header">
        <img src={imageUrl} alt="card__image" className="card__image" />
      </div>
      <div className="card__body p-4">
        <span
          className={`tag ${
            tag === "blue"
              ? "bg-blue-500"
              : tag === "brown"
              ? "bg-yellow-500"
              : "bg-red-500"
          } text-white px-3 py-1 rounded-full text-xs`}
        >
          {tag}
        </span>
        <h4 className="text-xl font-semibold">{title}</h4>
        <p>{content}</p>
      </div>
      <div className="card__footer p-4 mt-auto">
        <div className="user flex items-center gap-2">
          <img
            src={userImage}
            alt="user__image"
            className="user__image h-8 w-8 rounded-full"
          />
          <div className="user__info">
            <h5 className="font-semibold">{userName}</h5>
            <small className="text-gray-600">{postTime}</small>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReactCards({ cards }) {
  return (
    <div className="container mx-auto flex flex-wrap justify-center gap-8">
      {cards.map((card, index) => (
        <Card
          key={index}
          imageUrl={card.imageUrl}
          tag={card.tag}
          title={card.title}
          content={card.content}
          userImage={card.userImage}
          userName={card.userName}
          postTime={card.postTime}
        />
      ))}
    </div>
  );
}

export default ReactCards;

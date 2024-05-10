import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faComment,
  faThumbsUp,
  faThumbsDown,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/edit-profile");
  };
  const styles = {
    header: {
      background: "#cc95c0",
      background:
        "-webkit-linear-gradient(to right, #cc95c0, #dbd4b4, #7aa1d2)",
      background: "linear-gradient(to right, #cc95c0, #dbd4b4, #7aa1d2)",
      width: "100%",
      height: "250px",
    },
    Main: {
      backgroundColor: "white",
      width: "100%",
      height: "100%",
    },
    imgdiv: {
      backgroundColor: "green",
      width: "200px",
      height: "200px",
      top: "150px",
      position: "relative",
      left: "130px",
      borderRadius: "50%",
      overflow: "hidden",
      border: "6px white solid",

      boxShadow:
        "0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)",
    },
    details: {
      display: "flex",
      backgroundColor: "white",
      width: "100%",
      height: "250px",
    },
  };
  return (
    <div style={{ height: "200vh" }}>
      <div style={styles.header}>
        <div style={styles.imgdiv}>
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt="profile"
          />
        </div>
      </div>
      <div style={styles.Main}>
        <div style={styles.details}>
          <h1
            style={{
              position: "relative",
              left: "150px",
              top: "120px",
              fontSize: "35px",
            }}
          >
            Sujal
          </h1>
          <p
            style={{
              marginTop: "auto",
              marginLeft: "77px",
              marginBottom: "50px",
            }}
          >
            HELLO This the My Description Section. I AM A PROFESSIONAL.
          </p>
          <button
            style={{
              backgroundColor: "#612ce2",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
              marginLeft: "auto",
              marginRight: "-325px",
              marginTop: "50px",
              marginBottom: "auto",
              transition: "background-color 0.3s ease",
            }}
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={faPen} style={{ marginRight: "5px" }} />
            Edit
          </button>
          <div
            style={{
              marginRight: "30px",
              marginTop: "120px",
              marginBottom: "auto",
              backgroundColor: "#f2efff",
              height: "80px",
              width: "150px",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              borderRadius: "5px",
            }}
          >
            <h1
              style={{ fontWeight: "bold", color: "#612ce2", fontSize: "20px" }}
            >
              222
            </h1>
            <h1 style={{ color: "#211249" }}>Total Blogs</h1>
          </div>
          <div
            style={{
              marginRight: "150px",
              marginTop: "120px",
              marginBottom: "auto",
              backgroundColor: "#f0f7ff",
              height: "80px",
              width: "150px",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              borderRadius: "5px",
            }}
          >
            <h1
              style={{ fontWeight: "bold", color: "#4a87dd", fontSize: "20px" }}
            >
              212
            </h1>
            <h1 style={{ color: "#1d2c5e" }}>Reactions</h1>
          </div>
        </div>
        <hr
          style={{ width: "82%", margin: "auto", borderTop: "1px solid #ccc" }}
        />
        <div style={{ display: "flex", height: "100%" }}>
          <div
            style={{
              marginTop: "10px",
              marginLeft: "58px",
            }}
          >
            <h1
              style={{
                fontSize: "30px",
                alignContent: "center",
                marginLeft: "90px",
                paddingBottom: "25px",
              }}
            >
              Blogs
            </h1>
            <div
              style={{
                height: "500px",
                width: "130vh",
                marginLeft: "90px",
                justifyContent: "left",
                alignItems: "left",
              }}
            >
              <img
                src="https://source.unsplash.com/random/1920x1080/?mountain"
                alt="Mountain"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                  borderRadius: "15px",
                }}
              />
              <div className="mt-4 ">
                <div>
                  <div className="text-3xl font-bold py-4">
                    I clicked this photo using my new Samsung Galaxy S24 Ultra.
                  </div>
                  <div className="flex space-x-4 py-2   ">
                    <div
                      className="p-4 rounded-full bg-gray-600 "
                      style={{ backgroundColor: "lightgray" }}
                    >
                      #MobilePhotography
                    </div>
                    <div
                      className="p-4 rounded-full bg-gray-600"
                      style={{ backgroundColor: "lightgray" }}
                    >
                      #Photography
                    </div>
                    <div
                      className="p-4 px-6 rounded-full bg-gray-600"
                      style={{ backgroundColor: "lightgray" }}
                    >
                      #Mountain
                    </div>
                    <div
                      className="p-4 px-6 rounded-full bg-gray-600"
                      style={{ backgroundColor: "lightgray" }}
                    >
                      #Beautiful
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "lightghite",
              height: "70vh",
              width: "550px",
              position: "relative",
              right: "157px",
              top: "5px",
              // border: "1px solid black",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "space-between", // Adjust alignment
              alignItems: "left",
              padding: "5px", // Add padding for space between cards
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <h1 style={{ fontSize: "30px" }}>2 Comments</h1>
            {/* First Card */}
            <div
              style={{
                backgroundColor: "#f2efff",
                width: "100%",
                borderRadius: "10px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                padding: "20px",
                marginBottom: "20px", // Add margin bottom for space between cards
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div>
                <h2 style={{ paddingBottom: "10px" }}>
                  5 ways to start a conversation.
                </h2>
                <p>
                  1. Try to talk about Valorannt
                  <br />
                  2. Be nice to them.
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between", // Align icons to right side
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                <div>
                  <FontAwesomeIcon
                    icon={faArrowUp}
                    style={{ marginRight: "10px" }}
                  />
                  <span>10 Upvotes</span>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    style={{ marginRight: "10px" }}
                  />
                  <span>3 Downvotes</span>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faComment}
                    style={{ marginRight: "10px" }}
                  />
                  <span>5 Comments</span>
                </div>
              </div>
            </div>

            {/* Second Card */}
            <div
              style={{
                backgroundColor: "#f2efff",
                width: "100%",
                borderRadius: "10px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                padding: "20px",
                marginBottom: "20px", // Add margin bottom for space between cards
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div>
                <h2 style={{ paddingBottom: "10px" }}>
                  3 places to visit in Pokhara.
                </h2>
                <p>
                  There are many but here are the three:
                  <br />
                  Fewa Lake, David Fall, Lakeside.
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between", // Align icons to right side
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                <div>
                  <FontAwesomeIcon
                    icon={faArrowUp}
                    style={{ marginRight: "10px" }}
                  />
                  <span>10 Upvotes</span>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    style={{ marginRight: "10px" }}
                  />
                  <span>3 Downvotes</span>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faComment}
                    style={{ marginRight: "10px" }}
                  />
                  <span>57 Comments</span>
                </div>
              </div>
            </div>

            {/* Third Card */}
            <div
              style={{
                backgroundColor: "#f2efff",
                width: "100%",
                borderRadius: "10px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                padding: "20px",
                marginBottom: "20px", // Add margin bottom for space between cards
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div>
                <h2 style={{ paddingBottom: "10px" }}>
                  3 places to eat near Baneshwor
                </h2>
                <p>
                  There are many but here are the three: Momo Pasal, Khulfi
                  Pasal Side, Chowmein Pasal
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between", // Align icons to right side
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                <div>
                  <FontAwesomeIcon
                    icon={faArrowUp}
                    style={{ marginRight: "10px" }}
                  />
                  <span>10 Upvotes</span>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    style={{ marginRight: "10px" }}
                  />
                  <span>3 Downvotes</span>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faComment}
                    style={{ marginRight: "10px" }}
                  />
                  <span>15 Comments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

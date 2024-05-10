import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
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
      left: "180px",
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
              left: "200px",
              top: "120px",
              fontSize: "35px",
            }}
          >
            Sujal
          </h1>
          <p
            style={{
              marginTop: "auto",
              marginLeft: "128px",
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
              marginRight: "30px",
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
            <h1 style={{ color: "#1d2c5e" }}>Total Comments</h1>
          </div>
        </div>
        <div style={{ display: "flex", height: "100%" }}>
          <div
            style={{
              marginTop: "10px",
              marginLeft: "105px",
            }}
          >
            <h1
              style={{
                fontSize: "30px",
                alignContent: "center",
                marginLeft: "90px",
              }}
            >
              Blogs
            </h1>
            <div
              style={{
                overflow: "hidden",
                height: "500px",
                width: "130vh",
                marginLeft: "90px",
                justifyContent: "left",
                alignItems: "left",
              }}
            >
              <img
                src="https://source.unsplash.com/random/800x600/?mountain"
                alt="Mountain"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
          <div
            style={{
              backgroundColor: "red",
              width: "700vh",
              marginRight: "190px",
            }}
          >
            Commnets
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

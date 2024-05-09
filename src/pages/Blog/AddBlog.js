import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

import { FaArrowUp, FaArrowDown, FaComment } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import homeimage from "../../assets/homeimage2.jpg";

const AddBlog = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [images, setImages] = useState([]);

  const handleEditorChange = (content, editor) => {
    setContent(content);
    console.log("Content was updated:", content);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Title:", title);
    console.log("Content:", content);
    console.log("Images:", images[0]);
  };

  const handleImageUpload = async (blobInfo) => {
    const formData = new FormData();
    formData.append("file", blobInfo.blob(), blobInfo.filename());
    formData.append("upload_preset", "bloggit");

    if (blobInfo.blob().size > 3 * 1024 * 1024) {
      throw new Error("File size exceeds the limit of 3MB.");
    }

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dqxfn5mdd/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const result = await response.json();
      console.log("Cloudinary API Response:", result);

      if (result && result.url) {
        console.log("Image upload successful");
        setImages((prevImages) => [...prevImages, result.url]);
        return result.url;
      } else {
        console.error("Image upload failed:", result);
        throw new Error("Image upload failed. Please try again.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      throw new Error("Image upload failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Left Column: User Profile */}
      <div className="w-full lg:w-1/4 p-4 border-r border-gray-300 bg-white">
        <div className="mb-4">
          <img
            src={homeimage}
            alt="userprofile"
            className="w-20 h-20 rounded-full mx-auto mb-4"
          />
          <h1 className="text-lg font-bold text-center">Username</h1>
          <p className="text-sm text-center">
            User Bio Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      {/* Right Column: User Posts and Comments */}
      <div className="w-full lg:w-3/4 p-4 bg-white relative">
        {/* User Posts */}
        <div className="mb-8">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Title"
              className="border-b-2 border-gray-500 focus:outline-none mb-2 w-full p-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Editor
              apiKey="jz18miwaiqf2sofxkp6lo4ezvfs8ne7owwbev2753gerf1gj"
              initialValue=""
              init={{
                height: "80vh",
                menubar: false,
                selector: "textarea#full-featured",
                plugins:
                  "preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed codesample table charmap pagebreak nonbreaking anchor tableofcontents insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker help formatpainter pageembed charmap mentions quickbars linkchecker emoticons advtable footnotes mergetags autocorrect typography advtemplate",
                toolbar:
                  "undo redo | revisionhistory | aidialog aishortcuts | blocks fontsizeinput | bold italic | align numlist bullist | link image | table media pageembed | lineheight  outdent indent | strikethrough forecolor backcolor formatpainter removeformat | charmap emoticons checklist | code fullscreen preview | pagebreak anchor codesample footnotes mergetags | addtemplate inserttemplate | addcomment showcomments | ltr rtl casechange | spellcheckdialog a11ycheck",
                automatic_uploads: true,
                file_picker_types: "image",
                images_upload_url:
                  "https://api.cloudinary.com/v1_1/dqxfn5mdd/image/upload",
                images_upload_handler: handleImageUpload,
              }}
              onEditorChange={handleEditorChange}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 mt-4"
              onClick={handleSubmit}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;

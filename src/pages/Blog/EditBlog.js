import React, { useState, useEffect, useContext } from "react";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";

import { AuthContext } from "../../context/AuthContext";
import { jwtDecode } from "jwt-decode";

const EditBlog = ({ blogId }) => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [images, setImages] = useState([]);
  const [tags, setTags] = useState([]);
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("token");
  const decodedToken = jwtDecode(token);

  useEffect(() => {
    // Fetch the blog post details using the blogId
    const fetchBlogPost = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5079/api/blog/${blogId}`
        );
        const blogPost = response.data;
        setTitle(blogPost.title);
        setSummary(blogPost.summary);
        setContent(blogPost.content);
        setImages(blogPost.images);
        setTags(blogPost.tags.join(","));
      } catch (error) {
        console.error("Error fetching blog post:", error);
      }
    };

    fetchBlogPost();
  }, [blogId]);

  const handleEditorChange = (content, editor) => {
    setContent(content);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const tagsArray = tags.split(",").map((tag) => tag.trim());

    try {
      console.log("Making PUT request to update the blog post...");
      const response = await axios.put(
        `http://localhost:5079/api/blog/${blogId}`,
        {
          title: title,
          summary: summary,
          content: content,
          images: images,
          tags: tagsArray,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("PUT request response:", response.data);
      alert("Blog post updated successfully");
    } catch (error) {
      console.error("Error updating blog post:", error);
      alert("Failed to update blog post. Please try again.");
    }
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
    <div className="flex flex-col lg:flex-row justify-center pt-[9rem] pb-[2rem]">
      <div className="w-full lg:w-3/4 p-4 bg-white rounded-lg shadow-md">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 text-center">
            Edit Blog Post
          </h1>
        </div>
        <div className="mb-8">
          <div className="mb-4">
          <div className="mb-4">
              <label
                htmlFor="title"
                className="block font-medium text-gray-700 mb-1"
              >
                Title:
              </label>
              <input
                type="text"
                id="title"
                placeholder="Title"
                className="border-b-2 border-gray-300 focus:outline-none mb-6 w-full p-2 rounded-md"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="tags"
                className="block font-medium text-gray-700 mb-1"
              >
                Tags:
              </label>
              <input
                type="text"
                id="tags"
                placeholder="Tags (e.g. tag1, tag2, tag3)"
                className="border-b-2 border-gray-300 focus:outline-none mb-6 w-full p-2 rounded-md"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="summary"
                className="block font-medium text-gray-700 mb-1"
              >
                Summary:
              </label>
              <textarea
                id="summary"
                rows="4"
                placeholder="Summary"
                className="border-2 border-gray-300 focus:outline-none mb-6 w-full p-2 resize-none rounded-md"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                style={{ resize: "none" }}
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="content"
              className="block font-medium text-gray-700 mb-1"
            >
              Content:
            </label>
            <Editor
                apiKey="jz18miwaiqf2sofxkp6lo4ezvfs8ne7owwbev2753gerf1gj"
                initialValue=""
                init={{
                  height: "60vh",
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
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none float-end"
            onClick={handleSubmit}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBlog;

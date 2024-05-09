import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { FaArrowUp, FaArrowDown, FaComment } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import homeimage from '../../assets/homeimage2.jpg';

const ProfileBlogs = () => {
    const [content, setContent] = useState('');
    const [images, setImages] = useState([]);
    const [comments, setComments] = useState([
        { id: 1, text: "Really insightful post, thanks for sharing!", likevotes: 3, unlikevotes: 12 },
        { id: 2, text: "Really insightful post, thanks for sharing!", likevotes: 3, unlikevotes: 12 },
        { id: 3, text: "Really insightful post, thanks for sharing!", likevotes: 3, unlikevotes: 12 },
        { id: 4, text: "Really insightful post, thanks for sharing!", likevotes: 3, unlikevotes: 12 },
        { id: 5, text: "Really insightful post, thanks for sharing!", likevotes: 3, unlikevotes: 12 },
        { id: 6, text: "Really insightful post, thanks for sharing!", likevotes: 3, unlikevotes: 12 },
        { id: 7, text: "Really insightful post, thanks for sharing!", likevotes: 3, unlikevotes: 12 },
        { id: 8, text: "Really insightful post, thanks for sharing!", likevotes: 3, unlikevotes: 12 },
        { id: 9, text: "Really insightful post, thanks for sharing!", likevotes: 3, unlikevotes: 12 },
        { id: 10, text: "Really insightful post, thanks for sharing!", likevotes: 3, unlikevotes: 12 },
        { id: 11, text: "Really insightful post, thanks for sharing!", likevotes: 3, unlikevotes: 12 },
        { id: 12, text: "Really insightful post, thanks for sharing!", likevotes: 3, unlikevotes: 12 },
        { id: 13, text: "Really insightful post, thanks for sharing!", likevotes: 3, unlikevotes: 12 },
        { id: 14, text: "Really insightful post, thanks for sharing!", likevotes: 3, unlikevotes: 12 },
        { id: 15, text: "Really insightful post, thanks for sharing!", likevotes: 3, unlikevotes: 12 },
        { id: 16, text: "Really insightful post, thanks for sharing!", likevotes: 3, unlikevotes: 12 },
        { id: 17, text: "Really insightful post, thanks for sharing!", likevotes: 3, unlikevotes: 12 },
        { id: 18, text: "Really insightful post, thanks for sharing!", likevotes: 3, unlikevotes: 12 },
        { id: 19, text: "Really insightful post, thanks for sharing!", likevotes: 3, unlikevotes: 12 },
        { id: 20, text: "Really insightful post, thanks for sharing!", likevotes: 3, unlikevotes: 12 },
        { id: 21, text: "Really insightful post, thanks for sharing!", likevotes: 3, unlikevotes: 12 },
        { id: 22, text: "Really insightful post, thanks for sharing!", likevotes: 3, unlikevotes: 12 },
        { id: 23, text: "Really insightful post, thanks for sharing!", likevotes: 3, unlikevotes: 12 },
        { id: 24, text: "Really insightful post, thanks for sharing!", likevotes: 3, unlikevotes: 12 },
        { id: 25, text: "Really insightful post, thanks for sharing!", likevotes: 3, unlikevotes: 12 },
        { id: 26, text: "I have a question about the method you used here.", likevotes: 1, unlikevotes: 12 }
    ]);
    const [showCommentModal, setShowCommentModal] = useState(false);

    const handleEditorChange = (content, editor) => {
        setContent(content);
    };

    const handleImageUpload = (e) => {
        const files = e.target.files;
        if (files.length > 5) {
            alert('You can upload up to 5 images only.');
            return;
        }
        const uploadedImages = Array.from(files).map((file) => URL.createObjectURL(file));
        setImages(uploadedImages);
    };

    const handleVote = (id, delta) => {
        const updatedComments = comments.map(comment => {
            if (comment.id === id) {
                return { ...comment, likevotes: comment.likevotes + delta };
            }
            return comment;
        });
        setComments(updatedComments);
    };

    const handleCommentButtonClick = () => {
        setShowCommentModal(true);
    };

    const handleCloseModal = () => {
        setShowCommentModal(false);
    };

    return (
        <div className="flex flex-col lg:flex-row">
            {/* Left Column: User Profile */}
            <div className="w-full lg:w-1/4 p-4 border-r border-gray-300 bg-white">
                <div className="mb-4">
                    <img src={homeimage} alt="userprofile" className="w-20 h-20 rounded-full mx-auto mb-4" />
                    <h1 className="text-lg font-bold text-center">Username</h1>
                    <p className="text-sm text-center">User Bio Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>

            {/* Right Column: User Posts and Comments */}
            <div className="w-full lg:w-3/4 p-4 bg-white relative">
                {/* User Posts */}
                <div className="mb-8">
                    <div className="mb-4">
                        <input type="text" placeholder="Title" className="border-b-2 border-gray-500 focus:outline-none mb-2 w-full p-2" />
                        <Editor
                            apiKey="YOUR_API_KEY"
                            initialValue=""
                            init={{
                                height: 300,
                                menubar: false,
                                plugins: [
                                    'advlist autolink lists link image charmap print preview anchor',
                                    'searchreplace visualblocks code fullscreen',
                                    'insertdatetime media table paste code help wordcount'
                                ],
                                toolbar:
                                    'undo redo | formatselect | bold italic backcolor | \
                                    alignleft aligncenter alignright alignjustify | \
                                    bullist numlist outdent indent | removeformat | help'
                            }}
                            onEditorChange={handleEditorChange}
                        />
                    </div>
                    <div className="mb-4">
                        <textarea
                            placeholder="Body"
                            className="border-2 border-gray-500 focus:outline-none p-2 h-40 resize-none w-full"
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <input type="file" accept="image/*" multiple onChange={handleImageUpload} className="mb-2" />
                        <div className="flex space-x-4">
                            {images.map((image, index) => (
                                <img key={index} src={image} alt={`Image ${index + 1}`} className="w-20 h-20 object-cover rounded-md" />
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className='flex space-x-4'>
                            <button className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300">
                                <FaArrowUp />
                                <span className=" text-white">{comments[0].likevotes}</span>
                            </button>
                            <button className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300">
                                <FaArrowDown />
                                <span className=" text-white">{comments[0].unlikevotes}</span>
                            </button>
                        </div>
                        <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300" onClick={handleCommentButtonClick}>
                            <FaComment />
                            Comment
                        </button>
                    </div>
                </div>
            </div>

            {/* Comment Modal */}
           {/* Comment Modal */}
{showCommentModal && (
    <div className="fixed inset-0 top-0 right-0 bg-black bg-opacity-50 z-50  ">
        <div className="bg-white p-4 w-full md:w-[50rem] left-0 h-screen  ">
            <div className='flex justify-end'>
                <button className="" onClick={handleCloseModal}>
                    <FaTimes />
                </button>
            </div>
            <h2 className="text-xl font-bold mb-4">Comments</h2>
            <textarea
                placeholder="Write your response..."
                className="border-2 border-gray-500 focus:outline-none p-2 mb-4 w-full h-32 resize-none"
            ></textarea>
            {/* Sorting Dropdown */}
            <select className="border-2 border-gray-500 focus:outline-none p-2 mb-4 w-full">
                <option value="relevant">Most Relevant</option>
                <option value="recent">Most Recent</option>
            </select>
            {/* Scrollable comments */}
            <div className='max-h-[30rem]   overflow-y-auto'>
                {/* Comments */}
                {comments.map(comment => (
                    <div key={comment.id} className="border-b border-gray-300 py-2 ">
                        <p className="mb-2">{comment.text}</p>
                        <div className="flex items-center space-x-2">
                            <button className="flex items-center space-x-1 bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600 transition duration-300" onClick={() => handleVote(comment.id, 1)}>
                                <FaArrowUp />
                                <span className=" text-white">{comment.likevotes}</span>
                            </button>
                            <button className="flex items-center space-x-1 bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition duration-300" onClick={() => handleVote(comment.id, -1)}>
                                <FaArrowDown />
                                <span className=" text-white">{comment.unlikevotes}</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
)}

        </div>
    );
}

export default ProfileBlogs;

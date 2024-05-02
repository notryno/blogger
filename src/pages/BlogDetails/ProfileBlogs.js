


import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { FaArrowUp, FaArrowDown, FaComment } from 'react-icons/fa';
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
        { id: 26, text: "I have a question about the method you used here.", likevotes: 1 , unlikevotes: 12}
    ]);

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

    return (
        <div className="flex sm:flex-row flex-col">
            {/* Left Column: User Profile */}
            <div className="w-full sm:w-1/4 p-4 border-r border-gray-300 bg-white">
                <div className="mb-4">
                    <img src={homeimage} alt="userprofile" className="w-20 h-20 rounded-full mx-auto mb-4" />
                    <h1 className="text-lg font-bold text-center">Username</h1>
                    <p className="text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>

            {/* Right Column: User Posts and Comments */}
            <div className="w-full sm:w-3/4 p-4 bg-white">
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
                        <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                            <FaComment />
                            Comment
                        </button>
                    </div>
                </div>

                {/* User Comments */}
                <div>
                    <div className="mb-4">
                        <p className="font-bold">Comments by others</p>
                        {comments.map(comment => (
                            <div key={comment.id} className="mb-4 bg-gray-100 p-2 rounded">
                                <p>{comment.text}</p>
                                <div className="flex justify-between items-center py-4">
                                    <div className='flex space-x-2'>
                                        <button onClick={() => handleVote(comment.id, 1)} className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300">
                                            <FaArrowUp />
                                            <span className="">{comment.likevotes}</span>
                                        </button>
                                        <button onClick={() => handleVote(comment.id, -1)} className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300">
                                            <FaArrowDown />
                                            <span className="">{comment.unlikevotes}</span>
                                        </button>
                                    </div>
                                    <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                                        <FaComment />
                                        Reply
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileBlogs;
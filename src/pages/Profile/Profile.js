import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import BlogPost from './BlogPost';

const Profile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    avatar: "https://via.placeholder.com/150"
  });
  const [posts, setPosts] = useState([
    { id: 1, title: "Blog Post 1", body: "This is the body of blog post 1." },
    { id: 2, title: "Blog Post 2", body: "This is the body of blog post 2." }
  ]);
  const [showModal, setShowModal] = useState(false);

  const handleDeletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const handleEditPost = (post) => {
    console.log('Editing post:', post); // Implement edit logic or form
  };

  const handleUpdateUser = (newData) => {
    setUser({ ...user, ...newData });
    setShowModal(false);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center py-8">
        <div className="w-24 h-24 md:w-40 md:h-40">
          <img src={user.avatar} alt="Profile" className="rounded-full border-4 border-gray-300 shadow-lg" />
        </div>
        <div className="text-center mt-4">
          <h1 className="text-xl md:text-2xl font-semibold text-gray-800">{user.name}</h1>
          <p className="text-sm md:text-base text-gray-600 mt-2">{user.bio}</p>
        </div>
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <button onClick={() => setShowModal(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Edit Profile
          </button>
        </div>
        {posts.map(post => (
          <BlogPost key={post.id} post={post} onDelete={handleDeletePost} onEdit={handleEditPost} />
        ))}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg relative">
              <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-800" onClick={() => setShowModal(false)}>
                <FaTimes />
              </button>
              <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
              {/* Form for editing user data */}
              <button onClick={() => handleUpdateUser({ name: 'Updated Name', bio: 'Updated Bio' })} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Save Changes
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;

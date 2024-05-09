

import React from 'react';

const BlogPost = ({ post, onDelete, onEdit }) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h2 className="font-semibold text-lg">{post.title}</h2>
        <p className="text-gray-600">{post.body}</p>
        <div className="flex justify-end mt-4">
          <button onClick={() => onEdit(post)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
            Edit
          </button>
          <button onClick={() => onDelete(post.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Delete
          </button>
        </div>
      </div>
    );
  };
  

  export default BlogPost;